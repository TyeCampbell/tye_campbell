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

