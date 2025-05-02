import { format } from "date-fns";

export default class ToDoCard {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  // Getters
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getDueDate() {
    return this.dueDate;
  }
  getDueDateReadable() {
    if (!this.dueDate) {
      return "";
    } else {
      return format(this.dueDate, "dd-MMM-yyyy");
    }
  }

  getPriority() {
    return this.priority;
  }

  getCompleted() {
    return this.completed;
  }

  getCompletedReadable() {
    if (this.completed === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  // Setters
  setCompleted() {
    if (this.completed === false) {
      this.completed = true;
    } else {
      this.completed = false;
    }
  }

  setDueDate(newDate) {
    this.dueDate = newDate;
  }
}
