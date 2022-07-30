const image = document.querySelector("#image")
 
  image.src ="img/bg2.jpg"
  
  
  const promo = document.querySelectorAll(".main_promo ")
  promo.forEach(function(item){
    item.remove()
  })

const title = document.querySelector("title")

title.textContent = image.textContent  


 const favoriteFilms = document.querySelectorAll(".favorite_films")

 favoriteFilms.forEach(function(item){
  item.style.cssText =`
  font-size:20px;
   font-weigth:bold;
   color:#000000;
   text-decoration: underline;
    color: #000000;
    text-transform: lowercase;

     
    
  `
 




 })
 const input = document.querySelector("#input") 
  
 const btn = document.querySelector("#btn")
  btn.onclick = function(){
    btn.style.background = "red"
    if(input.value.length < 10){
       input.style.color = "red"
    } else if(input.value.length > 10 && input.value.length < 20){
      input.style.color ="green"
    }else{
      input.style.color = "blue"
    }

    
  btn.addEventListener("click",function(){
    btn.style.background = "red"
    if(input.value.length < 10){
       input.style.color = "red"
    } else if(input.value.length > 10 && input.value.length < 20){
      input.style.color ="green"
    }else{
      input.style.color = "blue"
    }})  


   
    
    
  }
  input.onmousemove = function(){
    input.style.background = "#FFD700"
  }

  input.onmouseleave = function(){
    input.style.background = "white"
  }
  btn.onmouseleave = function(){
    btn.style.background = "green"
  }
 