import { pool } from "../config/mysql.db.js";
import { config } from "dotenv";
import mysql from "mysql2/promise";
config();

export const listaroferta = async (req, res) => {
    try {
        const [respuesta] = await pool.query("CALL LL_VER_OFERTAS()");
        res.json(respuesta);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const buscarOferta = async (req, res) => {
    try {
        // Obtener el patrón de búsqueda de la consulta
        const { desc } = req.query;
        
        // Verificar si se proporcionó un patrón de búsqueda válido
        if (!desc) {
            return res.status(400).json({ message: "Se requiere patrón de búsqueda" });
        }
        const [rows] = await pool.query("CALL LL_BUSCAR_OFERTA(?)", [desc]);
        res.json(rows);
    } catch (error) {
        res.status(500).json(error);
    }
};