const userModel = require('../models/user_models')

const getAllStudent = async (req,res) => {
    try{
        const students = await userModel.getAllStudent();
        res.json({ succes : true, data : students}) 
    }
    catch(err){
        res.status(500).json({ succes : false, message : err.message});   
    }
    
};
const getStudentById = async(req,res) => {
    const {id} = req.params;
    try{
        const student = await userModel.getStudentById(id);
        if (student){
            res.json({ succes : true, data : student});        
        } else {
            res.status(404).json({ succes : false, message :'Student not Found'})
        }
    } catch (err){
        res.status(500).json({succes : false, message : err.message})
    }
}
module.exports = {
    getAllStudent,
    getStudentById
};