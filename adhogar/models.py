from django.db import models

# Create your models here.
class Inmueble (models.Model):
    id_propiedad = models.IntegerField(primary_key=True)
    metros_cuadrados   = models.IntegerField(blank=True, null=True)
    metros_construidos = models.IntegerField(blank=True, null=True)
    cant_habitaciones  = models.IntegerField(blank=True, null=True)
    cant_bannos  = models.IntegerField(blank=True, null=True)
    terraza      = models.CharField(max_length=2,blank=True, null=True)
    tipo_cocina  = models.CharField(max_length=20,blank=True, null=True)
    estacionamiento= models.IntegerField(blank=True, null=True)
    lavanderia   = models.CharField(max_length=2,blank=True, null=True)
    piscina      = models.CharField(max_length=2,blank=True, null=True)
    areas_verdes = models.CharField(max_length=2, blank=True, null=True)
    valor_venta  = models.IntegerField(blank=True, null=True)
    valor_arriendo  = models.IntegerField(blank=True, null=True)
    descripcion= models.CharField(max_length=100,blank=True, null=True)
    tipo_propiedad  = models.CharField(max_length=20,blank=True, null=True)
    estilo_propiedad = models.CharField(max_length=30,blank=True, null=True)
    url_foto = models.TextField(max_length=500,blank=True, null=True)

    def __str__(self):
        return str(self.tipo_propiedad)
    
class Cliente (models.Model):
    id_cliente = models.IntegerField(primary_key=True)
    nom_cliente  = models.CharField(max_length=20)
    apellido_cli = models.CharField(max_length=20)
    direccion_cli= models.CharField(max_length=30)
    correo_cli   = models.CharField(max_length=30)



class Venta (models.Model):
    #Clave Foranea#
    id_propiedad = models.IntegerField()
    #propia
    valor_venta = models.IntegerField()
    
class Arriendo (models.Model):
    id_propiedad = models.IntegerField()
    valor_arriendo =  models.IntegerField()

class Contacto(models.Model):
    id_contactos = models.IntegerField(primary_key=True)
    nombres = models.CharField(max_length=30)
    apellidos = models.CharField(max_length=30)
    direccion = models.CharField(max_length=30)
    ciudad = models.CharField(max_length=30)
    comuna = models.CharField(max_length=30)
    mail = models.CharField(max_length=30)
    telefono1 = models.IntegerField()
    telefono2 = models.IntegerField()
    comentarios = models.TextField(max_length=500)


    
