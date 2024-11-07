<?php
$host = '127.0.0.1';
$usuario = 'root';
$contraseña = '';
$base_datos = 'preguntin';

// Crear conexión
$conexion = new mysqli($host, $usuario, $contraseña, $base_datos);

// Verificar conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

?>
