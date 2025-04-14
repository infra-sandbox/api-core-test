# api-core-test

Este repositorio contiene un microservicio básico desarrollado en **Node.js + Express** que forma parte de un mini ecosistema de prueba. El servicio expone una ruta HTTP muy simple (`/core`) que retorna un mensaje estático.

Está diseñado para interactuar con:

- `api-gm-test`: Microservicio hermano, también conectado al cliente.
- `client-test`: Un cliente frontend que hace peticiones a este servicio.
