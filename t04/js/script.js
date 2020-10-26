function solver(a, b, c, d, e) {
    var x = (a * a) - (5 * b * c) + (d / 3) + e;
    return ((!isNaN(x)) ? Number.parseFloat(x).toFixed(2) : "Wrong input") 
}

alert(solver(40, -9, 0.5, 7, 100));

alert(solver(40, "doesn't look like a number", 0.5, 7, 100));

alert(solver(40, -9, 0.5, 7));