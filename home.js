

let form = document.querySelector("#form");
let id = document.querySelector("#id");
let userid = id.value.trim();
let div = document.querySelector("#container");
let uemail = JSON.parse(localStorage.getItem("useremail"));
let allid=uemail.find((id)=>id.id===1);

// console.log(allid)


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    setTimeout(()=>{
        filtertodo = usertodo.find((tod) => tod.userId === userid);
        console.log(filtertodo.userId);
    },2000);
setTimeout(()=>{
 if (userid === filtertodo.userId) {
        
        let todos = filtertodo.map(t => t.id, t.title, t.conmpleted);
        console.log(todos);

        div.innerHTML = `(${todos}`;

};
if (userid !== filtertodo) {
    alert("Please enter your vailed ID");
};
},3000)
});


