// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var an = documnet.getElementById("an")
// Add event listener
button.addEventListener("click", altaviata)
an.addEventListener("mouseover", displayAge)
const d = new Date()
var year = d.getFullYear()
// Define function
function displayAge()
{
	an.innerHTML= year - an.innerHTML
}
function altaviata()
{
	nume.innerHTML = "Software Engineer"
	prenume.innerHTML = "Google"

	educatie.innerHTML = "Experiente"
	asteptari.innerHTML = "<ul><li>Workshops</li><li>Intership</li><ul>"

	img.src = "images/lion.jpg"
	img.style.opacity = "70%"
	img.style.height = "200px"
	img.style.width = "200px"
	img.style.border = "2px"
}