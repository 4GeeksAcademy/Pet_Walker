from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String, Text, Enum as SQLAlchemyEnum
from sqlalchemy.orm import relationship
import enum

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class Owner(db.Model):
    __tablename__ = 'owner'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    apellido = db.Column(db.String(120), unique=False, nullable=False)
    edad = db.Column(db.Integer, unique=False, nullable=False)
    telefono = db.Column(db.String(15), unique=True, nullable=False) 
    email = db.Column(db.String(120), unique=True, nullable=False)
    direccion = db.Column(db.String(120), unique=False, nullable=False)
    distrito = db.Column(db.String(120), unique=False, nullable=False)
    contraseña = db.Column(db.String(80), unique=False, nullable=False)
    salt = db.Column(db.String(80), unique=False, nullable=False)
    fotoPerfil = db.Column(db.String(255), nullable=True)  # Campo para la URL de la foto de perfil

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,         
            "apellido": self.apellido,     
            "edad": self.edad,             
            "telefono": self.telefono,
            "email": self.email,
            "direccion": self.direccion,
            "distrito": self.distrito,
            "fotoPerfil": self.fotoPerfil  # Incluir fotoPerfil en la serialización
        }


class Walker(db.Model):
    __tablename__ = 'walker'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    apellido = db.Column(db.String(120), nullable=False)
    edad = db.Column(db.Integer, nullable=False)
    telefono = db.Column(db.String(15), unique=True, nullable=False)  # Cambiado a String
    email = db.Column(db.String(120), unique=True, nullable=False)
    direccion = db.Column(db.String(120), nullable=False)
    distrito = db.Column(db.String(120), nullable=False)
    contraseña = db.Column(db.String(80), nullable=False)
    salt = db.Column(db.String(80), unique=False, nullable=False)
    habilidades = db.Column(db.Text, nullable=True)
    fotoPerfil = db.Column(db.String(255), nullable=True)  # URL de la foto de perfil

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "edad": self.edad,
            "telefono": self.telefono,
            "email": self.email,
            "direccion": self.direccion,
            "distrito": self.distrito,
            "habilidades": self.habilidades.split(",") if self.habilidades else [],
            "fotoPerfil": self.fotoPerfil  # Incluye la URL de la foto en la serialización
        }
    
class Mascota(db.Model):
    __tablename__ = 'mascota'
    id = Column(Integer, primary_key=True)
    owner_id = Column(Integer, ForeignKey('owner.id'))
    owner = relationship(Owner)
    nombre = db.Column(String(120), unique=False, nullable=False)
    raza = db.Column(String(120), unique=False, nullable=False)
    edad = db.Column(Integer, unique=False, nullable=False)
    detalles = db.Column(String(800), unique=False, nullable=False)

    def __repr__(self):
        return f'<Mascota {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,   
            "raza": self.raza,       
            "edad": self.edad,       
            "detalles": self.detalles, 
            "owner": self.owner_id
        }

class TipoDePaseo(enum.Enum):
    basico = "basico"
    intermedio = "intermedio"
    largo = "largo"

class Paseo(db.Model):
    __tablename__ = 'paseos'

    id = Column(Integer, primary_key=True)
    owner_id = Column(Integer, ForeignKey('owner.id'), nullable=False)
    walker_id = Column(Integer, ForeignKey('walker.id')) 
    domicilio = Column(String)
    horario = Column(String)
    tipo_de_paseo = Column(SQLAlchemyEnum(TipoDePaseo), nullable=False)  

    def serialize(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "walker_id": self.walker_id,
            "domicilio": self.domicilio,
            "horario": self.horario,
            "tipo_de_paseo": self.tipo_de_paseo.value  
        }
