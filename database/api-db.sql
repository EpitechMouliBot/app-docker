-- DROP DATABASE IF EXISTS moulibot;

-- CREATE DATABASE moulibot;

-- USE moulibot;

CREATE TABLE `user` (
    `id` INT unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL,
    `user_id` VARCHAR(30) NOT NULL DEFAULT "0",
    `channel_id` VARCHAR(30) NOT NULL DEFAULT "0",
    `last_testRunId` INT unsigned NOT NULL DEFAULT 0,
    `cookies_status` ENUM('new', 'ok', 'expired', 'wait') NOT NULL DEFAULT 'new',
    `discord_status` BOOLEAN NOT NULL DEFAULT 0,
    `cookies` LONGTEXT NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- GRANT ALL ON moulibot.* to BOT@'%' IDENTIFIED BY 'password-bot';
-- GRANT ALL ON moulibot.* to RELAY@'%' IDENTIFIED BY 'password-relay';
-- GRANT ALL ON moulibot.* to APIDB@'%' IDENTIFIED BY 'password-api-db';

SET GLOBAL host_cache_size=0;
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'passwords';
flush privileges;