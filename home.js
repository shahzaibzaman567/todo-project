let form = document.querySelector("#form");
let id = document.querySelector("#id");
let div = document.querySelector(".container");
let uemail = JSON.parse(localStorage.getItem("useremail"));
console.log(uemail)
// console.log(allid)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let userid = id.value.trim();
    let  filtertodo = usertodo.filter((tod) => tod.id === Number(userid));
    let singleid = usertodo.find(t => t.id === Number(userid));
    let singleId = uemail.find(t => t.id === Number(userid));
    //  console.log(singleid.id)
    //  console.log(filtertodo[0]?.userId);


     let i=1;

        if (singleid.userId === Number(userid) && singleId.id ===singleid.userId ) {

            let todos = filtertodo.map(t =>{ 
                return `<p> ${[i++]}   ,      ${t.title}  ,    ( ${t.completed} )</P>`
            }).join("   ");

           div.innerHTML=`${todos}`;

        }
        else {
            alert("Please enter your vailed ID");
        };
});