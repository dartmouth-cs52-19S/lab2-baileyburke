$('#get').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();
    // now you have an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
    // you'll need to do some calculations with this
    // a naive approach would be to just choose the most common option - seems reasonable

   
    if (choices.length != 6) {
        $('#yourWord').text('ERROR: Please make sure that every single question was filled out.');
        $('#yourImage').attr('src', 'https://media.giphy.com/media/5QW76Ww9bquHdg1fTv/giphy.gif');
        $('#myModal').addClass("modalShown");
        $('#myModal').removeClass("modalHidden");
      

    }
    else {
        var freqs = {};
        var mostFrequent;
        var lowest = 0;
        

        $.each(choices, function(index, value) {
            if (freqs[value] != undefined) {
                freqs[value]++;
            } 
            else{
                freqs[value] = 1;
            }
        });

        $.each(freqs, function(number, freq) {
            if (freq >= lowest) {
                lowest = freq;
                mostFrequent = number;
            }
        });
        

        //My values and what they line up to:
        //1 = yeet
        //2 = swag
        //3 = litty
        //4 = dope nasty on a stick
        //5 = woot woot
        //6 = yeah yeahhh
        

        if (mostFrequent == 1) {
            $('#yourWord').text('Your word: YEET');
            $('#yourImage').attr('src', 'https://media.giphy.com/media/5PhDdJQd2yG1MvHzJ6/giphy.gif');
            $('#myModal').addClass("modalShown");
            $('#myModal').removeClass("modalHidden");
        }

        if (mostFrequent == 2) {
            $('#yourWord').text('Your word: SWAG');
            $('#yourImage').attr('src', 'https://media.giphy.com/media/ka5kZVfDF9e4E/giphy.gif');
            $('#myModal').addClass("modalShown");
            $('#myModal').removeClass("modalHidden");
        }

        if (mostFrequent == 3) {
            $('#yourWord').text('Your word: LITTY');
            $('#yourImage').attr('src', 'https://mark.trademarkia.com/services/logo.ashx?sid=87702210');
            $('#myModal').addClass("modalShown");
            $('#myModal').removeClass("modalHidden");
        }

        if (mostFrequent == 4) {
            $('#yourWord').text('Your phrase: DOPE NASTY ON A STICK');
            $('#yourImage').attr('src', 'https://media.giphy.com/media/69AMnFATy6paph49wF/giphy.gif');
            $('#myModal').addClass("modalShown");
            $('#myModal').removeClass("modalHidden");
        }

        if (mostFrequent == 5) {
            $('#yourWord').text('Your phrase: WOOT WOOT');
            $('#yourImage').attr('src', 'https://media1.giphy.com/media/9Jiszyssb0vaavSfCC/giphy.gif');
            $('#myModal').addClass("modalShown");
            $('#myModal').removeClass("modalHidden");
        }

        if (mostFrequent == 6) {
            $('#yourWord').text('Your phrase: yeah yeahhh ');
            $('#yourImage').attr('src', 'https://media.giphy.com/media/l0COGE9TXQ5Z1Syis/giphy.gif');
            $('#myModal').addClass("modalShown");
            $('#myModal').removeClass("modalHidden");
        }
    }

  });

  $('label.one').on("click", function() {
      $('label.one').not(this).stop().animate({opacity: 0.3}, 300);
      $(this).stop().animate( {paddingBottom: "+=5px"})
});

  $('label.second').on("click", function() {
    $('label.second').not(this).stop().animate({opacity: 0.3}, 300);
    $(this).stop().animate( {paddingBottom: "+=5px"})
});

$('label.three').on("click", function() {
    $('label.three').not(this).stop().animate({opacity: 0.3}, 300);
    $(this).stop().animate( {paddingBottom: "+=5px"})
});

$('label.four').on("click", function() {
    $('label.four').not(this).stop().animate({opacity: 0.3}, 300);
    $(this).stop().animate( {paddingBottom: "+=5px"})
});

$('label.five').on("click", function() {
    $('label.five').not(this).stop().animate({opacity: 0.3}, 300);
    $(this).stop().animate( {paddingBottom: "+=5px"})
});

$('label.six').on("click", function() {
    $('label.six').not(this).stop().animate({opacity: 0.3}, 300);
    $(this).stop().animate( {paddingBottom: "+=5px"})
});