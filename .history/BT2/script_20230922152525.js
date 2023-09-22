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
  day() {
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
    console.log("Today is ", day);
  }
}

const Todos = new Todo(8, ["code", "gap doi tac"]);
console.log(1, Todos);

const TodoLists = new TodoList(8, ["code", "gap doi tac"], Date().getDay());
console.log(1, TodoLists);
