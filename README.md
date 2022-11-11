#  👾 MD LINKS 👾

MD Links es una librería cuyo fin relizar una serie de validaciones o estadisticas a los links que se encuentan en archivos MarkDown, a través del ingreso de una ruta.
### **PASO 1.INICIA LA LIBRERÍA** 
Ejecuta en la terminal el comando:

 **...$ mdLinks**

### **PASO 2. INGRESA LA RUTA**
Te aparecerá un mensaje donde se solicita ingrese una ruta para continuar ejecuta 'ENTER' y selecciona una de las opciones:

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

4. ### --stats & --validate

Arroja un objeto con el la ruta ingresada en total de links de esa ruta, cuales de ellos son unicos y cuantos estan rotos. 
*{name, totalLinks, uniqueLinks, brokenLinks}*

0. ### Exit
Al introducir 0 mas enter estarás abandonado la librería
 
 *Si aún tienes dudas de su funcionamiento te compartimos unos diagramas de de flujo sobre su funcionamiento de la API*

![APImdlinks](https://user-images.githubusercontent.com/101679628/200127721-a786dba9-464d-49dc-b760-dcde71d4e3a2.png)

*Y el funcionamiento del CLI*

![CLI](https://user-images.githubusercontent.com/101679628/200131979-2cd302ca-3467-4b39-90b2-66d156627003.png)

 >_sthiramyoga@gmail.com_  
 >Adei Cabañas



