const techData = {
    BCI: {
        description: "Инновационная технология, позволяющая пользователям взаимодействовать с устройствами с помощью мыслей. BCI обеспечивает прямую связь между мозгом и компьютером, что открывает новые горизонты для взаимодействия с технологиями. Возможности включают управление курсором, роботами и даже протезами с помощью мыслей, что делает технологии доступными для людей с ограниченными возможностями.",
        companies: [
            { name: "Neuralink", url: "https://www.neuralink.com" },
            { name: "Kernel", url: "https://www.kernel.com" }
        ],
        videos: [
            { title: "Brain-Computer Interface: Connecting Minds", url: "https://www.youtube.com/watch?v=3jU4F0lHHu4" },
            { title: "Neuralink: Elon Musk's Plan", url: "https://www.youtube.com/watch?v=25DgJNGwC0g" }
        ]
    },
    AR: {
        description: "Наложение цифровой информации на реальный мир. Технологии дополненной реальности (AR) преобразуют то, что мы видим, добавляя графику, звуки и другие сенсорные улучшения в реальную среду. Это открывает возможности для обучения, развлечений и бизнеса, позволяя пользователям взаимодействовать с цифровым контентом в реальном времени.",
        companies: [
            { name: "Meta", url: "https://www.meta.com" },
            { name: "Niantic", url: "https://nianticlabs.com" }
        ],
        videos: [
            { title: "What is Augmented Reality?", url: "https://www.youtube.com/watch?v=hJbXH2E6I6U" },
            { title: "Augmented Reality: The Future of Entertainment", url: "https://www.youtube.com/watch?v=WZ2QNNL1ae8" }
        ]
    },
    Quantum: {
        description: "Использование квантовой механики для вычислений. Квантовые компьютеры способны выполнять сложные вычисления значительно быстрее, чем классические компьютеры, благодаря использованию квантовых битов (кубитов). Это открывает двери для новых возможностей в науке, медицине и технологиях, что может привести к прорывам в решении сложных задач.",
        companies: [
            { name: "IBM Quantum", url: "https://www.ibm.com/quantum" },
            { name: "Rigetti Computing", url: "https://www.rigetti.com" }
        ],
        videos: [
            { title: "Quantum Computing Explained", url: "https://www.youtube.com/watch?v=Y5A4rU_U0bM" },
            { title: "How Quantum Computers Work", url: "https://www.youtube.com/watch?v=6F3gZ5w8D2M" }
        ]
    },
    Genetic: {
        description: "Изменение ДНК для лечения и улучшения. Генетическое редактирование позволяет ученым точно изменять ДНК в организмах, что открывает возможности для лечения генетических заболеваний, улучшения сельскохозяйственных культур и создания новых терапий. Технология CRISPR является одним из самых многообещающих инструментов в этой области.",
        companies: [
            { name: "CRISPR Therapeutics", url: "https://www.crisprtx.com" },
            { name: "Editas Medicine", url: "https://www.editasmedicine.com" }
        ],
        videos: [
            { title: "CRISPR Explained", url: "https://www.youtube.com/watch?v=Q5L8-2J9hF0" },
            { title: "The Future of Genetic Editing", url: "https://www.youtube.com/watch?v=F9iI7I7BvTE" }
        ]
    },
    Invisibility: {
        description: "Методы, делающие объекты невидимыми. Технологии невидимости включают использование специальных материалов и оптики, которые могут изменять путь света вокруг объекта, что делает его невидимым для человеческого глаза. Эти технологии имеют потенциальные применения в военной сфере и в области защиты конфиденциальности.",
        companies: [
            { name: "Hyperstealth Biotechnology", url: "https://www.hyperstealth.com" },
            { name: "Invisibility Shield Co.", url: "https://invisibilityshield.com" }
        ],
        videos: [
            { title: "How this 'Invisibility Cloak' Material is Made", url: "https://www.youtube.com/watch?v=0oc1LJexgp0" },
            { title: "Can We Make Invisibility Cloaks?", url: "https://www.youtube.com/watch?v=Ot2tmN4Kq3Q" }
        ]
    },
    Nanotech: {
        description: "Создание материалов на наноуровне. Нанотехнологии позволяют манипулировать веществами на атомном и молекулярном уровнях, что приводит к созданию инновационных материалов с уникальными свойствами. Эти технологии находят применение в медицине, электронике и производстве, улучшая характеристики продуктов и процессов.",
        companies: [
            { name: "Nanobiotix", url: "https://www.nanobiotix.com" },
            { name: "Nanotechnology World", url: "https://www.nanotechnologyworld.com" }
        ],
        videos: [
            { title: "What is Nanotechnology?", url: "https://www.youtube.com/watch?v=DAOFpgocfrg" },
            { title: "Power of Nanotechnology: Transforming Our World", url: "https://www.youtube.com/watch?v=31LV1USxwE0" }
        ]
    },
    Drones: {
        description: "Беспилотные летательные аппараты. Дроны находят применение в различных сферах, включая сельское хозяйство, доставку товаров и разведку. Эти устройства могут выполнять задачи с высокой точностью и в труднодоступных местах, что делает их ценным инструментом в современном мире.",
        companies: [
            { name: "DJI", url: "https://www.dji.com" },
            { name: "Wing (Google)", url: "https://wing.com" }
        ],
        videos: [
            { title: "How Drones Work", url: "https://www.youtube.com/watch?v=N_XneaFmOmU" },
            { title: "The Future of Drones", url: "https://www.youtube.com/watch?v=6Wn0JQn0r6A" }
        ]
    },
    AI: {
        description: "Создание машин, способных выполнять задачи, требующие человеческого интеллекта. Искусственный интеллект (AI) позволяет автоматизировать процессы, улучшать качество обслуживания и принимать решения на основе анализа больших данных. AI уже используется в различных областях, от медицины до финансов, изменяя способы работы компаний.",
        companies: [
            { name: "OpenAI", url: "https://www.openai.com" },
            { name: "DeepMind", url: "https://deepmind.com" }
        ],
        videos: [
            { title: "AI: What is the Future of Artificial Intelligence?", url: "https://www.youtube.com/watch?v=LK5j3pp0Too" },
            { title: "What is AI? - AI Basics", url: "https://www.youtube.com/watch?v=J4RqCSD--Dg" }
        ]
    },
    Synthetic: {
        description: "Проектирование новых биологических систем. Синтетическая биология сочетает биологию, инженерное дело и информатику, чтобы создавать новые организмы с заданными свойствами. Это может привести к созданию новых терапий, экологически чистых источников энергии и более устойчивых сельскохозяйственных культур.",
        companies: [
            { name: "Ginkgo Bioworks", url: "https://www.ginkgobioworks.com" },
            { name: "Zymeworks", url: "https://www.zymeworks.com" }
        ],
        videos: [
            { title: "In-Depth Exploration of Synthetic Biology", url: "https://www.youtube.com/watch?v=OJaNxRYW-Zk" },
            { title: "The Future of Synthetic Biology", url: "https://www.youtube.com/watch?v=GhfwZq4PWJ0" }
        ]
    },
    Holograms: {
        description: "Технология отображения трехмерных изображений. Голограммы создаются с помощью лазеров и позволяют представлять информацию в объеме. Эти технологии находят применение в развлечениях, образовании и рекламе, предлагая новые способы взаимодействия с контентом.",
        companies: [
            { name: "Realfiction", url: "https://www.realfiction.com" },
            { name: "Holoxica", url: "https://www.holoxica.com" }
        ],
        videos: [
            { title: "How Holograms Work", url: "https://www.youtube.com/watch?v=3H1ZzAxg27E" },
            { title: "Holography: The Future of 3D Technology", url: "https://www.youtube.com/watch?v=K0flkUwTwM0" }
        ]
    },
    Plasma: {
        description: "Использование плазмы в различных приложениях. Плазменные технологии могут применяться в медицине, производстве и энергетике. Например, плазменные двигатели имеют потенциал для использования в космических полетах благодаря высокой эффективности и мощности.",
        companies: [
            { name: "Ad Astra Rocket Company", url: "https://www.adastrarocket.com" },
            { name: "Plasma Technologies", url: "https://www.plasmatechnologies.com" }
        ],
        videos: [
            { title: "What is Plasma Technology?", url: "https://www.youtube.com/watch?v=TP5q_rDqDF8" },
            { title: "Plasma Engines: The Future of Space Travel", url: "https://www.youtube.com/watch?v=U6tiGoYh9cA" }
        ]
    },
    Smart: {
        description: "Интеллектуальные материалы, реагирующие на внешние условия. Умные материалы могут изменять свои свойства в зависимости от окружающей среды, что открывает новые возможности для создания адаптивных конструкций и технологий. Это может привести к улучшению безопасности и эффективности в различных областях.",
        companies: [
            { name: "Flextronics", url: "https://www.flextronics.com" },
            { name: "Smart Materials", url: "https://www.smartmaterials.com" }
        ],
        videos: [
            { title: "Smart Materials and Their Applications", url: "https://www.youtube.com/watch?v=LJ6FGC0wPII" },
            { title: "The Future of Smart Materials", url: "https://www.youtube.com/watch?v=dP76X0h6GHM" }
        ]
    }
};

