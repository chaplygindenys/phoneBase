<?php
function init(){

    $askDb = "SELECT DISTINCT `streets` FROM `phone` ORDER BY `phone`.`streets` ASC";
    $resalt = connect($askDb);

    if ($resalt > 0) {
        echo json_encode($resalt);
    } else {
        echo "0";
    }


}

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

function selectSearch(){
   if(($_POST["pn"] =="")||($_POST["pn"] == "0")){
        $pn = NULL ;
   }else{  $pn =$_POST["pn"];
       $pn ="AND number ='$pn'"; };

    if(($_POST["fn"] =="")||($_POST["fn"] == "0")){
        $fn = NULL ;
    }else{  $fn =$_POST["fn"];
        $fn ="AND famely = '$fn'"; };

    if(($_POST["st"] =="")||($_POST["st"] == "0")){
        $pn = NULL;
    }else{  $st =$_POST["st"];
        $st ="AND streets = '$st'"; };


    if(($_POST["hn"] =="")||($_POST["hn"] == "0")){
        $pn =NULL ;
    }else{  $hn = $_POST["hn"];
        $hn ="AND houses ='$hn'"; };


    if(($_POST["fl"] =="")||($_POST["fl"] =="0")){
        $fl = NULL ;
    }else{  $fl =$_POST["fl"];
        $fl ="AND flats ='$fl'"; };
     $id="id >'0'";
   $ask =$id.$pn.$fn.$st.$hn.$fl;
    $askDb = "SELECT * FROM phone WHERE $id $pn $fn $st $hn $fl";
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
         returnNewPhone($pn);
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

         // Select new row and comeback it.
         returnNewPhone($pn);
     } catch(PDOException $e) {
         echo $sql . "<br>" . $e->getMessage();
     }

     $conn = null;
 }

function returnNewPhone($pn){
    $askDb = "SELECT * FROM phone WHERE number ='$pn'";
    $resalt = connect($askDb);

    if ($resalt > 0) {
        echo json_encode($resalt);
    } else {
        echo "0";
    }
}