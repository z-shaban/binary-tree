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
        return result;
    }

    size(){
        if (this.head== null){
            console.log("size is 0")
            return 0;
        }
        let current = this.head;
        let size = 0
        while(current != null){
            size++
            current = current.nextNode;
        }
        console.log("size is "+ size)
        return size;
    }

    first(){
        if (this.head== null){
            console.log("first node is empty")
        }else{
            console.log("the first node is "+ this.head.value)
        }
    }

    tail(){
        let current = this.head
        while(current.nextNode != null){
            current = current.nextNode
        }
        console.log("the last node is "+ current.value)
    }

    at(index){
        let position = 0
        let current = this.head
        let listSize = this.size() - 1


        if (index>listSize || index < 0){
            console.log("index not available")
            return
        }

        while(position!= index){
            position++;
            current = current.nextNode
        }
        console.log(`the value at ${index} is ${current.value} `)
    }

    pop(){
        if (this.head == null) {
            console.log("List is empty");
            return;
        }
        if (this.head.nextNode == null) {
            this.head = null;
            return;
        }

        let current = this.head;
        while(current.nextNode && current.nextNode.nextNode!= null){
            current = current.nextNode
        }
        current.nextNode = null
        
        this.toString();
    }

    contains(value){
        let current = this.head

        while(current != null){
           if (current.value === value){
            console.log("true")
            return true;
           }
           current = current.nextNode;
    } console.log("false")
    return false;
    }

    find(value){
        let index = 0;
        let current = this.head;

        while(current != null){
            if (current.value === value){
                console.log(`${value} is at index ${index}`)
                return;
            }else{
                current= current.nextNode
                index++
            }
        } console.log("not in the list")
        return null;
    }
}