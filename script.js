let aqua = document.getElementById("aqua")
let teal = document.getElementById("teal")
let pink = document.getElementById("pink")
let purple = document.getElementById("purple")
let colorless = document.getElementById("colorless")
let color_display = document.getElementById("color-display")




aqua.onclick = function() {
 color_display.style.backgroundColor = "aqua"
}
teal.onclick = function() {
    color_display.style.backgroundColor = "teal"
   }
pink.onclick = function() {
    color_display.style.backgroundColor = "pink"
   }
purple.onclick = function() {
    color_display.style.backgroundColor = "purple"
   }
colorless.onclick = function() {
    color_display.style.backgroundColor = "white"
   }