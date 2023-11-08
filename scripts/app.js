var value = 0;
var currentGlobalRecursivity = 0;

let button = document.querySelector('#launchRecursivity');
let startValue = document.querySelector('#startValue');
let resultContainer = document.querySelector('#resultContainer');

button.addEventListener('click', launchRecursivity);


function launchRecursivity() {
    cleanDisplayAndValue()
    if(!isNaN(parseInt(startValue.value)) && parseInt(startValue.value) !== 0) {
        getSmallesthalf();
    } else {
        displayString('Il faut ecrire un entier pour lancer la recursivité');
    }
}


function cleanDisplayAndValue() {
    value = startValue.value;
    currentGlobalRecursivity = 0;
    resultContainer.innerHTML = '';
}
function displayString(stringToDisplay, className = 'default') {
    resultContainer.innerHTML += `<li class="collection-item ${className}">${stringToDisplay}</li>`;
}


function getSmallesthalf() {
    let currentRecursivity = currentGlobalRecursivity;
    displayString('Niveau actuel de recursivité : ' + currentGlobalRecursivity, 'green')

    if(value <= 5) {
        displayString('Valeur actuelle du chiffre : ' + value + '<br> inferieur ou egal à 5, donc on finit nos executions');

        displayString('Fin du niveau de recursivité : ' + currentRecursivity, 'yellow')
        displayString('valeur finale : ' + value)
        return value
    }
    displayString('Valeur actuelle du chiffre : ' + value + '<br> superieur à 5, donc on réexecute notre fonction');

    value = parseInt(value / 2);
    
    currentGlobalRecursivity ++

    getSmallesthalf()
    displayString('Fin du niveau de recursivité : ' + currentRecursivity, 'yellow')
}
