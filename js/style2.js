

$('document').ready(function() {
 
  $.ajax(
{
  url:'start.php'
});
/* handle form validation */
$("#form").validate({
rules:
{
name: {
minlength: 3
},
email: {
email: true
},
phone: {
minlength: 10,
maxlength: 10
}
},
messages:
{
name: "name should contain atleast 3 characters",
email: "please enter a valid email address",
phone: {
minlength: "phone number should contain 10 digits"
// maxlength: "phone number should contain only 10 digits"
}

// phone: {
//   // minlength: "phone number should contain 10 digits"
//   maxlength: "phone number should contain only 10 digits"
//   }

},
submitHandler: submitForm
});
/* handle form submit */
function submitForm() {
var data = $("#form").serialize();

// $.ajax({
// type : 'POST',
// url : 'update.php',
// data : data,
// beforeSend: function() {
// $("#error").fadeOut();
// $("#btn-submit").html('<span class="glyphicon glyphicon-transfer"></span>   Checking ...');
// // setTimeout(4000);
// },
// success : function(response) {
// console.log(response);
// if(response=="2"){
 

// $("#btn-submit").html('updated');
// // $("#btn-submit").html('<span class="glyphicon glyphicon-log-in"></span>   Updated');
// setTimeout(' window.location.href = "welcome.html";',1000);

// }  
// }
// });


//Check and update!!!!!


$.ajax({
  type : 'POST',
  url : 'update.php',
  data : data,
  beforeSend: function(){
  $("#error").fadeOut();
  $("#btn-submit").html('<span class="glyphicon glyphicon-transfer"></span>   Checking...');
  setTimeout(2500);
  },
  success : function(response){
  if(response=="2"){
  $("#error").fadeIn(2500, function(){
  $("#error").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span></div>');
  $("#btn-submit").html('<span class="glyphicon glyphicon-log-in"></span>   Checking...');
  setTimeout(2500);
  });
  }
      else{
          
          $("#btn-submit").html('<img src="images/ajax-loader.gif" />   Updated');
  setTimeout(' window.location.href = "welcome.html"; ',2500);
      }
  }
  });


return false;
}
});
$('document').ready(function() {

   
});
function funcload() {
  $.ajax({
 type: "GET",
 url: "start.php",
 success: function(response){
    
  $.ajax({
    
    type: "GET",
    url: "data.json",
  cache: false,
    success: function(result) {
      for (var i in result) {
          if(result[i].id == response)
              { 
          document.getElementById("inputName").value = result[i].name;
          document.getElementById("inputEmail").value = result[i].email;
          document.getElementById("inputNumber").value = result[i].phone;
          document.getElementById("inputGender").value = result[i].gender;
          document.getElementById("inputDate").value = result[i].dob;
          document.getElementById("inputDegree").value = result[i].degree;
          document.getElementById("inputAge").value = result[i].age;
          // document.getElementById("inputCollege").value = result[i].college;
          // document.getElementById("inputState").value = result[i].state;
          // document.getElementById("inputDept").value = result[i].department;
          // document.getElementById("inputAoi").value = result[i].aoi;
          // document.getElementById("inputYear").value = result[i].yop;
              } 
      }
    }
  }); 
 }
});

}

