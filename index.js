class Node{
    constructor (value){
        this.value = value;
        this.nextNode = null;
    }
}

export class linkedList{
    constructor(){
        this.head= null;
    }

    preppend(value){
        const newNode = new Node(value)
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    append(value){
        const newNode = new Node(value);

        if (this.head == null){
            this.head = newNode
            return;
        }
        let current = this.head
        while(current.nextNode != null){
            current = current.nextNode
        }
        current.nextNode = newNode;
    }

    toString(){
        if (this.head == null){
            console.log("list is empty")
            return
        }

        let current = this.head;
        let result = "";

        while(current!= null){
            result+= current.value +"->";
            current = current.nextNode
        }
        console.log(result+"null");
    }
}