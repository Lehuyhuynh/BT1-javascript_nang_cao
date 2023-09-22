class Note {
  constructor(title ,content){
    this.title=title
    this.content=content
  }

  addNote(addtitle, addcontent){
    if (addtitle === this.title && addcontent === this.content)
      return " phan tren da co mong nhap lai phan ghi chep "
    this.title = addtitle
    this.content = addcontent

    console.log(this.addtitle, this.addcontent);
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
note.addNote('moi', 'nguoi')
console.log('nghi chep them ', note);

const NoteList =new Notelist('chao', 'hello');
console.log(3, NoteList);