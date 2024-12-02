//imported css and functions from other files
import "bootstrap/dist/css/bootstrap.min.css";
import {createPlayer} from './create';
import {deletePlayer} from "./delete";

//create a small delay for bootstrap to load in before alert
setTimeout(() => {
  alert(`
    Make sure to use fetch before making any changes!
    
    Also remember to use fetch after adding or deleting!`)
}, 500);

//object type for objects (players) in playerList array
type Player = {
  id : number
  name : string
  star : string
  pos : string
  home : string
  footballId : number
};

//array where all the players will be added to once they're fetched
export let playerList : Player[] = []
//grabbing div where players will be placed in, marking it as a html div type
const playersContainer = document.getElementById("players-container") as HTMLDivElement;
//async function where players in json file are fetched and uses literal templates/interpolation to list them
async function fetchPlayers() {
    const response = await fetch("http://localhost:3000/players");
    playerList = await response.json();
    console.log(playerList);
    playersContainer.innerHTML = playerList.map(
        player => `<div class="bg-light rounded mt-5">
            <h2>${player.name}</h2>
            <h3>${player.star} ${player.pos}</h3>
            <h4>${player.home}</h4>
        </div>`
    ).join("");
}; 
//grabbing the buttons, marking as html button type, and then adding event listeners. local and imported functions will run
let fetchButton = document.getElementById('fetch-button') as HTMLButtonElement;
fetchButton.addEventListener('click', fetchPlayers);
let createButton = document.getElementById('create-button') as HTMLButtonElement;
createButton.addEventListener('click', createPlayer);
let deleteButton = document.getElementById('delete-button') as HTMLButtonElement;
deleteButton.addEventListener('click', deletePlayer);