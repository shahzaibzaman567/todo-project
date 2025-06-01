let form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault()
  let uemail = {
    email: document.querySelector("#email").value
  }
  let filteruser = user.find(u => u.email === uemail.email)

  if (filteruser) {
    useremail.push({email:filteruser.email,name: filteruser.name,id: filteruser.id})
    localStorage.setItem("useremail", JSON.stringify(useremail))

    window.location.href = "home.html"
  }
  if (!filteruser) {
    alert("bahi jan nahi mila ")
  }
})