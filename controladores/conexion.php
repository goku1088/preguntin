<?php 

$user= "root";
$password= "";
$data_name= "preguntin";

// Crear conexión
$conexion = new mysqli($user, $password, $data_name);

// Verificar conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
echo "Conectado exitosamente";
?>