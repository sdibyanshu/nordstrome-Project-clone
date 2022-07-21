let imageLink=[
    "https://s.rmjo.in/Paytm%20CB%20Web%20Banner%20Desktop%20(1).png",
    " https://s.rmjo.in/PS-HP-Web.png",
    "https://s.rmjo.in/Spotch_Web-HP.png",
    
    "https://s.rmjo.in/AC%20Offer%20Banner%20HP_.jpg",
   
   
         ]

let leftbtn=document.getElementById("left-btn")    ;    
let rightbtn=document.getElementById("right-btn")    ;  

let crauser=document.getElementById("crauser")

let imageState=0;

rightbtn.addEventListener("click",function(){
    imageState++
    if(imageState==imageLink.length){
    imageState=0;
}
    crauser.src=imageLink[imageState]
})

leftbtn.addEventListener("click",function(){
    imageState--

    if(imageState<0){
        imageState=imageLink.length-1
    }
    crauser.src=imageLink[imageState]
})



