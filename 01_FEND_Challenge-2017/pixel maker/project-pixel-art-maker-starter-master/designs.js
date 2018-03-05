/*----Declare variables----*/
/* Grid body */
const tableBody = $("#pixel-canvas");

/* Grid submit button */
const gridSubmit = $("#button-submit");

/* Select size of the grid */
var selectHeight = $("#input-height").val();
var selectWidth = $("#input-width").val();

/* Colour picker */
var colourPick = $("#color-picker")

/* Submit grid size */
$("#button-submit").on("click", function(){
  makeGrid();
});

/*--------Function make grid-------*/
function makeGrid() {
/* clear table */
tableBody.empty();
/* Draw rows of the table */
for(var i=0; i < selectHeight; i++){
  tableBody.append('<tr></tr>');
  /* Draw cells */
  for(var j=0; j < selectWidth; j++){
    tableBody.find("tr").last().append ("<td></td>");
  }
}};

/*-----Colour picker function -----*/

tableBody.click(function(event){
  var colour = colourPick.val();
  $(event.target).css("background-color", colour);
});
