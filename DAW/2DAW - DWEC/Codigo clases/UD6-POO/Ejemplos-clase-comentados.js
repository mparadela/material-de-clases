// ============================================
// 1. CLASE BÁSICA: PERSONA
// ============================================

class Persona {
    // Constructor: se ejecuta automáticamente al crear el objeto
    constructor(nombre, edad) {
        this.nombre = nombre;  // Crear propiedad 'nombre'
        this.edad = edad;      // Crear propiedad 'edad'
    }
    
    // Método de instancia: mostrar saludo
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
    
    // Método que modifica el objeto
    cumplirAnos() {
        this.edad++;
        console.log(`¡Feliz cumpleaños! Ahora tengo ${this.edad} años`);
    }
}

// Crear instancias (objetos)
const persona1 = new Persona("Ana", 25);
const persona2 = new Persona("Luis", 30);

// Usar métodos
persona1.saludar();      // "Hola, soy Ana y tengo 25 años"
persona2.saludar();      // "Hola, soy Luis y tengo 30 años"
persona1.cumplirAnos();  // "¡Feliz cumpleaños! Ahora tengo 26 años"


// ============================================
// 2. PROPIEDADES Y MÉTODOS: PRODUCTO
// ============================================

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    
    // Método que muestra información
    mostrarInfo() {
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio: ${this.precio}€`);
        console.log(`Stock: ${this.stock} unidades`);
    }
    
    // Método con validación
    vender(cantidad) {
        // Validar que haya stock suficiente
        if (cantidad > this.stock) {
            console.log("Error: Stock insuficiente");
            return false;  // Operación fallida
        }
        
        // Reducir stock
        this.stock -= cantidad;
        console.log(`Vendidas ${cantidad} unidades. Stock restante: ${this.stock}`);
        return true;  // Operación exitosa
    }
    
    // Método para reabastecer
    reabastecer(cantidad) {
        // Validar que la cantidad sea positiva
        if (cantidad <= 0) {
            console.log("Error: La cantidad debe ser positiva");
            return;
        }
        
        this.stock += cantidad;
        console.log(`Reabastecidas ${cantidad} unidades. Stock actual: ${this.stock}`);
    }
}

// Crear producto
const producto = new Producto("Teclado", 45.99, 10);

// Usar métodos
producto.mostrarInfo();
producto.vender(3);        // OK: queda stock 7
producto.vender(10);       // Error: no hay suficiente stock
producto.reabastecer(5);   // Stock: 12


// ============================================
// 3. ENCAPSULACIÓN: CUENTA BANCARIA
// ============================================

class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this._saldo = saldoInicial;  // _ indica propiedad "privada"
    }
    
    // Método público para consultar saldo (lectura controlada)
    consultarSaldo() {
        return this._saldo;
    }
    
    // Método público para depositar (con validación)
    depositar(cantidad) {
        // Validar cantidad positiva
        if (cantidad <= 0) {
            console.log("Error: Cantidad debe ser positiva");
            return false;
        }
        
        // Modificar saldo
        this._saldo += cantidad;
        console.log(`Depositados ${cantidad}€. Saldo actual: ${this._saldo}€`);
        return true;
    }
    
    // Método público para retirar (con validaciones)
    retirar(cantidad) {
        // Validar cantidad positiva
        if (cantidad <= 0) {
            console.log("Error: Cantidad debe ser positiva");
            return false;
        }
        
        // Validar fondos suficientes
        if (cantidad > this._saldo) {
            console.log("Error: Fondos insuficientes");
            return false;
        }
        
        // Modificar saldo
        this._saldo -= cantidad;
        console.log(`Retirados ${cantidad}€. Saldo actual: ${this._saldo}€`);
        return true;
    }
    
    // Método para transferir a otra cuenta
    transferir(otraCuenta, cantidad) {
        // Primero intentar retirar de esta cuenta
        if (this.retirar(cantidad)) {
            // Si se pudo retirar, depositar en la otra cuenta
            otraCuenta.depositar(cantidad);
            console.log(`Transferencia de ${cantidad}€ completada`);
            return true;
        }
        return false;
    }
}

// Crear cuentas
const cuenta1 = new CuentaBancaria("Ana", 1000);
const cuenta2 = new CuentaBancaria("Luis", 500);

// Usar métodos
console.log("Saldo Ana:", cuenta1.consultarSaldo());  // 1000€
cuenta1.depositar(200);                                // 1200€
cuenta1.retirar(300);                                  // 900€
cuenta1.transferir(cuenta2, 150);                      // Ana: 750€, Luis: 650€

// Acceso directo a _saldo (NO RECOMENDADO)
// cuenta1._saldo = 999999;  // Evita las validaciones


// ============================================
// 4. MÉTODOS QUE INTERACTÚAN: RECTANGULO
// ============================================

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    
    // Método que retorna un valor calculado
    calcularArea() {
        return this.ancho * this.alto;
    }
    
    // Método que retorna un valor calculado
    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
    
    // Método que llama a otro método (reutilización)
    esChico() {
        const area = this.calcularArea();  // Llama a calcularArea()
        return area < 100;
    }
    
    // Método que modifica el objeto
    escalar(factor) {
        this.ancho *= factor;
        this.alto *= factor;
        console.log(`Escalado por ${factor}. Nuevas dimensiones: ${this.ancho}x${this.alto}`);
    }
    
    // Método que recibe otro objeto como parámetro
    compararCon(otroRectangulo) {
        const areaPropia = this.calcularArea();
        const areaOtra = otroRectangulo.calcularArea();
        
        if (areaPropia > areaOtra) {
            return "Este rectángulo es más grande";
        } else if (areaPropia < areaOtra) {
            return "El otro rectángulo es más grande";
        } else {
            return "Ambos rectángulos tienen la misma área";
        }
    }
}

// Crear rectángulos
const rect1 = new Rectangulo(10, 5);
const rect2 = new Rectangulo(8, 8);

// Usar métodos
console.log("Área rect1:", rect1.calcularArea());          // 50
console.log("Perímetro rect1:", rect1.calcularPerimetro()); // 30
console.log("¿Es chico?", rect1.esChico());                 // true (50 < 100)

rect1.escalar(2);  // Ahora es 20x10
console.log("Nueva área:", rect1.calcularArea());           // 200

console.log(rect1.compararCon(rect2));  // "Este rectángulo es más grande"


// ============================================
// 5. HERENCIA: ANIMALES
// ============================================

// CLASE PADRE (BASE)
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.energia = 100;
    }
    
    // Método del padre
    comer() {
        this.energia += 20;
        if (this.energia > 100) this.energia = 100;
        console.log(`${this.nombre} está comiendo. Energía: ${this.energia}`);
    }
    
    // Método del padre
    dormir() {
        this.energia = 100;
        console.log(`${this.nombre} ha dormido. Energía recuperada al 100%`);
    }
    
    // Método del padre
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre} | Edad: ${this.edad} | Energía: ${this.energia}`);
    }
}

