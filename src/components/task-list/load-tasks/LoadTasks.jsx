export const LoadTasks = () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(tasks);
    }, 1000);
});

const tasks = [
    {id: 1, name: 'Task1', important: true, active: true},
    {id: 2, name: 'Task2', important: false, active: false},
    {id: 3, name: 'Task3', important: true, active: true}
  ];