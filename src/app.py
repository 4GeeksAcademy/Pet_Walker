"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, jsonify, request, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager  # <-- Import JWTManager

# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Configuración de JWT
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # <-- Configura la clave secreta para JWT

# Inicializar JWTManager
jwt = JWTManager(app)  # <-- Inicializa JWTManager con la aplicación Flask

# database configuration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
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

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
