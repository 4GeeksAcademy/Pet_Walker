"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, jsonify, request, send_from_directory
from flask_migrate import Migrate
from flask_cors import CORS  
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager  

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Configuración de CORS
CORS(app, resources={r"/api/*": {"origins": "https://friendly-chainsaw-4jrp6w575xq2q5px-3000.app.github.dev"}})

# Configuración de JWT
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  

# Inicializar JWTManager
jwt = JWTManager(app)

# Configuración de la base de datos
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# Agregar el administrador
setup_admin(app)

# Agregar comandos personalizados
setup_commands(app)

# Añadir todos los endpoints de la API con un prefijo "api"
app.register_blueprint(api, url_prefix='/api')

# Manejar/serializar errores como un objeto JSON
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# Generar sitemap con todos los endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# Cualquier otro endpoint servirá como archivo estático
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # Evitar la caché
    return response

walker = {
    "name": "Juan Pérez",
    "bio": "Amante de los perros y paseador profesional con más de 5 años de experiencia. Me encanta cuidar y jugar con ellos.",
    "rating": 4.8,
    "dogs": [
        {"name": "Fido", "breed": "Labrador"},
        {"name": "Rex", "breed": "Pastor Alemán"},
    ],
    "reviews": [
        {"id": 1, "text": "¡Juan es increíble! Mis perros siempre están felices después de pasear con él."},
        {"id": 2, "text": "Excelente paseador. Muy responsable y cariñoso."},
    ],
}

@app.route('/api/walker', methods=['GET', 'PUT'])
def get_or_update_walker():
    if request.method == 'PUT':
        data = request.json
        walker.update(data)
        return jsonify(walker), 200
    return jsonify(walker), 200

@app.route('/api/agendar-paseo', methods=['POST'])
def create_new_ride():
    if request.method == 'POST':
        data = request.json
        walker.update(data)
        return jsonify(create_new_ride), 200
    return jsonify(create_new_ride), 200


# Esto solo se ejecuta si se ejecuta `$ python src/main.py`
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
