function toggleEdit(field) {
    const form = document.getElementById(`form-${field}`);
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

async function cambiarNombre(event, id) {
    event.preventDefault();
    const nombre = event.target.nombre.value;
    try {
        const response = await fetch(`/usuarios/cambiar/nombre/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, nombre })
        });
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Nombre cambiado exitosamente' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            }); 
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + `Error al cambiar el nombre` + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + `Error al cambiar el nombre` + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });
    }
}

async function cambiarTelefono(event, id) {
    event.preventDefault();
    const telefono = event.target.telefono.value;
    try {
        const response = await fetch(`/usuarios/cambiar/telefono/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, telefono })
        });
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Teléfono cambiado exitosamente' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            }); 
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + `Error al cambiar el télefono` + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + `Error al cambiar el télefono` + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });
    }
}

async function cambiarCorreo(event, id) {
    event.preventDefault();
    const correo = event.target.correo.value;
    try {
        const response = await fetch(`/usuarios/cambiar/correo/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, correo })
        });
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Correo cambiado exitosamente' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            }); 
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + `Error al cambiar el correo` + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + `Error al cambiar el correo` + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });
    }
}

async function cambiarFoto(event, id) {
    event.preventDefault();
    const formData = new FormData();
    const foto = event.target.foto.files[0];
    formData.append('id', id);
    formData.append('foto', foto);
    try {
        const response = await fetch(`/usuarios/cambiar/foto/${id}`, {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Foto de perfil cambiada exitosamente' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + `Error al cambiar la foto de perfil` + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + `Error al cambiar la foto de perfil` + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
            }
        });
    }
}

async function cambiarContrasena(event, id) {
    event.preventDefault();
    const form = event.target;
    const contrasena = form.contrasena.value;
    const contrasenaNueva = form.contrasenaNueva.value;
    const confirmarContrasena = form.confirmarContrasena.value;

    if (contrasenaNueva !== confirmarContrasena) {
        Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Las contraseñas no coinciden' + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'bg-alert',
            }
        });
        return;
    }

    try {
        const response = await fetch(`/usuarios/cambiar/contrasena/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, contrasena, contrasenaNueva })
        });

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Contraseña cambiada exitosamente' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            }); 
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            const errorData = await response.json();
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Intentalo de nuevo más tarde' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + `Error al cambiar la contraseña` + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
            }
        });
    }
}