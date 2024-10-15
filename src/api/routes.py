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

                #REGISTRAR Y GET


@api.route("/owners", methods=["GET"])
def get_owners():
    owners = Owner.query.all()  
    owners_list = [owner.serialize() for owner in owners] 
    return jsonify(owners_list), 200 

@api.route("/owner/<int:id>", methods=["GET"])
def get_owner(id):
    owner = Owner.query.get(id) 
    if owner is None:
        return jsonify({"msg": "Owner not found"}), 404  
    return jsonify(owner.serialize()), 200  


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
            "token": create_access_token(identity=email)            
        }), 200


@api.route("/walkers", methods=["GET"])
def get_walkers():
    walkers = Walker.query.all()  
    walkers_list = [walker.serialize() for walker in walkers] 
    return jsonify(walkers_list), 200 

@api.route("/walker/<int:id>", methods=["GET"])
def get_walker(id):
    walker = Walker.query.get(id) 
    if walker is None:
        return jsonify({"msg": "Walker not found"}), 404  
    return jsonify(walker.serialize()), 200  


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
    email = request.json.get("email", None)
    nombre = request.json.get("nombre", None)
    raza = request.json.get("raza", None)
    edad = request.json.get("edad", None)
    detalles = request.json.get("detalles", None)

    if any(field is None for field in [email, nombre, raza, edad, detalles]):
        return jsonify({"msg": "Missing required fields."}), 401  

    owner = Owner.query.filter_by(email=email).first()

    if owner is None:
        return jsonify({"msg": "¡El dueño no existe! ¡Revisar el correo por favor!"}), 401

    new_mascota = Mascota(owner_id=owner.id, nombre=nombre, raza=raza,
        edad=edad, detalles=detalles)
    
    db.session.add(new_mascota)
    db.session.commit()

    return jsonify({
        "mascota": new_mascota.serialize(),
        "token": create_access_token(identity=email)
    }), 200


@api.route("/mascotas", methods=["GET"])
def get_mascotas():
    mascotas = Mascota.query.all()  
    mascotas_list = [mascota.serialize() for mascota in mascotas] 
    return jsonify(mascotas_list), 200 


                #LOGIN

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    contraseña = request.json.get("contraseña", None)

    if email == None or contraseña == None:
        return jsonify({"msg": "Espacios faltantes, revisar."}), 401

    user = Owner.query.filter_by(email=email).first()

    if user == None:
        user = Walker.query.filter_by(email=email).first()
    #PRIMERO BUSQUEDA DE OWNER Y LUEGO DE WALKER Y SINO NONE
    
    if user == None:
        return jsonify({"msg": "¡El usuario no fue encontrado!"}), 404

    if user.contraseña != contraseña:
        return jsonify({"msg": "¡Contraseña errónea!"}), 401

    access_token = create_access_token(identity=email)

    return jsonify({
        "token": access_token,
        "user": user.serialize() 
    }), 200


@api.route("/user", methods=["GET"])
@jwt_required()
def get_user_logged():
    current_user = get_jwt_identity()
    user = Owner.query.filter_by(email=current_user).first()
    if user == None:
        user = Walker.query.filter_by(email = current_user).first()
    return jsonify(user.serialize()), 200

#MASCOTAS GET CON FOR 

#HACER MIGRATE


#RUTA DE PASEOS: 
#   LOS PASEADORES SON  LOS QUE OFRECEN EL PASEO
#   LOS DUENOS SON LOS QUE ELIGEN EL PASEO OFRECIDO, PONIENDO SU MASCOTA A PASEAR 