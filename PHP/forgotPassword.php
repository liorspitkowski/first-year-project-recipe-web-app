<?php

  require "DatabaseHandler.php";
  require "MailManager.php";

  function part1()
  {
    // $ID = $_POST[''];
    // $email = $_POST[''];

    // delete
    $ID = 17;
    $email = 'ziggy.hughes@student.manchester.ac.uk';

    $conn = connect();

    $sql = 'SELECT hashedEmail FROM users WHERE userId = :ID';
    $stmt = $conn->prepare($sql);

    $stmt->execute([':ID' => $ID]);

    while($row = $stmt->fetch()) {
      if ($row["hashedEmail"] == hash("sha256", $email)) {
        $code = rand(1000, 9999);
        $mail = new MailManager(
        "dbhost.cs.man.ac.uk", "y66466tl", "SpagetiC0de", "2021_comp10120_x18");
        $mail->set_subject("verify");
        $mail->add_recipient($email);
        $mail->set_body($code);
        try {
          $mail->send();
          echo 'flag=2;code=' . $code . ';';
        }
        catch (Exception $e) {
          echo 'flag=1;error=' . $e->getMessage() . ';';
        }
      }
      else {
        // wrong email
        echo 'flag=0;';
      }
    }
  }

  function part2()
  {
    // $ID = $_POST[''];
    // $newPW = hash("sha256", $_POST['']);

    $conn = connect();

    $sql = "UPDATE users SET hashedPassword = :pw WHERE userId = :id";
    $stmt = $conn->prepare($sql);

    $stmt->execute([
      ':usn' => $newPW,
      ':id' => $ID,
    ]);
    echo 'flag=1;';

  }

  part1();

  // selection to check if doinp part 1 or 2
  // if ($_POST[''] == null) {
  //   part1();
  // }
  // else {
  //   part2();
  // }
?>