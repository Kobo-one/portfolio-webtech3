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
      let notes = document.querySelector(".notes");
      notes.appendChild(this.element);
      // this function should append the note to the screen somehow
    }
    
    saveToStorage(){
      if(JSON.parse(localStorage.getItem("titles"))){
        var storedtitles = JSON.parse(localStorage.getItem("titles"));
        storedtitles.push(this.title);
      }else{
        var storedtitles = [this.title];
        storedtitles.push(this.title);
        
      }
      
      
      localStorage.setItem("titles", JSON.stringify(storedtitles));
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
    
    remove(){
      // the meaning of 'this' was set by bind() in the createElement function
      this.parentNode.removeChild(this);

      // in this function, 'this' will refer to the current note element
    } 
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
    
      // clicking the button should work
      // pressing the enter key should also work
        this.btnAdd = document.getElementById("btnAddNote");
        this.btnAdd.addEventListener("click", this.createNote.bind(this));
        let input = document.getElementById("txtAddNote");
        input.addEventListener("keyup", function (event) {
          event.preventDefault();
          if (event.keyCode === 13) {
            document.getElementById("btnAddNote").click();
          }
        });

        this.loadNotesFromStorage();
    }
    
    loadNotesFromStorage() {
      let storedtitles = JSON.parse(localStorage.getItem("titles"));

      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
    }
     
    createNote(e){
      let title = document.getElementById("txtAddNote").value;
      // this function should create a new note by using the Note() class
      if(title != ""){
        let note1 = new Note(title);
        note1.add();
        note1.saveToStorage();
        this.reset();
      }
      
    }
    
    reset(){
      document.getElementById("txtAddNote").value="";
    }
    
  }
  
  let app = new App();