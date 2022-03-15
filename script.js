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
            id=[i,k]
            col.id=id;
            col.classList.add("empty")
            row.appendChild(col);
        }
    table.appendChild(row);
    }
}


/* initial map setup on page load */
setMap(50);

/* 
Map slider functionality
*/

const slider= document.getElementById("mapSize");
const output= document.getElementById("mapSizeOutput");

slider.oninput=function(){
    output.innerHTML=this.value;
    setMap(this.value);
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
    console.log(mouseDown);
  ++mouseDown;
}
document.body.onmouseup = function() {
    console.log(mouseDown);
  --mouseDown;
}


/* Event listener functions (defined for easy removal) */
const clickEvent= function(e){
    console.log(e.target);
    e.target.innerHTML=e.target.id;
};

const holdEvent= function(e){
    if(mouseDown==1){
        console.log(e.target);
    e.target.innerHTML=e.target.id;
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

