<?php
$host = 'localhost';
$usuario = 'Root'; // Cambia esto
$contraseña = ''; // Cambia esto
$base_datos = 'preguntin';

// Crear conexión
$conexion = new mysqli($host, $usuario, $contraseña, $base_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Consulta para obtener preguntas y respuestas
$sql = "SELECT p.id, p.pregunta, r.respuesta 
        FROM preguntas p 
        LEFT JOIN respuestas r ON p.id = r.id_pregunta";
$resultado = $conexion->query($sql);

$datos = array();
if ($resultado->num_rows > 0) {
    while($fila = $resultado->fetch_assoc()) {
        $datos[] = $fila;
    }
}

echo json_encode($datos);
$conexion->close();
?>
