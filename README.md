# Personal referral page
Door deze zelf geschreven library toe te voegen aan je project wordt er een pagina gegenereerd die 2 buttons aanmaakt om ergens naar doorverwezen te worden. De achtergrond is dynamisch en kan aangepast worden naar eigen smaak.

## Wat het doet
Functionaliteiten van deze library
* Wijzigt achtergrond per dagdeel : Ochtend, Middag en Avond.
* Creeert 2 buttons op homepagina, aan te passen naar wat je zelf wilt.
* Buttons worden doorverwezen naar externe pagina en element in pagina.
* Creeert in ochtend en middag eigen sectie om afspraak te plannen of contact op te nemen.


## Demo
URL naar [demo](http://jovalo.nl/jslibrary).

## Installatie
De library kan als volgt geinstalleerd worden in je website. 

###Methode 1: GitHub clone

```
 $ git clone https://github.com/Jorisvanloon/myportfolio
 ```


###Methode 2: Handmatig
Download de library (zip) en pak het bestand uit. Plaats de CSS, IMG en JS in de map van je root. Voeg onderstaande code toe aan je HTML:  

```html
<div id="container">
	<p id="tekstveld"></p>
	<div id="tijd"></div>
	<div id="buttonveld"></div>
</div>

<!-- Deze DIV is alleen in ochtend/middag zichtbaar -->
<div id="winkelafspraak"> 
	 <div class="form">

	    <form class="login-form">
		    <h1>Plan hier een afspraak in:</h1>
		      <input id="naamVeld"  type="text" placeholder="Naam"/>
		      <input id="emailVeld" type="emailadres" placeholder="Emailadres"/>
		      <input id="datumVeld" type="woonplaats" placeholder="Woonplaats"/>
			      <button id="planafspraak"></button>
				  <img src="img/audi.jpg" alt="audi">
	    </form>
	 </div>
</div>
<!-- Hier wordt library aangeroepen -->
<script> Library.greet(); </script>
<script> Library.tijd();</script>
<script> Library.button(); </script>
```

Voeg de volgende twee regels toe aan je header tag:

```html
<script type="text/javascript" src="library.js"></script>
<link rel="stylesheet" href="css.css">
```

## Achtergrondafbeelding aanpassen
Zie je liever andere achtergrondafbeeldingen verschijnen?
Pas foto's op volgende manier aan:
* In IMG map staan ochtend, middag en avond.jpg
* Vervang deze foto's naar eigen smaak, library past ze aan




## Updates
De komende periode kunnen deze aanpassingen verwacht worden (01-2017): 
* Zelf achtergrond aan kunnen passen
* Achtergrond aanpassen aan locatie van bezoeken website
* Mogelijkheid om afspraak in te plannen per filiaal
* Zien welke *uw bedrijf* open en dicht zijn op dat moment 
