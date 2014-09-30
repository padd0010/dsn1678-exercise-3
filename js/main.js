var detailsLeft = $('.details-left')
var salesLeft = $('.sales-left')

var detailsRight = $('.details-right')
var salesRight = $('.sales-right')


var salesClickHandler = function () {
	var isActive = detailsLeft.attr('data-state');
	
	if (isActive == 'active') {
		detailsLeft.attr('data-state', 'inactive');
	
	} else {
		detailsLeft.attr('data-state', 'active');
	}
};


var salesClickHandler2 = function () {
	var isActive = detailsRight.attr('data-state');
	
	if (isActive == 'active') {
		detailsRight.attr('data-state', 'inactive');
	
	} else {
		detailsRight.attr('data-state', 'active');
	}
};

salesLeft.on('click', salesClickHandler);

salesRight.on('click', salesClickHandler2);
