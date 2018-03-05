/* Grid body */
const tableBody = $("#pixel-canvas");

/* Grid submit button */
const gridSubmit = $("#button-submit");

/* ---- Making Grid ----- */
function makeGrid() {
  /* Select size of the grid */
let selectHeight = $("#input-height").val();
let selectWidth = $("#input-width").val();
  /* Clears the table initially and prevents making more tables on further clicks */
  tableBody.empty();

  for (let i = 0; i < selectHeight; i++) {
    tableBody.append("<tr></tr>");

    for (let j = 0; j < selectWidth; j++) {
      tableBody.find("tr").last().append("<td></td>");
    }
  }
}

/* Submit grid size on click */
gridSubmit.click(function(event){
  event.preventDefault();
  makeGrid();
});

/*-----Draw function -----*/

  /* Pick colour */
function drawPixels(){
  tableBody.on("click dragover", "td", function(){
    let colourPick = $("#color-picker").val();
    $(this).css("background-color", colourPick);
    });
  }
drawPixels();

  /*Clear canvas */
function clearCanvas(){
  let clearButton = $("#button-clear");
  clearButton.on("click", function(){
    $("td").css("background-color", "transparent");
  });
}
clearCanvas();
