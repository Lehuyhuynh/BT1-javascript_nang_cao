class Note {
  constructor(title ,content){
    this.title=title
    this.content=content
  }

  addNote(title, contents){

  }
}

class Notelist extends Note{
  constructor(title ,content){
    super(title, content)
  }

  addNoteToList(products, quantitys){

  }
}
const Note = new  Note ('hello', 'chao')
console.log(3, addNote);
const NoteList =new Notelist('chao', 'hello');
console.log(3, addNoteToList);