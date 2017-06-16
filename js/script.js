/* ---------- Marriage Year Update ---------- */

	var todayDate = new Date();

	var marriageDate = new Date("July 24, 2010");

	var marriageyear = Math.floor((todayDate - marriageDate)/31557600000);

	$("#marriageyear").html(marriageyear);

/* ---------- Link Navigation & Background Change ---------- */

$(document).ready(function(){
	$("#portfoliolink").mouseover(function(){
		$("body").css("background-image", "url('images/tye-portfolio-bw.png')");
	});

	$("#aboutlink").mouseover(function(){
		$("body").css("background-image", "url('images/tye-about-bw.png')");
	});
	$("#contactlink").mouseover(function(){
		$("body").css("background-image", "url('images/tye-contact-bw.png')");
	});
});

$(document).ready(function(){
	$("#portfoliolink").click(function(){
		$("#homepage").hide();
		$("#contactpage").hide();		
		$("#aboutpage").hide();
		$("#portfoliopage").show();
	});
});

$(document).ready(function(){
	$("#aboutlink").click(function(){
		$("#homepage").hide();
		$("#portfoliopage").hide();
		$("#contactpage").hide();		
		$("#aboutpage").show();
	});
});

$(document).ready(function(){
	$("#contactlink").click(function(){
		$("#homepage").hide();
		$("#portfoliopage").hide();
		$("#aboutpage").hide();
		$("#contactpage").show();		
	});
});

