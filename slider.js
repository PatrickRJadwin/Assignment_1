var slider = document.getElementById("myRange");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
var slider4 = document.getElementById("myRange4");
var slider5 = document.getElementById("myRange5");
var slider6 = document.getElementById("myRange6");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");
var output4 = document.getElementById("demo4");
var output5 = document.getElementById("demo5");
var output6 = document.getElementById("demo6");

output.innerHTML = slider.value; // Display the default slider value
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;
output5.innerHTML = slider5.value;
output6.innerHTML = slider6.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}
slider2.oninput = function() {
    output2.innerHTML = this.value;
}
