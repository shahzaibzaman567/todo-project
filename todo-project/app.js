let   user=[];
let   todo=[];
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
todos=todo
console.log(todo)
})
.catch(err=>console.log(err))

let form=document.querySelector("#form");




form.addEventListener("submit",(event)=>{
  event.preventDefault()
  let uemail={
email:document.querySelector("#email").value
}
let filteruser=user.find(u=>u.email===uemail.email)

if(filteruser){useremail.push(filteruser.email , filteruser.name, filteruser.id ) 
localStorage.setItem("useremail",JSON.stringify(useremail))

window.location.href="home.html"
}
if(!filteruser){
alert("bahi jan nahi mila ") 
}
})


