import { Router } from "express";
import { buscarUbicacion, crearUbicacion, desactivarUbicacion, editarUbicacion, listarUbicacion, obtenerUbicacion } from "../controllers/ubicaciones.controllers.js";
import { verificarToken } from "../middlewares/oauth.js";


const rutaUbicaciones = Router();

rutaUbicaciones.get("/listar", listarUbicacion);
rutaUbicaciones.get("/buscar", buscarUbicacion);
rutaUbicaciones.post("/crear", crearUbicacion);
rutaUbicaciones.get("/obtener/:id", obtenerUbicacion);
rutaUbicaciones.get("/editar", (req, res) => {
    res.render("views.editar_ubicacion.ejs", { id: req.query.id });
});
rutaUbicaciones.post("/editar", editarUbicacion);
rutaUbicaciones.post("/desactivar", desactivarUbicacion);

export default rutaUbicaciones;