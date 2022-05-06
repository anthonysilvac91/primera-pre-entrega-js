const productos = [
    {nombre: "agenda aguacates", precio: 2500},
    {nombre: "agenda puntos", precio: 5500},
    {nombre: "washitape lineas", precio: 2600},
    {nombre: "washitape cactus", precio: 3000},
    {nombre: "sticker corazones", precio: 1500},
    {nombre: "sticker caritas", precio: 1500},

   
]

const mensajeBienvenida = () => {
    alert("Bienvenidos a Kiripaper Artículos de Papeleria"
    )
}

const buscar = () =>{
    busqueda = prompt("Ingresa un producto para ver variedades existentes (Agenda, Washitape o sticker").toLowerCase()
}

const mensajeProducto1 = () =>{
    carrito1 = prompt("Que producto de la consola desea agregar al carrito?").toLowerCase()
}

const mensajeProducto2 = () =>{
    carrito2 = prompt("Que otro producto de la consola desea agregar al carrito?").toLowerCase()
}

const filtrar = () =>{
    const texto = busqueda;
    for(let producto of productos){
        let nombre = producto.nombre;
        if(nombre.indexOf(texto) !== -1){
            console.log(`${producto.nombre} - precio: ${producto.precio} `)

        }
    }
}

let producto1 = () => {
    
    productos.forEach(producto => {
        if(producto.nombre == carrito1){
            console.log("CARRITO DE COMPRAS")
            console.log(`${producto.nombre} - precio: ${producto.precio} `)
            
        }
        
        
    })
    
}

let producto2 = () => {
    
    productos.forEach(producto => {
        if(producto.nombre == carrito2){
            console.log(`${producto.nombre} - precio: ${producto.precio} `)
            
        }
        
        
    })
    
}



mensajeBienvenida ()

do{
    buscar()
    if (busqueda !== "agenda" && busqueda !== "sticker" && busqueda !== "washitape"){
        alert("ingrese producto válido")
    }else(filtrar())


}while(busqueda != "agenda" && busqueda != "sticker" && busqueda != "washitape")

class Inventario{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

const product1 = new Inventario ("agenda aguacates", 2500)
const product2 = new Inventario ("agenda puntos", 5500)
const product3 = new Inventario ("washitape lineas", 2600)
const product4 = new Inventario ("washitape cactus", 3000)
const product5 = new Inventario ("sticker corazones", 1500)
const product6 = new Inventario ("sticker caritas", 1500)

do{
    mensajeProducto1()
    if (carrito1 != product1.nombre && carrito1 != product2.nombre && carrito1 != product3.nombre && carrito1 != product4.nombre && carrito1 != product5.nombre && carrito1 != product6.nombre ){
        alert("ingrese producto válido")
    }else(producto1())
    


}while(carrito1 !== product1.nombre && carrito1 !== product2.nombre && carrito1 !== product3.nombre && carrito1 !== product4.nombre && carrito1 !== product5.nombre && carrito1 !== product6.nombre )

do{
    mensajeProducto2()
    if (carrito2 != product1.nombre && carrito2 != product2.nombre && carrito2 != product3.nombre && carrito2 != product4.nombre && carrito2 != product5.nombre && carrito2 != product6.nombre ){
        alert("ingrese producto válido")
    }else(producto2())
    


}while(carrito2 !== product1.nombre && carrito2 !== product2.nombre && carrito2 !== product3.nombre && carrito2 !== product4.nombre && carrito2 !== product5.nombre && carrito2 !== product6.nombre )





if(carrito1 == product1.nombre && carrito2 == product2.nombre){
    let resultado = (product1.precio + product2.precio )
    alert(`El costo de la compra de ${product1.nombre} y de ${product2.nombre} es de: ${resultado}`)
}else if(carrito1 == product3.nombre && carrito2 == product4.nombre){
    let resultado = (product3.precio + product4.precio )
    alert(`El costo de la compra de ${product3.nombre} y de ${product4.nombre} es de: ${resultado}`)
}else if(carrito1 == product5.nombre && carrito2 == product6.nombre){
    let resultado = (product5.precio + product6.precio )
    alert(`El costo de la compra de ${product5.nombre} y de ${product6.nombre} es de: ${resultado}`)
}