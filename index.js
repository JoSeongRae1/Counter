const count = document.getElementById("Count")
let c = 0

document.getElementById("DECREASE").addEventListener('click', () => {
	c -= 1
	count.textContent = c;

	if(c < 0) count.style.color = "red";
})

document.getElementById("RESET").addEventListener('click', () => {
	c = 0
	count.textContent = c;
	count.style.color = "black";
})

document.getElementById("INCREASE").addEventListener('click', () => {
	c += 1
	count.textContent = c;

	if(c > 0) count.style.color = "blue";
})