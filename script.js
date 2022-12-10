let arrays = [{ id: 1, name: "john", age: "18", profession: "developer" }, { id: 2, name: "jack", age: "20", profession: "developer" }, { id: 3, name: "karen", age: "19", profession: "admin" }]



//converting age from string to int
arrays = arrays.map((arr) => {
    let age = arr.age;
    age = parseInt(age);
    arr.age = age;
    return arr;
});

//function to edit the object which has the name john and change his age from 18 to 19
arrays.forEach((arr) => {
    if (arr.name === 'john') {
        arr.age = 19;
    }
})

//Use the spread operator to append into the array another object of the same structure of your choice
const x = { id: 4, name: "rahul", age: 29, profession: "admin" }
arrays = [...arrays, x];


//when page loads for the first time show all data
window.onload = (event) => {
    insert(arrays);
};

let select = document.getElementById("select");

//when we chick on filter button this fn will run
function filter() {
    if (select.value === "Profession" ) {
        alert("Please select a profession before clicking on filter button");
    }
    if (select.value === "admin") {
        let container = document.getElementById("container");
        //clearing the container
        container.innerHTML = "";
        
        let result = arrays.filter((arr) => {
            return arr.profession === "admin";
        })
      
        insert(result);
       
        
    }
    if (select.value === "developer" ) {
        let container = document.getElementById("container");
        container.innerHTML = "";

        // container.childNodes.remo
        let result = arrays.filter((arr) => {
            return arr.profession === "developer";
        })

        insert(result);
    }
}

function insert(array) {
    let container = document.getElementById("container");
    container.innerHTML = "";

    // container.childNodes.remo
    let result = arrays.filter((arr) => {
        return arr.profession === "developer";
    })

    array.forEach((arr) => {
        let sub = document.createElement("div");
        sub.setAttribute("class", "subcontainer");

        //making id div
        let id = document.createElement("div");
        id.setAttribute("class", "id");
        id.innerHTML = arr.id + ".";

        //making name div
        let name = document.createElement("div");
        name.setAttribute("class", "name");
        name.innerHTML = "Name:" + arr.name;

        //making profession div
        let profession = document.createElement("div");
        profession.setAttribute("class", "profession");
        profession.innerHTML = "Profession:" + arr.profession;

        //age id div
        let age = document.createElement("div");
        age.setAttribute("class", "age");
        age.innerHTML = "Age:" + arr.age;

        //add them to sub-container
        sub.appendChild(id);
        sub.appendChild(name);
        sub.appendChild(profession);
        sub.appendChild(age);



        //add subcontainer to container
        container.appendChild(sub);
    })
}