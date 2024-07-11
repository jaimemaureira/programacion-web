from django.shortcuts import render
from . models import Alumno,Genero

def index(request):
    alumnos= Alumno.objects.all()
    context={"alumnos":alumnos}
    return render(request, 'alumnos/index.html', context)

def quienes(request):
    return render(request, 'alumnos/quienes.html')

def registro(request):
    return render(request, 'alumnos/registro.html')

def contact(request):
    return render(request, 'alumnos/contac.html')

def casaOccidental(request):
    return render(request, 'alumnos/casaOccidental.html')

def casamediterranea(request):
    return render(request, 'alumnos/casamediterranea.html')

def casaEstiloEuropea(request):
    return render(request, 'alumnos/casaEstilo Europea.html')

def casa2pisos(request):
    return render(request, 'alumnos/casa2pisos.html')

def carrito(request):
    return render(request, 'alumnos/carrito.html')

def arr_ventas(request):
    return render(request, 'alumnos/arr_ventas.html')


