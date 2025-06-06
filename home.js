let form = document.querySelector("#form");
let id = document.querySelector("#id");
let div = document.querySelector(".container");
let uemail = JSON.parse(localStorage.getItem("useremail"));
let username = document.querySelector(".username");
let Logout = document.querySelector("#Logout");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let userid = Number(id.value.trim());
    //step 1one check usertodo userid
    let filtertodo = usertodo.filter((tod) => tod.userId === userid);
    //tep 2two   in obj  
    let userExists = uemail.find(u => u.id === userid);
    // let singleId = uemail.find(t => t.id === Number(userid));

    let i = 1;

    if (userExists && filtertodo) {

        let todos = filtertodo.map(t => {
            return `<p> ${[i++]}   ,      ${t.title}  ,    ( ${t.completed} )</P>`
        }).join("   ");
        div.innerHTML = `${todos}`;
       username.innerHTML = `UserName:  ${userExists.name}`;

    }
    else {
        alert("Please enter your vailed ID");
    };
    Logout.addEventListener("click", () => {
        // find index of user who logged in
        let index = uemail.findIndex(u => u.id === userid);
    
        if (index !== -1) {
            // remove the user from array
            uemail.splice(index, 1);
    
            // update localStorage
            localStorage.setItem("useremail", JSON.stringify(uemail));
    
            window.location.href = "index.html";
        } else {
            alert("کچھ مسئلہ ہے یار!");
        }
    });
    });
    

//Logputing of user