import Node from './node.js';

export default class Cell{
    
    constructor(pos=[0,0]){
        this.root=this.build_tree(pos);
    }

    build_tree(pos){
        if(pos[0]<0 || pos[0] >22 || pos[1]<0 || pos[1]>30){                
            return null;
        } 
        let node=new Node(pos);
        node.paths=this.newPositions(node);
        return node;
    }

    newPositions(node){
        let newPos=[];
        let pos1=[];
        let pos2=[];
        let pos3=[];
        let pos4=[];

        if((node.pos[0]-1)>=0){
            pos1=[node.pos[0]-1, node.pos[1]];
        }
        if((node.pos[1]+1)<=30){                                          
            pos2=[node.pos[0], node.pos[1]+1];
        }
        if((node.pos[0]+1)<=22){                                           
            pos3=[node.pos[0]+1, node.pos[1]];
        }
        if((node.pos[1]-1)>=0){                                           
            pos4=[node.pos[0], node.pos[1]-1];
        }

        
        newPos.push(pos1,pos2,pos3,pos4);
        newPos= newPos.filter(pos=>pos.length!==0);
        return newPos;
    }
}


/* export class {Cell} */