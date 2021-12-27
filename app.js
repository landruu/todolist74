//almaceno los nodos en una variable
let addButton = document.getElementById('addTaskBtn'); //#addTaskBtn
let taskInput = document.getElementById('taskInput'); //#taskInput
let list = document.querySelector("#list"); //#list
let tasks = []; //array vacio
// Event Listener

addButton.addEventListener('click', function (evento){
    evento.preventDefault();
    //console.log("click en el boton!");
    let nombreDeTarea = taskInput.value;

    let nuevaTarea = {
        nombre: nombreDeTarea,
        id: Date.now(), //123123213213123 // 01/01/70
        completada: false
    }
    tasks.push(nuevaTarea);

    mostrarTareas()


});

function mostrarTareas(){
    list.innerHTML = '';
    for(let i = 0; i < tasks.length; i++){
        let nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = `${tasks[i].nombre} <button onclick="borrarTarea(${tasks[i].id})">🗑️</button> `;
        list.append(nuevoLi);
    }

}

function borrarTarea(id){
    console.log("borrar!",id);

    //buscar en el array la tarea que tenga ese id
    // si la encuentra, la borra
    
    mostrarTareas();
}




