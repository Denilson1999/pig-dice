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

    if (dice1 === 1) {
      alert(" oops!you cant roll")
      total1 = 0;
      $(".den2").text(total1);
    } else {

      total1 = total1 + dice1;

      $(".den2").text(total1);
    }


  });
  $("#hold").click(() => {
    event.preventDefault();
    hold = "Total " + total1;
    $(".den3").text(hold)
  })
  var hold1 = 0;
  var total2 = 0;

  $("#roll2").click(() => {
    event.preventDefault();
    var dice2 = parseInt(Math.floor(Math.random() * 6 + 1))
    $(".den4").text(dice2)

    if (dice2 === 1) {
      alert("oops!you cant roll")
      total2 = 0;
      $(".den6").text(total2)

    } else {
      total2 = total2 + dice2;
      $(".den6").text(total2)
    }
  });
  $("#hold1").click(() => {
    event.preventDefault();
    hold1 = "Total " + total2;
    $(".den5").text(hold1)
  })
});
