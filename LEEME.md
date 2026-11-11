# La compra de casa — puesta en marcha

Tiempo estimado: 15 minutos. Los pasos 1 a 3 conviene hacerlos desde el ordenador.

## 1. Base de datos (Firebase, gratis)
1. Entra en https://console.firebase.google.com con tu cuenta de Google y crea un proyecto (p. ej. `compra-casa`). Google Analytics: desactivado.
2. Menú lateral → Firestore Database → Crear base de datos → ubicación `europe-southwest1 (Madrid)` → modo producción.
3. Pestaña «Reglas»: borra lo que haya, pega el contenido de `firestore.rules` y pulsa «Publicar».
4. Rueda de Configuración del proyecto → «Tus apps» → icono web `</>` → nombre `Compra` (sin marcar Firebase Hosting) → Registrar.
5. Copia el bloque `firebaseConfig` que aparece y sustitúyelo en `config.js` (solo los valores entre comillas).

## 2. Alojamiento (GitHub Pages, gratis)
1. En https://github.com crea un repositorio nuevo, **público**, llamado `compra`.
2. «uploading an existing file» → arrastra todos los ficheros de esta carpeta, incluida la carpeta `icons` → Commit changes.
3. Settings → Pages → Source: «Deploy from a branch» → Branch `main`, carpeta `/ (root)` → Save.
4. En uno o dos minutos la app estará en `https://TU-USUARIO.github.io/compra/`.

## 3. Primer uso
1. Abre esa dirección en Safari del iPhone → «Crear la lista de casa». La lista nace con lo que tenías marcado.
2. «Compartir por WhatsApp…» → elige a la persona. El enlace lleva el código secreto de la lista.
3. En cada iPhone: abrir el enlace en Safari → Compartir → «Añadir a pantalla de inicio». Si al abrir desde el icono pide el enlace, pegarlo una vez.

## Fotos de los productos
- En «Comprar», el cuadrito junto a cada producto abre su ficha: hacer o elegir una foto, cambiarla o quitarla, y cambiar el pasillo.
- En «Marcar lo que falta» → «Editar», al tocar un producto se abre la misma ficha, con la opción «Quitar del catálogo».
- La foto se reduce en el móvil (máx. 60 KB) y se guarda en la propia base de datos; no hace falta Cloud Storage ni plan de pago.
- **Cada vez que cambie `firestore.rules`**: Firebase → Firestore Database → Reglas → pegar el fichero completo → Publicar. Sin ese paso, las fotos no se guardan.

## Notas y deshacer
- Nota opcional por producto («2 bricks», «sin lactosa»): se escribe en la ficha del producto, solo mientras está pendiente. En «Comprar» se ve en pequeño bajo el nombre.
- Al meter el producto en el carro, la nota se borra. Si al marcar con foto se lee una cantidad, se guarda como nota.
- Al quitar algo (de la lista, del carro o del catálogo) aparece «Deshacer» durante 5 segundos.

## Reconocer productos con una foto
- Botón «Foto de una nota o de lo que falta» (modo Marcar): reconoce los productos de una nota, una captura, unos envases o un ticket. Antes de marcar, muestra la lista para confirmarla.
- Botón «Foto del ticket: tachar lo comprado» (modo Comprar): tacha lo pendiente que aparezca en el ticket.
- Usa Gemini a través de Firebase AI Logic, protegido con App Check (reCAPTCHA Enterprise). En el repositorio no hay ninguna clave secreta: la clave de sitio de `config.js` es pública por diseño y solo funciona desde `jl2099-sg.github.io`.
- La foto no se guarda; solo se envía para reconocerla.
- El modelo se cambia en `config.js` (`aiModel`). Si se agota el cupo gratuito del día, la app lo indica y el resto sigue funcionando.
- Requisitos en consola: Firebase AI Logic con «Gemini Developer API» activado, y App Check con la app web registrada con reCAPTCHA Enterprise.

## Notas
- Funciona sin cobertura: lo marcado se guarda en el móvil y se sincroniza al volver la conexión.
- Quien tenga el enlace puede ver y cambiar la lista. Si se difundiera, crea una lista nueva desde «Usar otra lista en este móvil».
- Para cambiar algo de la app, sustituye el fichero en GitHub; los móviles lo recogen al abrirla con conexión.
