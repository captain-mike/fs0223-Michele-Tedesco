class TodoList{

    mainContainer!:HTMLElement|null;
    button!:HTMLButtonElement|null;
    input!:HTMLInputElement|null;
    target!:HTMLElement|null;

    constructor(selector:string){
        this.mainContainer = document.querySelector(selector);
        this.creaHTMLBase();
    }

    protected creaHTMLBase(){

        let row = document.createElement('div');
        row.classList.add('row')


        let inputCol = document.createElement('div');
        inputCol.classList.add('col-8');
        
        let buttonCol = document.createElement('div');
        buttonCol.classList.add('col');

        this.input = document.createElement('input');
        this.input.classList.add('form-control');
        this.input.type = 'text';
        this.input.placeholder = 'Scrivi qualcosa';


        this.button = document.createElement('button');
        this.button.textContent = 'Inserisci';
        this.button.classList.add('btn','btn-primary');


        this.target = document.createElement('div');

        inputCol.append(this.input);
        buttonCol.append(this.button);
        this.mainContainer?.append(inputCol, buttonCol);

    }

}

let todo = new TodoList('#todo1');
todo.creaHTMLBase()
