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

## Notas
- Funciona sin cobertura: lo marcado se guarda en el móvil y se sincroniza al volver la conexión.
- Quien tenga el enlace puede ver y cambiar la lista. Si se difundiera, crea una lista nueva desde «Usar otra lista en este móvil».
- Para cambiar algo de la app, sustituye el fichero en GitHub; los móviles lo recogen al abrirla con conexión.
