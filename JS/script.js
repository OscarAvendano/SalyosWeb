function togglePermiso(permiso) {
    var permisoCard = document.getElementById(permiso);

    if (permisoCard.classList.contains('selected')) {
        permisoCard.classList.remove('selected');
    } else {
        permisoCard.classList.add('selected');
    }
}

function togglePermiso(permiso) {
    var permisoCard = document.getElementById(permiso);

    if (permisoCard.classList.contains('selected')) {
        permisoCard.classList.remove('selected');
    } else {
        permisoCard.classList.add('selected');
    }
}

function togglePermiso(permiso) {
    var permisoCard = document.getElementById(permiso);

    if (permisoCard.classList.contains('selected')) {
        permisoCard.classList.remove('selected');
    } else {
        permisoCard.classList.add('selected');
    }
}

function guardarPermisos() {
    // Obtener los permisos seleccionados
    var cajero = document.getElementById('cajero').checked;
    var mesero = document.getElementById('mesero').checked;
    var cocinero = document.getElementById('cocinero').checked;
    var administrador = document.getElementById('administrador').checked;

    // Simular el proceso de guardado
    setTimeout(function() {
        // Mostrar mensaje de éxito
        alert('Permisos guardados correctamente.');

        // Cerrar el popup
        cerrarPopup();
    }, 1000); // Simular una espera de 1 segundo antes de mostrar    
}

function eliminarUsuario(id) {
    // Simulación de eliminación de usuario
    var card = document.querySelector(`[data-id="${id}"]`);
    if (card) {
        card.style.display = 'none';
        console.log(`Usuario con ID ${id} eliminado.`);
    }
}

function mostrarPopup() {
    var popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'flex';
}

function cerrarPopup() {
    var popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'none';
}

function editarUsuario(id) {
    // Abrir el popup de edición de permisos
    var popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'block';
}


function cerrarPopup() {
    // Cerrar el popup de edición de permisos
    var popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'none';
}