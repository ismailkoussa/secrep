let bt = document.getElementsByTagName("a");
 for(i=0;i<bt.length;i++){
 bt[i].addEventListener("click", function(){this.style.color="red";});

 }