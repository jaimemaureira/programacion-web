#from django.conf.urls import url 
from django.urls import path
from . import views



urlpatterns = [
    path('index', views.index, name='index'),
    path('formulario/', views.formulario, name="formulario"),
    path('registro', views.registro, name='registro'),
    path('quienes', views.quienes, name='quienes'),
    path('contact', views.contact, name='contact'),
    path('CasaOccidental', views.casaOccidental, name='casaOccidental'),
    path('casamediterranea', views.casamediterranea, name='casamediterranea'),
    path('casaEstiloEuropeo', views.casaEstiloEuropea, name='casaEstiloEuropeo'),
    path('casa2pisos', views.casa2pisos, name='casa2pisos'),
    path('carrito', views.carrito, name='carrito'),
    path('arr_ventas', views.arr_ventas, name='arr_ventas'),

]    