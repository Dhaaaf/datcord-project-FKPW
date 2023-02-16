from flask_wtf import FlaskForm
from wtforms import StringField
from app.models import User

class ThemeForm(FlaskForm):
    theme = StringField('theme')
