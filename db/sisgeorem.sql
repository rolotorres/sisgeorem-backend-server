CREATE DATABASE sisgeorem;

USE sisgeorem;

CREATE TABLE IF NOT EXISTS `ciudad`(
    `id_ciudad` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(100),
    PRIMARY KEY(`id_ciudad`)
);

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

CREATE TABLE IF NOT EXISTS `tipo_emergencia`(
    `id_tipo_emergencia` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id_tipo_emergencia`)
);

CREATE TABLE IF NOT EXISTS `tipo_usuario`(
    `id_tipo_usuario` INTEGER NOT NULL,
    `categoria` VARCHAR(100),
    `descripcion` VARCHAR(100),
    PRIMARY KEY (`id_tipo_usuario`)
);

CREATE TABLE IF NOT EXISTS `entidad`(
    `id_entidad` INTEGER NOT NULL,
    `id_ciudad` INTEGER NOT NULL,
    `categoria` VARCHAR(100) DEFAULT NULL,
    `nombre` VARCHAR(100) DEFAULT NULL,
    `direccion` VARCHAR(100) DEFAULT NULL,
    `lat` VARCHAR(100),
    `lgn` VARCHAR(100),
    ``,
    PRIMARY KEY (`id_entidad`),
    FOREIGN KEY (`id_ciudad`) REFERENCES `ciudad` (`id_ciudad`)
);

CREATE TABLE IF NOT EXISTS `entidad_emergencia`(
    `id_usuario` INTEGER NOT NULL,
    `id_emergencia` INTEGER NOT NULL,
    `id_entidad` INTEGER NOT NULL,
    ``,
    `descripcion` VARCHAR(50) DEFAULT NULL,
    FOREIGN KEY `id_usuario` REFERENCES `usuario` (`id_usuario`),
    FOREIGN KEY `id_emergencia` REFERENCES `emergencia` (`id_emergencia`),
    FOREIGN KEY `id_entidad` REFERENCES `entidad` (`id_entidad`)
);

CREATE TABLE IF NOT EXISTS `prioridad`(
    `id_prioridad` INTEGER NOT NULL,
    `id_tipo_emergencia` INTEGER NOT NULL,
    `descripcion` VARCHAR(100),
    PRIMARY KEY(`id_prioridad`),
    FOREIGN KEY `id_tipo_emergencia` REFERENCES `tipo_emergencia` (`id_tipo_emergencia`)
);

CREATE TABLE IF NOT EXISTS `usuarios`(
    `id_usuario` INTEGER NOT NULL,
    `id_tipo_usuario` INTEGER NOT NULL,
    `id_persona` INTEGER NOT NULL,
    `id_ciudad` INTEGER NOT NULL,
    `user` VARCHAR(20) NOT NULL,
    `password` INTEGER NOT NULL,
    PRIMARY KEY(`id_usuario`),
    FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`),
    FOREIGN KEY (`id_tipo_usuario`) REFERENCES `tipo_usuario` (`id_tipo_usuario`)
);

CREATE TABLE IF NOT EXISTS `emergencia`(
    `id_emergencia` INTEGER NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `id_ciudad` INTEGER NOT NULL,
    `id_prioridad` INTEGER NOT NULL,
    `id_tipo_emergencia` INTEGER NOT NULL,
    `FECHA Y HORA`
    `lat` VARCHAR(100),
    `lng` VARCHAR(100),
    `TELEFONO1`
    `TELEFONO2`
    `descripcion` VARCHAR(250) DEFAULT NULL,
    PRIMARY KEY (`id_emergencia`),
    FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
    FOREIGN KEY (`id_ciudad`) REFERENCES `ciudad` (`id_ciudad`),
    FOREIGN KEY (`id_tipo_emergencia`) REFERENCES `tipo_emergencia` (`id_tipo_emergencia`)
);