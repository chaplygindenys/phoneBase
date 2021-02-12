<?php

function pdoConectObject($askDb, $paramAsk)
{
    $host = 'localhost';
    $db = 'phoneBase';
    $user = 'root';
    $pass = '!1D@123PRG!!34519Sfgdj';
    $charset = 'utF8';
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]; // set the PDO error mode to exception
    $pdo = new PDO($dsn, $user, $pass, $opt);

    if ($paramAsk === "SELECT") {
        try {
            $arrey = $pdo->query($askDb)->fetchAll(PDO::FETCH_ASSOC); //возвращает массив, индексированный именами столбцов результирующего набора
            return $arrey;
        } catch (PDOException $e) {
            echo $askDb . $e->getMessage() . "<br/>";
            die();
        }
    } elseif ($paramAsk === "UPDATE") {

        try {
            $stmt = $pdo->prepare($askDb); // Prepare statement
            $stmt->execute(); // execute the query
        } catch (PDOException $e) {
            echo $askDb . "<br>" . $e->getMessage();
        }

    } elseif ($paramAsk === "INSERT") {
        try {
            $pdo->exec($askDb); // use exec() because no results are returned
        } catch (PDOException $e) {
            echo $askDb . "<br>" . $e->getMessage();
        }
    }
    $pdo = null;

}

function responsToJsonPost($askDb)
{
    $resalt = pdoConectObject($askDb, "SELECT");
    if (!empty($resalt)) {   //isset
        echo json_encode($resalt);
    } else {
        $resalt = "No data found";
        echo json_encode($resalt);
    }
}

function responsToJsonFile($askDb)
{
    $resalt = pdoConectObject($askDb, "SELECT");
    if (!empty($resalt)) {   //isset
        file_put_contents('phone.json', json_encode($resalt));
    } else {
        $resalt = "No data found";
        echo json_encode($resalt);
    }

}

function returnNewPhone($phoneNumber)
{
    $askDb = "SELECT * FROM phone WHERE number ='$phoneNumber'";
    responsToJsonPost($askDb);
}


function init()
{
    $askDb = "SELECT DISTINCT `streets` FROM `phone` ORDER BY `phone`.`streets` ASC";
    responsToJsonFile($askDb);
}

function selectSearch()
{
    $id = NULL;
    $phoneNumber = NULL;
    $femaleName = NULL;
    $street = NULL;
    $houseNumber = NULL;
    $flat = NULL;

    if (($_POST["phoneNumber"] == "") || ($_POST["phoneNumber"] == "0")) {
        $phoneNumber = NULL;
    } else {
        $phoneNumber = $_POST["phoneNumber"];
        $phoneNumber = "AND number = '$phoneNumber'";
    }
    if (($_POST["femaleName"] == "") || ($_POST["femaleName"] == "0")) {
        $femaleName = NULL;
    } else {
        $femaleName = $_POST["femaleName"];
        $femaleName = "AND famely = '$femaleName'";
    }
    if (($_POST["street"] == "") || ($_POST["street"] == "0")) {
        $street = NULL;
    } else {
        $street = $_POST["street"];
        $street = "AND streets = '$street'";
    }


    if (($_POST["houseNumber"] == "") || ($_POST["houseNumber"] == "0")) {
        $houseNumber = NULL;
    } else {
        $houseNumber = $_POST["houseNumber"];
        $houseNumber = "AND houses ='$houseNumber'";
    }


    if (($_POST["flat"] == "") || ($_POST["flat"] == "0")) {
        $flat = NULL;
    } else {
        $flat = $_POST["flat"];
        $flat = "AND flats ='$flat'";
    }

    $id = "id >'0'";

    $askDb = "SELECT * FROM phone WHERE $id $phoneNumber $femaleName $street $houseNumber $flat";
    responsToJsonPost($askDb);

}

function addPhone()
{
    $phoneNumber = $_POST["phoneNumber"];
    $femaleName = $_POST["femaleName"];
    $street = $_POST["street"];
    $houseNumber = $_POST["houseNumber"];
    $flat = $_POST["flat"];
    $askDb = "SELECT number FROM phone WHERE $phoneNumber";
    $resalt = pdoConectObject($askDb, "SELECT");
    if ($resalt) {
        updatePhone($phoneNumber, $femaleName, $street, $houseNumber, $flat);
    } else {
        insertPhone($phoneNumber, $femaleName, $street, $houseNumber, $flat);
    }
}

function updatePhone($phoneNumber, $femaleName, $street, $houseNumber, $flat)
{
    $askDb = "UPDATE phone SET number ='$phoneNumber', famely = '$femaleName', streets = '$street', houses ='$houseNumber', flats ='$flat'    WHERE number = '$phoneNumber' ";
    pdoConectObject($askDb, "UPDATE");
    returnNewPhone($phoneNumber);// Select new row and comeback it.
}

function insertPhone($phoneNumber, $femaleName, $street, $houseNumber, $flat)
{
    $askDb = "INSERT INTO phone (number, famely,streets,houses,flats) VALUES ('$phoneNumber','$femaleName','$street','$houseNumber','$flat')";
    pdoConectObject($askDb, "INSERT");
    returnNewPhone($phoneNumber);// Select new row and comeback it.
}
