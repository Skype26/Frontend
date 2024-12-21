// Notificaciones
function toggleNotifications() {
    const notificationDropdown = document.getElementById("notification-dropdown");
    notificationDropdown.classList.toggle("hidden");
}

//Collapse
function toggleCollapse() {
    const collapseContent = document.getElementById('collapse-content');
    collapseContent.classList.toggle("hidden");
    const iconRight = document.querySelector('.icon-right');

    // Alterna la clase "open" en el contenido
    collapseContent.classList.toggle('open');

    // Alterna la clase "rotated" en el ícono derecho
    iconRight.classList.toggle('rotated');
}

// Datos simulados (agrego 'celular' y 'dni')
const citas = [
    {id: 1, fecha: "2024-12-01", hora: "09:00 AM", codigo: "C-001", nombre: "Juan Pérez", servicio: "Consulta General", celular: "987654322", dni: "87654321", estado: "FINALIZADO"},
    {id: 2, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", celular: "987654322", dni: "87654321", estado: "FINALIZADO"},
    {id: 3, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", celular: "987654322", dni: "87654321", estado: "FINALIZADO"},
    {id: 4, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", celular: "987654322", dni: "87654321", estado: "FINALIZADO"},
    {id: 5, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", celular: "987654322", dni: "87654321", estado: "FINALIZADO"},
    {id: 6, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", celular: "987654322", dni: "87654321", estado: "FINALIZADO"},
    {id: 7, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", celular: "987654322", dni: "87654321", estado: "FINALIZADO"},
    {id: 8, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", celular: "987654322", dni: "87654321", estado: "FINALIZADO"},
    {id: 9, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", celular: "987654322", dni: "87654321", estado: "FINALIZADO"},
    {id: 10, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", celular: "987654322", dni: "87654321", estado: "FINALIZADO"},
    {id: 11, fecha: "2024-12-02", hora: "10:00 AM", codigo: "C-002", nombre: "María López", servicio: "Odontología", celular: "987654322", dni: "87654321", estado: "FINALIZADO"},
            // Más citas...
];

let currentPage = 1;
let recordsPerPage = 10;

function renderCitas() {
    const citasBody = document.getElementById("citasBody");
    const startIndex = (currentPage - 1) * recordsPerPage;
    const selectedCitas = citas.slice(startIndex, startIndex + recordsPerPage);
    citasBody.innerHTML = ""; // Limpia el cuerpo de la tabla

    selectedCitas.forEach((cita) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${cita.id}</td>
            <td>${cita.fecha}</td>
            <td>${cita.hora}</td>
            <td>${cita.codigo}</td>
            <td>${cita.nombre}</td>
            <td>${cita.servicio}</td>
            <td>${cita.celular}</td>
            <td>${cita.dni}</td>
        `;
        citasBody.appendChild(row);
    });
}
function regresarPagina() {
    // Redirecciona a la página ListaCitas.html
    window.location.href = "ListaCitas.html";
}

// Renderiza la tabla cuando el contenido esté listo
document.addEventListener("DOMContentLoaded", renderCitas);
