

/*     
    Potential alhorigthms:

    Dijkstra's Algorithm 
    A* Search (weighted):
    Greedy Best-first Search (weighted)
    Swarm Algorithm (weighted)
    Convergent Swarm Algorithm (weighted)
    Bidirectional Swarm Algorithm (weighted)
    Breath-first Search (unweighted)
    Depth-first Search (unweighted)

*/


/* tracking variables */
let startChecker=0;
let endChecker=0;
let speed=50;
let currentAlgo="breath";




/* 
Map size setter
*/

function setMap(size){
    const table=document.querySelector("table");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    for(let i=0; i<22; i++){
        let row=document.createElement("tr");
        for(let k=0; k<size; k++){
            let col=document.createElement("td");
            let id=[i,k];
            col.id=id;
            col.classList.add("empty");
            row.appendChild(col);
        }
    table.appendChild(row);
    }
    startChecker=0;
    endChecker=0;
}




/* initial map setup on page load */
setMap(35);

/* 
Map slider functionality
*/
const slider= document.getElementById("mapSize");
const output= document.getElementById("mapSizeOutput");

slider.oninput=function(){
    output.innerHTML=this.value;
    setMap(this.value);
}

/* Speed slider functionality */
const speedSlider= document.getElementById("speedSlider");
const speedOutput= document.getElementById("speedOutput");

speedSlider.oninput=function(){
    speedOutput.innerHTML=this.value;
    speed=this.value;
}


/* 
Adding events interface
 */
function addStart(id){
    const tile= document.getElementById(id);
    tile.classList.toggle("start")
}
const addPanel=document.querySelector(".addElements");
const startBtn=document.getElementById("start");
const endBtn=document.getElementById("end");
const wallBtn=document.getElementById("wall");
const tiles=document.querySelector("td")

addPanel.addEventListener('change',function(e){
    if(startBtn.checked) {
        addClickEvent();
      }
    if(end.checked) {
        addClickEvent();
    }
    if(wall.checked) {
        addHoldEvent();
    }
});



/* 
mouse down detecting script
*/
var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}


/* Event listener functions (defined for easy removal) */
const clickEvent= function(e){
    if(startBtn.checked) {
        if(startChecker==0){
         e.target.classList.toggle("start");   
         startChecker=1;
        }
        else if(e.target.classList.contains("start")){
            e.target.classList.toggle("start");   
            startChecker=0;
        }
        else{
            console.log("starting point has already been selected, remove the previous point to palce a new one")
        }
      }
    if(end.checked) {
        if(endChecker==0){
           e.target.classList.toggle("end"); 
           endChecker=1;
        }
        else if(e.target.classList.contains("end")){
            e.target.classList.toggle("end"); 
            endChecker=0;
        }
        else{
            console.log("End point has already been selected, remove the previous point to palce a new one")
        }
    }
    if(wall.checked) {
        e.target.classList.toggle("wall");
    }
};

const holdEvent= function(e){
    if(mouseDown==1){
        if(wall.checked) {
            e.target.classList.toggle("wall");
        }
    }
};

/* add event listeners  */
function addClickEvent(){
    var t=document.querySelectorAll("td");
    t.forEach((tile)=>{
        tile.removeEventListener("click",clickEvent);
        tile.removeEventListener("mouseover",holdEvent);
    });

    t.forEach((tile)=>{
        tile.addEventListener('click', clickEvent);
    });
}


function addHoldEvent(){
    var t=document.querySelectorAll("td");
    t.forEach((tile)=>{
        tile.removeEventListener("click",clickEvent);
        tile.removeEventListener("mouseover",holdEvent);
    });

    t.forEach((tile)=>{
        tile.addEventListener('click', clickEvent);
    
        tile.addEventListener('mouseover', holdEvent);
    });
}



import Cell from './algorithms/breath.js';

/* Runing script function */
document.getElementById ("runBtn").addEventListener ("click", runSearch, false);

function runSearch(){
    console.log(`running with ${currentAlgo} algorithm with speed ${speed}`);
    const startId=document.getElementsByClassName("start");
    let id=startId[0].id.split(",");
    id=[parseInt(id[0]),parseInt(id[1])];
    let c1=new Cell(id);
    console.log(c1);
}




