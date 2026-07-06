console.log("=== PROCESAR JSON ANIDADO\n");

//DATOS REALES DE JSON Placeholder

        const usuario = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
                }
            },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
            }
        };

        const posts = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            }
        ]

        // EJERCICIO 1: Extraer datos anidados

        console.log("EJERCICIO 1: Acceder a datos anidados\n");

        const nombre = usuario.name;
        const email = usuario.email;
        const ciudad = usuario.address.city;
        const calle = usuario.address.street;
        const latitud = usuario.address.geo.lat;
        const empresa = usuario.company.name;

        console.log("Nombre ", nombre);
        console.log("Email: ", email);
        console.log("Ciudad ", ciudad);
        console.log("Latitud: ", latitud);
        console.log("Empresa: ", empresa);

        document.getElementById('resultado1').innerHTML = `
            <strong>Email: </strong>${email} <br>
            <strong>Nombre:  </strong> <${nombre}<br>
            <strong>Ciudad: </strong>${ciudad} <br>
            <strong>Calle: </strong>${calle} <br>
            <strong>Empresa: </strong>${empresa} <br>
            <strong>Coordenadas: </strong>${latitud}
            `;
        console.log("\n---\n");

        //EJERCICIO 2: Recorrer el array y mostrar

        console.log("EJERCICIO 2: Recorrer arrays\n");

        console.log("Total de posts: ", posts.length);

        posts.forEach((posts, index) => {
            console.log(`Post ${index + 1}: ${posts.title}`);
        });

        let html2 = "<ul>";
        
        posts.forEach(post => {
            html2 += `
            <li>
            <strong>${post.title} </strong><br>
            <small>${post.body.substring(0,100)}...</small>
            </li>
            `;
        });

        html2 += "</ul>";

        document.getElementById('resultado2').innerHTML = html2;
        console.log("\n---\n");

        //EJERCICIO 3: Filtrar y transformar

        console.log("EJERCICIO 3: Transformar datos\n");

        //Extraer los títulos con un .map()

        const titulos = posts.map(post => post.title);
        console.log("Titulos: ", titulos);

        //Buscar un post específico con .find()

        const postBuscado = posts.find(post => post.id === 2);
        console.log("Post con id 2: ", postBuscado.title);

        //Filtrar posts largos con .filter()

        const postsLargos = posts.filter(post => post.body.length > 150);
        console.log("Posts largos: ", postsLargos.length);

        document.getElementById('resultado3').innerHTML = `
            <strong>Títulos extraidos:</strong><br>
            ${titulos.map((t,i) => `${i+1}.${t}`).join('</br>')}
            <br> <br>
            <strong>Post encontrado (id=2):</strong><br>
            ${postBuscado.title}
            <br> <br>
            <strong>Posts largos:</strong> ${postsLargos.length}
        `;

        console.log("\n=== PATRONES IMPORTANTES ===\n");
        console.log("1. Acceso anidado: objeto.prop.subprop.subsubprop");
        console.log("2. Recorrer: .forEach()");
        console.log("3. Transformar: .map()");
        console.log("4. Buscar: .find()");
        console.log("5. Filtrar: .filter()");
        console.log("6. IMPORTANTE: verificar que existe antes de acceder");
