$('#submit-survey').on('click', function submitSurvey() {
	var color = $("input[name=color]").val();
	var food = $("input[name=food]").val();
	var vacation = $("input[name=vacation]").val();
	var feBefore = $("input[name=front-end-before]").val();
	var feAfter = $("input[name=front-end-after]").val();
    
    var submit_dict = {
        color: color,
        food: food,
        vacation: vacation,
        feBefore: feBefore,
        feAfter: feAfter,
    }
    
    $.post('submit-survey', submit_dict, function onSuccess() {
        var result = $('<div>').addClass('main-container')
            .append($('<ul>').addClass('list-group')
                    .append($('<li>').addClass('list-group-item').text('Your favorite color is: ' + submit_dict['color']))
                    .append($('<li>').addClass('list-group-item').text('Your favorite food is: ' + submit_dict['food']))
                    .append($('<li>').addClass('list-group-item').text('Your favorite vacation is: ' + submit_dict['vacation']))
                    .append($('<li>').addClass('list-group-item').text('Your front end proficiency before IO Lab is: ' + submit_dict['feBefore']))
                    .append($('<li>').addClass('list-group-item').text('Your front end proficiency after IO Lab is: ' + submit_dict['feAfter']))
                   )
        $(document.body).find('.main-container').html(result);
    });
    return false;
});

$("#site-title-wrapper").on('click', function goHome() {
	window.location.href = '/';
});

$(document).ready(function applySliderLabels() {
	var currentValue = $("#fe-before").val();
	$("#fe-before").next().html(currentValue);

	currentValue = $("#fe-after").val();
	$("#fe-after").next().html(currentValue);
});

$("input[type='range']").on('change', function updateLabel() {
	var currentValue = $(this).val();
	$(this).next().html(currentValue);
});

$('.slider').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