const cells = document.querySelectorAll('.cell');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-button');

// Функция для закрытия модального окна
const closeModal = () => {
    modal.classList.remove('open'); // Убираем класс "open"
    
    // Ждем завершения анимации перед тем, как скрыть окно
    setTimeout(() => {
        modal.style.display = 'none'; // Скрываем модальное окно после завершения анимации
    }, 300); // Задержка в 300ms, соответствует времени анимации в CSS
};


// Обработчик клика для кнопки закрытия
closeButton.addEventListener('click', closeModal);

// Обработчик нажатия клавиши Esc
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Обработчик клика вне модального окна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Обработчик событий для ячеек
// Обработчик событий для ячеек (открытие модального окна)
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const tech = cell.getAttribute('data-tech');
        const techInfo = techData[tech];

        let videoLinks = '';
        techInfo.videos.forEach(video => {
            videoLinks += `<li><a href="${video.url}" target="_blank">${video.title}</a></li>`;
        });

        modalContent.innerHTML = `
            <span class="close-button">&times;</span>
            <h2>${tech}</h2>
            <p>${techInfo.description}</p>
            <h3>Компании:</h3>
            <ul>
                ${techInfo.companies.map(company => `<li><a href="${company.url}" target="_blank">${company.name}</a></li>`).join('')}
            </ul>
            <h3>Видео:</h3>
            <ul>${videoLinks}</ul>
        `;

        const closeButton = modalContent.querySelector('.close-button');
        closeButton.addEventListener('click', closeModal);

        modal.style.display = 'block'; // Сначала показываем окно
        setTimeout(() => modal.classList.add('open'), 10); // Задержка для плавной анимации
    });
});
let isMenuOpen = false; // Флаг для отслеживания состояния меню

document.querySelector('.menu-button').addEventListener('click', () => {
    const dropdownMenu = document.getElementById('dropdownMenu');
    isMenuOpen = !isMenuOpen; // Переключаем состояние
    dropdownMenu.style.display = isMenuOpen ? 'block' : 'none'; // Показываем или скрываем меню
});

// Закрытие меню при клике вне его
window.addEventListener('click', (event) => {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (!event.target.matches('.menu-button') && !event.target.matches('.dropdown-item')) {
        dropdownMenu.style.display = 'none';
        isMenuOpen = false; // Меню закрыто
    }
});

