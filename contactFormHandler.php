<?php

    $name = $_POST['name'];
    $firstName = $_POST['firstName'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];


    $email_from = 'jeancaron072001@gmail.com';

    $email_subject = 'Nouveau message venant du portfolio:';

    $email_body = "User name: $name.\n".
                    "User first name: $firstName.\n".
                    "User Email: $visitor_email.\n".
                    "User Message: $message.\n";
    
    $to = "jeancaron072001@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");
*/?>
