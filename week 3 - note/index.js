class Note {
    constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
    }
    
    createElement(title){
      let newNote = document.createElement('div');
      newNote.setAttribute("class","card");
      let para = document.createElement("p");
      let text = document.createTextNode(title);
      newNote.appendChild(para);
      para.appendChild(text);
      let remove = document.createElement("a");
      remove.innerHTML="Remove";      
      remove.setAttribute("href","#");
      remove.setAttribute("class","card-remove");
      newNote.appendChild(remove);
      remove.addEventListener('click', this.remove.bind(newNote));
      
      return newNote;
    }
    
    add(){
      // HINT🤩
      let notes = document.querySelector(".notes");
      notes.appendChild(this.element);
      // this function should append the note to the screen somehow
    }
    
    saveToStorage(){
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
    
    remove(){
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      this.parentNode.removeChild(this);

      // in this function, 'this' will refer to the current note element
    } 
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
    
      // HINT🤩
      // clicking the button should work
      // pressing the enter key should also work
        this.btnAdd = document.getElementById("btnAddNote");
        this.btnAdd.addEventListener("click", this.createNote.bind(this));
        this.loadNotesFromStorage();
    }
    
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
    }
     
    createNote(e){
      let title = document.getElementById("txtAddNote").value;
      // this function should create a new note by using the Note() class
      if(title != ""){
        let note1 = new Note(title);
        // HINT🤩
        note1.add();
        // note.saveToStorage();
        this.reset();
      }
      
    }
    
    reset(){
      document.getElementById("txtAddNote").value="";
    }
    
  }
  
  let app = new App();