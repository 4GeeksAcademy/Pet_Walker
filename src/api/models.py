from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Date, Float
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy import create_engine
# from eralchemy2 import render_er

db = SQLAlchemy()
Base = declarative_base()

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
    id = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(120), unique = False,  nullable = False)
    apellido = db.Column(db.String(120), unique = False, nullable = False)
    edad = db.Column(db.Integer, unique = False, nullable = False)
    telefono = db.Column(db.Integer, unique=True, nullable = False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    direccion = db.Column(db.String(120), unique = False, nullable = False)
    distrito = db.Column(db.String(120), unique = False, nullable = False)
    contraseña = db.Column(db.String(80), unique=False, nullable=False)
    salt = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<Owner {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,         
            "apellido": self.apellido,     
            "edad": self.edad,             
            "telefono": self.telefono,
            "email": self.email,
            "direccion": self.direccion,
            "distrito": self.distrito
        }

class Walker(db.Model):
    __tablename__ = 'walker'
    id = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(120), unique = False,  nullable = False)
    apellido = db.Column(db.String(120), unique = False, nullable = False)
    edad = db.Column(db.Integer, unique = False, nullable = False)
    telefono = db.Column(db.Integer, unique=True, nullable = False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    direccion = db.Column(db.String(120), unique = False, nullable = False)
    distrito = db.Column(db.String(120), unique = False, nullable = False)
    # fotoPerfil: null,  PREGUNTAR COMO SE PONE
    contraseña = db.Column(db.String(80), unique=False, nullable=False)
    salt = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<Walker {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "telefono": self.telefono,
            "distrito": self.distrito
        }
    
class Mascota(db.Model):
    __tablename__ = 'mascota'
    id = Column(Integer, primary_key = True)
    owner_id = Column(db.Integer, ForeignKey('owner.id'))
    owner = relationship(Owner)
    nombre = db.Column(db.String(120), unique = False,  nullable = False)
    raza = db.Column(db.String(120), unique = False,  nullable = False)
    edad = db.Column(db.Integer, unique = False, nullable = False)
    detalles = db.Column(db.String(800), unique = False,  nullable = False)

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


