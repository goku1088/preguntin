<?php 

$user= "root";
$password= "";
$data_name= "preguntin";

$conn= new mysqli($user, $password, $data_name);

if($conn->connect_error){
    die("hubo un error");
} else {
    die("se conecto a mysql");
}

?>