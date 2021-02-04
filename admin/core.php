<?php
$action = $_POST['action'];

require_once 'function.php';

switch ($action) {
    case 'init':
        init();
        break;
    case 'selectSearch' :
        selectSearch();
        break;
//    case 2:
//        echo "i равно 2";
//        break;
}