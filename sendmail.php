<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'verchovskaya.liza@gmail.com'; 
  $subject = 'New Contact Form Submission';
  $body = "Name: $name\n\nEmail: $email\n\nMessage: $message";

  // Дополнительные заголовки
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Отправка письма
  if (mail($to, $subject, $body, $headers)) {
    echo 'success';
  } else {
    echo 'error';
  }
}
?>