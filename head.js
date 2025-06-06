let   usertodo=[];
let   useremail=JSON.parse(localStorage.getItem("useremail")) ||  [] 

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then(  (data)=>{   
user=data;
console.log(user)
})
.catch((err)=>console.log(err));

fetch("https://jsonplaceholder.typicode.com/todos")
.then((res)=>res.json())
.then((todo)=>{
usertodo=todo;
console.log(usertodo);
})
.catch(err=>console.log(err));