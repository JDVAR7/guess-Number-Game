let SecretNumber = generateSecretNumber(); // Generate a random number between 1 and 10
let attempts = 0;
let randomNumberList = [];
let maxNumber = 10;

function asignTextElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}


function validatinGap() {
    let UserNumber = parseInt(document.getElementById('userValue').value);

    if (UserNumber === SecretNumber) {
        asignTextElement('p', `You guessed it on ${attempts} ${(attempts === 1) ? 'try' : 'tries'}... The number is: ${SecretNumber}!`);
        document.getElementById('reboot').removeAttribute('disabled');
    }else{
        if (UserNumber < SecretNumber) {
            asignTextElement('p', `The number is greater than ${UserNumber}. Try again!`);
        } else {
            asignTextElement();
        }
        attempts++;
        CleanBox();
    }
    return;
}

function CleanBox() {
    document.querySelector('#userValue').value = '';
}

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random()*maxNumber)+1; // Generate a random number between 1 and 10, if the generated number is already in the list, generate a new one
    
    if (randomNumberList.length === maxNumber) {
        asignTextElement('p', 'All numbers have been used. Please restart the game.');
    }else{
        if (randomNumberList.includes(generatedNumber)) {
            return generateSecretNumber();
        }else {
        randomNumberList.push(generatedNumber);
        return generatedNumber;
}
}
}

function initialConditions() {
    asignTextElement('h1', "Guess the Secret Number!");
            // This code initializes the game by setting up the variables and starting the guessing loop
asignTextElement('p', `You have to guess the secret number between 1 and ${maxNumber}.`);
SecretNumber = generateSecretNumber(); // Generate a new random number
attempts = 1; // Reset the number of attempts
}

function rebootGame() {
    CleanBox();
    initialConditions();
    SecretNumber = generateSecretNumber(); // Generate a new random number
    document.querySelector('#reboot').setAttribute('disabled', 'true');

}

initialConditions(); 
// Display the initial message when the game starts