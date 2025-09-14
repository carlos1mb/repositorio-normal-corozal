// Simulación de la base de datos de proyectos
const projectsData = [
    {
        title: "Estrategias didácticas para fortalecer la comprensión lectora en los estudiantes del grado tercero de primaria de la Institución Educativa Exploremos",
        author: "Sandra Lascarro Benavides, Noralcy Jiménez Turizzo, Cindy Sampayo Rangel, Shellsy Arroyo Jiménez",
        genre: "Proyecto de Intervención",
        year: 2024,
        abstract: "La presente propuesta tiene como propósito esencial mejorar la comprensión lectora en los estudiantes del grado tercero del Instituto Educativo Exploremos mediante estrategias didácticas mediadas por las TIC",
        file: "proyectos/Intervencion-1.pdf"
    },
    {
        title: "Estrategias didácticas para fortalecer la comprensión lectora en los estudiantes del grado 4-01 de primaria de la Institución liceo Joaquín Vélez",
        author: "Sandra lascarro Benavides, Noralcy Jimenez Turizzo, Cindy Sampayo Rangel",
        genre: "Proyecto de Investigación",
        year: 2024,
        abstract: "Proyecto con el propósito de dar a conocer la gran importancia que tiene la comprensión lectora en los niños, por razones del bajo desempeño que los niños presentan",
        file: "proyectos/Investigacion-1.pdf"
    },
    {
        title: "Actividades lúdicas-recreativas como estrategias para enfrentar la indisciplina en el aula de clases del centro educativo el escobar sede sarguerito.",
        author: "Ernesto Pacheco Barrios, Jenifer Lopez, Lilibet Ruiz",
        genre: "Proyecto de Investigación",
        year: 2024,
        abstract: "La indisciplina es un tipo de comportamiento que se desvía de lo generalmente aceptado por las normas, como se ve en casi todas las facetas de la sociedad; en casa, en centros educativos, lugares públicos y religiosos.",
        file: "proyectos/investigacion-2.pdf"
    },
    {
        title: "Cero bullying: respeto y me complemento en la diferencia",
        author: "Adriana Trompeta Pisciotti, Carlos Julio Salas Romero,Romario Alfonso, Orlando Rangel Alvarado",
        genre: "Proyecto de Investigación",
        year: 2022,
        abstract: "Proyecto de investigación enfocado en establecer en actividades innovadoras, lúdicas y experimentales que les permitan mejorar su convivencia escolar",
        file: "proyectos/investigacion-3.pdf"
    },
    {
        title: "Estrategia lúdica pedagógica para fomentar el rescate de los valores a través de los juegos tradicionales en el aula de clase del grado segundo de primaria de la Institución Educativa Técnica 12 de octubre",
        author: "Arévalo Mateus Orelis, Burgos Bolaño Claudia Patricia, Duran Oliveros Betty Del Carmen, Medina Ortega Eva María",
        genre: "Proyecto de Investigación",
        year: 2023,
        abstract: "En un mundo en constante cambio, la transmisión de valores y principios éticos se ha vuelto esencial para la formación integral de los estudiantes. Los juegos tradicionales ofrecen una oportunidad única para enseñar valores como la cooperación, el respeto y la solidaridad de una manera lúdica y significativa.",
        file: "proyectos/investigacion-4.pdf"
    },
    {
        title: "PPP La Magia de la Lectura",
        author: "Ángela Corrales Jiménez, Jennifer Rojas Salcedo, Julieth Pahola Payares Colón, Zenith Del Carmen Robles Baldovino",
        genre: "Proyecto pedagógico productivo",
        year: 2025,
        abstract: "La lectura en los niños juega un papel crucial en el desarrollo de habilidades fundamentales para su aprendizaje y crecimiento académico.",
        file: "proyectos/Proyecto-2.pdf"
    },
     {
        title: "PPP Derivados de los lácteos",
        author: "Colon Franco María Luisa, Ortega Martínez Sixta María, Tovar Ortega Rosa Inés",
        genre: "Proyecto pedagógico productivo",
        year: 2025,
        abstract: "La educación como eje principal en el desarrollo social, económico, político, cultural y ético, la cual permite el enlace para generar en cada niño conocimientos para sí mismo y su contexto.",
        file: "proyectos/Proyecto-3.pdf"
    },
    {
        title: "Plan de clases: Lateralidad - movimiento en el plano",
        author: "Joyce Abello Valderrama, Rosa Aura Angulo",
        genre: "Momento pedagógico",
        year: 2025,
        abstract: "Plan de clases del área de matemáticas en la asignatura de geometría para el grado primero.",
        file: "proyectos/momento-1.pdf"
    },
    {
        title: "Plan de clases: La Fabula – Producciòn textual",
        author: "Danitza Viloria, Leidys Calao, Triesten Santamaria, Maria Alfaro.",
        genre: "Momento pedagógico",
        year: 2025,
        abstract: "Plan de clases del área de humanidades en la asignatura de lengua castellana para el grado tercero.",
        file: "proyectos/momento-2.pdf"
    },
    {
        title: "Plan de clases: La belleza de las sombras – Expresión grafica",
        author: "Deller Campo Orozco, Alejandra Flores Landis, Karina Padilla Salas, Ma. Camila Pérez Manjarrés, Wendys Vargas Gil",
        genre: "Momento pedagógico",
        year: 2025,
        abstract: "Plan de clases del área de educación artística y cultural en la asignatura de educación artística para el grado Quinto.",
        file: "proyectos/momento-3.pdf"
    },
    {
        title: "Guía didáctica Mi aula, mi mundo digital",
        author: "Carlos Martinez Balasnoa",
        genre: "Material Didáctico",
        year: 2024,
        abstract: "Este material busca orientar a los docentes en formación en el desarrollo de habilidades necesarias para utilizar las TIC de manera efectiva en su práctica pedagógica",
        file: "proyectos/guia1.pdf"
    },
    // Puedes agregar más proyectos aquí
];

