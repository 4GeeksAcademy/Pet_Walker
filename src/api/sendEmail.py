import os
from flask import jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Cargar las variables de entorno
sender_email = os.getenv("SMTP_USERNAME")
sender_password = os.getenv("SMTP_PASSWORD")
smtp_host = os.getenv("SMTP_HOST")
smtp_port = os.getenv("SMTP_PORT")

def send_email(email_content, email_text, email_subject, email_recipients):
    # Crear el mensaje de correo electrónico
    message = MIMEMultipart("alternative")
    message["Subject"] = email_subject
    message["From"] = sender_email
    message["To"] = ", ".join(email_recipients)

    # Adjuntar el contenido de texto y HTML
    part1 = MIMEText(email_text, "plain")
    part2 = MIMEText(email_content, "html")
    message.attach(part1)
    message.attach(part2)

    try:
        # Conectar y autenticar con el servidor SMTP
        smtp_connection = smtplib.SMTP(smtp_host, smtp_port)
        smtp_connection.ehlo()  # Identificación con el servidor SMTP
        smtp_connection.starttls()  # Establece una conexión segura con TLS
        smtp_connection.login(sender_email, sender_password)
        
        # Enviar el correo electrónico
        smtp_connection.sendmail(sender_email, email_recipients, message.as_string())
        smtp_connection.quit()
        print("Correo enviado exitosamente.")
        return jsonify({"msg": "Email sent"}), 200

    except smtplib.SMTPException as e:
        print("Error al enviar el correo:", str(e))
        return jsonify({"msg": "Error al enviar el correo", "error": str(e)}), 500
