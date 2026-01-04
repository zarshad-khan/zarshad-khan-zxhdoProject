const projectData = {
    future: [
        { img: "images/projectData/future_cover.jpeg", title: "AI-Powered Homes", desc: "Future Project" },
        { img: "images/projectData/future2.jpeg", title: "Smart City", desc: "Future Project" },
        { img: "images/projectData/future3.jpeg", title: "Eco-Towers", desc: "Future Project" }
    ],
    roads: [
        { img: "images/projectData/roads_cover.jpeg", title: "Main Highway", desc: "Roads" },
        { img: "images/projectData/roads2.jpeg", title: "Urban Avenue", desc: "Roads" },
        { img: "images/projectData/roads3.jpeg", title: "Smart Road", desc: "Roads" }
    ],
    homes: [
        { img: "images/projectData/homes_cover.jpeg", title: "Modern Estate", desc: "Home Project" },
        { img: "images/projectData/homes2.jpeg", title: "Luxury Villa", desc: "Home Project" },
        { img: "images/projectData/homes3.jpeg", title: "Brick Residence", desc: "Home Project" }
    ]
};

const grid = document.getElementById('portfolio-grid');
const title = document.getElementById('portfolio-title');
const backBtn = document.getElementById('back-btn');
const initialContent = grid.innerHTML;

grid.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card.cover');
    if (!card) return;

    const category = card.dataset.category;
    showCategory(category);
});

function showCategory(cat) {
    const projects = projectData[cat];
    grid.innerHTML = ''; 
    
    projects.forEach(p => {
        grid.innerHTML += `
            <div class="project-card">
                <img src="${p.img}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Path+Error'">
                <div class="project-info">
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                </div>
            </div>
        `;
    });

    title.innerText = cat.charAt(0).toUpperCase() + cat.slice(1) + " Portfolio";
    backBtn.style.display = 'inline-block';
}

backBtn.addEventListener('click', () => {
    grid.innerHTML = initialContent;
    title.innerText = "Our Iconic Projects";
    backBtn.style.display = 'none';
});