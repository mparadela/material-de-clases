        // ====================================
        // FUNCIONES DE VALIDACIÓN CON THROW
        // ====================================
        
        /**
         * TO-DO: Crear función validarNombre(nombre)
         * - Si está vacío → throw error 'El nombre es obligatorio'
         * - Si tiene menos de 3 caracteres → throw error 'El nombre debe tener al menos 3 caracteres'
         * - Si todo OK → return true
         */
        function validarNombre(nombre) {
            // TO-DO: Implementar
        }
        
        /**
         * Ya implementada - no tocar
         */
        function validarEmail(email) {
            if (email.trim() === '') {
                throw new Error('El email es obligatorio');
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                throw new Error('El formato del email no es válido');
            }
            
            return true;
        }
        
        /**
         * TO-DO: Crear función validarTelefono(telefono)
         * - Si está vacío → throw error 'El teléfono es obligatorio'
         * - Si no cumple RegExp /^[679]\d{8}$/ → throw error 'El teléfono debe tener 9 dígitos y empezar por 6, 7 o 9'
         * - Si todo OK → return true
         */
        function validarTelefono(telefono) {
            // TO-DO: Implementar
        }
        
        // ====================================
        // MANEJO DEL FORMULARIO
        // ====================================
        
        const formulario = document.getElementById('formulario');
        const nombreInput = document.getElementById('nombre');
        const emailInput = document.getElementById('email');
        const telefonoInput = document.getElementById('telefono');
        const mensajeDiv = document.getElementById('mensaje');
        
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Limpiar estados anteriores
            nombreInput.classList.remove('valido', 'invalido');
            emailInput.classList.remove('valido', 'invalido');
            telefonoInput.classList.remove('valido', 'invalido');
            mensajeDiv.innerHTML = '';
            
            // Array para acumular errores
            const errores = [];
            
            // TO-DO: Validar nombre con try/catch
            // (igual que los otros dos campos)
            
            // Validar email con try/catch (YA HECHO)
            try {
                validarEmail(emailInput.value);
                emailInput.classList.add('valido');
            } catch (error) {
                emailInput.classList.add('invalido');
                errores.push(`Email: ${error.message}`);
            }
            
            // TO-DO: Validar teléfono con try/catch
            // (igual que el email)
            
            // Mostrar resultado
            if (errores.length > 0) {
                mensajeDiv.className = 'mensaje error';
                mensajeDiv.innerHTML = `
                    <strong>✗ Errores encontrados:</strong><br>
                    ${errores.map(e => `• ${e}`).join('<br>')}
                `;
            } else {
                mensajeDiv.className = 'mensaje exito';
                mensajeDiv.innerHTML = `
                    <strong>✓ Formulario válido</strong><br>
                    Los datos se han validado correctamente.
                `;
                
                console.log('Datos válidos:', {
                    nombre: nombreInput.value,
                    email: emailInput.value,
                    telefono: telefonoInput.value
                });
            }
        });