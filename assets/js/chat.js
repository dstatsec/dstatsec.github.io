$(function() {
	'use strict'
	const ps2 = new PerfectScrollbar('.main-chat-list', {
		useBothWheelAxes:true,
		suppressScrollX: true,
	});
	
	const ps5 = new PerfectScrollbar('#ChatBody', {
		useBothWheelAxes:true,
		suppressScrollX: true,
	});
});