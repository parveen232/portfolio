projects = [
    {
        image: "https://github.com/parveen232/frontend-mentor-challenges/raw/master/ss-desktop.png",
        title: "Frontend Mentor Challenges",
        description: "My submissions for the Frontend Mentor Challenges with filter functionality.",
        tech: ['html', 'css', 'js'],
        github: "https://github.com/parveen232/frontend-mentor-challenges",
        live: "https://frontend-mentor-challenges-pk.netlify.app/"
    },
    {
        image: "https://github.com/parveen232/iCodeThis/raw/main/ss-desktop.png",
        title: "iCodeThis",
        description: "Built some projects with design inspiration from uidesigndaily, through iCodeThis challenge.",
        tech: ['html', 'css', 'js'],
        github: "https://github.com/parveen232/iCodeThis",
        live: "https://icodethis.netlify.app/"
    },
    {
        image: "https://github.com/parveen232/form-team/raw/main/ss-desktop.png",
        title: "formteam",
        description: "A React.js application for team creation that provides a pool of users from different domains.",
        tech: ['react.js'],
        github: "https://github.com/parveen232/form-team",
        live: "https://formteam.vercel.app/"
    },
    {
        image: "https://github.com/parveen232/ecommerce/raw/main/ss-desktop.png",
        title: "ecommerce",
        description: "An eCommerce application built with React.js",
        tech: ['react.js'],
        github: "https://github.com/parveen232/ecommerce",
        live: "https://ecommerce-p232.netlify.app/"
    },
    {
        image: "https://github.com/parveen232/app-collection/raw/main/1-Beginner/border-radius-previewer/images/ss-after.jpg",
        title: "border-radius Previewer",
        description: "Preview how CSS3 border-radius values affect an element",
        tech: ['html', 'css', 'js'],
        github: "https://github.com/parveen232/app-collection/blob/main/1-Beginner/border-radius-previewer",
        live: "https://app-collection.netlify.app/1-Beginner/border-radius-previewer/index.html"
    },
    {
        image: "https://github.com/parveen232/fylo-landing-page-with-two-column-layout/raw/main/images/ss-desktop.png",
        title: "Fylo landing page with two column layout",
        description: "Built this Fylo landing page with Tailwind CSS",
        tech: ['tailwind css',],
        github: "https://github.com/parveen232/fylo-landing-page-with-two-column-layout",
        live: "https://fylo-tailwindcss.netlify.app/"
    },
    {
        image: "https://github.com/parveen232/blog-nextjs/raw/main/ss-desktop.png",
        title: "blog-nextjs",
        description: "Next.js App",
        tech: ['next.js'],
        github: "https://github.com/parveen232/blog-nextjs",
        live: "https://blog-nextjs-p232.vercel.app/"
    }
]

const projectsList = document.querySelector('.projects-list');

projects.forEach(({ image, title, description, tech, github, live }) => {
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
                    <div class="tech-links">
                        <div class="tech-container">
                            ${techFun(tech)}
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
                contactMeList[i].classList.remove('royalblue');
            }
        }, 40 * z[i]);
    }
})

function techFun(techArr) {
    const spanColl = document.createElement('div');

    for (const tech of techArr) {
        const spanEl = document.createElement('span');

        if (tech == 'html') {
            spanEl.classList.add('html-clr');
        }
        if (tech == 'css') {
            spanEl.classList.add('css-clr');
        }
        if (tech == 'js') {
            spanEl.classList.add('js-clr');
        }
        if (tech == 'react.js') {
            spanEl.classList.add('rjs-clr');
        }
        if (tech == 'tailwind css') {
            spanEl.classList.add('rjs-clr');
        }
        if (tech == 'next.js') {
            spanEl.classList.add('njs-clr');
        }

        spanEl.innerHTML = tech.toUpperCase();
        spanColl.appendChild(spanEl);
    }
    const result = spanColl.innerHTML;
    spanColl.remove();
    return result;
}

// project list
const items = document.querySelectorAll(".item");

for (let [index, item] of items.entries()) {
    if(index > 2) {
        item.style.display = `none`;
    }
}

const showBtn = document.querySelector(".show-btn"); 
let more = true;
showBtn.addEventListener('click', () => {
    if(more) {
        for (let [index, item] of items.entries()) {
            if(index > 2) {
                item.style.display = `flex`;
            }
        }
        showBtn.innerHTML = `Show Less`;
        more = false;
    } else {
        for (let [index, item] of items.entries()) {
            if(index > 2) {
                item.style.display = `none`;
            }
        }
        showBtn.innerHTML = `Show More`;
        showBtn.setAttribute('href', `#projects`);
        setTimeout(() => {
            showBtn.removeAttribute('href');
        }, 10)
        more = true;
    }
})