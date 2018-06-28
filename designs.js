// Select color input
// Select size input
let tbWidth, tbHeight;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function(event){
    event.preventDefault();
    tbWidth= $('#inputWeight').val();
    tbHeight= $('#inputHeight').val();
    makeGrid(tbHeight, tbWidth);
    });
/**
* @description Perform the for loops code
* @param {tbHeight} x
* @param {tbWidth} y
* @returns {tbHeight, tbWidth} loop through x and y
*/
function makeGrid(x,y) {
   
// Your code goes here!
// This clear and create the grid dynamically.
$('tr').remove();
for (i=1;i<=x; i++){
   $('#pixelCanvas').append('<tr id=table'+ i +'></tr>');
   for(j=1;j<=y;j++){
       $('tr:last').append('<td></td>');
   }
}
// An event listeners to trigger grid creation, and modify the grid colors.
$('td').click(function addColor(){
 const tdColor = $('#colorPicker').val();
 if ($(this).attr('style')) {
    $(this).removeAttr('style');
} else {
    $(this).css('background-color',tdColor);
}
});
}
