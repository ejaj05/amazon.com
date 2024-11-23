let btnOne = document.querySelector(".btn-one");
let btnTwo = document.querySelector(".btn-two");
let sideBar = document.querySelector(".side-bar");

// function btnClick1(){
//     sideBar.style.marginLeft = "400px";
// }
// function btnClick2(){
//     sideBar.style.marginLeft = "0";
// }

// btnTwo.addEventListener("click",btnClick2);


btnOne.addEventListener("click",()=>{
    sideBar.style.marginLeft = "400px";
});
btnTwo.addEventListener("click",()=>{
    sideBar.style.marginLeft = "0";
})
