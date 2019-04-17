/*

   _____      __  __  _____
  / ____|    |  \/  |/ ____|
 | |     ___ | \  / | (___  _   _ ___
 | |    / _ \| |\/| |\___ \| | | / __|
 | |___| (_) | |  | |____) | |_| \__ \
  \_____\___/|_|  |_|_____/ \__, |___/
                             __/ |
                            |___/


    Onze JavaScript bestand:
        De main frontend logica van de view. Behandelt gebruiker invoer en
        communicatie met behulp van AJAX.

    Makers:
           _     _
     /\   | |   | |
    /  \  | |__ | | __ _ _ __ ___
   / /\ \ | '_ \| |/ _` | '_ ` _ \
  / ____ \| | | | | (_| | | | | | |
 /_/    \_\_| |_|_|\__,_|_| |_| |_|
  ____
 |  _ \
 | |_) |_ __ _   _  __ _ _ __
 |  _ <| '__| | | |/ _` | '_ \
 | |_) | |  | |_| | (_| | | | |
 |____/|_|   \__, |\__,_|_| |_|
              __/ |
             |___/
   _____ _          _     _              _
  / ____| |        (_)   | |            | |
 | |    | |__  _ __ _ ___| |_ ___  _ __ | |__   ___ _ __
 | |    | '_ \| '__| / __| __/ _ \| '_ \| '_ \ / _ \ '__|
 | |____| | | | |  | \__ \ || (_) | |_) | | | |  __/ |
  \_____|_| |_|_|  |_|___/\__\___/| .__/|_| |_|\___|_|
                                  | |
                                  |_|
  _____              _      _
 |  __ \            (_)    | |
 | |  | | __ _ _ __  _  ___| |
 | |  | |/ _` | '_ \| |/ _ \ |
 | |__| | (_| | | | | |  __/ |
 |_____/ \__,_|_| |_|_|\___|_|
 __     __       _
 \ \   / /      (_)
  \ \_/ /_ _ ___ _ _ __
   \   / _` / __| | '_ \
    | | (_| \__ \ | | | |
    |_|\__,_|___/_|_| |_|


    Studentnummers: s1118514, s1114330, s1134223, s1130662, s1132616
    Opleiding:      HBO-ICT
    School:         Windesheim Flevoland
    E-mail:         s1118514@student.windesheim.nl
                    s1114330@student.windesheim.nl
                    s1134223@student.windesheim.nl
                    s1130662@student.windesheim.nl
                    s1132616@student.windesheim.nl
    Datum:          17-04-2019
    Docenten:       Tjerk van Westing en Dimitri de Vre

    Alle verwezen elementen in HTML zullen eindigen met HTML aan het einde
    van een variabele naam, een variabele voor een send knop zal sendKnopHTML
    heten.
    Er komen twee regels tussen elke functie.
*/

"use strict";


/* -------------------------------- GLOBALE VARIABELEN -------------------------------- */

/* API objects used for communication with server. */
var getAPI    = new Api("GET");
var postAPI   = new Api("POST");
var putAPI    = new Api("PUT");
var deleteAPI = new Api("DELETE");



/* -------------------------------- CLASS DEFINITIES -------------------------------- */






/* -------------------------------- FUNCTIE DEFINITIES -------------------------------- */




/* -------------------------------- INITIALISATIE CODE -------------------------------- */

/* Aanzetten van alle tooltips en popovers in het document. */
$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});
$(document).ready(function() {
    $("body").popover({ selector: '[data-toggle=popover]' });
});