// CLASE HIJA: PERRO (hereda de Animal)
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);  // Llamar al constructor del padre
        this.raza = raza;     // Propiedad específica de Perro
    }
    
    // Método específico de Perro
    ladrar() {
        this.energia -= 5;
        console.log(`${this.nombre} ladra: ¡Guau guau! (Energía: ${this.energia})`);
    }
    
    // Método específico de Perro
    jugar() {
        this.energia -= 15;
        console.log(`${this.nombre} está jugando. Energía: ${this.energia}`);
    }
}

// CLASE HIJA: GATO (hereda de Animal)
class Gato extends Animal {
    constructor(nombre, edad, color) {
        super(nombre, edad);  // Llamar al constructor del padre
        this.color = color;   // Propiedad específica de Gato
    }
    
    // Método específico de Gato
    maullar() {
        this.energia -= 5;
        console.log(`${this.nombre} maúlla: ¡Miau miau! (Energía: ${this.energia})`);
    }
    
    // Método específico de Gato
    acecharPresa() {
        this.energia -= 10;
        console.log(`${this.nombre} acecha una presa. Energía: ${this.energia}`);
    }
}

// Crear instancias
const perro = new Perro("Max", 3, "Labrador");
const gato = new Gato("Luna", 2, "Negro");

// El perro puede usar métodos heredados de Animal
perro.mostrarInfo();  // Método heredado
perro.comer();        // Método heredado
perro.ladrar();       // Método propio de Perro
perro.jugar();        // Método propio de Perro

// El gato puede usar métodos heredados de Animal
gato.mostrarInfo();   // Método heredado
gato.dormir();        // Método heredado
gato.maullar();       // Método propio de Gato
gato.acecharPresa();  // Método propio de Gato


