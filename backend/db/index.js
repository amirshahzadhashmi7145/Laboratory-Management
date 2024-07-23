const mysql = require('mysql2');
require('dotenv').config()
const user = process.env.user;
const password = process.env.password;

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: user,
    password: password, // Replace with your MySQL password
    database: 'lab_management',
    waitForConnections: true,
    connectionLimit: 10, // Adjust as per your application's needs
    queueLimit: 0
});

// Test the connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
    connection.release(); // Release the connection
});

module.exports = pool;
