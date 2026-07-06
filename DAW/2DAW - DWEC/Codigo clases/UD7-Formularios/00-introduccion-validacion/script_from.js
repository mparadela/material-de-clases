// ================================================================================
// GUÍA PARA ESCRIBIR EN VIVO - SESIÓN 1 UD7
// Eventos de Formularios + preventDefault()
// ================================================================================
// IMPORTANTE: Este archivo es tu GUÍA. 
// Escribe en vivo siguiendo los PASOS numerados.
// NO proyectes este archivo completo, ve paso a paso.
// ================================================================================

// ================================================================================
// PASO 1: OBTENER REFERENCIAS (5 min)
// ================================================================================
// 💬 Dices: "Primero obtenemos las referencias a los elementos del formulario"

const formulario = document.getElementById('formulario');
const info = document.getElementById('info');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const edad = document.getElementById('edad');
const ciudad = document.getElementById('ciudad');

// 💬 Explicas: "Lo mismo que hacíamos en DOM. Guardamos referencias para usarlas después."

// ================================================================================
// PASO 2: FUNCIÓN AUXILIAR PARA MOSTRAR INFO (3 min)
// ================================================================================
// 💬 Dices: "Creamos una función para mostrar mensajes en el div #info"

function mostrarInfo(mensaje) {
    info.innerHTML = `<strong>Evento:</strong> <p>${mensaje}</p>`;
    console.log(mensaje);
}

// 💬 Explicas: "Esta función actualiza el div y también hace console.log. 
//              Así vemos en pantalla Y en consola."

// ================================================================================
// PASO 3: EVENTO SUBMIT (SIN preventDefault) (5 min)
// ================================================================================
// 💬 Dices: "Primero vamos a ver qué pasa si NO controlamos el submit"

formulario.addEventListener('submit', (e) => {
    // POR AHORA NO ponemos preventDefault()
    mostrarInfo('🚀 SUBMIT: El formulario se está enviando...');
});

// 💬 Explicas: "Ahora probamos. Escribid algo y dad a Enviar..."
// 💬 DEMUESTRAS: 
//    - Escribes en campos
//    - Click en Enviar
//    - ⚠️ La página se RECARGA
//    - No ves el mensaje porque desaparece
// 💬 Preguntas: "¿Visteis qué pasó? Se recargó. Ese es el problema."

// ================================================================================
// PAUSA - EXPLICACIÓN TEÓRICA (3 min)
// ================================================================================
// 💬 Explicas: 
// "Cuando un formulario se envía, el navegador hace 2 cosas POR DEFECTO:
//  1. Intenta enviar los datos al servidor (método GET o POST)
//  2. Recarga la página
// 
// Esto NO nos sirve porque:
//  - No podemos validar antes
//  - Perdemos todo el estado de la página
//  - No podemos controlar qué pasa
// 
// Solución: preventDefault()"

// ================================================================================
// PASO 4: EVENTO SUBMIT (CON preventDefault) (5 min)
// ================================================================================
// 💬 Dices: "Ahora SÍ, vamos a controlar el envío con preventDefault()"

// BORRA el código anterior del submit y escribe:

formulario.addEventListener('submit', (e) => {
    e.preventDefault();  // ⭐ CLAVE - Evita la recarga
    
    mostrarInfo('🚀 SUBMIT: Formulario interceptado (NO se recarga)');
    
    // Ahora podemos acceder a los valores
    console.log('--- VALORES DEL FORMULARIO ---');
    console.log('Nombre:', nombre.value);
    console.log('Email:', email.value);
    console.log('Edad:', edad.value);
    console.log('Ciudad:', ciudad.value);
});

// 💬 DEMUESTRAS:
//    - Rellenas el formulario
//    - Click en Enviar
//    - ✅ NO se recarga
//    - ✅ Ves el mensaje
//    - ✅ Ves los valores en consola
// 💬 Dices: "¿Veis la diferencia? Ahora controlamos TODO."

// ================================================================================
// PASO 5: EVENTO INPUT (mientras escribes) (5 min)
// ================================================================================
// 💬 Dices: "El evento INPUT se dispara CADA VEZ que escribes una letra"

