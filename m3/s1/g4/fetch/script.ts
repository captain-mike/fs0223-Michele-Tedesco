
class Todo{
    userId:number;
    id:number;
    title:string;
    completed:boolean;
    constructor(userId:number, id:number, title:string, completed:boolean){
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

let x = fetch('https://jsonplaceholder.typicode.com/todos/')
.then((res:Response) => res.json())
.then((res:Promise<Todo>) => {

    console.log(res[0].title);
    

})

async  function Call(){
    let dati:Promise<Todo> = await fetch('https://jsonplaceholder.typicode.com/todos/').then((res:Response) => res.json())

    console.log(dati);
    
}

Call();