$(document).ready(function() {
  // var sum=[]
  // function denilson(){
  //   var dice1 = parseInt(Math.floor(Math.random()*6 +1))
  //    $(".den").text(dice1;)
  //   sum.push(dice1)
  //   alert(sum)
  // }
  //
  var hold = 0;
  var total1 = 0;

  $("#roll1").click(() => {
    event.preventDefault();
    var dice1 = parseInt(Math.floor(Math.random() * 6 + 1))
    $(".den").text(dice1)

    if (dice1 ===1 ){
      alert(" oops!you cant roll")
      total1 =0;
      $(".den2").text(total1);
    }
    else{

  total1 = total1 + dice1;

      $(".den2").text(total1);
   }


});
$("#hold").click(() =>{
  event.preventDefault();
  hold = "Total " + total1;
  $(".den3").text(hold)
})
});