// ============================================
// 6. SOBREESCRITURA DE MÉTODOS
// ============================================

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this._velocidad = 0;
    }
    
    acelerar(cantidad) {
        this._velocidad += cantidad;
        console.log(`Velocidad: ${this._velocidad} km/h`);
    }
    
    frenar(cantidad) {
        this._velocidad -= cantidad;
        if (this._velocidad < 0) this._velocidad = 0;
        console.log(`Velocidad: ${this._velocidad} km/h`);
    }
    
    // Método que será sobreescrito
    mostrarInfo() {
        console.log(`${this.marca} ${this.modelo} - ${this._velocidad} km/h`);
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, numPuertas) {
        super(marca, modelo);
        this.numPuertas = numPuertas;
    }
    
    tocarClaxon() {
        console.log("¡Beep beep!");
    }
    
    // SOBREESCRITURA: redefinimos mostrarInfo()
    mostrarInfo() {
        // Llamar al método del padre con super
        super.mostrarInfo();
        // Añadir información adicional
        console.log(`Número de puertas: ${this.numPuertas}`);
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }
    
    hacerCaballito() {
        console.log("¡Haciendo caballito! 🏍️");
    }
    
    // SOBREESCRITURA: redefinimos mostrarInfo()
    mostrarInfo() {
        console.log(`${this.marca} ${this.modelo} - ${this.cilindrada}cc - ${this._velocidad} km/h`);
    }
}

// Crear vehículos
const coche = new Coche("Toyota", "Corolla", 4);
const moto = new Moto("Yamaha", "R1", 1000);

// Cada uno usa su propia versión de mostrarInfo()
coche.mostrarInfo();  // Usa la versión de Coche (con super)
moto.mostrarInfo();   // Usa la versión de Moto


// ============================================
// 7. GETTERS Y SETTERS: USUARIO
// ============================================

class Usuario {
    constructor(nombre, apellido, edad, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this._edad = edad;      // Propiedad privada
        this._email = email;    // Propiedad privada
    }
    
    // ========== GETTERS ==========
    
    // Getter: propiedad calculada (no se almacena)
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    
    // Getter: acceso controlado de lectura
    get edad() {
        return this._edad;
    }
    
    // Getter: acceso controlado de lectura
    get email() {
        return this._email;
    }
    
    // Getter: propiedad calculada booleana
    get esMayorDeEdad() {
        return this._edad >= 18;
    }
    
    // ========== SETTERS ==========
    
    // Setter: acceso controlado de escritura con validación
    set edad(nuevaEdad) {
        // Validar rango
        if (nuevaEdad < 0 || nuevaEdad > 120) {
            console.log("Error: Edad inválida (debe estar entre 0 y 120)");
            return;
        }
        
        // Si válida, actualizar
        this._edad = nuevaEdad;
        console.log("Edad actualizada correctamente");
    }
    
    // Setter: acceso controlado de escritura con validación regex
    set email(nuevoEmail) {
        // Expresión regular para validar email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Validar formato
        if (regexEmail.test(nuevoEmail)) {
            this._email = nuevoEmail;
            console.log("Email actualizado correctamente");
        } else {
            console.log("Error: Formato de email inválido");
        }
    }
    
    // Método normal
    mostrarInfo() {
        console.log(`Usuario: ${this.nombreCompleto}`);  // Usa getter
        console.log(`Edad: ${this.edad} años`);          // Usa getter
        console.log(`Mayor de edad: ${this.esMayorDeEdad ? 'Sí' : 'No'}`);  // Usa getter
        console.log(`Email: ${this.email}`);             // Usa getter
    }
}

// Crear usuario
const usuario = new Usuario("Ana", "García", 25, "ana@example.com");

// Usar getters (SIN paréntesis, como propiedades)
console.log(usuario.nombreCompleto);  // "Ana García" - getter calculado
console.log(usuario.edad);            // 25 - getter de acceso
console.log(usuario.esMayorDeEdad);   // true - getter calculado

// Usar setters (asignación normal)
usuario.edad = 30;                    // OK - pasa validación
console.log(usuario.edad);            // 30

usuario.edad = -5;                    // Rechazado - no pasa validación
console.log(usuario.edad);            // 30 (no cambió)

usuario.email = "nuevo@email.com";    // OK - pasa validación
usuario.email = "correo-invalido";    // Rechazado - no pasa validación


// ============================================
// 8. GETTERS CALCULADOS: RECTANGULO
// ============================================

class RectanguloConGetters {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    
    // Getter: calcula el área (no se almacena)
    get area() {
        return this.ancho * this.alto;
    }
    
    // Getter: calcula el perímetro (no se almacena)
    get perimetro() {
        return 2 * (this.ancho + this.alto);
    }
    
    // Getter: calcula si es cuadrado (no se almacena)
    get esCuadrado() {
        return this.ancho === this.alto;
    }
}

// Crear rectángulo
const rect = new RectanguloConGetters(10, 5);

