const productos = [
    {id:1, title:"pizza 1", price: 900},
    {id:2, title:"pizza 2", price: 920},
    {id:3, title:"pizza 3", price: 930},
];

let cards = "";

const nombre = "Facu";

const texto = "hola, el nombre de el alumno es Facundo"+nombre
const textoTemplateString = `bienvenidos a el desafio mi nonmbre es: ${nombre}`

 /* const idButton = "btn-agregar"+producto.id */

productos.forEach((producto) => {
    /* cards += "<div class='card d-flex col-4'><h2>"+producto.title+"</h2> <button onclick='agregarAlCarrito("+producto.title+")'>agregar al carrito</button></div>"
/* document.getElementById(idButton).onclick = () => {} */

    cards += `<div class='card d-flex col-4'>
        <h2>${producto.title}</h2>
        <button onclick='agregarAlCarrito("${producto.title}")'>agregar al carrito</button>
        </div>`
})

function agregarAlCarrito(tituloProducto) {
    alert("Alta pizza!"+tituloProducto);
}

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click', (event) => {
        console.log(event)
        alert("holiwis");
    })
});

document.getElementById("here-one").innerHTML = cards;