nombre.addEventListener('input', (e) => {
    const valor = e.target.value;
    const longitud = valor.length;
    
    mostrarInfo(`✏️ INPUT en nombre: "${valor}" (${longitud} caracteres)`);
    
    // Actualizar contador de caracteres
    const contador = document.getElementById('nombre-count');
    contador.textContent = `${longitud} caracteres`;
});

// 💬 DEMUESTRAS:
//    - Escribes en el campo nombre
//    - Muestras cómo se dispara CADA letra
// 💬 Explicas: "Muy útil para validación en tiempo real"

// ================================================================================
// PASO 6: EVENTO CHANGE (al terminar de editar) (5 min)
// ================================================================================
// 💬 Dices: "CHANGE se dispara cuando TERMINAS de editar y sales del campo"

email.addEventListener('change', (e) => {
    const valor = e.target.value;
    mostrarInfo(`🔄 CHANGE en email: "${valor}"`);
    
    // Aquí podríamos validar el email
    if (valor.includes('@')) {
        console.log('✅ Email tiene @');
    } else {
        console.log('❌ Email NO tiene @');
    }
});

// 💬 DEMUESTRAS:
//    - Escribes en email (NO se dispara)
//    - Sales del campo (tab o click fuera)
//    - AHORA SÍ se dispara
// 💬 Explicas: "Diferencia clave: INPUT cada letra, CHANGE al terminar"

// ================================================================================
// PASO 7: EVENTO BLUR (al salir del campo) (3 min)
// ================================================================================
// 💬 Dices: "BLUR se dispara cuando SALES del campo (pierde el foco)"

edad.addEventListener('blur', (e) => {
    const valor = e.target.value;
    mostrarInfo(`👋 BLUR en edad: "${valor}"`);
    
    // Validar rango
    const edadNum = parseInt(valor);
    if (edadNum < 18) {
        console.log('⚠️ Menor de edad');
    } else if (edadNum > 120) {
        console.log('⚠️ Edad no válida');
    } else {
        console.log('✅ Edad válida');
    }
});

// 💬 DEMUESTRAS: Click en edad, escribes, sales → BLUR

// ================================================================================
// PASO 8: EVENTO FOCUS (al entrar en el campo) (3 min)
// ================================================================================
// 💬 Dices: "FOCUS se dispara cuando ENTRAS en el campo (recibe el foco)"

ciudad.addEventListener('focus', (e) => {
    mostrarInfo(`👁️ FOCUS en ciudad`);
});

// 💬 DEMUESTRAS: Click en select → FOCUS

// ================================================================================
// PASO 9: RESUMEN DE EVENTOS (2 min)
// ================================================================================
// 💬 Proyecta o escribe en comentario:

/*
RESUMEN DE EVENTOS DE FORMULARIOS:

1. SUBMIT  → Al enviar el formulario (click botón o Enter)
             ⚠️ Siempre usar preventDefault()

2. INPUT   → CADA VEZ que escribes una letra
             ✅ Para validación en tiempo real

3. CHANGE  → Al TERMINAR de editar (pierdes foco Y cambió)
             ✅ Para validaciones al completar campo

4. BLUR    → Al SALIR del campo (pierde foco)
             ✅ Aunque no hayas cambiado nada

5. FOCUS   → Al ENTRAR en el campo (recibe foco)
             ✅ Para mostrar ayudas o tips
*/

// ================================================================================
// PASO 10: FUNCIÓN DE VALIDACIÓN (10 min)
// ================================================================================
// 💬 Dices: "Ahora vamos a validar el formulario ANTES de procesarlo"

function validarFormulario() {
    // Array para acumular errores
    const errores = [];
    
    // ===== Validación 1: Nombre =====
    const nombreValor = nombre.value.trim();  // trim() quita espacios
    
    if (nombreValor === '') {
        errores.push('El nombre es obligatorio');
    } else if (nombreValor.length < 3) {
        errores.push('El nombre debe tener al menos 3 caracteres');
    }
    
    // ===== Validación 2: Email =====
    const emailValor = email.value.trim();
    
    if (emailValor === '') {
        errores.push('El email es obligatorio');
    } else if (!emailValor.includes('@')) {
        errores.push('El email debe contener @');
    }
    
    // ===== Validación 3: Edad =====
    const edadValor = parseInt(edad.value);
    
    if (isNaN(edadValor)) {
        errores.push('La edad debe ser un número');
    } else if (edadValor < 18) {
        errores.push('Debes ser mayor de 18 años');
    } else if (edadValor > 120) {
        errores.push('La edad debe ser menor de 120 años');
    }
    
    // ===== Validación 4: Ciudad =====
    if (ciudad.value === '') {
        errores.push('Debes seleccionar una ciudad');
    }
    
    // Retornar resultado
    return {
        valido: errores.length === 0,
        errores: errores
    };
}

