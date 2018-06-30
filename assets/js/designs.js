// Select color input
let selectedColor = "";

// Select size input
let height = 0;
let width = 0;

//selecting the table element
var table = $("#pixelCanvas")

// When size is submitted by the user, call makeGrid()
$("input[type='submit'").on("click", function(){

	let height = $("input[name='height'").val();
	let width = $("input[name='width'").val();

	makeGrid(height, width);
});


//function to making grid

/**
* @description adds rols and columns using h and w
* @param {number} h
* @param {number} w
* @param {row element} row
* @param {column element} col
* @returns nothing but {modifies a table} 
*/
function makeGrid(h,w) {	

	table.children().remove("tr");

	for(let i=1;i<=h; i++)
	{
		let row = $("<tr></tr>");

		for (let j = 1; j <= w; j++) 
		{
			let col = $("<td></td>")
			row.append(col);		
		}

		table.append(row);
	}

}

//coloring the pallet using selected color from the color picker
table.on("click","td", function () {
	selectedColor = $("#colorPicker").val();
	$(this).css("background-color",selectedColor);
});