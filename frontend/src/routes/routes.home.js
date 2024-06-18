import { Router } from "express";
import { login, paginaAgregarPregunta, paginaEditarBarbero, paginaEntregasAdmin, paginaHistorialCitas, paginaHistorialCompras, paginaHistorialReservas, paginaListaFav, paginaOferta, paginaPerfilBarbero, paginaPerfilCliente, paginaPreguntas, paginaPrincipalAdmin, paginaPrincipalBarbero, paginaPrincipalCliente, paginaProductos, paginaProductosVendidos, paginaReembolso, paginaRegistrarse, paginaRegistros, paginaReinstaurarContraseña, paginaReservar, paginaReservas, paginaReservasClientes, paginaReservasProductos, paginaServicio, paginaUbicacion } from "../controllers/controllers.home.js";

const rutaHome = Router();

rutaHome.get("/login", login);
rutaHome.get("/cliente", paginaPrincipalCliente);
rutaHome.get("/admin", paginaPrincipalAdmin);
rutaHome.get("/admin/perfil", paginaPrincipalAdmin);
rutaHome.get("/barbero", paginaPrincipalBarbero);
rutaHome.get("/entregas/admin", paginaEntregasAdmin);
rutaHome.get("/historial/cita", paginaHistorialCitas);
rutaHome.get("/historial/compra", paginaHistorialCompras);
rutaHome.get("/historial/reserva", paginaHistorialReservas);
rutaHome.get("/traer", paginaAgregarPregunta);
rutaHome.get("/lista/fav", paginaListaFav);
rutaHome.get("/ofertas", paginaOferta);
rutaHome.get("/registros", paginaRegistros);
rutaHome.get("/ubicacion", paginaUbicacion);
rutaHome.get("/servicio", paginaServicio);
rutaHome.get("/reservas", paginaReservas);
rutaHome.get("/reservas/productos", paginaReservasProductos);
rutaHome.get("/reservas/cliente", paginaReservasClientes);
rutaHome.get("/reservar", paginaReservar);
rutaHome.get("/reinstaurar", paginaReinstaurarContraseña);
rutaHome.get("/registrarse", paginaRegistrarse);
rutaHome.get("/reembolso", paginaReembolso);
rutaHome.get("/productos", paginaProductos);
rutaHome.get("/vendidos", paginaProductosVendidos);
rutaHome.get("/preguntas", paginaPreguntas);
rutaHome.get("/perfil", paginaPerfilCliente);
rutaHome.get("/perfil/barbero", paginaPerfilBarbero);
rutaHome.get("/editar/barbero", paginaEditarBarbero);

export default rutaHome;