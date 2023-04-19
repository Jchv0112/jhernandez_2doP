let tareas = ["Jugar xbox", "realizar tarea de programación", "nadar"];
tareas.push ("Ir al cine", "Estudiar para Ing. de SW II");
console.log("Mi lista de actividades");
console.log("************");
    for (let lista of tareas) {
        console.log((tareas.indexOf(lista)+1)+ ".-" +lista);
    }