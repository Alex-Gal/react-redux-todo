export const LoadTasks = () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(tasks);
    }, 1000);
});

const tasks = [
    {id: 1, name: 'Call to Andrey', important: true, active: true},
    {id: 2, name: 'Cook dinner', important: false, active: false},
    {id: 3, name: 'Play with daughter', important: true, active: true}
  ];