fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => {
        console.log("Post recibido: ");
        console.log(post);
        console.log("Título: ", post.title);
    });


async function obtenerPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();

    console.log("Post obtenido con async/await:");
    console.log("Título: ", post.title);
    console.log("Cuerpo: ", post.body);
    
}

obtenerPost();

async function obtenerTodosPost(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    console.log(`Total de posts: ${posts.length}`);
    console.log("Primeros 3 posts_");
    posts.slice(0,3).forEach(post => {
        console.log(`- ${post.title}`);
    });
}

obtenerTodosPost();