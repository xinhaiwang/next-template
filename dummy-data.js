let d1 = new Date();
let d2 = new Date();
d2.setDate(d2.getDate() + 5);
let d3 = new Date();
d3.setDate(d3.getDate() + 8);
let d4 = new Date();
d4.setDate(d4.getDate() + 20);

const employees = [
  {
    name: "张三"
  },
  {
    name: "李四"
  },
  {
    name: "王五"
  }
];

const tasks = [
  {
    id: "ProjectSample",
    name: "某项目",
    start: new Date(currentDate.getFullYear(),currentDate.getMonth(),1),
    end: new Date(currentDate.getFullYear(),currentDate.getMonth(), 50),
    progress: 25,
    type: "project",
    hideChildren: false,
    displayOrder: 1,
  },
  {
    id: "Task 1",
    name: "调研",
    start: d1,
    end: d2,
    progress: 10,
    dependencies: "",
    assignees: [employees[0]]
  },
  {
    id: "Task 2",
    name: "团队讨论",
    start: d2,
    end: d4,
    progress: null,
    dependencies: "Task 1",
    assignees: [employees[1]]
  },
  {
    id: "Task 3",
    name: "开发",
    start: d3,
    end: d4,
    progress: 0,
    dependencies: "Task 2, Task 1",
    assignees: [employees[2]]
  },
  {
    id: "Task 4",
    name: "评估",
    start: new Date(),
    end: d4,
    progress: 0,
    dependencies: "Task 2, Task 1",
    assignees: [employees[2]]
  }
];

export default {
  employees,
  tasks
};
