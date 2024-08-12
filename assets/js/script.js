

const timeout = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res("enviado 👀");
    }, 3000);
  });
};

const mostrarMsje = async () => {
  const mensaje = await timeout();
  console.log(mensaje);
};

const albumsMusic = async () => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/photos';
  
    let response = await fetch(url);
    const data = await response.json()
  // Muestra los primero 20 títulos
    data.slice(0, 20).forEach(element => {
      console.log("🚀 ~ consumoAPI ~ id:", element.id, "title:", element.title)
    });
  } catch (excepcion) {
    console.error(excepcion)
    console.error('No funcionó ay noooo')
  }
}

async function init() {
  await albumsMusic()
  await mostrarMsje()
}

init()