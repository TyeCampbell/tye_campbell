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
		$("#previewBody-hlfarm").hide();
		$("#previewBody-honeyhill").show();
		$("#previewTitle").text("Honey Hill Events");
		$("#previewSite").attr("src","images/portfolio-macbook-honeyhill.png");
		$('#previewLinkPara').show();
		$(".previewLink").attr("href","http://www.honeyhillevents.com");
	});
});

// Preview - Heirloom Farm

$(document).ready(function(){
	$("#preview-hlfarm").click(function(){
		$("#previewBody-objectivebox").hide();
		$("#previewBody-sandyspet").hide();
		$("#previewBody-honeyhill").hide();
		$("#previewBody-hlfarm").show();
		$("#previewTitle").text("Heirloom Farm");
		$("#previewSite").attr("src","images/portfolio-macbook-hlfarm.png");
		$('#previewLinkPara').show();
		$(".previewLink").attr("href","http://www.hlfarm.com");
	});
});

// Preview - Objective Box

$(document).ready(function(){
	$("#preview-objectivebox").click(function(){
		$("#previewBody-honeyhill").hide();
		$("#previewBody-sandyspet").hide();
		$("#previewBody-hlfarm").hide();
		$("#previewBody-objectivebox").show();
		$("#previewTitle").text("Objective Box");
		$('#previewLinkPara').hide();
		$("#previewSite").attr("src","images/portfolio-macbook-objectivebox.png");
	});
});

// Preview - Sandy's Pet Shop

$(document).ready(function(){
	$("#preview-sandy").click(function(){
		$("#previewBody-honeyhill").hide();
		$("#previewBody-objectivebox").hide();
		$("#previewBody-hlfarm").hide();
		$("#previewBody-sandyspet").show();
		$("#previewTitle").text("Sandy's Pet Shop");
		$('#previewLinkPara').hide();
		$("#previewSite").attr("src","images/portfolio-macbook-sandy.png");
		$(".previewLink").attr("href","http://www.tyecampbell.com/sandyspetshop/");
	});
});


// Preview - Sandy's Pet Shop Admin Page

 $(document).ready(function(){
	$("#preview-sandy-admin").click(function(){
		$("#previewSite").attr("src","images/portfolio-macbook-sandyAdmin.png");
		$(".previewLink").attr("href","http://www.tyecampbell.com/sandyspetshop/admin.php");
	});
});




/* ---------- Regular Expressions For Frorm Validations ---------- */

var reProperName = /^[a-z ,.'-]+$/i;
var reEmail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;



/* ---------- Contact Us Form ---------- */



/* Validate First and Last Names */

$("#fname").blur(function(){
	if ($(this).val() == "") {
		$(this).parent().addClass("has-error");
		$(this).next("span").addClass("glyphicon-remove");
		$(this).next("span").next().html("Required information.")
		$("#sendmessage").addClass("disabled");

	} else if (!reProperName.test($(this).val())) {
		$(this).parent().addClass("has-error");
		$(this).next("span").addClass("glyphicon-remove");
		$(this).next("span").next().html("Not a valid name.")
		$("#sendmessage").addClass("disabled");
	} else {
		$(this).parent().removeClass("has-error");
		$(this).next("span").removeClass("glyphicon-remove");
		$(this).next("span").next().html("");
		$("#sendmessage").removeClass("disabled");
	};
});


/* Validate Email Address */

$("#email").blur(function(){
if ($(this).val() == "") {
		$(this).parent().addClass("has-error");
		$(this).next("span").addClass("glyphicon-remove");
		$(this).next("span").next().html("Email address required.")
		$("#sendmessage").addClass("disabled");

	} else if (!reEmail.test($(this).val())) {
		$(this).parent().addClass("has-error");
		$(this).next("span").addClass("glyphicon-remove");
		$(this).next("span").next().html("Not a valid email address")
		$("#sendmessage").addClass("disabled");
	} else {
		$(this).parent().removeClass("has-error");
		$(this).next("span").removeClass("glyphicon-remove");
		$(this).next("span").next().html("");
		$("#sendmessage").removeClass("disabled");
	};
});


/* Validate Message Body Address */

$("#message").blur(function(){
		if ($(this).val() == "") {
			$(this).parent().addClass("has-error");
			$(this).next("span").addClass("glyphicon-remove");
			$(this).next("span").next().html("Required information.")
			$("#sendmessage").addClass("disabled");
		}  else if ($(this).val().length < 5) {
			$(this).parent().addClass("has-error");
			$(this).next("span").addClass("glyphicon-remove");
			$(this).next("span").next().html("More information is required. Keep typing...")
			$("#sendmessage").addClass("disabled");
		} else if ($(this).val().length > 1000) {
			$(this).parent().addClass("has-error");
			$(this).next("span").addClass("glyphicon-remove");
			$(this).next("span").next().html("You typed " + $(this).val().length + " characters. Maximum message limit is 1000 characters.")
			$("#sendmessage").addClass("disabled");
		} else {
			$(this).parent().removeClass("has-error");
			$(this).next("span").removeClass("glyphicon-remove");
			$(this).next("span").next().html("");
			$("#sendmessage").removeClass("disabled");
		};
});

function formSuccess() {
	
	var $firstName = $("#fname");
	var $email = $("#email");
	var $message = $("#message");
	
	$('#contactModal').modal({show: true});
	$("#statusheader").html("Thank you!");
	$("#status").html("Thanks for the message, " + $firstName.val() + "! I will respond to your request as soon as possible.");
	$firstName.val("");
	$email.val("");
	$message.val("");
	$("#sendmessage").removeClass("disabled");
	
};

function submitForm() {

	var $firstName = $("#fname");
	var $email = $("#email");
	var $message = $("#message");

	function submitValidate(element) {
		$(element).parent().addClass("has-error");
		$(element).next("span").addClass("glyphicon-remove");
		$(element).next("span").next().html("Required information.");
	};

	if ($firstName.val() == "" || $email.val() == "" || $message.val() == "" || $message.val().length < 5) {

		$("#sendmessage").addClass("disabled");

		if ($firstName.val() == "") {
			submitValidate($firstName);
		};

		if ($email.val() == "") {
			submitValidate($email);
		};

		if ($message.val() == "" || $message.val().length < 5){
			submitValidate($message);
		};
	} else {

		$("#contactus").submit(function(e) {
			e.preventDefault();
		
			var $form = $(this);
			$.post($form.attr("action"), $form.serialize()).then(function() {
			formSuccess();
			});
		});
		
	}
}




/* ---------- Google Map API ---------- */

function initMap() {
        var uluru = {lat: 41.037955, lng: -93.7810656};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


	  /* ---------- Greetings ---------- */

	  console.log("Hello! Welcome to my personal site!");
