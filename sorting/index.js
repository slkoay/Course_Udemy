var data = [{"id":1, "UserName":"Doe", "UserOccupation":"TestOccu"}, {"id":2, "UserName":"Doe2", "UserOccupation":"TestOccu2"}];
  
  var add_button = document.querySelectorAll(".add");
  var sort_button = document.querySelectorAll(".sort");

  var test_jq = $(".add");
  console.log("test jq :" + test_jq);

  document.getElementsByName("UserID")[0].value=data.length+1;
  display_table();

  function display_table(){        //Function to Display Table
  var h = "";
  for (i=0;i<data.length;i++){
     h+="<tr><td>" + data[i]["id"] + "</td><td>" + data[i]["UserName"] + "</td><td>" + data[i]["UserOccupation"] +"</td></tr>";
     document.getElementById("demo").innerHTML = "<table><tr><th>ID</th><th>UserName</th><th>UserOccupation</th></tr>" + h + "</table>";
  }};
  
    //console.log("test");
    //console.log(typeof(add_button[0]));
    add_button[0].addEventListener("click", function(){
      //var insertID =  document.getElementsByName("UserID"); //might not needed
      var insertName =  document.getElementsByName("UserName");
      var insertOccupation =  document.getElementsByName("UserOccupation");
      //console.log("click");
      //console.log(insertID[0].value);
      var new_value={"id": data.length+1,"UserName": insertName[0].value, "UserOccupation":insertOccupation[0].value};
      data.push(new_value);
      console.log(data);
      document.getElementsByName("UserName")[0].value="";   //Clean UserName Field after add
      document.getElementsByName("UserOccupation")[0].value="";   //Clean UserOccupation Field after add 
      document.getElementsByName("UserID")[0].value=data.length+1;   //Increment ID by 1 after add
      //document.getElementById("demo").innerHTML = "";

      display_table();
    });


    sort_button[0].addEventListener("click", function(){
      
      var get_sort_type =  document.getElementById("type").value;  //get sort type value
      console.log("current sort type " + get_sort_type);

      data.sort(function(a, b){
        let x;
        let y;
        switch(get_sort_type) {
          case "UserID":
            console.log("In Switch Con: " + get_sort_type);
            x = a.id;
            y = b.id;
            break;
          case "UserName":
            x = a.UserName.toLowerCase();
            y = b.UserName.toLowerCase();
            break;
          case "UserOccupation":
            x = a.UserOccupation.toLowerCase();
            y = b.UserOccupation.toLowerCase();
            break;
          default:
            console.log(keyvalue);
        }
      
      if (x < y) {return -1;}
      if (x > y) {return 1;}
    return 0;
      })
      display_table();
    });
