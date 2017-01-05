(function(window){
    //I recommend this
    'use strict';
    function defineLibrary(){
        var Library = {}; // Naam om library aan te roepen in HTML
        var name = "Joris";
        Library.greet = function(){
        	  
        		//Ochtend, Middag of Avond met tekst wordt hier weergegeven in div tekstveld
        	  	var greeting;	
			    var time = new Date().getHours();
			    if (time < 12) {
			        greeting = "Goedemorgen Linda,<br> fijn dat je voor Specsavers hebt gekozen. <br></br> Kies hieronder voor een afspraak in de winkel of via internet"

			        var button = document.createElement("button");
					button.innerHTML = "Ga naar Specsavers.nl";

			   		var buttonwinkel = document.createElement("buttonwinkel");
					buttonwinkel.innerHTML = "Plan hier een afspraak in de winkel";
			        document.getElementById("container").style.backgroundImage = "url('img/ochtend.jpg')";
			    
			    } else if (time < 18) {
			        greeting = "Goedemiddag Linda,<br> fijn dat je voor Specsavers hebt gekozen. <br></br> Kies hieronder voor een afspraak in de winkel of via internet"
			        var buttonwinkel = document.createElement("buttonwinkel");
					buttonwinkel.innerHTML = "Plan hier een afspraak in";

			        var button = document.createElement("button");
					button.innerHTML = "Ga naar Specsavers";
			        document.getElementById("container").style.backgroundImage = "url('img/middag.jpg')";
			    }

			    else {
			        greeting = "Goedenavond Linda,<br> fijn dat je voor Specsavers hebt gekozen. <br></br> Kies hieronder voor een afspraak in de winkel of via internet"

			        var button = document.createElement("button");
					button.innerHTML = "Ga hier naar specsavers.nl";
			        document.getElementById("container").style.backgroundImage = "url('img/avond.jpg')"

			        var buttonwinkel = document.createElement("buttonwinkel");
					buttonwinkel.innerHTML = "Helaas, de winkels zijn dicht.<br>";

					//Winkel is na 18-en dicht, verwijder afspraak div
			        document.getElementById("winkelafspraak").style.display = 'none';
			    
			    }
			    //getElement verwijst naar div's in HTML
				document.getElementById("tekstveld").innerHTML = greeting;

					var body = document.getElementsByTagName("buttonveld")[0];
					buttonveld.appendChild(button);

					var body = document.getElementsByTagName("buttonveld")[0];
					buttonveld.appendChild(buttonwinkel);

			
					// Wat moet gegenereerde button doen
					button.addEventListener ("click", function() {
					  window.open("http://www.specsavers.nl");
					});

					buttonwinkel.addEventListener ("click", function() {
					  window.location.hash = '#winkelafspraak';
					});


		//In id tekst wordt tijd weergeven, live 
			function checkTime(i) {
				   return (i < 10) ? "0" + i : i;
				  	}

				  	function startTime() {
				    var today = new Date(),
				      h = checkTime(today.getHours()),
				      m = checkTime(today.getMinutes()),
				      s = checkTime(today.getSeconds());
				    document.getElementById('tijd').innerHTML = h + ":" + m + ":" + s;
				    t = setTimeout(function() {
				      startTime()
				    }, 500);
				  	}
				  	startTime(); 
 
        }
        return Library;
    }
    //define globally if it doesn't already exist
    if(typeof(Library) === 'undefined'){
        window.Library = defineLibrary();
    }
    else{
        console.log("Library already defined.");
    }
})(window);