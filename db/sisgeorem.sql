CREATE DATABASE sisgeorem;

USE sisgeorem;

CREATE TABLE IF NOT EXISTS `persona`(
    `ci_num_persona` INTEGER NOT NULL,
    `nombre` VARCHAR(40) NOT NULL,
    `apellido` VARCHAR(45) NOT NULL,
    `sexo` char(1),
    `fecha_nac` DATE NOT NULL,
    `lugar_de_nac` VARCHAR(100) NOT NULL,
    `estado_civil` CHAR(1),
    `direccion` VARCHAR(100) NOT NULL,
    `telefono` VARCHAR(20) NOT NULL,
    `email` VARCHAR(40) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `update_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(`ci_num_persona`),
    UNIQUE KEY `persona_email_unique` (`email`)
);

CREATE TABLE IF NOT EXISTS `usuarios`(
    `id_usuario` INTEGER unsigned NOT NULL AUTO_INCREMENT,
    `id_tipo_usuario` INTEGER NOT NULL,
    `id_persona` INTEGER NOT NULL,
    `id_ciudad` INTEGER NOT NULL,
    `user` VARCHAR(20) NOT NULL,
    `password` INTEGER NOT NULL,
    PRIMARY KEY(`id_usuario`),
    FOREIGN KEY `id_persona` REFERENCES `persona` (`id_persona`)
);

CREATE TABLE IF NOT EXISTS 