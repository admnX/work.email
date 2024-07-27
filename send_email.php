<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'p.xav0008@gmail.com'; // Replace with your website's email
    $email_subject = 'New Form Submission';
    $email_body = "User Name: $name\n" .
                  "User Email: $visitor_email\n" .
                  "User Message: $message\n";

    $to = 'p.xav@gmail.com'; // Your email address
    $headers = "From: $email_from\r\n";
    $headers .= "Reply-To: $visitor_email\r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Thank you for contacting us!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }

    exit;
}
?>
