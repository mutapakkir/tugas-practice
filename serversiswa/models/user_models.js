const db = require('../config/db')

const getAllStudent = async () => {
    const [rows] = await db.query('SELECT * from siswa1')
    return rows;
};

const getStudentById = async (id) => {
    const [rows] = await db.query('SELECT * FROM siswa1 WHERE id = ?', [id]);
    return rows[0];
};
module.exports = {
    getAllStudent,
    getStudentById
};