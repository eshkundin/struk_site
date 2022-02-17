 
<?php
header('Content-Type: text/html; charset=utf-8');
   $back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";
 
   if(!empty($_POST['name']) and !empty($_POST['phone']) and !empty($_POST['mail']) 
   and !empty($_POST['message'])){
      $name = trim(strip_tags($_POST['name']));
      $phone = trim(strip_tags($_POST['phone']));
      $mail = trim(strip_tags($_POST['mail']));
      $message = trim(strip_tags($_POST['message']));
 
      mail("eshkundin@mail.ru, avstruk@mail.ru", "Письмо с avstruk.com \r\n", 
      "Вам написал: ".$name."<br />Его номер: ".$phone."<br />Его почта: ".$mail."<br />
      Его сообщение: ".$message,"Content-type:text/html;charset=UTF-8","From: dog2020-ru_d303902e@1gb.ru \r\n");
 
      echo "Ваше сообщение успешно отправлено!<Br> Вы получите ответ в 
      ближайшее время<Br> $back";
      echo '<script language="JavaScript" type="text/javascript">
        function changeurl(){eval(self.location="https://www.avstruk.com//");}
        window.setTimeout("changeurl();",2000);  
      </script>';
 
      exit;
   } 
   else {
      echo "Для отправки сообщения заполните все поля! $back";
      exit;
   }


?>

