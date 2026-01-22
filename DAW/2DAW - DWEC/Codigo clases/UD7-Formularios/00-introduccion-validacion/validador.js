class Validador {
    // Propiedades estáticas

    static REGEX_EMAIL =  /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    static REGEX_TELEFONO = /^[67]\d{8}$/;
    static REGEX_DNI = /^(\d{8})([A-Z])$/;
    static REGEX_CP = /^\d{5}$/;
    static LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

    // Metodos estaticas

    static esEmailvalido(email){
        return this.REGEX_EMAIL.test(email);
    }

    static esTelefonoValido(telefono){
        return this.REGEX_TELEFONO.test(telefono);0
    }

    static esDNIValido(dni){
        const match = dni.match(this.REGEX_DNI);
        if(!match) return false;
        const numero = parseInt(match[1]);
        const letra = match[2];
        const letraCorrecta = this.LETRAS_DNI.charAt(numero % 23);

        return letra === letraCorrecta;
    }

}

console.log(Validador.esEmailvalido("test@test.com"));
console.log(Validador.esTelefonoValido("612345678"));
console.log(Validador.esDNIValido("72971827C"));
console.log(Validador.esDNIValido("72971827A"));

