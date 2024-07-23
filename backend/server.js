const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const pool = require('./db');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api', async (req, res) => {
    try {
        const [rows] = await pool.promise().query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.log('Error fetching data from MySQL:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post("/adduser",async (req,res) => {
    const {name,age,mobile,gender,address,selectedTests} = req.body;

    if (name && age && mobile && gender && address && selectedTests) {
        const connection = await pool.promise().getConnection();

        try {
            await connection.beginTransaction();

            const [userResult] = await connection.query(
                `INSERT INTO Users (name, age, mobile_num, gender, address) VALUES (?, ?, ?, ?, ?)`,
                [name, age, mobile, gender, address]
            );


            const userId = userResult.insertId;
            for (let test of selectedTests) {
                const {name,price} = test;
                await connection.query(
                    `INSERT INTO Tests (user_id, test_name,price) VALUES (?, ?, ?)`,
                    [userId, name, price]
                );
            }
            await connection.commit();
            res.status(201).send("Data Inserted Successfully!")
        }
        catch (e) {
            await connection.rollback();
            res.status(500).json({error: 'Internel Server Error'})
        } finally {
            await connection.release();
        }
    }
    else {
        res.send("Add Complete Data!");
    }
})

app.get("/pendingtests",async (req,res) => {
    try {
        const [rows] = await pool.promise().query(`SELECT tests.id,tests.user_id,tests.test_name,tests.price,tests.result,tests.date_created,tests.status,users.name,users.age,users.mobile_num,users.address,users.gender FROM tests LEFT JOIN users ON tests.user_id = users.id where status='pending' order by tests.date_created desc`);
        res.json(rows);
    } catch (e) {
        res.status(500).json("Internel Server Error", e);
    }
})

app.get("/completedtests",async (req,res) => {
    try {
        const [rows] = await pool.promise().query(`SELECT tests.id,tests.user_id,tests.test_name,tests.price,tests.result,tests.date_created,tests.status,users.name,users.age,users.mobile_num,users.address,users.gender FROM tests LEFT JOIN users ON tests.user_id = users.id where status='completed' order by tests.date_created desc`);
        res.json(rows);
    } catch (e) {
        res.status(500).json("Internel Server Error", e);
    }
})

app.post("/deletetest",async (req,res) => {
    const {testId} = req.body;
    try {
        var connection = await pool.promise().getConnection();
        await connection.beginTransaction();


        const [user] = await connection.query(
            `select user_id from tests where id = ?`,testId
        );
        const [tests] = await connection.query(
            `select count(*) as count from tests where user_id = ?`,user[0].user_id
        );
        if(tests[0].count === 1){
            const userId = user[0].user_id;
            console.log(userId)
            await connection.query(`delete from tests where id = ?`,testId)
            await connection.query(`delete from users where id = ?`,userId);
        }
        else {
            await connection.query(`delete from tests where id = ?`,testId)
        }

        await connection.commit();
        res.status(200).send("Query Successful!")
    }
    catch (e) {
        await connection.rollback();
        res.status(500).json({error: 'Internel Server Error'})
    } finally {
        await connection.release();
    }
})

app.post("/addreport",async (req,res) => {
    const {testId,result} = req.body;
    console.log({testId,result})
    try {
        var connection = await pool.promise().getConnection();
        await connection.beginTransaction();


        const [user] = await connection.query(
            `update tests set result = ?,status = ? where id = ?`,[JSON.stringify(result),"completed",testId]
        );

        await connection.commit();
        res.status(200).send("Query Successful!")
    }
    catch (e) {
        await connection.rollback();
        res.status(500).json({error: 'Internel Server Error'})
    } finally {
        await connection.release();
    }
})


app.listen(port,() => {
    console.log(`Server Listening on ${port}`);
})

