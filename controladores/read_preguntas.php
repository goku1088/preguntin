<?php 

include ("conexion.php");

// Consulta para obtener preguntas y respuestas
/*$sql = "SELECT p.id, p.pregunta, r.opcion
        FROM preguntas p 
        LEFT JOIN respuestas r ON p.id = r.id_pregunta";*/
$dato = json_decode(file_get_contents('php://input'), true);
$id_categoria = $dato["id"];
$sql = "SELECT 
            p.pregunta,
            GROUP_CONCAT(r.opcion SEPARATOR ', ') AS respuestas,
            GROUP_CONCAT(r.es_correcta SEPARATOR ', ') AS cual_es_correcta
        FROM preguntas p
        LEFT JOIN respuestas r ON p.id = r.id_pregunta
        WHERE p.id_categoria = $id_categoria
        GROUP BY p.pregunta";


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