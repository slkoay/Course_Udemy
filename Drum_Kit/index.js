var all_button = document.querySelectorAll("button");

for(i=0;i<all_button.length;i++){
  all_button[i].addEventListener("click", function(){ alert("Cliked");});
};

