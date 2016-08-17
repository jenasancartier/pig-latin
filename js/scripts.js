//back-end logic
$(document).ready(function() {
	$("form#pig-latin").submit(function(event){
		event.preventDefault();

var vowels = ["a", "e", "i", "o", "u"];
var result = [];
console.log($("#englishInput").val());
var splitArray = $("#englishInput").val().toLowerCase().split("");
	for (var i = 0; i < 1; ++i){
		if(vowels.includes(splitArray[0])) {
			result.push("a", "y");
		} else {
		result.push(splitArray[i]);
		}
	}
	var combineResult = splitArray.concat(result);
	console.log(combineResult.join(""));





//front-end logic

	});
});