// Acceder a getters (sin paréntesis)
console.log("Área:", rect.area);         // 50 - se calcula cada vez
console.log("Perímetro:", rect.perimetro); // 30 - se calcula cada vez
console.log("¿Es cuadrado?", rect.esCuadrado);  // false

// Si modificamos las dimensiones, los getters se actualizan automáticamente
rect.ancho = 8;
console.log("Nueva área:", rect.area);  // 40 - se recalcula automáticamente


// ============================================
// 9. MÉTODOS ESTÁTICOS: UTILIDADES
// ============================================

class Utilidades {
    // Método estático: capitalizar primera letra
    static capitalizar(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }
    
    // Método estático: número aleatorio en rango
    static aleatorioEntre(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Método estático: truncar texto
    static truncar(texto, longitudMaxima) {
        if (texto.length <= longitudMaxima) {
            return texto;
        }
        return texto.slice(0, longitudMaxima) + "...";
    }
    
    // Método estático: formatear fecha
    static formatearFecha(fecha) {
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0');
        const año = fecha.getFullYear();
        return `${dia}/${mes}/${año}`;
    }
}

// Usar métodos estáticos (desde la clase, NO desde instancias)
console.log(Utilidades.capitalizar("javascript"));              // "Javascript"
console.log(Utilidades.aleatorioEntre(1, 100));                 // Número entre 1-100
console.log(Utilidades.truncar("Texto muy largo", 10));         // "Texto muy ..."
console.log(Utilidades.formatearFecha(new Date()));             // "10/12/2024"

// ❌ ERROR: No se pueden llamar desde instancias
// const util = new Utilidades();
// util.capitalizar("hola");  // TypeError


// ============================================
// 10. VALIDADOR CON MÉTODOS ESTÁTICOS
// ============================================

class Validador {
    // ========== PROPIEDADES ESTÁTICAS (CONSTANTES) ==========
    
    static REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    static REGEX_TELEFONO = /^[6-9]\d{8}$/;  // España: 9 dígitos, empieza 6-9
    static REGEX_DNI = /^\d{8}[A-Z]$/;
    
    // ========== MÉTODOS ESTÁTICOS ==========
    
    // Validar email
    static esEmailValido(email) {
        return this.REGEX_EMAIL.test(email);
    }
    
    // Validar teléfono
    static esTelefonoValido(telefono) {
        return this.REGEX_TELEFONO.test(telefono);
    }
    
    // Validar DNI (con letra correcta)
    static esDNIValido(dni) {
        // Primero comprobar formato
        if (!this.REGEX_DNI.test(dni)) {
            return false;
        }
        
        // Comprobar letra correcta
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const numero = parseInt(dni.substring(0, 8));
        const letra = dni.charAt(8);
        
        return letras.charAt(numero % 23) === letra;
    }
    
    // Validar longitud de texto
    static longitudEntre(texto, min, max) {
        return texto.length >= min && texto.length <= max;
    }
    
    // Validar contraseña segura
    static esPasswordSegura(password) {
        const tieneLongitud = password.length >= 8;
        const tieneMayuscula = /[A-Z]/.test(password);
        const tieneMinuscula = /[a-z]/.test(password);
        const tieneNumero = /\d/.test(password);
        
        return tieneLongitud && tieneMayuscula && tieneMinuscula && tieneNumero;
    }
}

// Usar métodos estáticos del Validador
console.log(Validador.esEmailValido("usuario@example.com"));  // true
console.log(Validador.esEmailValido("correo-invalido"));      // false

console.log(Validador.esTelefonoValido("612345678"));         // true
console.log(Validador.esTelefonoValido("512345678"));         // false

console.log(Validador.esDNIValido("12345678Z"));              // true
console.log(Validador.esDNIValido("12345678A"));              // false

console.log(Validador.esPasswordSegura("MiPass123"));         // true
console.log(Validador.esPasswordSegura("123456"));            // false


// ============================================
// 11. PROPIEDADES ESTÁTICAS: CONTADOR
// ============================================

class UsuarioConContador {
    // PROPIEDAD ESTÁTICA: contador compartido por todas las instancias
    static contadorUsuarios = 0;
    
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        
        // Incrementar contador y asignar ID único
        this.id = ++UsuarioConContador.contadorUsuarios;
    }
    
    // MÉTODO ESTÁTICO: obtener total de usuarios creados
    static getTotalUsuarios() {
        return UsuarioConContador.contadorUsuarios;
    }
    
    // Método de instancia
    mostrarInfo() {
        console.log(`Usuario #${this.id}: ${this.nombre} (${this.email})`);
    }
}

