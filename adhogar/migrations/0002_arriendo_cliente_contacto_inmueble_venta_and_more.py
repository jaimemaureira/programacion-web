# Generated by Django 4.1.2 on 2024-06-28 23:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adhogar', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Arriendo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_propiedad', models.IntegerField()),
                ('valor_arriendo', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id_cliente', models.IntegerField(primary_key=True, serialize=False)),
                ('nom_cliente', models.CharField(max_length=20)),
                ('apellido_cli', models.CharField(max_length=20)),
                ('direccion_cli', models.CharField(max_length=30)),
                ('correo_cli', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Contacto',
            fields=[
                ('id_contactos', models.IntegerField(primary_key=True, serialize=False)),
                ('nombres', models.CharField(max_length=30)),
                ('apellidos', models.CharField(max_length=30)),
                ('direccion', models.CharField(max_length=30)),
                ('ciudad', models.CharField(max_length=30)),
                ('comuna', models.CharField(max_length=30)),
                ('mail', models.CharField(max_length=30)),
                ('telefono1', models.IntegerField()),
                ('telefono2', models.IntegerField()),
                ('comentarios', models.TextField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Inmueble',
            fields=[
                ('id_propiedad', models.IntegerField(primary_key=True, serialize=False)),
                ('metros_cuadrados', models.IntegerField(blank=True, null=True)),
                ('metros_construidos', models.IntegerField(blank=True, null=True)),
                ('cant_habitaciones', models.IntegerField(blank=True, null=True)),
                ('cant_bannos', models.IntegerField(blank=True, null=True)),
                ('terraza', models.CharField(blank=True, max_length=2, null=True)),
                ('tipo_cocina', models.CharField(blank=True, max_length=20, null=True)),
                ('estacionamiento', models.IntegerField(blank=True, null=True)),
                ('lavanderia', models.CharField(blank=True, max_length=2, null=True)),
                ('piscina', models.CharField(blank=True, max_length=2, null=True)),
                ('areas_verdes', models.CharField(blank=True, max_length=2, null=True)),
                ('valor_venta', models.IntegerField(blank=True, null=True)),
                ('valor_arriendo', models.IntegerField(blank=True, null=True)),
                ('descripcion', models.CharField(blank=True, max_length=100, null=True)),
                ('tipo_propiedad', models.CharField(blank=True, max_length=20, null=True)),
                ('estilo_propiedad', models.CharField(blank=True, max_length=30, null=True)),
                ('url_foto', models.TextField(blank=True, max_length=500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_propiedad', models.IntegerField()),
                ('valor_venta', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Propiedad',
        ),
    ]
