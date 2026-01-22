
        //REFERENCIAS AL DOM

        const body = document.body;
        const btnClaro = document.getElementById('btnClaro');
        const btnOscuro = document.getElementById('btnOscuro');

        /*Función aplicarTema
        Aplica un tema (claro u oscuro) al body y lo guarda en localStorage*/

        function aplicarTema(tema){
            //1. Eliminar cualquier clase de tema anterior
            body.classList.remove('tema-claro', 'tema-oscuro');
            //2. añadir la nueva clase de tema
            body.classList.add(`tema-${tema}`);
            //3. Guardar el localStorage
            localStorage.setItem('tema', tema);
            //4. Feedback en consolo (útil para debugging)
            console.log(`Tema "${tema}" aplicado y guardado en localStorage`);
        }

        /*Función cargarTemaGuardado
        Carga el tema guardado en localStorage. Si no existe, no hace nada.*/

        function cargarTemaGuardado() {
            //Intentar obtener el tema de localStorage
            const temaGuardado = localStorage.getItem('tema');

            if (temaGuardado) {
                //Si existe un tema, lo aplica
                aplicarTema(temaGuardado);
                console.log(`Tema cargado desde localStorage: ${temaGuardado}`);
            } else {
                //si no existe, informar en consola
                console.log(`No hay tema guardado, usando tema claro por defecto`);
            }
        }

        /* EVENT LISTENERS*/

        btnClaro.addEventListener('click', () => {
            aplicarTema('claro');
        });
        btnOscuro.addEventListener('click', () => {
            aplicarTema('oscuro');
        });
        cargarTemaGuardado();