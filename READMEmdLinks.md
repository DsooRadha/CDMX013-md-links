#  👾 MD LINKS 👾
## **PASO 1.INICIA LA LIBRERÍA** 
Ejecuta el comando '$ mdLinks' + ![eeeee](https://user-images.githubusercontent.com/101679628/200096615-536f8320-982b-450a-9eea-a998b7eb0074.png)

'ENTER'
## **PASO 2. INGRESA LA RUTA**
te aparecera un mensaje donde se solicita ingreses una ruta 
para continuar ejecutar 'ENTER'
y selecciona una de las opciones:

### **PASO 3. OPTIONS** 
Se te mostrará un menú con las siguientes opciones:
1. ### --validate true

Devuelve un array de objetos con la informacion de cada archivo md de la ruta ingresada.
*[{name, href, text, status, message Ok or Fail}]*

2. ### --validate false

Regresa un array de objetos similar a validate True, pero sin el status y el message.
*[{name, href, text}]*

3. ### --stats

Muestra un array de objetos con el nombre del archivo md ingresado o de los archivos md de la ruta del directorio que ingresaste, asi como el  total de de links por archivos y cuantos de ellos son unicos. 
*[{name,totalLinks, uniqueLinks }]*

4. ### --stats & --validate:** 

Arroja un objeto con el la ruta ingresada en total de links de esa ruta, cuales de ellos son unicos y cuantos estan rotos. 
*{name, totalLinks, uniqueLinks, brokenLinks}*

0. ### Exit
Al introducir 0 mas enter estarás abandonado la librería

**Algo muy cool que puedes hacer en esta libería** es que puedes explorar las opciones de tratamiendo de la ruta. Al darle *delete* o *flecha hacia arriba* te regresa el menu de opciones.
 
 Si aún tienes dudas de su funcionamiento te compartimos unos diagramas de de flujo sobre su funcionamiento 




 **Aportes, comentarios, dudas... puedes contactarnos a través del correo sthiramyoga@gmail.com**


