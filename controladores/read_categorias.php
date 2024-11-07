<?php 

include ("conexion.php");

$sql = "SELECT * FROM categorias";

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