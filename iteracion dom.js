console.log("Archivo iteracion con el dom funcionando OK");

// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let createUl = document.createElement("ul");
document.body.appendChild(createUl);

countries.forEach (country => {
    let createCountry = document.createElement("li");
    createCountry.textContent = country;
    createUl.appendChild(createCountry)
});


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let elementRemove = document.querySelector(".fn-remove-me");
elementRemove.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div = document.querySelector('[data-function="printHere"]');

let createUlDiv = document.createElement("ul");
div.appendChild(createUlDiv);

cars.forEach (car => {
    let createdCar = document.createElement("li");
    createdCar.textContent = car;
    createUlDiv.appendChild(createdCar);
});

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.


const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries2.forEach(country => {
    let div = document.createElement("div");
    let title = document.createElement("h4");
    title.textContent = country.title;
    let img = document.createElement("img");
    img.src = country.imgUrl;
    div.appendChild(title);
    div.appendChild(img);
    document.body.appendChild(div);
})

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

let button = document.createElement("button");
button.innerText = "Borrar ultimo elemento de la lista"
document.body.appendChild(button);

const click = () => {
    let list = document.querySelectorAll("div");
    if (list.length>0) {
        list[list.length-1].remove();
    }
}
button.addEventListener("click", click);


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

countries2.forEach(country => {
    let div = document.createElement("div");
    let title = document.createElement("h4");
    title.textContent = country.title;
    let img = document.createElement("img");
    img.src = country.imgUrl;
    div.appendChild(title);
    div.appendChild(img);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";

    div.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => div.remove());

    document.body.appendChild(div);
})

