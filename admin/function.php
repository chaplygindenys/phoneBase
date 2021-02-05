<?php

function connect($askDb)
{
    $host='localhost';
    $db = 'phoneBase';
    $user = 'root';
    $pass = '!1D@123PRG!!34519Sfgdj';
    $charset='utF8';
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt=[
                   PDO::ATTR_ERRMODE               =>PDO::ERRMODE_EXCEPTION,
                   PDO::ATTR_DEFAULT_FETCH_MODE    =>PDO::FETCH_ASSOC,
                   PDO::ATTR_EMULATE_PREPARES      => false,
    ];
    $pdo = new PDO($dsn,$user,$pass,$opt);

    try {
        $arrey = $pdo->query("$askDb" )->fetchAll(PDO::FETCH_ASSOC);
        $pdo = null;
        return $arrey;
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}

function init(){
    global $out;
    if ($out > 0) {
      echo json_encode($out);
    } else {
        echo "0";
    }
}
function selectSearch(){
   /* global $askDb;*/
    $ask = $_POST["ask"];
    $column =$_POST["column"];
    $askDb = "SELECT * FROM phone WHERE $column ='$ask'";
   $resalt = connect($askDb);

    if ($resalt > 0) {
        echo json_encode($resalt);
    } else {
        echo "0";
    }


}
 function addPhone(){
     $pn = $_POST["pn"];
    $fn = $_POST["fn"];
    $st = $_POST["st"];
    $hn = $_POST["hn"];
    $fl = $_POST["fl"];
        $askDb = "SELECT number FROM phone WHERE number ='$pn'";
        $resalt = connect($askDb);
         if($resalt){
             updatePhone($pn,$fn,$st,$hn,$fl);
         }else{
             insertPhone($pn,$fn,$st,$hn,$fl);
         }
}

 function updatePhone($pn,$fn,$st,$hn,$fl){

     $host='localhost';
     $db = 'phoneBase';
     $user = 'root';
     $pass = '!1D@123PRG!!34519Sfgdj';
     $charset='utF8';
     $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
     $opt=[
         PDO::ATTR_ERRMODE               =>PDO::ERRMODE_EXCEPTION,
         PDO::ATTR_DEFAULT_FETCH_MODE    =>PDO::FETCH_ASSOC,
         PDO::ATTR_EMULATE_PREPARES      => false,
     ];
     $pdo = new PDO($dsn,$user,$pass,$opt);


     try {
         // set the PDO error mode to exception
         $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

         $sql = "UPDATE phone SET number ='$pn', famely = '$fn', streets = '$st', houses ='$hn', flats ='$fl'    WHERE number = '$pn' ";

         // Prepare statement
         $stmt = $pdo->prepare($sql);

         // execute the query
         $stmt->execute();

         // echo a message to say the UPDATE succeeded
         echo $stmt->rowCount() . " records UPDATED successfully".$sql;
     } catch(PDOException $e) {
         echo $sql . "<br>" . $e->getMessage();
     }

     $pdo = null;
 }

 function insertPhone($pn,$fn,$st,$hn,$fl){

     $host='localhost';
     $db = 'phoneBase';
     $user = 'root';
     $pass = '!1D@123PRG!!34519Sfgdj';
     $charset='utF8';
     $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
     $opt=[
         PDO::ATTR_ERRMODE               =>PDO::ERRMODE_EXCEPTION,
         PDO::ATTR_DEFAULT_FETCH_MODE    =>PDO::FETCH_ASSOC,
         PDO::ATTR_EMULATE_PREPARES      => false,
     ];
     $pdo = new PDO($dsn,$user,$pass,$opt);
     try {
         // set the PDO error mode to exception
         $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         $sql = "INSERT INTO phone (number, famely,streets,houses,flats) VALUES ('$pn','$fn','$st','$hn','$fl')";
         // use exec() because no results are returned
         $pdo->exec($sql);
         echo "New record created successfully";
     } catch(PDOException $e) {
         echo $sql . "<br>" . $e->getMessage();
     }

     $conn = null;
 }