class Note {
  constructor(title ,content){
    this.title=title
    this.content=content
  }

  addNote(addtitle, addcontent){
    if (addtitle === this.title && addcontents === this.content)
      return " phan tren da co mong nhap lai phan ghi chep "
    this.title = this.addtitle
    this.content =this.addcontent

    console.log(this.addtitle, this.a);
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
console.log(4, note);

const NoteList =new Notelist('chao', 'hello');
console.log(3, NoteList);