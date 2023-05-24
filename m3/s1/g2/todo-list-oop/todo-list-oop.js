"use strict";
class TodoList {
    constructor(selector) {
        this.mainContainer = document.querySelector(selector);
        this.creaHTMLBase();
    }
    creaHTMLBase() {
        var _a;
        let row = document.createElement('div');
        row.classList.add('row');
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
        this.button.classList.add('btn', 'btn-primary');
        this.target = document.createElement('div');
        inputCol.append(this.input);
        buttonCol.append(this.button);
        (_a = this.mainContainer) === null || _a === void 0 ? void 0 : _a.append(inputCol, buttonCol);
    }
}
let todo = new TodoList('#todo1');
todo.creaHTMLBase();
//# sourceMappingURL=todo-list-oop.js.map