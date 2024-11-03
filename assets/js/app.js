document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('mainContainer')
    const projects = document.getElementById('projects')
    const aboutMe = document.getElementById('aboutMe')

    // Initially display the main section
    main.style.display = 'flex';
    projects.style.display = 'none';
    aboutMe.style.display = 'none';

    main.classList.add('animate-fade-in');
    main.addEventListener('animationend', () => {
        main.classList.remove('animate-fade-in');
    }, { once: true });

    const setSectionVisibility = (section) => {
        Array.from(document.querySelectorAll('.container')).forEach(div => {
            if (div === section) {
                div.style.display = 'flex';
            } else {
                div.style.display = 'none';
            }
        });
    };

    const switchSection = (hideSection, showSection, enableScroll) => {
        setSectionVisibility(showSection);

        const sectionContent = showSection.querySelector('section');
        if (sectionContent) {
            sectionContent.style.display = 'block';
            sectionContent.classList.add('animate-fade-in');
            sectionContent.addEventListener('animationend', () => {
                sectionContent.classList.remove('animate-fade-in');
            }, { once: true });
        }

        if (showSection === main) {
            main.classList.add('animate-fade-in');
            main.addEventListener('animationend', () => {
                main.classList.remove('animate-fade-in');
            }, { once: true });
        }

        document.body.style.overflowY = enableScroll ? 'auto' : 'hidden';
        window.scrollTo(0, 0);
    };

    document.getElementById('projectsBtn').addEventListener('click', () => {
        switchSection(main, projects, true);
    });

    document.getElementById('aboutMeBtn').addEventListener('click', () => {
        switchSection(main, aboutMe, false);
    });

    document.getElementById('projectsToHomeBtn').addEventListener('click', () => {
        switchSection(projects, main, false);
    });

    document.getElementById('aboutMeToHomeBtn').addEventListener('click', () => {
        switchSection(aboutMe, main, false);
    });
});