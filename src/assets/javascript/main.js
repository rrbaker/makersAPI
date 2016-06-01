// Example maker.json
$.getJSON("https://raw.githubusercontent.com/rrbaker/makersAPI/gh-pages/schema.json", function(json) {
    $("#example_json code").append(JSON.stringify(json, null, "  "));
});

// Builder
$.getJSON("https://raw.githubusercontent.com/rrbaker/makersAPI/gh-pages/schema.json", function(json) {

});

// Validator
$( document ).ready(function() {
  $('#validate_result').hide();
});

$.getJSON("https://raw.githubusercontent.com/rrbaker/makersAPI/gh-pages/schema.json", function(schema) {
    $("#validate").click(function() {
        try {
            var maker = JSON.parse($("#to_validate").val());
            var valid = tv4.validateMultiple(maker, schema);
            console.log(valid);
            if (valid.valid === true) {
                $("#validate_result").show().addClass("positive").text("Your maker.json is valid!");
            } else {
                $("#validate_result").show().addClass("negative").text("Your maker.json contains errors.");
                var errors = valid.errors;
                for (i = 0; i < valid.errors.length; i++) {
                    $("#validate_result").append('<br>' + valid.errors[i].dataPath + ': ' + valid.errors[i].message);
                }
            }
        } catch (err) {
            $("#validate_result").show().addClass("negative").text("Sorry, error(s) found in your maker.json.");
        }
    });
});
