<?php
if(isset($_POST['email'])) {

    // CHANGE THE TWO LINES BELOW
    $email_to = "m.karlowski@yahoo.pl";

    $email_subject = "Zapytanie z www";


    function died($error) {
        // your error code can go here
        echo "Błąd ";
        echo "<br /><br />";
        echo $error."<br /><br />";
        echo "Przepraszamy, spróbuj ponownie później.";
        die();
    }

    // validation expected data exists
    if(!isset($_POST['first_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['comments'])) {
        died('Przepraszamy, spróbuj ponownie później.');
    }

    $first_name = $_POST['first_name']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['comments']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'Błędny email<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'Błedne imię.<br />';
  }
  if(strlen($comments) < 2) {
    $error_message .= 'Zapytanie musi mieć min 3 znaki..<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Wiadomość.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Imię: ".clean_string($first_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Zapytanie: ".clean_string($comments)."\n";


// create email headers
$headers = 'Od: '.$email_from."\r\n".
'Do: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
?>

<!-- place your own success html below -->

Dziękujemy.

<?php
}
die();
?>
