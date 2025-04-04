var data = [{"id":1, "UserName":"Doe", "UserOccupation":"TestOccu"}];
let h = "";


for (i=0;i<data.length;i++){
   h+="<tr><td>" + data[i]["id"] + "</td><td>" + data[i]["UserName"] + "</td><td>" + data[i]["UserOccupation"] +"</td></tr>";
    
}

document.getElementById("demo").innerHTML = "<table><tr><th>ID</th><th>UserName</th><th>UserOccupation</th></tr>" + h + "</table>";
