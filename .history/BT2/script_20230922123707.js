class Todo {
  constructor(date, works) {
    this.date = date;
    this.works = works;
  }
}
class TodoList extends Todo {
  constructor(date, works, day) {
    super(date, works);
    this.day = day;
  }
  day(day) {
    return `Ihave ${this.day}`;
  }
}

const Todos = new Todo(8, ["code", "gap doi tac"]);
console.log(1, Todos);

const TodoLists = new TodoList(8, ["code", "gap doi tac"], "thu 2");
console.log(1, TodoLists);
console.log(TodoList.day("thu 2"));
