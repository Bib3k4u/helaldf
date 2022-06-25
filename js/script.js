var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

var page_count = 1;


var continue_button= document.querySelector("#continue_button");
var continue_button2= document.querySelector("#continue_button2");
var previous_button = document.querySelector("#previous_button");
var previous_button2 = document.querySelector("#previous_button2");

continue_button.addEventListener("click",function(){
  if(page_count==1){
    page2.style.display="block";
    page_count++;
    page1.style.display="none";
  }

  

})
continue_button2.addEventListener("click",function(){
    if(page_count==2){
    page3.style.display = "block";
    page_count++;
    page2.style.display = "none";
   }
})

previous_button.addEventListener('click',function(){
    if(page_count == 2){
        page1.style.display="block";
        page_count--;
        page2.style.display="none";
    }
})
previous_button2.addEventListener('click',function(){
  if(page_count == 3){
      page2.style.display="block";
      page_count--;
      page3.style.display="none";
  }
})



// printing the realtime date and time in page no 3

