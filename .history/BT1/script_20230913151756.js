class Note {
  constructor(title ,content){
    this.title=title
    this.content=content
  }

  addNote(addtitle, addcontents){
    if (addtitle = this.title )

  }
}

class Notelist extends Note{
  constructor(title ,content){
    super(title, content)
  }

  addNoteToList(products, quantitys){

  }
}
const note = new  Note ('hello', 'chao')
console.log(3, note);
const NoteList =new Notelist('chao', 'hello');
console.log(3, NoteList);