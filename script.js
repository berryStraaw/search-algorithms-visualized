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


