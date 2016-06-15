$(document).ready(function(){
$("#blanks form").submit(function(event) {
  event.preventDefault();
  var userlocation=$("#location").val();
  var age=$("#age").val();
  var food=$("#food").val();
  var job=$("#job").val();
  var income=$("#salary").val();
  $(".location").append(userlocation);
  $(".age").append(age);
  $(".food").append(food);
  $(".job").append(job);
  $(".salary").append(income);
  $("#story").show();

});
});
