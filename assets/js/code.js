
var bodypagina = document.querySelector("body")
var headerpagina= document.createElement("header")
headerpagina.setAttribute("height", "100px")
bodypagina.appendChild(headerpagina)
// bodypagina.style.height="1000px"


var divhead = document.createElement("div")
divhead.className = "divhead"
headerpagina.appendChild(divhead)

var navba1 = document.createElement("nav")
navba1.classList.add("sticky-top", "navbar","navbar-expand-lg","d-flex","justify-content-between","text-center")
navba1.style.padding="1.5rem 3rem 0 3rem"
divhead.appendChild(navba1) 

var divcoontenedor = document.createElement("div")
divcoontenedor.className="divcoontenedor  d-flex align-items-center"
navba1.appendChild(divcoontenedor)


var aHijoDiv = document.createElement("a")
aHijoDiv.className = "navbar-brand icon"
aHijoDiv.textContent = " "
divcoontenedor.appendChild(aHijoDiv)


// var spanlinea = document.createElement("span")
// spanlinea.className="bg-light"
// spanlinea.innerHTML="|"
// aHijoDiv.appendChild(spanlinea)

var divContainer = document.createElement("div")
divContainer.className="div1 "
divContainer.classList.add( "d-flex","text-light","px-2","my-2")

divcoontenedor.appendChild(divContainer)


var ulA = document.createElement("ul")
ulA.className="d-flex px-0 m-0 "
divContainer.appendChild(ulA)

var liul=document.createElement("li")
liul.className="text-center list-type-none liul1  fonts"
liul.style="font-size: 13px; "
liul.textContent="HALO:"
liul.style.listStyle="none"
ulA.appendChild(liul)

var liul2=document.createElement("li")
liul2.className="text-center  liul2  text-white fonts"
liul2.style="font-weight:600; font-size: 14px; "
liul2.style.listStyle="none "
liul2.textContent="VER AHORA"
ulA.appendChild(liul2)

// var uldivhead = document.createElement("ul")
// uldivhead.className=" uldivhead px-0 m-0" 
// //uldivhead.style="    transform: translateX(916px);"
// divContainer.appendChild(uldivhead)

var navbar2 = document.createElement("div")
navbar2.classList.add( "d-flex","text-light","px-2","my-2")
navba1.appendChild(navbar2)

var aHijoUl = document.createElement("a")
aHijoUl.className =" botoninicia text-white fonts"
aHijoUl.style="font-size: 14px; "
aHijoUl.style.listStyle="none "
aHijoUl.setAttribute("href", "#")
aHijoUl.innerText="INICIAR SESIÓN"
navbar2.appendChild(aHijoUl)

// var divsection = document.createElement("div")
// divsection.className ="contenedor_imagen"
// navbar2.appendChild(divsection)
window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        divContainer.classList.add("d-none")
    }else if(window.scrollY === 0){
        divContainer.classList.remove("d-none")
    }
    
})


var sectionbody =document.createElement("section")
sectionbody.className="d-grid text-white d-flex"
sectionbody.style="grid-gap: 24px 10px; grid-template-columns: 60% 40%;"
divhead.appendChild(sectionbody)

var divsection2 = document.createElement("div")
divsection2.className="m-5 "
divsection2.style="width: 800px;  height: 481px;"   
sectionbody.appendChild(divsection2)

var hdiv =document.createElement("h1")
hdiv.style="font-weight: 900; font-size: 55px;  line-height: .99;"
hdiv.style.fontFamily="assets/font/Demo_fonts/letra_ancha"
hdiv.innerHTML="HISTORIAS ÚNICAS. <br> ESTRELLAS ICÓNICAS. <br> UNA MONTAÑA DE<br> ENTRETENIMIENTO."
divsection2.appendChild(hdiv)

var strongdiv = document.createElement("strong")
strongdiv.style="font-size: 20px; line-height: 1.375; font-weight: 400;"
strongdiv.style.fontFamily="sans-serif"
strongdiv.innerHTML="Suscríbete por $13,900.00 COP al Mes. <br>Cancela en cualquier momento. <br>Únete ahora y obtén 7 días gratis."
divsection2.appendChild(strongdiv)

var divsection3 = document.createElement("div")
divsection3.className="vidBotones d-grid"
divsection2.appendChild(divsection3)

var boton1 = document.createElement("button")
boton1.className="placeholder bg-primary text-white"
boton1.innerText="SUSCRÍBETE A PARAMOUNT+"
divsection3.appendChild(boton1)

var boton2 = document.createElement("button")
boton2.className ="btn btn-light placeholder text-white"
boton2.innerText = "YA TENGO PARAMOUNT+"
divsection3.appendChild(boton2)

var boton3 = document.createElement("button")
boton3.className ="btn btn-outline-white btn-light placeholder text-white"
boton3.innerText = "YA TENGO PARAMOUNT+"
divsection3.appendChild(boton3)












