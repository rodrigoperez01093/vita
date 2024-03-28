<div align="center">
<h1> Vita Wallet Test </h1>
</div>

<div align="center">

[Ver Demo](https://ephemeral-sable-cf93f1.netlify.app)

</div>
<br>
<h1> Primeros pasos </h1>

Con las siguientes instrucciones podrás configurar este proyecto localmente.

**📑    Requerimientos**

Para poder ejecutar esta aplicación necesitarás tener la última versión de NPM y Node instalada en tu ordenador, puedes comprobar en consola si la tienes instalada haciendo 

```
npm -v
```
o

``` 
node-v
```

O puede descargarlo gratuitamente en el siguiente enlace - <https://nodejs.org/es/download/> .


<div align="center">

![](./Readme/Aspose.Words.ea102fbd-e677-478a-991b-66b51ee3534b.002.png)

</div>

Luego haz clic en Code y copia el enlace al repositorio.

<div align="center">

![image](https://github.com/rodrigoperez01093/vita/assets/118926632/2a196c11-a8b6-4458-9d42-49615e591985)

</div>

 Abre una terminal e ingresa el siguiente comando

 ``` 
git clone https://github.com/rodrigoperez01093/vita.git
```

<br>
<h1>Para instalar </h1>

**1-** Abra un terminal de su elección, y entre en la raíz del directorio.

**2-** Crear un archivo *.env.local* y dentro de él incluir la siguiente información:

 ``` 
VITE_SERVER=*****
VITE_APP_NAME=*****
```

*El contenido de estas variables serán enviadas por email.*

**3-** Instale las dependencias

```
npm install
```

**4-** A continuación, para iniciar la aplicación en tu navegador, debes ejecutar la siguiente línea de código en la terminal. Luego, abra una pestaña en su navegador con la url <http://localhost:5173/>

```
npm run dev
```
<br>
Ya podemos navegar
<br>
<br>

<div align="center">

![image](https://github.com/rodrigoperez01093/vita/assets/118926632/7b824694-9868-490d-ae87-6a2ebc64ae2d)

</div>

*Las credenciales para iniciar sesión serán enviadas por email.*

<br>
<h1>Ejecutar pruebas </h1>

Para ejecutar los tests mediante [vitest](https://vitest.dev/) corremos el siguiente comanddo en la terminal

```
npm run test
```
Esto hará que los test se ejecuten automáticamente.

**Pruebas e2e**

Para ejecutar las pruebas con [cypress](https://www.cypress.io/) debemos hacer los siguiente:

**1-** creamos en la raíz del directorio el archivo

```
cypress.env.json
```
el cuál tendrá el siguiente contenido

```
{
  "sever": ****,
  "app_name": ****,
  "email_test": ****,
  "password_test": ****
}
```
*El contenido de estas variables serán enviadas por email.*

**2-** Ejecutamos en la terminal el siguiente comando

```
npm run cyprress:open
```
<br>
Esto abrirá la siguiente ventana
<br>
<br>
<div align="center">

  ![image](https://github.com/rodrigoperez01093/vita/assets/118926632/8f2441d7-b921-497a-bcef-974aaf233465)

</div>
<br>
Seleccionamos E2E testing y luego el navegador a elección
<br>
<br>
<div align="center">

![image](https://github.com/rodrigoperez01093/vita/assets/118926632/5a22cc9e-541d-4dc1-98ca-aa8565264489)
</div>
<br>
Luego seleccionamos vita.cy-js
<br>
<br>
<div align="center">

  ![image](https://github.com/rodrigoperez01093/vita/assets/118926632/71410769-914c-43ac-90ed-45fb8bb3ca57)

</div>
<br>
A partir de aquí, corren las pruebas
<br>
<br>
<div align="center">
  
![image](https://github.com/rodrigoperez01093/vita/assets/118926632/9170e894-9396-4b27-b2c1-48b62340f983)

</div>

<br>


<h1> Autor </h1>

Rodrigo Perez

- [Linkedin](<https://www.linkedin.com/in/rodrigo-perez-full-stack-developer/>)
- [Github](<https://github.com/rodrigoperez01093>)
- [Portfolio](<https://main--rodrigoperez.netlify.app/>)
- [Twitter](<https://twitter.com/RodriiPerezz>)

