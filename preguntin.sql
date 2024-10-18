-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2024 a las 04:01:03
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `preguntin`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` tinyint(4) NOT NULL,
  `nombre` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Ciencia de Datos'),
(2, 'Astronomia'),
(3, 'Historia'),
(4, 'Deportes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opciones_respuesta`
--

CREATE TABLE `opciones_respuesta` (
  `id` tinyint(4) NOT NULL,
  `opcion` text NOT NULL,
  `id_pregunta` tinyint(4) DEFAULT NULL,
  `es_correcta` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `opciones_respuesta`
--

INSERT INTO `opciones_respuesta` (`id`, `opcion`, `id_pregunta`, `es_correcta`) VALUES
(1, 'Un tipo de hardware', 1, 0),
(2, 'Un conjunto de instrucciones para resolver un problema', 1, 1),
(3, 'Un programa de software', 1, 0),
(4, 'Un sistema operativo', 1, 0),
(5, 'HTML', 2, 0),
(6, 'SQL', 2, 0),
(7, 'Both A and B', 2, 0),
(8, 'Ninguno de los anteriores', 2, 1),
(9, 'Proceso de extraer minerales', 3, 0),
(10, 'Análisis de grandes conjuntos de datos para encontrar patrones', 3, 1),
(11, 'Un tipo de software de edición', 3, 0),
(12, 'Un sistema operativo', 3, 0),
(13, 'Aplicación Prototipo Interactivo', 4, 0),
(14, 'Interfaz de Programación de Aplicaciones', 4, 1),
(15, 'Análisis de Programas Interactivos', 4, 0),
(16, 'Asociación de Programadores Internacionales', 4, 0),
(17, 'Relacional', 5, 0),
(18, 'NoSQL', 5, 0),
(19, 'Jerárquica', 5, 0),
(20, 'Todas las anteriores', 5, 1),
(21, 'Datos que son grandes físicamente', 6, 0),
(22, 'Conjuntos de datos que son demasiado grandes o complejos para ser procesados con herramientas tradicionales', 6, 1),
(23, 'Datos almacenados en una nube', 6, 0),
(24, 'Un tipo de hardware de almacenamiento', 6, 0),
(25, 'Regresión', 7, 0),
(26, 'Análisis de sentimientos', 7, 0),
(27, 'Clasificación', 7, 1),
(28, 'Todas las anteriores', 7, 0),
(29, 'Excel', 8, 0),
(30, 'Tableau', 8, 0),
(31, 'Power BI', 8, 0),
(32, 'Todas las anteriores', 8, 1),
(33, 'Un diseño físico de un sistema', 9, 0),
(34, 'Una representación matemática de un fenómeno', 9, 0),
(35, 'Un tipo de software', 9, 0),
(36, 'Un hardware especializado', 9, 0),
(37, 'Gestionar recursos de hardware y software', 10, 1),
(38, 'Proporcionar herramientas de programación', 10, 0),
(39, 'Procesar datos científicos', 10, 0),
(40, 'Diseñar interfaces gráficas', 10, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `id` tinyint(4) NOT NULL,
  `pregunta` text NOT NULL,
  `id_categoria` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `pregunta`, `id_categoria`) VALUES
(1, '¿Qué es un algoritmo?', 1),
(2, '¿Cuál de los siguientes es un lenguaje de programación?', 1),
(3, '¿Qué es la minería de datos?', 1),
(4, '¿Qué significa la sigla API?', 1),
(5, '¿Cuál de los siguientes es un tipo de base de datos?', 1),
(6, '¿Qué es el big data?', 1),
(7, '¿Cuál de las siguientes es una técnica de aprendizaje automático?', 1),
(8, '¿Qué herramienta se utiliza comúnmente para visualizar datos?', 1),
(9, '¿Qué es un modelo en ciencia de datos?', 1),
(10, '¿Cuál es la función principal de un sistema operativo?', 1),
(11, '¿Quien fue el creador del béisbol?', 4),
(12, '¿En que año se realizo la primera edición de los juegos olímpicos modernos?', 4),
(13, '¿Que selección gano el primer mundial de futbol?', 4),
(14, '¿Cual es el jugador de baloncesto en anotar mas puntos en toda su carrera?', 4),
(15, '¿Cual fue el primer campeón de la copa libertadores?', 4),
(16, '¿Quien es el máximo ganador de la copa libertadores?', 4),
(17, '¿Cual fue el primer campeón de la copa América?', 4),
(18, '¿Cual es el máximo campeón del Grand Slam?', 4),
(19, '¿Cuando se realizo la primera edición de el Grand Slam?', 4),
(20, '¿Cuándo se realizo la primera edición de la formula1?', 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `opciones_respuesta`
--
ALTER TABLE `opciones_respuesta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pregunta` (`id_pregunta`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `opciones_respuesta`
--
ALTER TABLE `opciones_respuesta`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `opciones_respuesta`
--
ALTER TABLE `opciones_respuesta`
  ADD CONSTRAINT `opciones_respuesta_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`);

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
