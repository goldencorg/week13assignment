//async function that takes input of all the input areas in html to create new player with the related properties and IDs; input areas will clear once posted
let lastCreatedItem = null;
export async function createPlayer(){
    //grabbing inputs from html input elements and finding its value to then transfer into new object, marking which can contain only strings or inlude numbers as well
    let playerName = document.getElementById('player-name') as HTMLInputElement;
    let playerNameValue: string = playerName.value;
    let playerStar = document.getElementById('player-star') as HTMLInputElement;
    let playerStarValue: string = playerStar.value;
    let playerPosition = document.getElementById('player-position') as HTMLInputElement;
    let playerPositionValue: string = playerPosition.value;
    let playerHome = document.getElementById('player-home') as HTMLInputElement;
    let playerHomeValue: string = playerHome.value;
    let playerStyle = document.getElementById('player-style') as HTMLInputElement;
    let playerStyleValue: string = playerStyle.value;
    let lcAnswer: string | number = playerStyleValue.toLowerCase();
    if (lcAnswer === 'offense'){
        lcAnswer = 1;
    } else if (lcAnswer === 'defense'){
        lcAnswer = 2;
    } else if (lcAnswer === 'special teams'){
        lcAnswer = 3;
    } else {
        lcAnswer = '';
    };

    const newPlayer = {
        name : playerNameValue, 
        star : playerStarValue,
        pos : playerPositionValue,
        home : playerHomeValue,
        footballId : lcAnswer
    };

    const response = await fetch("http://localhost:3000/players", {
        method : "POST",
        headers : { "Content-Type" : "application/json" },
        body: JSON.stringify(newPlayer)
    });
    //finding inputs again and clearing the text once new player has been created
    const newlyCreatedItem = await response.json();
    lastCreatedItem = newlyCreatedItem
    console.log(lastCreatedItem);
    document.getElementById('player-name');
    playerName.value = '';
    document.getElementById('player-star');
    playerStar.value = '';
    document.getElementById('player-position');
    playerPosition.value = '';
    document.getElementById('player-home');
    playerHome.value = '';
    document.getElementById('player-style');
    playerStyle.value = '';
};