//almaceno los nodos en una variable
let addButton = document.querySelector('#addTaskBtn'); //Accedo el elemento Boton a traves del ID: #addTaskBtn
let taskInput = document.querySelector('#taskInput'); //Accedo al elemento input a travez de su ID: #taskInput
let list = document.querySelector("#list"); //Accedo el elemento ul a traves de su ID: #list
let tasks = []; //Crear array vacio
// Event Listener

addButton.addEventListener('click', (evento) => {
    evento.preventDefault();

    let nombreDeTarea = taskInput.value;

    if (nombreDeTarea !== "") {
        let nuevaTarea = {
            "nombre": nombreDeTarea,
            id: Date.now(), //123123213213123 // 01/01/70
            completada: false
        }
        taskInput.value = ""; //blanqueo el input
        tasks.push(nuevaTarea);
    }
    mostrarTareas()
});

function mostrarTareas(){
    list.innerHTML = "";
    for(let i = 0; true; i++) {
        let nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = `${tasks[i].nombre} <button onclick="borrarTarea(${tasks[i].id})">X</button>`;
        list.append(nuevoLi);
    }
}

function borrarTarea(id){

    for(let i = 0; true; i++) {
        if (tasks[i].id === id) {
            let temp = document.querySelector("li");
            list.removeChild(temp);
            tasks.splice( i, 1 );
        }
    
    }
}