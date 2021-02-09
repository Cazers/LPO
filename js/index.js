let buttonFooter = document.querySelector("#envoyer");

buttonFooter.addEventListener("click",() =>{
	document.querySelector("#search").value = " ";
});

let sousBatiment = document.querySelector(".batiment");
sousBatiment.addEventListener("click",() =>{
	let sousBar = document.querySelector(".batiment .sousBar");
	sousBar.style.display = 'none';
});
