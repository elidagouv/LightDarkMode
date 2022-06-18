var change_color = window.document.getElementById("circulo1")
var body = window.document.getElementById("body")
var title = window.document.getElementById("title")
var background = window.document.getElementById("circulo")

function change() {
    change_color.style.marginLeft = "60px"
    change_color.style.backgroundColor = "Black"
    circulo.style.backgroundColor = "white"
    body.style.backgroundColor = "black"
    title.style.color = "white"
}

function change2() {
    change_color.style.marginLeft = "-59px"
    change_color.style.backgroundColor = "white"
    circulo.style.backgroundColor = "gray"
    body.style.backgroundColor = "rgb(247, 239, 231)"
    title.style.color = "black"
}