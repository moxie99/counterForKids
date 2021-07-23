var counter = document.getElementById("count-el");
var saveel = document.getElementById("save-el");

count = 0;

document.getElementById("increment-btn").addEventListener('click', ()=> {
	count++;
	counter.innerText = count
})

document.getElementById("decrement-btn").addEventListener('click', ()=> {
	count--;
	counter.textContent = count
})

document.getElementById("save-btn").addEventListener('click', ()=> {
	
})

function save() {
	// body...
	let countvalue = count + " - ";
	saveel.textContent+=countvalue;
	counter.textContent = 0;
	count = 0;
	return this
}
