function Transfo() {
  document.getElementById("demo").innerHTML = "Paragraphe changé";
}

function Verif() {
	
	var laboite = document.getElementById("CheckCheck");
	
	var reponse = document.getElementById("rep");
	
	if (laboite.checked == true){
		
		reponse.style.display = "block";
	}
	else {
		reponse.style.display = "none";
	}	
		
		
	
} 
	
var identité = {Prénom : "Bobby", Nom : "Carotte", Age : 4, Fourrure : "Orange"};