// Obtener elementos del DOM
const projectsContainer = document.getElementById('projects-container');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const yearFilter = document.getElementById('yearFilter');
const resetBtn = document.getElementById('resetFiltersBtn');

// Función para generar las opciones de filtro (género y año)
const populateFilters = () => {
    const genres = [...new Set(projectsData.map(p => p.genre))];
    const years = [...new Set(projectsData.map(p => p.year))].sort((a, b) => b - a);

    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });

    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
};

// Función principal para filtrar y renderizar proyectos
const filterAndRenderProjects = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value;
    const selectedYear = yearFilter.value;

    const filteredProjects = projectsData.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm) ||
                              project.author.toLowerCase().includes(searchTerm) ||
                              project.abstract.toLowerCase().includes(searchTerm);
        
        const matchesGenre = selectedGenre === "" || project.genre === selectedGenre;
        const matchesYear = selectedYear === "" || project.year == selectedYear;

        return matchesSearch && matchesGenre && matchesYear;
    });

    renderProjects(filteredProjects);
};

// Event listeners para los filtros y la búsqueda
searchInput.addEventListener('input', filterAndRenderProjects);
genreFilter.addEventListener('change', filterAndRenderProjects);
yearFilter.addEventListener('change', filterAndRenderProjects);

// Event listener para el botón de restablecer
resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    genreFilter.value = '';
    yearFilter.value = '';
    filterAndRenderProjects();
});

// Función para renderizar los proyectos
const renderProjects = (projects) => {
    projectsContainer.innerHTML = '';
    if (projects.length === 0) {
        projectsContainer.innerHTML = '<p class="loading-message">No se encontraron proyectos que coincidan con los filtros.</p>';
        return;
    }
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p><strong>Autor:</strong> ${project.author}</p>
            <p><strong>Género:</strong> ${project.genre}</p>
            <p><strong>Año:</strong> ${project.year}</p>
            <p><strong>Resumen:</strong> ${project.abstract.substring(0, 100)}...</p>
            <a href="${project.file}" download="${project.title.replace(/ /g, '_')}.pdf" class="download-button">
                <i class="fas fa-download"></i> Descargar PDF
            </a>
        `;
        projectsContainer.appendChild(projectCard);
    });
};

// Cargar filtros y proyectos al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    filterAndRenderProjects();

});



