let b = document.querySelector('#calcular-total')
    
b.addEventListener ("click", function() {

let cantidad = document.querySelector ("#cantidad").value

let precio = document.querySelector ("#precio").innerText
let total = Number(cantidad) * Number(precio)


document.querySelector("#precio-final").innerText = "$" + total
document.querySelector("#cantidad-final").innerText = cantidad + " unidades";

let color = document.querySelector("#colorSelection option:checked").value;
    document.querySelector("#color-final").style.background = color;
    
})