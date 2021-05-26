CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente_name TEXT, 
    producto_name TEXT,
    precio_total INTEGER,
    precio_final INTEGER,

);

INSERT or IGNORE INTO songtable(id, cliente_name, producto_name, precio_total, precio_final) VALUES (1, 'Justin Bieber', 'Escritorio', "400" ,"200");
INSERT or IGNORE INTO songtable(id, cliente_name, producto_name, precio_total, precio_final) VALUES (2, 'Jonas Brothers', ' Mesa', "400","200");
INSERT or IGNORE INTO songtable(id, cliente_name, producto_name, precio_total, precio_final) VALUES (3, 'Jose Lopez', 'Cortinas', "400","200");
INSERT or IGNORE INTO songtable(id, cliente_name, producto_name, precio_total, precio_final) VALUES (4, 'Gerardo Ortiz', 'Lampara Together', "400","200");
INSERT or IGNORE INTO songtable(id, cliente_name, producto_name, precio_total, precio_final) VALUES (5, 'Leo Steppers', 'Silla', "400","200");
INSERT or IGNORE INTO songtable(id, cliente_name, producto_name, precio_total, precio_final) VALUES (6, 'Gabriel Loera ', 'Escalera', "400","200");
INSERT or IGNORE INTO songtable(id, cliente_name, producto_name, precio_total, precio_final) VALUES (7, 'Emiliano PErez', 'ventanas', "400","200");
INSERT or IGNORE INTO songtable(id, cliente_name, producto_name, precio_total, precio_final) VALUES (8, 'Helen alonso', 'puertas', "400","200");