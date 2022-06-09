$(document).ready(function() {
    $("#button").on("click", function() {
        $("div#generated-story").empty();
        let width = $("#person-name").val();
        let height = $("#character").val();
        let colors = $("#adverb").val();
        
        let answer = width * height / colors;

        $("div#generated-story").append(`${answer}`);
    });
    // console.log("Ready!");
}); 