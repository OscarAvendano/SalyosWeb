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
// Función para mostrar el popup
function mostrarPopup() {
    document.getElementById("popupContainer").style.display = "flex";
}
function salirMenu(){
    window.location.href = "../VIEWS/admin.html";
}
// Función para cerrar el popup
function cerrarPopup() {
    document.getElementById("popupContainer").style.display = "none";
}

// Función para simular la confirmación del pedido
function confirmarPedido() {
    var mesaSelect = document.getElementById("mesaSelect");
    var mesaSeleccionada = mesaSelect.options[mesaSelect.selectedIndex].text;
    alert("Pedido confirmado para la mesa: " + mesaSeleccionada);
    cerrarPopup();
}

function validarCampos() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuario.trim() === "" || contrasena.trim() === "") {
        alert("Por favor, ingresa un usuario y contraseña válidos.");
        return false;
    }

    // Simulación de inicio de sesión exitoso
    var esAdmin = usuario === "admin" && contrasena === "admin123";
    
    if (esAdmin) {
        alert("Inicio de sesión exitoso como administrador.");
        window.location.href = "../VIEWS/admin.html"; // Redirigir a la página de administrador
    } else {
        alert("Inicio de sesión exitoso como usuario.");
        window.location.href = "../VIEWS/TomaPedido.html"; // Redirigir a la página de usuario
    }

    return false; // Evitar el envío del formulario por ahora
}