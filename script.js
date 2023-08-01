let aqua = document.getElementById("aqua")
let teal = document.getElementById("teal")
let pink = document.getElementById("pink")
let purple = document.getElementById("purple")
let colorless = document.getElementById("colorless")
let color_display = document.getElementById("color-display")




aqua.onclick = function() {
 color_display.style.backgroundColor = "aqua"
 color_display.innerHTML = "aqua"
}
teal.onclick = function() {
    color_display.style.backgroundColor = "teal"
    color_display.innerHTML = "teal"
}
   
pink.onclick = function() {
    color_display.style.backgroundColor = "pink"
    color_display.innerHTML = "pink"
}
   
purple.onclick = function() {
    color_display.style.backgroundColor = "purple"
    color_display.innerHTML = "purple"
}
   
colorless.onclick = function() {
    color_display.style.backgroundColor = "white"
    color_display.innerHTML = "colorless"
}
   