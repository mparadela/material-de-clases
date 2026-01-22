/* Requisitos:
- 9 dígitos
- Solo numeros
- Empieza por 6 o 7 */

const telefono1 = /[67]\d{8}/;
const telefono2 = /^[67]\d{8}$/;

console.log(telefono1, telefono1.test("612345678")); //true
console.log(telefono1, telefono1.test("712345678")); //true
console.log(telefono1, telefono1.test("512345678")); //false
console.log(telefono1, telefono1.test("61234567")); //true
console.log(telefono1, telefono1.test("612345678d")); //

console.log(telefono2, telefono2.test("612345678"));
console.log(telefono2, telefono2.test("712345678"));
console.log(telefono2, telefono2.test("512345678"));
console.log(telefono2, telefono2.test("61234567"));
console.log(telefono2, telefono2.test("6123456789"));

/* Requisitos:
- algo antes de @
- @ obligatorio
- Después de @ dominio
- Punto en el dominio
- Extensión (com, es, org...)*/

const email1 = /.+@.+\..+/;

const email2 = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

console.log(email2.test("usuario@example.com"));
console.log(email2.test)
