function calc(x) {

  if (x === 1) {
    var result = x * 2 / 'a';
    alert(result);

  } else if (x === 2) {
    var result = (x - x) / 0;
    alert(result);

  } else if (x === 3) {
    var result = 0 * Infinity;
    alert(result);

  } else if (x === 4) {
    var result = x * 40000000;
    if (result > Infinity) {
      alert("True");
    } else {
      alert("False")
    }
  } else {
    alert("Wrong input")
  }
}

calc(4);