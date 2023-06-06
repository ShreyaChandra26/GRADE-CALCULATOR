function calculate() {
  const sub1 = parseInt(document.getElementById("english").value);
  const sub2 = parseInt(document.getElementById("maths").value);
  const sub3 = parseInt(document.getElementById("physics").value);
  const sub4 = parseInt(document.getElementById("chemistry").value);
  const sub5 = parseInt(document.getElementById("computer").value);

  if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
    alert("Please Enter marks in range of 0-100");
  } else if (sub1 < 0 || sub2 < 0 || sub3 < 0 || sub4 < 0 || sub5 < 0) {
    alert("Please Enter marks in range of 0-100");
  } else if (
    isNaN(sub1) ||
    isNaN(sub2) ||
    isNaN(sub3) ||
    isNaN(sub4) ||
    isNaN(sub5)
  ) {
    alert("Please Enter a valid number");
  } else if (!sub1 || !sub2 || !sub3 || !sub4 || !sub5) {
    document.getElementById("total").innerHTML = `Failed`;
    document.getElementById("avg").innerHTML = `Failed`;
    document.getElementById("grd").innerHTML = `Failed`;
  } else if (
    sub1 <= 35 ||
    sub2 <= 35 ||
    sub3 <= 35 ||
    sub4 <= 35 ||
    sub5 <= 35
  ) {
    document.getElementById("grd").innerHTML = `Failed`;
  } else {
    //TOTAL
    const total = sub1 + sub2 + sub3 + sub4 + sub5;
    document.getElementById("total").innerHTML = `Total Marks: ${total}`;

    //AVERAGE
    const average = total / 5;
    document.getElementById(
      "avg"
    ).innerHTML = `Your average marks are : ${average}`;

    //GRADE
    const grade = (total / 500) * 100;
    if (grade >= 90) {
      document.getElementById("grd").innerHTML = `You got A grade`;
    } else if (grade >= 80 && grade <= 89) {
      document.getElementById("grd").innerHTML = `You got B grade`;
    } else if (grade >= 70 && grade <= 79) {
      document.getElementById("grd").innerHTML = `You got C grade`;
    } else if (grade >= 60 && grade <= 69) {
      document.getElementById("grd").innerHTML = `You got E grade`;
    } else {
      document.getElementById("grd").innerHTML = `You got F grade`;
    }
  }
}
