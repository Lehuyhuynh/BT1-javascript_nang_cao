class Note {
  constructor(title ,content){
    this.title=title
    this.content=content
  }

  addNote(product, quantity){
  }
}

class Notelist extends Note{
  constructor(title ,content){
    super(title, content)
  }

  addNoteToList(products, quantitys){

  }
}
const addNote = new  Note ('hello', 'chao')
console.log(3, addNote);
const addNoteToList =new Notelist('chao', 'hello');
console.log(3, addNoteToList);