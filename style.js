//getting all required elements
const inputBox = document.querySelector(".inputFeild input");
const addBtn = document.querySelector(".inputFeild button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.Value; //getting user entered value
    if(userData.trim() != 0){ //if user values aren't only spaces
        addBtn.classList.add("active"); //activates the add buttom
    }
    else{
        addBtn.classList.remove("active"); //unactivates the add buttom
    }
}
//if user click on the add button
addBtn.onclick = ()=>{
    let userData = inputBox.value; //getting user entered value
    let getlocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null){
        listArr =[]; //creating blank array
    }else{
        lisArr = JSON.parse(getLocalStorage); //transforming json string into a js object
    }
    listArr.push("userData "); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object
}