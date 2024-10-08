"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Owner, Walker, Mascota
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/register-owner", methods=["POST"])
def register_owner():

    nombre = request.json.get("nombre", None)
    apellido = request.json.get("apellido", None)
    edad = request.json.get("edad", None)
    telefono = request.json.get("telefono", None)
    email = request.json.get("email", None)
    direccion = request.json.get("direccion", None)
    distrito = request.json.get("distrito", None)
    #FOTO DE PERFIL
    contraseña = request.json.get("contraseña", None)

    if any(field is None for field in [nombre, apellido, edad, telefono, email, direccion, distrito, contraseña]):
        return jsonify({"msg": "Missing required fields."}), 401    

    owner = Owner.query.filter_by(email=email).first()

    if owner != None:
        return jsonify({"msg": "Owner already exists!"}), 401

    new_owner = Owner(nombre = nombre, apellido = apellido, edad = edad, telefono = telefono, 
                      email = email, direccion = direccion, distrito = distrito, contraseña = contraseña)
    db.session.add(new_owner)
    db.session.commit()

    return jsonify({ "owner": new_owner.serialize(),
            # "token": create_access_token(identity=email)            
        }), 200

@api.route("/register-walker", methods=["POST"])
def register_walker():

    nombre = request.json.get("nombre", None)
    apellido = request.json.get("apellido", None)
    edad = request.json.get("edad", None)
    telefono = request.json.get("telefono", None)
    email = request.json.get("email", None)
    direccion = request.json.get("direccion", None)
    distrito = request.json.get("distrito", None)
    #FOTO DE PERFIL
    contraseña = request.json.get("contraseña", None)

    if any(field is None for field in [nombre, apellido, edad, telefono, email, direccion, distrito, contraseña]):
        return jsonify({"msg": "Missing required fields."}), 401    

    walker = Walker.query.filter_by(email=email).first()

    if walker != None:
        return jsonify({"msg": "Walker already exists!"}), 401

    new_walker = Walker(nombre = nombre, apellido = apellido, edad = edad, telefono = telefono, 
                      email = email, direccion = direccion, distrito = distrito, contraseña = contraseña)
    db.session.add(new_walker)
    db.session.commit()

    return jsonify({ "walker": new_walker.serialize(),
            "token": create_access_token(identity=email)            
        }), 200

@api.route("/register-mascota", methods=["POST"])
def register_mascota():
    
    owner = request.json.get("owner.email") #VER SI SE AGREGA O NO
    nombre = request.json.get("nombre", None)
    raza = request.json.get("raza", None)
    edad = request.json.get("edad", None)
    detalles = request.json.get("detalles", None)

    if any(field is None for field in [nombre, raza, edad, detalles]):
        return jsonify({"msg": "Missing required fields."}), 401  

    owner = Owner.query.filter_by(owner = owner.email).first()  #MISMO, SE RESUELVE CON LO DE ARRIBA

    if owner == None:
        return jsonify({"msg": "Owner doesn't exists!"}), 401

    mascota = Owner.query.filter_by(owner = owner.email).first()

    new_mascota = Mascota(nombre = nombre, raza = raza, edad = edad, detalles = detalles)
    db.session.add(new_mascota)
    db.session.commit()

    return jsonify({ "mascota": new_mascota.serialize(),
            "token": create_access_token(identity=owner)   #MISMA DUDA          
        }), 200
        
