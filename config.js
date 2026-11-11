// Configuración de Firebase (proyecto compra-casa-13989).
// Estos datos identifican el proyecto; no son contraseñas. El acceso a los datos
// lo controlan las reglas de Firestore (firestore.rules).
export const firebaseConfig = {
  apiKey: "AIzaSyBiSbOTHebY6VH2u3F2mrs8EM_UM-9MMrk",
  authDomain: "compra-casa-13989.firebaseapp.com",
  projectId: "compra-casa-13989",
  storageBucket: "compra-casa-13989.firebasestorage.app",
  messagingSenderId: "1014522773165",
  appId: "1:1014522773165:web:6e2987646eabe286391024"
};

// Reconocimiento de productos por foto (Firebase AI Logic + App Check).
// La clave de sitio de reCAPTCHA es pública por diseño: solo funciona desde el dominio autorizado.
// Si se deja vacía, el botón de foto no aparece.
export const recaptchaSiteKey = "6LfrNhsuAAAAANMNolb_zR60USEXvT1d25gqytJe";
// Modelo de Gemini. Si se retira o falla con tickets, cambiar aquí (p. ej. a un "flash").
export const aiModel = "gemini-3.5-flash-lite";
