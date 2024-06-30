from django.shortcuts import render
from .models import *
from django.contrib.auth.decorators import login_required


# Create your views here.

def index(request): # Request: Django proporciona toda la información necesaria sobre una solicitud HTTP,
    propiedades= Inmueble.objects.all()
    context={"propiedades":propiedades}   #crea un diccionario llamado context, que contiene todas las propiedades, bajo nombre de clavae: propiedades.
    return render(request, 'adhogar/index.html', context)

def login(request): # Request: Django proporciona toda la información necesaria sobre una solicitud HTTP,
    return render(request, 'controlp/login.html')

def quienes(request):
    return render(request, 'adhogar/quienes.html')

def contacto(request):
    return render(request, 'adhogar/contact.html')

def regcliente(request):
    return render(request, 'adhogar/registro.html')


def arr_ventas(request):
    propiedades= Inmueble.objects.all() # propiedades: Esta es una variable que almacenará el resultado de la consulta a la base de datos.//Propiedad:  representa una tabla en la base de datos. 
    context={"propiedades":propiedades}  # viene texto de arriba: Accede al administrador de objetos del modelo Propiedad. Este administrador permite realizar consultas a la base de datos.
    return render(request, 'adhogar/arr_ventas.html', context)

@login_required
def crud(request):
    propiedades= Inmueble.objects.all()
    context={"propiedades":propiedades}   #crea un diccionario llamado context, que contiene todas las propiedades, bajo nombre de clavae: propiedades.
    return render(request, 'adhogar/cp_list.html', context)

@login_required
def cp_add(request):

    if request.method != 'POST':
        context = {}
        return render(request, 'adhogar/cp_add.html', context)
    
    else:
        id_propiedad_ingresado_formulario = request.POST["idpropiedad"]
        tipo_propiedad = request.POST["tipo"]
        metros_cuadrados = request.POST["metros"]
        cant_habitaciones= request.POST["habitaciones"]
        cant_bannos = request.POST["banios"]
        estacionamiento = request.POST["estacionamientos"]
        valor_venta = request.POST["valor"]
        descripcion = request.POST["descripcion"]

        #Este es el INSERT a la tabla Inmueble 
        obj= Inmueble.objects.create(   id_propiedad=id_propiedad_ingresado_formulario,                                     
                                        tipo_propiedad=tipo_propiedad,
                                        metros_cuadrados=metros_cuadrados,
                                        cant_habitaciones=cant_habitaciones,
                                        cant_bannos=cant_bannos,
                                        estacionamiento=estacionamiento,
                                        valor_venta=valor_venta,
                                        descripcion=descripcion)
        print("lala")
        obj.save()
        context={'mensaje' : "OK, Datos Grabados"}
        return render(request,'adhogar/cp_add.html', context)

@login_required
def cp_del(request,pk):
    context={}
    try:
        casa = Inmueble.objects.get(id_propiedad=pk)
        casa.delete()
        mensaje ="Propiedad ha sido ELIMINADA"
        propiedades = Inmueble.objects.all()
        context={'propiedades':propiedades , 'mensaje':mensaje}
        return render( request,'adhogar/cp_list.html', context)
    
    except:
        mensaje = "ERROR!, la propiedad que intenta eliminar, no existe"
        propiedades=Inmueble.objects.all()
        context={'propiedades':propiedades , 'mensaje':mensaje}
        return render( request,'adhogar/cp_list.html', context)
     
def cp_findEdit(request,pk):
    if pk!="":
        propiedad=Inmueble.objects.get(id_propiedad=pk)
        context={'propiedad':propiedad}

        if propiedad :
            return render(request,'adhogar/cp_edit.html',context)
        else:
            context={'mensaje':"ERROR, propiedad no existe"}
            return render(request,'adhogar/cp_list.html',context)

@login_required        
def cp_update(request):
    if request.method == 'POST':

        id_propiedad_ingresado_formulario = request.POST["idpropiedad"]
        tipo_propiedad = request.POST["tipo"]
        metros_cuadrados = request.POST["metros"]
        cant_habitaciones= request.POST["habitaciones"]
        cant_bannos = request.POST["banios"]
        estacionamiento = request.POST["estacionamientos"]
        valor_venta = request.POST["valor"]
        descripcion = request.POST["descripcion"]

        propiedad= Inmueble()
        propiedad.id_propiedad = id_propiedad_ingresado_formulario
        propiedad.tipo_propiedad = tipo_propiedad
        propiedad.metros_cuadrados = metros_cuadrados
        propiedad.cant_habitaciones =cant_habitaciones
        propiedad.cant_bannos = cant_bannos
        propiedad.estacionamiento = estacionamiento
        propiedad.valor_venta = valor_venta
        propiedad.descripcion = descripcion
        propiedad.save()

        context={'mensaje':"OK, Actualizado", 'propiedad':propiedad}
        return render(request,'adhogar/cp_edit.html',context)
    
    else:
        propiedades=Inmueble.objects.all()
        context ={'propiedades':propiedades}
        return render(request,'adhogar/cp_list.html', context)
    
@login_required
def menu(request):
    request.session["usuario"] = "admin"
    usuario = request.session["usuario"]
    propiedades= Inmueble.objects.all()
    context={"propiedades":propiedades,'usuario':usuario }   #crea un diccionario llamado context, que contiene todas las propiedades, bajo nombre de clavae: propiedades.
    
    return render(request,'adhogar/cp_list.html',context)



