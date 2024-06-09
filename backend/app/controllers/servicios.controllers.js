import { pool } from "../config/mysql.db.js";
import { config } from "dotenv";
import mysql from "mysql2/promise";
config();

export const listarServicio = async (req, res) => {
    try {
        const [respuesta] = await pool.query("CALL LL_VER_SERVICIOS()");
        res.json(respuesta);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const editarServicio = async (req, res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const id = req.body.id;

    try {
        const respuesta = await pool.query(`CALL LL_EDITAR_SERVICIO('${nombre}','${descripcion}','${precio}','${id}');`);
        res.json(respuesta);
    } catch (error) {
        res.status(500).json(error);
    }
}