// 💬 Explicas mientras escribes:
// "Esta función:
//  1. Crea un array de errores vacío
//  2. Valida cada campo
//  3. Si falla, añade error al array
//  4. Retorna objeto con: 
//     - valido: true/false
//     - errores: array con mensajes"

// ================================================================================
// PASO 11: INTEGRAR VALIDACIÓN EN SUBMIT (10 min)
// ================================================================================
// 💬 Dices: "Ahora integramos la validación en el submit"

// REEMPLAZA el código del submit anterior por:

formulario.addEventListener('submit', (e) => {
    e.preventDefault();  // Siempre primero
    
    // Validar el formulario
    const resultado = validarFormulario();
    
    if (!resultado.valido) {
        // ===== HAY ERRORES =====
        console.error('❌ ERRORES DE VALIDACIÓN:');
        resultado.errores.forEach(error => {
            console.error('  -', error);
        });
        
        // Mostrar errores en pantalla
        const mensajeErrores = resultado.errores.join('<br>');
        info.innerHTML = `<strong>❌ Errores:</strong><p>${mensajeErrores}</p>`;
        info.style.color = 'red';
        
    } else {
        // ===== TODO VÁLIDO =====
        console.log('✅ FORMULARIO VÁLIDO');
        
        // Construir objeto con los datos
        const datosUsuario = {
            nombre: nombre.value.trim(),
            email: email.value.trim().toLowerCase(),
            edad: parseInt(edad.value),
            ciudad: ciudad.value,
            fechaRegistro: new Date().toISOString()
        };
        
        console.log('📦 Datos del usuario:', datosUsuario);
        
        // Mostrar éxito
        info.innerHTML = '<strong>✅ Formulario válido</strong><p>Usuario registrado correctamente</p>';
        info.style.color = 'green';
        
        // Limpiar formulario
        formulario.reset();
        
        // En UD8 veremos cómo enviar esto al servidor con fetch()
    }
});

// 💬 DEMUESTRAS:
//    1. Envío vacío → Muestra todos los errores
//    2. Solo nombre → Aún hay errores
//    3. Email sin @ → Error específico
//    4. Edad 15 → Error menor de edad
//    5. Todo correcto → ✅ Éxito

// ================================================================================
// PASO 12: MEJORA VISUAL - Validación en tiempo real (OPCIONAL - 5 min)
// ================================================================================
// 💬 Dices: "Como extra, podemos añadir validación visual en tiempo real"

// Añadir al evento input del nombre:
nombre.addEventListener('input', (e) => {
    const valor = e.target.value;
    const longitud = valor.length;
    
    mostrarInfo(`✏️ INPUT en nombre: "${valor}" (${longitud} caracteres)`);
    
    // Actualizar contador
    const contador = document.getElementById('nombre-count');
    contador.textContent = `${longitud} caracteres`;
    
    // ===== VALIDACIÓN VISUAL =====
    if (longitud === 0) {
        nombre.classList.remove('valid', 'invalid');
    } else if (longitud < 3) {
        nombre.classList.remove('valid');
        nombre.classList.add('invalid');
    } else {
        nombre.classList.remove('invalid');
        nombre.classList.add('valid');
    }
});

// 💬 Explicas: "Ahora el borde cambia de color según si es válido o no"
// 💬 DEMUESTRAS: Escribes y ves el borde cambiar (rojo → verde)

// ================================================================================
// FIN DEL SCRIPT
// ================================================================================

// 💬 RESUMEN FINAL (3 min):
// "Hoy hemos visto:
//  
//  ✅ 5 eventos de formularios: submit, input, change, blur, focus
//  ✅ preventDefault() para controlar el envío
//  ✅ Función de validación que retorna objeto
//  ✅ Mostrar errores vs éxito
//  ✅ Construir objeto con los datos validados
//  ✅ Validación visual en tiempo real (extra)
//
//  El miércoles que viene: RegExp para validaciones más potentes (email real, DNI, etc.)"
