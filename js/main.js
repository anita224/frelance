const btnDarkMode=document.querySelector(".dark-mode-btn");

if(localStorage.getItem('darkMode')==='dark'){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark")
}
//else if(localStorage.getItem("darkMode")==="light"){

//    btnDarkMode.classList.add("dark-mode-btn--active");

//    document.body.classList.add("dark");}



//проверка темной темы на уровне системных настроек
if(window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark")
}

//else if(localStorage.getItem("darkMode")==="light")


//включение ночного режима по кнопке
btnDarkMode.onclick = function(){
    btnDarkMode.classList.toggle("dark-mode-btn--active")
const isDark=   document.body.classList.toggle('dark');

if(isDark){
    localStorage.setItem('darkMode','dark')
}
else{
    localStorage.setItem('darkMode','light')
}
 
}






