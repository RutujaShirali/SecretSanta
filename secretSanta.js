
document.getElementById("generate").addEventListener("click", generateNames);
document.getElementById("generate").addEventListener("click", changeLayout);

function generateNames(){
	var list = document.getElementById("text").value;
	var names = list.split("\n");
	names = shuffle(names);
	var ul = document.getElementById("result");
	ul.innerHTML = null;
	
	for(var i = 0;i < names.length; i++){		
		var li = document.createElement("li");
		li.innerHTML = names[i] + " will give a gift to " + names[(i+1) % names.length];
		li.style.fontFamily = "Comic Sans MS";
		li.style.fontSize = "larger";
		ul.appendChild(li);
	}
	
	ul.style.position = "fixed";
	ul.style.top = "400px";
	ul.style.left = "700px";
	//alert(names);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function changeLayout(){
	document.getElementById("text").style.display = "none";
	document.getElementById("generate").style.visibility = "hidden";
	/*var newImg = document.createElement("img");
	newImg.src = ".\\resources\\secret.png";
	document.getElementById("mmain").appendChild(newImg);*/
}

