

import os
from flask import jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


sender_email = os.getenv("SMTP_USERNAME")
sender_password = os.getenv("SMTP_PASSWORD")
smtp_host = os.getenv("SMTP_HOST")
smtp_port = os.getenv("SMTP_PORT")
reciever_email = os.getenv("RECIEVERS_EMAIL")

content =  """ soy el content"""
text = """ soy el text """
subject = """ soy el subject"""


def send_email(email_content, email_text, email_subject, email_recipients):

    message = MIMEMultipart("alternative")
    message["Subject"] = email_subject
    message["From"] = sender_email
    recipients = email_recipients
    
    message["To"] = ", ".join(recipients)

    text = email_text

    html_content = email_content

    part1 = MIMEText(text, "plain")

    part2 = MIMEText(html_content, "html")

    message.attach(part1)

    message.attach(part2)

    smtp_connection = smtplib.SMTP(smtp_host, smtp_port)

    smtp_connection.starttls() # Secure the connection

    smtp_connection.login(sender_email, sender_password)

    smtp_connection.sendmail(sender_email, recipients, message.as_string())

    smtp_connection.quit()

    return jsonify({"msg": "Email sent"}), 200