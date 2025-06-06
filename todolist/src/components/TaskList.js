class TaskList {
  nextId = 1;
  tasks = [];

  addTask(text) {
    const value = text.trim();
    if (value) {
      const newTask = {
        id: this.nextId++,
        text: value,
        isCompleted: false,
      };
      this.tasks.push(newTask);
    }
  }

  toggleTask(task) {
    task.isCompleted = !task.isCompleted;
  }

  deleteTask(task) {
    if (task) {
      const index = this.tasks.findIndex((x) => x.id == task.id);
      this.tasks.splice(index, 1);
    }
  }
}

export default TaskList;
