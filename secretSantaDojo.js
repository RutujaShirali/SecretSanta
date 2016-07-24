require(["dojo/dom", "dojo/dom-construct", "dojo/on", "dojo/dom-style", "dojo/mouse", "dojo/domReady!"],
function(dom,domC,on,domStyle,mouse){
	var myButton = dom.byId("generate");
	on(myButton,"click",function(event){
	var list = dom.byId("text").value;
	var names = list.split("\n");
	names = shuffle(names);
	var ul = dom.byId("result");
	ul.innerHTML = null;
	var body = dom.byId("mmain");
	
	for(var i = 0;i < names.length; i++){		
		var li = domC.create("li",{
			innerHTML: names[i]+ " will give a gift to " + names[(i+1) % names.length],
			style: {
				fontFamily: "Georgia",
				fontSize: "larger"
			}
		},ul);
	}
	domStyle.set(ul, {
		position: "fixed",
		top: "400px",
		left: "700px"
	});
	domStyle.set(dom.byId("text"), "display", "none");
	domStyle.set(dom.byId("generate"), "display", "none");
	domC.create("button",{
		id: "backButton",
		innerHTML: "Back",
		fontFamily: "Georgia",
		fontWeight: "bold",
		fontSize: "larger"
	},body);
		
	});
});

require("dojo/ready", function(){
        var backButton = dom.byId("backButton")
		on(backButton,"click",function(event){
		domStyle.set(dom.byId("text"), "display", "block");
		domStyle.set(dom.byId("generate"), "display", "block");
		domStyle.set(dom.byId("ul"), "display", "none");		
     });
	 });

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
};


