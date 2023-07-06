# Safey - Aplicativo Web para la ANT

Safey es un sistema de venta de boletos de buses interprovinciales de Ecuador. La presente aplicación web tiene como propósito proporcionar la administración de la información de cooperativas y frecuencias a los usuarios de la Agencia Nacional de Tránsito ecuatoriana.

## Primeros Pasos

Estas instrucciones te guiarán para configurar y ejecutar la aplicación en tu entorno local para propósitos de desarrollo y pruebas.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

- [Servidor web local](https://www.apache.org)
  Para el proyecto en cuestión se utilizó el servidor de Apache proporcionado por la herramienta XAMPP, pero puedes utilizar similares de tu preferencia.
  
- [PHP](https://php.net) 
  La versión de php a instalar dependerá mucho de cual servidor web utilices, aquí te proporcionamos una guía con Apache:
  * PHP 5.2.x: Compatible con Apache 2.0.x y Apache 2.2.x.
  * PHP 5.3.x: Compatible con Apache 2.2.x.
  * PHP 5.4.x: Compatible con Apache 2.2.x y Apache 2.4.x.
  * PHP 5.5.x: Compatible con Apache 2.2.x y Apache 2.4.x.
  * PHP 5.6.x: Compatible con Apache 2.2.x y Apache 2.4.x.
  * PHP 7.x: Compatible con Apache 2.4.x.
  * PHP 8.x: Compatible con Apache 2.4.x.

- [Repositorio - Backend](https://github.com/YadiraAllauca/ServiciosProyectoDAS) 
  Los enlaces a los servicios que verás en el código de este proyecto, están relacionados al repositorio de backend, puedes utilizarlo sin problema, recuerda revisar el README para que comprendas la manera en la que está funcionando su estructura. [🔗]((https://github.com/YadiraAllauca/ServiciosProyectoDAS))

### Clonación

1. Clona el repositorio en tu máquina local dentro de htdocs del directorio de XAMPP:

```bash
git clone https://github.com/diana9519/ProyectoDasBusesAdministrador.git
```

2. Dentro del mismo directorio puedes clonar el repositorio de backend si deseas utilizar los servicios proporcionados en el mismo:
```bash
git clone https://github.com/YadiraAllauca/ServiciosProyectoDAS.git
```

### Verificación del acceso a servicios
Recuerda que los servicios que clonaste por el momento están funcionando localmente, por lo que deberás verificar que las rutas en el proyecto presente son las correctas para tu caso.

![Ejemplo]()

### Verificación del funcionamiento
Cuando levantes Apache en XAMPP podrás acceder ya a la app con localhost.
![Localhost]()

## Uso

## Contribución
Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
```bash
git checkout -b nombre-de-la-rama
```
3. Realiza los cambios y haz commit:
```bash
git commit -m "Descripción de los cambios"
```
4. Envía los cambios a tu fork:
```bash
git push origin nombre-de-la-rama
```
5. Crea una pull request en este repositorio.

### Licencia
Este proyecto académico no tiene una licencia específica asignada. Todos los derechos de autor pertenecen a los miembros del equipo de desarrollo. Ten en cuenta que esto significa que no se otorgan permisos explícitos para utilizar, modificar o distribuir el código fuente o los archivos relacionados. Cualquier uso, reproducción o distribución del proyecto debe obtener permiso previo.
### Contacto
Si tienes alguna pregunta o comentario, puedes contactarte con los miembros del equipo de desarrollo:

* dpinchao9519@uta.edu.ec
* anaranjo1676@uta.edu.ec
* kzamora7938@uta.edu.ec
* tarmijos0985@uta.edu.ec
* yallauca3770@uta.edu.ec

