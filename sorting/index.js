var data = [{"id":1, "UserName":"Doe", "UserOccupation":"TestOccu"}];


$(".btn").click(function(){
  data.push({"id":data.length+1 ,"UserName":"test", "UserOccupation":"Test2"});
  
});

