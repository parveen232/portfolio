projects = [
    {
        image: "https://github.com/parveen232/frontend-mentor-challenges/raw/master/ss-desktop.png",
        title: "Frontend Mentor Challenges",
        description: "My submissions for the Frontend Mentor Challenges. Added a filter functionality to filter challenges based on languages and difficulty.",
        github: "https://github.com/parveen232/frontend-mentor-challenges",
        live: "https://frontend-mentor-challenges-pk.netlify.app/"
    },
    {
        image: "https://github.com/parveen232/iCodeThis/raw/main/ss-desktop.png",
        title: "iCodeThis",
        description: "Built some projects with design inspiration from uidesigndaily, through iCodeThis challenge.",
        github: "https://github.com/parveen232/iCodeThis",
        live: "https://icodethis.netlify.app/"
    },
    {
        image: "https://github.com/parveen232/ecommerce/raw/main/ss-desktop.png",
        title: "ecommerce",
        description: "An eCommerce application built with React.js",
        github: "https://github.com/parveen232/ecommerce",
        live: "https://ecommerce-p232.netlify.app/"
    }
]

const projectsList = document.querySelector('.projects-list');

projects.forEach(({ image, title, description, github, live }) => {
    const listItem = document.createElement('li');
    listItem.classList.add('item');

    listItem.innerHTML = `
                <div class="img-container">
                    <a href="${live}" target="_blank">
                        <img src="${image}" alt="image">
                    </a>
                </div>
                <div class="box-bottom">
                    <div class="project-name">
                        <a href="${live}" target="_blank">
                            <h3>${title}</h3>
                        </a>
                    </div>
                    <div class="description">
                        <p>${description}</p>
                    </div>
                    <div class="links">
                        <a href="${github}" target="_blank">
                            <img src="./images/icon-github.svg" alt="icon-github">
                            GitHub
                        </a>
                        <a href="${live}" target="_blank">
                            <img src="./images/icon-link.svg" alt="icon-link">
                            Live Demo
                        </a>
                    </div>
                </div>
            `;

    projectsList.appendChild(listItem);
});

const contactMe = document.querySelector('.contact-me');

const ContactMeText = contactMe.innerHTML;
contactMe.innerHTML = ` `;

for (const word of ContactMeText) {
    const spanEl = document.createElement('span');
    spanEl.innerHTML = word;
    contactMe.appendChild(spanEl);
}

const contactMeList = document.querySelectorAll('.contact-me span');
let mouse = 'idk';

contactMe.addEventListener('mouseenter', () => {
    mouse = 'enter';
    for (const [index, word] of contactMeList.entries()) {
        setTimeout(() => {
            if(mouse == 'enter') {
                word.classList.add('royalblue')
            }
        }, 40 * index);
    }
})

contactMe.addEventListener('mouseleave', () => {
    mouse = 'leave';
    for (let i = contactMeList.length - 1; i >= 0; i--) {
        let z = [10,9,8,7,6,5,4,3,2,1];
        setTimeout(() => {
            if(mouse == 'leave') {
                contactMeList[i].classList.remove('royalblue')
            }
        }, 40 * z[i]);
    }
})