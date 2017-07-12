/* ---------- Date Updater ---------- */

// Marriage Date 

	var todayDate = new Date();

	var marriageDate = new Date("July 24, 2010");

	var marriageyear = Math.floor((todayDate - marriageDate)/31557600000);

	$("#marriageyear").html(marriageyear);

// Objective Box Date

	var todayDate = new Date();

	var creationDate = new Date("October 28, 2014");

	var timesince = Math.floor((todayDate - creationDate)/31557600000);

	$("#OByear").html(timesince);	

/* ---------- Link Navigation & Background Change ---------- */

$(document).ready(function(){
	$("#portfoliolink").click(function(){
		$("body").css("background-image", "url('images/tye-portfolio-bw.png')");
	});

	$("#aboutlink").click(function(){
		$("body").css("background-image", "url('images/tye-about-bw.png')");
	});
	$("#contactlink").click(function(){
		$("body").css("background-image", "url('images/tye-contact-bw.png')");
	});
});

$(document).ready(function(){
	$("#portfoliolink").click(function(){
		$("#homepage").fadeOut();
		$("#contactpage").fadeOut();		
		$("#aboutpage").fadeOut();
		$("#portfoliopage").delay(600).fadeIn();
	});
});

$(document).ready(function(){
	$("#aboutlink").click(function(){
		$("#homepage").fadeOut();
		$("#portfoliopage").fadeOut();
		$("#contactpage").fadeOut();		
		$("#aboutpage").delay(600).fadeIn();
	});
});

$(document).ready(function(){
	$("#contactlink").click(function(){
		$("#homepage").fadeOut();
		$("#portfoliopage").fadeOut();
		$("#aboutpage").fadeOut();
		$("#contactpage").delay(600).fadeIn();		
	});
});

/* ---------- Portfolio Previews ---------- */

// Preview - Honey Hill Events 

$(document).ready(function(){
	$("#preview-honeyhill").click(function(){
		$("#previewBody-objectivebox").hide();
		$("#previewBody-sandyspet").hide();
		$("#previewBody-honeyhill").show();
		$("#previewTitle").text("Honey Hill Events");
		$("#previewSite").attr("src","http://www.honeyhillevents.com");
		$(".previewLink").attr("href","http://www.honeyhillevents.com");
	});
});

// Preview - Objective Box

$(document).ready(function(){
	$("#preview-objectivebox").click(function(){
		$("#previewBody-honeyhill").hide();
		$("#previewBody-sandyspet").hide();
		$("#previewBody-objectivebox").show();
		$("#previewTitle").text("Objective Box");
		$("#previewSite").attr("src","http://www.objectivebox.com");
		$(".previewLink").attr("href","http://www.objectivebox.com");
	});
});

// Preview - Sandy's Pet Shop

$(document).ready(function(){
	$("#preview-honeyhill").click(function(){
		$("#previewTitle").text("Honey Hill Events");
		$("#previewSite").attr("src","http://www.honeyhillevents.com");
		$(".previewLink").attr("href","http://www.honeyhillevents.com");
	});
});
