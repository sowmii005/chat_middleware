const Pool = require("pg").Pool;
const http = require('http');
// const socketIo = require('socket.io');
// const server = http.createServer(app);
// const io = socketIo(server);
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "login",
  password: "password",
  port: 5432,
});

const getLoginusers = (req,res)=>{
    pool.query('select * from login_tb',(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result.rows);
    })
}

const updatePassword = async(req,res)=>{
  try {
    const requestData = req.body; 
    const result = await pool.query('SELECT * FROM update_password($1)', [requestData]);
    res.status(200).json(result.rows);
    // console.log(result.rows);
  } catch (error) {
    console.error('Error executing PostgreSQL function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const createNew = async(req,res)=>{
  try {
    const requestData = req.body; 
    const result = await pool.query('SELECT * FROM create_user($1)', [requestData]);
    res.status(200).json(result.rows);
    // console.log(result.rows);
  } catch (error) {
    console.error('Error executing PostgreSQL function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const getContacts = async(req,res)=>{
  try {
    const useriD = req.query; 
    // console.log(useriD,'-----');
    const result = await pool.query('SELECT * FROM get_contact_list($1)', [useriD]);
    res.status(200).json(result.rows);
    // console.log(result.rows);
  } catch (error) {
    console.error('Error executing PostgreSQL function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const getMessagesByid = async(req,res)=>{
  try {
    const useriD = req.query; 
    // console.log(useriD,'-----');
    const result = await pool.query('SELECT * FROM get_messages_by_id($1)', [useriD]);
    res.status(200).json(result.rows);
    // console.log(result.rows);
  } catch (error) {
    console.error('Error executing PostgreSQL function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const createNewmessage = async(req,res)=>{
  try {
    const requestData = req.body; 
    console.log('-----',requestData);
    const result = await pool.query('SELECT * FROM create_messages($1)', [requestData]);
    res.status(200).json(result.rows);
    console.log(result.rows);
  } catch (error) {
    console.error('Error executing PostgreSQL function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const createContact = async(req,res)=>{
  try {
    const requestData = req.body; 
    console.log('-----',requestData);
    const result = await pool.query('SELECT * FROM create_new_contact($1)', [requestData]);
    res.status(200).json(result.rows);
    console.log(result.rows);
  } catch (error) {
    console.error('Error executing PostgreSQL function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const deleteContact = async(req,res)=>{
  try {
    const requestData = req.body; 
    console.log('-----',requestData);
    const result = await pool.query('SELECT * FROM delete_contact($1)', [requestData]);
    res.status(200).json(result.rows);
    console.log(result.rows);
  } catch (error) {
    console.error('Error executing PostgreSQL function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = {getLoginusers,updatePassword,createNew,getContacts,getMessagesByid,createNewmessage,createContact,deleteContact}