// Crear usuarios
const user1 = new UsuarioConContador("Ana", "ana@example.com");
const user2 = new UsuarioConContador("Luis", "luis@example.com");
const user3 = new UsuarioConContador("María", "maria@example.com");

// Cada usuario tiene su ID único
user1.mostrarInfo();  // "Usuario #1: Ana (ana@example.com)"
user2.mostrarInfo();  // "Usuario #2: Luis (luis@example.com)"
user3.mostrarInfo();  // "Usuario #3: María (maria@example.com)"

// Consultar total (método estático)
console.log("Total de usuarios:", UsuarioConContador.getTotalUsuarios());  // 3

// La propiedad estática es compartida
console.log("Contador:", UsuarioConContador.contadorUsuarios);  // 3


// ============================================
// 12. EJEMPLO COMPLETO: CARRITO DE COMPRAS
// ============================================

class Carrito {
    constructor() {
        this._productos = [];  // Array de objetos { nombre, precio, cantidad }
    }
    
    // Agregar producto (si existe, aumenta cantidad)
    agregarProducto(nombre, precio, cantidad) {
        // Buscar si el producto ya existe
        const productoExistente = this._productos.find(p => p.nombre === nombre);
        
        if (productoExistente) {
            // Si existe, aumentar cantidad
            productoExistente.cantidad += cantidad;
        } else {
            // Si no existe, añadirlo
            this._productos.push({ nombre, precio, cantidad });
        }
        
        console.log(`Producto agregado: ${nombre} x${cantidad}`);
    }
    
    // Eliminar producto
    eliminarProducto(nombre) {
        // Buscar índice del producto
        const indice = this._productos.findIndex(p => p.nombre === nombre);
        
        if (indice !== -1) {
            // Si existe, eliminarlo
            this._productos.splice(indice, 1);
            console.log(`Producto eliminado: ${nombre}`);
        } else {
            console.log(`Error: Producto "${nombre}" no encontrado`);
        }
    }
    
    // Actualizar cantidad
    actualizarCantidad(nombre, nuevaCantidad) {
        // Si la cantidad es 0, eliminar el producto
        if (nuevaCantidad === 0) {
            this.eliminarProducto(nombre);
            return;
        }
        
        // Buscar producto
        const producto = this._productos.find(p => p.nombre === nombre);
        
        if (producto) {
            producto.cantidad = nuevaCantidad;
            console.log(`Cantidad actualizada: ${nombre} - ${nuevaCantidad} unidades`);
        } else {
            console.log(`Error: Producto "${nombre}" no encontrado`);
        }
    }
    
    // Calcular total del carrito
    calcularTotal() {
        return this._productos.reduce((total, p) => {
            return total + (p.precio * p.cantidad);
        }, 0);
    }
    
    // Obtener número de productos diferentes
    obtenerNumeroProductos() {
        return this._productos.length;
    }
    
    // Vaciar carrito
    vaciar() {
        this._productos = [];
        console.log("Carrito vaciado");
    }
    
    // Mostrar carrito en formato tabla
    mostrarCarrito() {
        if (this._productos.length === 0) {
            console.log("El carrito está vacío");
            return;
        }
        
        console.log("\n=== CARRITO DE COMPRAS ===");
        console.log("Producto          | Precio  | Cant. | Subtotal");
        console.log("------------------------------------------------");
        
        this._productos.forEach(p => {
            const subtotal = p.precio * p.cantidad;
            // Formatear con padEnd/padStart para alinear columnas
            console.log(
                `${p.nombre.padEnd(16)} | ` +
                `${p.precio.toFixed(2).padStart(6)}€ | ` +
                `${String(p.cantidad).padStart(4)} | ` +
                `${subtotal.toFixed(2).padStart(7)}€`
            );
        });
        
        console.log("------------------------------------------------");
        console.log(`TOTAL: ${this.calcularTotal().toFixed(2)}€`);
    }
}

// Crear carrito
const carrito = new Carrito();

// Agregar productos
carrito.agregarProducto("Teclado", 45.50, 1);
carrito.agregarProducto("Ratón", 25.99, 2);
carrito.agregarProducto("Monitor", 199.99, 1);
carrito.agregarProducto("Ratón", 25.99, 1);  // Aumenta cantidad de ratón

// Mostrar carrito
carrito.mostrarCarrito();

// Operaciones
console.log("\nNúmero de productos diferentes:", carrito.obtenerNumeroProductos());
console.log("Total:", carrito.calcularTotal().toFixed(2) + "€");

// Modificar
carrito.actualizarCantidad("Ratón", 5);
carrito.eliminarProducto("Monitor");

// Mostrar de nuevo
carrito.mostrarCarrito();
