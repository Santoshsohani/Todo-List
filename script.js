var textfield = document.querySelector(".textfield");
var submitbutton = document.querySelector(".submitbutton");
var displaylist = document.querySelector(".displaylist");
let count = 0;
var counter = document.querySelector(".counter");
var clearbutton = document.querySelector(".clearbutton");
    submitbutton.addEventListener('click', function(){
      var ul = document.createElement("ul");
      var li = document.createElement("li");
      if(textfield.value == ""){
        alert(" Error!! Please enter your list");
      }
      else{
        li.innerText = textfield.value;
        ul.appendChild(li);
        count++;
        counter.innerText = count;
      }
   
      
      displaylist.appendChild(ul);
      textfield.value = "";

      li.addEventListener("dblclick", function(){
        ul.removeChild(li);
        count--;
        counter.innerText = count;
      });

      counter.addEventListener("click", function(){
        ul.removeChild(li);
        counter.innerText = count;
      });

      clearbutton.addEventListener("click", function(){
        displaylist.removeChild(ul);
        counter.innerText = 0;
        count=0;
      });
    });

    

  

  




   

   






