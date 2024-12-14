function toggleCollapse() {
    const collapseContent = document.getElementById('collapse-content');
    const iconRight = document.querySelector('.icon-right');

    collapseContent.classList.toggle('open');
    iconRight.classList.toggle('rotated');
}

// Datos simulados
const citas = [
    {id: 1, fecha: "2024-12-01", hora: "09:00 AM", codigo: "C-001", nombre: "Juan Pérez", servicio: "Consulta General", estado: "PENDIENTE"},
    {id: 2, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", estado: "FINALIZADO"},
    {id: 3, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", estado: "FINALIZADO"},
    {id: 4, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", estado: "FINALIZADO"},
    {id: 5, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", estado: "FINALIZADO"},
    {id: 6, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", estado: "FINALIZADO"},
    {id: 7, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", estado: "FINALIZADO"},
    {id: 8, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", estado: "FINALIZADO"},
    {id: 9, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", estado: "FINALIZADO"},
    {id: 10, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", estado: "FINALIZADO"},
    {id: 11, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", estado: "FINALIZADO"},
            // Más citas...
];

let currentPage = 1;
let recordsPerPage = 10;

function renderCitas() {
    const citasBody = document.getElementById("citasBody");
    const startIndex = (currentPage - 1) * recordsPerPage;
    const selectedCitas = citas.slice(startIndex, startIndex + recordsPerPage);
    citasBody.innerHTML = "";

    selectedCitas.forEach((cita) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${cita.id}</td>
            <td>${cita.fecha}</td>
            <td>${cita.hora}</td>
            <td>${cita.codigo}</td>
            <td>${cita.nombre}</td>
            <td>${cita.servicio}</td>
            <td>
                <span class="status ${cita.estado === "PENDIENTE" ? "pendiente" : "finalizado"}">
                ${cita.estado}
                </span>
            </td>
            <td>
                <!-- Botón Editar -->
                <button class="btn-icon edit-btn" data-id="${cita.id}">
                    <img src="img/edit.png" alt="">
                </button>
                <!-- Botón Eliminar -->
                <button class="btn-icon delete-btn" data-id="${cita.id}">
                    <img src="img/delete.png" alt="">
                </button>
            </td>
        `;
        citasBody.appendChild(row);
    });

    // Añadir evento a los botones de edición
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const citaId = e.currentTarget.getAttribute("data-id");
            openEditModal(citaId);
        });
    });
}

function openEditModal(id) {
    const modal = document.getElementById("editModal");
    const cita = citas.find((cita) => cita.id == id);

    // Rellenar el formulario del modal con los datos de la cita
    document.getElementById("edit-codigo").value = cita.codigo;
    document.getElementById("edit-fecha").value = cita.fecha;
    document.getElementById("edit-dni").value = cita.dni;
    document.getElementById("edit-celular").value = cita.celular;
    document.getElementById("edit-nombre").value = cita.nombre;
    document.getElementById("edit-servicio").value = cita.servicio;
    document.getElementById("edit-email").value = cita.email;
    document.getElementById("edit-observaciones").value = cita.observaciones;

    // Mostrar el modal
    modal.classList.add("active");
}
//funcion para ir al html VistaTabla
function GuadarCambios() {
    // Redirecciona a la página VistaTabla.html
    window.location.href = "VistaTabla.html";
}

// Cerrar el modal
document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("editModal").classList.remove("active");
});

// Cerrar modal al hacer clic fuera del contenido
document.getElementById("editModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("editModal")) {
        document.getElementById("editModal").classList.remove("active");
    }
});


document.getElementById("recordsPerPage").addEventListener("change", function () {
    recordsPerPage = parseInt(this.value);
    currentPage = 1;
    renderCitas();
});

document.getElementById("nextPage").addEventListener("click", function () {
    if ((currentPage * recordsPerPage) < citas.length) {
        currentPage++;
        renderCitas();
    }
});

document.getElementById("prevPage").addEventListener("click", function () {
    if (currentPage > 1) {
        currentPage--;
        renderCitas();
    }
});

document.addEventListener("DOMContentLoaded", renderCitas);
