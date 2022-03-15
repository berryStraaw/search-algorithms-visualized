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


/* DEBUG */
/* function listAllEventListeners() {
    const allElements = Array.prototype.slice.call(document.querySelectorAll('*'));
    allElements.push(document);
    allElements.push(window);
  
    const types = [];
  
    for (let ev in window) {
      if (/^on/.test(ev)) types[types.length] = ev;
    }
  
    let elements = [];
    for (let i = 0; i < allElements.length; i++) {
      const currentElement = allElements[i];
      for (let j = 0; j < types.length; j++) {
        if (typeof currentElement[types[j]] === 'function') {
          elements.push({
            "node": currentElement,
            "type": types[j],
            "func": currentElement[types[j]].toString(),
          });
        }
      }
    }
  
    return elements.sort(function(a,b) {
      return a.type.localeCompare(b.type);
    });
  }
 */


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


/* add event listeners  */
function addClickEvent(){
    var t=document.querySelectorAll("td");
    t.forEach((tile)=>{
        tile.removeEventListener("click");
        tile.removeEventListener("mouseover");
    });

    t.forEach((tile)=>{
        tile.addEventListener('click', (e)=>{
            console.log(e.target);
            e.target.innerHTML=e.target.id;
        });
    });
}


function addHoldEvent(){
    var t=document.querySelectorAll("td");
    t.forEach((tile)=>{
        /* tile.removeEventListener();
 */
    });

    t.forEach((tile)=>{
        tile.addEventListener('click', (e)=>{
            console.log(e.target);
            e.target.innerHTML=e.target.id;
        });
    
        tile.addEventListener('mouseover', (e)=>{
            if(mouseDown==1){
                console.log(e.target);
            e.target.innerHTML=e.target.id;
            }
        });
    });
}

