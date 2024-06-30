from django.contrib import admin
from.models import *

#from.models import Propiedad, (aca agregar la demas tablas)

# Register your models here.
admin.site.register(Inmueble)
admin.site.register(Cliente)
admin.site.register(Venta)
admin.site.register(Arriendo)
admin.site.register(Contacto)





#admin.site.regiter(nombre de la clase) -- aca van repetidas las clases, hacia abajo.
