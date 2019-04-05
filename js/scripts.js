$(document).ready(function(){
  // var sum=[]
  // function denilson(){
  //   var dice1 = parseInt(Math.floor(Math.random()*6 +1))
  //    $(".den").text(dice1;)
  //   sum.push(dice1)
  //   alert(sum)
  // }
  //

$("#roll1").click(()=>{
  event.preventDefault();
    var dice1 = parseInt(Math.floor(Math.random()*6 +1))
  $(".den").text(dice1)

});

});
