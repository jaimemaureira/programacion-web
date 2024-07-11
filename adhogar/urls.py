# from django.conf.urls import url
from django.urls import path
from . import views



urlpatterns = [
    path('index', views.index, name='index'),
    path('arr_ventas', views.arr_ventas, name='arr_ventas'),
    path('cp_add', views.cp_add, name='cp_add'),
    path('cp_del/<str:pk>', views.cp_del, name='cp_del'),    
    path('cp_findEdit/<str:pk>', views.cp_findEdit, name='cp_findEdit'),
    path('cp_update', views.cp_update, name='cp_update'),
    path('menu', views.menu, name='menu'),
    # path('crud', views.crud, name='crud'),
       
    
]