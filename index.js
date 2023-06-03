function addTask(){
    const input=document.getElementById('texto');
    const text=input.value;
    if(text.length){
        const list = document.getElementById('izquierda');
        const newitem=document.createElement('div');
        newitem.setAttribute('id','elemento');  
        const checkbox=document.createElement('input');
        checkbox.setAttribute('onchange','completed(event)');
        checkbox.type='checkbox';
        const p=document.createElement('p');
        p.textContent=text;
        p.setAttribute('contenteditable','false');
        
        const buttons=document.createElement('div');
        buttons.setAttribute('class','acciones');
        const editButton=document.createElement('button');
        editButton.textContent='Editar';
        editButton.setAttribute('onclick','editTask(event)');
        const deleteButton=document.createElement('button');
        deleteButton.setAttribute('onclick','deleteTask(event)');
        deleteButton.textContent='Eliminar';

        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);

        newitem.appendChild(checkbox);
        newitem.appendChild(p);
        newitem.appendChild(buttons);
        
        list.appendChild(newitem);
        input.value='';
    }
}

function completed(event){
    const value=event.target.checked;
    const list = document.getElementById('izquierda');
    const item=event.target.parentNode;
    list.removeChild(item);

    const completedList=document.getElementById('completado');
    const completedItem=document.createElement('div');

    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.checked=true;
    checkbox.disabled=true;

    const p=document.createElement('p');
    const text=item.querySelector('p').textContent;
    p.textContent=text;

    completedItem.appendChild(checkbox);
    completedItem.appendChild(p);

    completedList.appendChild(completedItem);

}
function deleteTask(event){
    const deletedItem=event.target.parentNode.parentNode;
    const list=document.getElementById('izquierda');
    list.removeChild(deletedItem);
}
function clearlist(){
    const list=document.getElementById('completado');
    list.innerHTML='';
}
function editTask(event) {
    const editButton = event.target;
    const taskItem = editButton.parentNode.parentNode;
    const paragraph = taskItem.querySelector('p');
    
    if (paragraph.getAttribute('contenteditable') === 'false') {
      // Habilitar la edición del texto
      paragraph.setAttribute('contenteditable', 'true');
      paragraph.focus(); // Enfocar el elemento para facilitar la edición
      editButton.textContent = 'Guardar'; // Cambiar texto del botón a "Guardar"
    } else {
      // Deshabilitar la edición del texto
      paragraph.setAttribute('contenteditable', 'false');
      editButton.textContent = 'Editar'; // Cambiar texto del botón a "Editar"
    }
  }
  