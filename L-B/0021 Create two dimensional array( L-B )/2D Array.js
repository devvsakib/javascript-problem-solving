// Create one dimensional array
var arr = new Array(2);
    
document.write("Creating 2D array <br>");
    
// Loop to create 2D array using 1D array
for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(2);
}
    
var h = 0;
    
// Loop to initialize 2D array elements.
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
        arr[i][j] = h++;
    }
}
    
// Loop to display the elements of 2D array. 
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++)    {
        document.write(arr[i][j] + " ");
    }
    document.write("<br>");
}
