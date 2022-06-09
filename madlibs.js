$(document).ready(function() {
    $("#button").on("click", function() {
        $("div#generated-story").empty();
        let personName = $("#person-name").val();
        let character = $("#character").val();
        let adverb = $("#adverb").val();
        let adjective = $("#adjective").val();

        console.log(personName + " " + character + " " + adverb + " " + adjective);
        
        let dice = Math.random() * 2;
        if(dice < 1) {
            [personName, character] = [character, personName];
        }

        let winner = personName;

        $("div#generated-story").append(`On yet another day of nFactorial Incubator, <i>${personName}</i> challenged <i>${character}</i> to create <i>${adjective}</i> web app, <i>${adverb}</i> Dalida placed bet to <b>${winner})</b>`);
    });
    // console.log("Ready!");
}); 