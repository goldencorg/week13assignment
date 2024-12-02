//imported playerList variable from the main file
import {playerList} from './main.ts'
//asynce function that identifies the last object in the array and deletes it from the json file
export async function deletePlayer(){
    let idPlayerToDelete = (Object.keys(playerList).length)
    fetch("http://localhost:3000/players/" +  [idPlayerToDelete], {
        method : "DELETE"
    });
};