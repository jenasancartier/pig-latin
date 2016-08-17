//back-end logic
$(document).ready(function() {
	$("form#pig-latin").submit(function(event){
		event.preventDefault();

var vowels = ["a", "e", "i", "o", "u"];
var result = [];
console.log($("#englishInput").val());
var splitArray = $("#englishInput").val().toLowerCase().split("");
	for (var i = 0; i < splitArray.length; ++i){
		if(vowels.includes(splitArray[0])) {
			result.push(splitArray[i] + "ay");
		} else {
		result.push(splitArray[i]);
		}
	}
	console.log(result)





//front-end logic

	});
});
