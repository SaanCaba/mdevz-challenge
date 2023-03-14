# MDEVZ CHALLENGE - SANTIAGO CABALLERO.

Hola a todos, esta vez les traigo una aplicación desarrollada en React y TypeScript. Es una aplicación sencilla donde se visualiza al principio un login y un sistema de registro, donde si no tienes un usuario para logearte puedes llenar datos y tener tu propio usuario.
La autentificación está hecha con Firebase y el uso de Firestore para guardar información del usuario.


# FUNCIONES PRINCIPALES

- Los usuarios son autentificados mediante Firebase usando su métodos de logueo y registro.
- El usuario registrado es guardado con Firestore, para poder guardar su país de origen, nombre y apellido.
- La renderización del perfil está basada en la enviada por mail, tratando de igualar al máximo la imagen dada.
- La aplicación tiene diseñadas 3 diferentes vistas, mobile, tablet y para la web.
- El estado de la aplicación es manejado con el hook useContext.
- Hay rutas protegidas, para poder acceder a la ruta profile y a la ruta del detalle de la moneda, hace falta estar autentificado sino, el usuario será redirigido a la pantalla de login.

# DEPENDENCIAS UTILIZADAS

- React Router DOM, para llevar el routing de la aplicación, protección de rutas y el uso de rutas dinámicas para mostrar las diferentes monedas del usuario.
- React Icons, se usó para renderizar los íconos que se pedían.
- Country State City, se implementó para que en el formulario de registro se visualizen todos los países disponibles.
- Firebase, como se dijo anteriormente se usó para la autentificación de los usuarios y para el registro de los mismos usando FireStore y Firebase Auth para la autentificación.
- Typescript, para manejar el tipado de la aplicación y ayudarnos a la hora de desarrollar.
- Uso de Eslint y prettier para tener bien identado nuestro código y, para tener los menores errores posibles.
- Framer Motion, fue utilizado para el slider que se encuentra en el perfil del usuario.

# Deploy

Link: https://mdevz-challenge.vercel.app/

# ¿Cómo puedo usar la aplicación localmente?
Seguir estos pasos:

- Clonar repositorio
- npm install
- npm run start
