var choice = prompt("What is Perimeter Calculator.\nPlease enter the number corresponding to your choice.\n1. Perimeter of a Circle\n2. Perimeter of a Rectangle\n3. Perimeter of a Triangle\n4. Perimeter of a parallelogram ");

if (choice == 1) {
    var l = prompt("Enter the lenth")
    var w = prompt("Enter the width")
    var result = Number(l) + Number(w)
    alert("The perimeter is " + result)
}

if (choice == 2) {
    var h = prompt("Enter the height")
    var b = prompt("Enter the base")
    var result = Number(h) + Number(b) / 2
    alert("The perimeter is " + result)
}

if (choice == 3) {
    var r = prompt("Enter the radius")
    var result = 3.14 + Number(r) + Number(r)
    alert("The perimeter is " + result)
}

if (choice == 4) {
    var h = prompt("Enter the height")
    var cb = prompt("Enter the correspondingbase")
    var result = Number(h) + Number(cb)
    alert("The perimeter is " + result)
}