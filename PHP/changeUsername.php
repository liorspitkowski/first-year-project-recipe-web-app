<?php

  $newUN = $_POST['user_changed_name'];
  $ID = $_POST['user_id'];

  require "DatabaseHandler.php";

  $conn = connect();

  $sql = "SELECT * FROM users WHERE username = :name";
  $stmt = $conn->prepare($sql);

  $stmt->execute([':name' => $newUN]);

  if ($stmt->rowCount() > 0) {
    // username taken
    echo 'flag=0;';
  }
  else {
    $sql = "UPDATE users SET username = :usn WHERE userId = :id";
    $stmt = $conn->prepare($sql);

    $stmt->execute([
      ':usn' => $newUN,
      ':id' => $ID,
    ]);
    echo 'flag=1;';
  }
?>
