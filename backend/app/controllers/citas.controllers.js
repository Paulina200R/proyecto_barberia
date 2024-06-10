import { pool } from "../config/mysql.db.js";
import { config } from "dotenv";
import mysql from "mysql2/promise";
config();

export const cancelarCita = async (req,res) =>{
    const id = req.body.id;
    try {
        const respuesta = await pool.query(`CALL LL_CANCELAR_CITA('${id}');`);
        res.json(respuesta);
    } catch (error) {
        res.status(500).json(error);
    }
}