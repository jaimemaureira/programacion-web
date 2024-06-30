from django import forms
from . models import Usuario

class UsuarioForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = [
            'nombre_usuario',
            'nombre',
            'apellidos',
            'email',
            'edad',
            'fecha_nacimiento',
            'roles',
        ]    