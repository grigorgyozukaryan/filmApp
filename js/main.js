const image = document.querySelector("#image")
 
  image.src ="img/bg2.jpg"
  
  
  const promo = document.querySelectorAll(".main_promo")
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
 