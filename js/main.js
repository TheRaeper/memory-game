/*  ==========================================================================
    CONSTANTEN
    ==========================================================================
    Constanten zijn variabelen die niet gewijzigd zullen en kunnen worden
    in onze applicatie. We gebruiken ze eigenlijk vaak om waarden die we
    vaak gebruiken voor b.v. controles een duidelijker naam te geven.
    Hierdoor kunnen we in onze code makkelijker lezen wat we bedoelen.
    Dus puur voor de leesbaarheid van onze code.
    ==========================================================================
 */
const SPELER1               = 0;
const SPELER2               = 1;
const CARD_BACK             = 0;
const CARD_FRONT            = 1;
const OFF                   = false;
const ON                    = true;
const YES                   = true;
const NO                    = false;
const NO_CARD_CLICKED       = -1;
const FIRST_CARD_CLICKED    = 0;
const LAST_CARD_CLICKED     = 1;

/*  ==========================================================================
    VARIABELEN
    ==========================================================================
    Variabelen zullen wel gewijzigd worden. Op z'n minst om bij het starten
    van ons programma ze alvast te vullen met een object of een waarde.
    ==========================================================================
 */
var speelveld;                  // Element
var game_button;                // Element
var score_speler_1;             // Element
var score_speler_2;             // Element
var huidige_speler = SPELER1;   // Welke speler is aan de beurt
var naam_speler_1;              // Element
var naam_speler_2;              // Element
var cards = [                   // De nummers zijn tevens de namen van de jpeg
    1, 2, 3, 4, 5, 6, 7, 8,       // afbeeldingen (1.jpg bijvoorbeeld)
    1, 2, 3, 4, 5, 6, 7, 8
];
/*
    In de onderstaande array houden we bij op welke twee kaarten geclicked is
    We kunnen deze array ook gebruiken om te controleren of het maximaal
    aantal aan te klikken kaarten al is bereikt.
 */
var cards_clicked = [ NO_CARD_CLICKED, NO_CARD_CLICKED ];

var ronde_scores = [ 0, 0 ];    // Hier houden we tijdelijk de rondescores bij
var totaal_scores = [ 0, 0 ];   // Hier houden we de totaal scores per speler bij

/*  ==========================================================================
    FUNCTIES
    ==========================================================================
    Hieronder schrijven we al onze functies die samen het spel vormen en het
    dus mogelijk maken ons spel ook echt te spelen.
    De twee kernfuncties zijn:

    clickOnGameButton
    -----------------
    Deze functie gaat alle kliks op de button afhandelen en de dingen doen
    die we in de voorbereiding hebben bedacht.

    clickOnCard
    -----------
    Deze functie gaat alle kliks op de kaarten afhandelen. In deze functie
    wordt eigenlijk het spel gespeeld en moeten we dus ook verschillende
    controles inbouwen

    ==========================================================================
 */



/*
    resetScores()
    -------------
    Reset de rondescores

    TYPE:   Hulpfunctie
 */
function resetScores()
{
    ronde_scores[SPELER1] = 0;
    ronde_scores[SPELER2] = 0;
}

/*
    getCardImageTag()
    -----------------
    Maak de image tag af met een kaart op basis van de kaartnummer
    Een kaartnummer loopt van 0 t/m 15

    @return string  De image-tag naar een juiste afbeelding

    TYPE:   Hulpfunctie
 */
function getCardImageTag(card_index)
{
    /*
        Onderstaande opdracht levert bijvoorbeeld het volgende op als card_index gelijk is 1
        en op cards[1] staat het afbeeldingsnummer 8:

        <img class="play-card-img" src="img/8.jpg" />
     */
    return '<img  class="play-card-img" src="img/' + cards[card_index] + ".jpg\" />"
}

/*
    clickOnGameButton()
    -------------------
    Handel de clicks op de button af

    TYPE:   Main Functie
 */
function clickOnGameButton(event)
{
    // @TODO Implementeren van de click op de button

}

/*
    clickOnCard()
    -------------
    Handel de clicks op de cards af
    In deze functie handelen we een ronde af

    TYPE:   Main Functie
 */
function clickOnCard(event)
{
    // Voorbereiden van lokale variabelen
    var parentDiv = event.target.parentElement.parentElement;
    var card_back = event.target.parentElement.parentElement.children[0];
    var card_front = event.target.parentElement.parentElement.children[1];
    var cellNumber = event.target.parentElement.parentElement.parentElement.cellIndex;
    var rowNumber = event.target.parentElement.parentElement.parentElement.parentElement.rowIndex;
    var cardNumber = (rowNumber * 4) + cellNumber;

    // Hieronder volgt de logica
    // @TODO: Implementatie kaart klik event

}

/*
    endRound()
    ----------
    Einde van een ronde. Dus afhandelen wanneer een ronde ten einde is

    TYPE:   Hulpfunctie
 */
function endRound()
{
    //@TODO: Implementeren van een einde van een ronde

}

/*
    shuffleCards()
    --------------
    Shuffle de kaarten

    TYPE:   Hulpfunctie
 */
function shuffleCards()
{
    var i = 0;
    var j = 0;
    var temp = null;

    for (i = cards.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
}

/*
    determineStartingPlayer()
    -------------------------
    Bepaal random (willekeurig) welke van de 2 spelers mag beginnen

    @return int Speler nummer (0 of 1)

    TYPE:   Hulpfunctie
 */
function determineStartingPlayer()
{
    return Math.round(Math.random());
}

/*
    showCurrentPlayer()
    -------------------
    Toont op het scherm welke speler aan de beurt is

    TYPE:   Hulpfunctie
 */
function showCurrentPlayer()
{
    // @TODO: Implementeren van het laten zien welke speler aan de beurt is

}