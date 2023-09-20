localStorage.setItem("name", "Jayane");



// resgatar item
const name = localStorage.getItem("name");

console.log(name);
const lastName = localStorage.getItem("lastname");

console.log(lastName);
    console.log("Sem sobrenome");


   if (lastName){
    console.log("Sem sobrenome")
   } 
   
   localStorage.removeItem("a");

   localStorage.setItem("a", 1); 
   localStorage.setItem("b", 2);

   localStorage.clear();

   //sesseion storage

   sessionStorage.setItem("number", 123);

   sessionStorage.getItem("number");

   

   sessionStorage.removeItem("number");
   sessionStorage.clear()

   //salvar
    const person = {
        name: "Jayane",
        age:"16",
        job: "puta",
    };

    localStorage.setItem("person", person);

    localStorage.setItem("person", JSON.stringify(person));

    const getPerson = localStorage.getItem("person")

    console.log(getPerson);

    const personObject = JSON.parse(getPerson);
    console.log(typeof personObject);
    console.log(personObject.job);