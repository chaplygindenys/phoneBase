<?php
GLOBAL $pdo, $out;
$out = connect();
function connect()
{
    $host='localhost';
    $db = 'db_phoneBase';
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
        $arrey = $pdo->query('SELECT * from phone')->fetchAll(PDO::FETCH_ASSOC);
        $pdo = null;
        return $arrey;
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}

function init()
{     global $out;
    if ($out > 0) {
      echo json_encode($out);
    } else {
        echo "0";
    }
}


