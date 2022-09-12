# Comment Slider

> Slider que permite la navegación entre diversos comentarios, a través de flechas adelante y atrás

## Usage
Para añadir nuevos comentarios, abrir el archivo 'slider.component.ts' y modificar la variable 'cards':

```shell
    cards = [
        {   name: 'John Doe', 
            photo: 'user-1.jpg', 
            country: 'usa.png', 
            msg: 'Me pareció excelente, creo que el Discord está muy bien organizado y la iniciativa de NUWE es tremenda, gracias por la oportunidad, realmente lo disfruté.'
        }
    ]
```
Añadir imagenes correspondientes en la carpeta de 'assets'.

## API/Component

La APi consta de un componente padre y un componente hijo. El componente padre 'Slider' contiene un arreglo con los diferentes comentarios, incluyengo el usuario, el país, el avatar y el propio comentario. Cada nuevo comentario se debe de inluir en este arreglo, con toda su información completa. Este componente también incluye la lógica que permite la navegación mediante flechas.

El componente hijo 'Card' recoge los datos del componente padre para crear una tarjeta donde mostrar cada comentario.

## Installation

Antes de ser instalado, es necesario descargar y instalar [Angular CLI](https://github.com/angular/angular-cli).

A continuación, proceder a la instalación:

```shell
    # Clone or install commands
    npm install
```

```shell
    # test o run commands
    ng serve
```

## License 

Inlcuir la licéncia y el link a esta
[MIT](https://opensource.org/licenses/MIT)