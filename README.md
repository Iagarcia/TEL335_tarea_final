# TEL335 Tarea Final

## Preparar base de datos
Requisito: Instalar MongoDB

Dentro de la consola de MongoDB se debe:
- Usar una base de datos.
- Crear un usuario y asignar permisos.
- Crear una coleccion para los datos.

$ use signin

$ db.createUser({user: 'TEL335', pwd: '1234', roles: ['readWrite', 'dbAdmin']})

$ db.createCollection('users')

## Obtener repositorio

$ git@github.com:Iagarcia/TEL335_tarea_final.git

## Preparar backend

Node 10.x

Se debe instalar los paquetes necesarios.

$ cd TEL335_tarea_final/backend

$ npm install

$ node app.js

## Preparar frontend

Se debe instalar los paquetes necesarios y establecer la IP del servidor (Debe ser accesible mediante la red). Luego ejecutar la aplicacion en el dispositivo movil.

$ cd TEL335_tarea_final/frontend

$ npm install

$ expo start
