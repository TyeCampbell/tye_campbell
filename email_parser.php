<?php

	$fname = $_POST['fname'];
	$email = $_POST['email'];
	$body = $_POST['message'];

 	$to      = 'me@tyecampbell.com'; //set who contact form will email here
 	$subject = 'Message From ' . $fname;
 	$message = 'Name: '. $fname . "\r\n" . 'Email: ' . $email . "\r\n" . "Message: \r\n" . $body;
 	$headers = 'From: Tye Campbell.com Contact Form <doNOTreply@tyecampbell.com>' . "\r\n" .
     'Reply-To: '. $fname . ' <'. $email . "> \r\n" .
     'X-Mailer: PHP/' . phpversion();

 	$result = mail($to, $subject, $message, $headers);

    if(!$result) {
    	echo "Message could not be sent.";
    } else {
    	echo "success";
    }

?>