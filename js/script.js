const newTask = document.querySelector('#new-task');
const tasksList = document.querySelector('#tasks');
const btn = document.querySelector('#add-task');
const modal = document.querySelector('#modal');

btn.addEventListener('click', () => {
  const newTaskValue = newTask.value;

  const p = document.createElement('p');
  const li = document.createElement('li');
  li.appendChild(p);

  p.textContent = newTaskValue;

  const btnRemove = document.createElement('button');
  btnRemove.className = 'btn-remove'
  btnRemove.textContent = 'X';

  btnRemove.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(btnRemove);
  tasksList.appendChild(li);

  newTask.value = '';
});
