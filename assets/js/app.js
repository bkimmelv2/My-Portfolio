document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('mainContainer')
    const projects = document.getElementById('projects')
    const aboutMe = document.getElementById('aboutMe')

    main.classList.add('animate-fade-in')

    document.getElementById('projectsBtn').addEventListener('click', () => {
        switchSection(main, projects)
    })

    document.getElementById('aboutMeBtn').addEventListener('click', () => {
        switchSection(main, aboutMe)
    })

    document.getElementById('projectsToHomeBtn').addEventListener('click', () => {
        switchSection(projects, main)
    })

    document.getElementById('aboutMeToHomeBtn').addEventListener('click', () => {
        switchSection(aboutMe, main)
    })

    const switchSection = (hideSection, showSection) => {
        hideSection.style.display = 'none'
        showSection.style.display = 'flex'
        const sectionContent = showSection.querySelector('section')
        sectionContent.style.display = 'block'
        sectionContent.classList.add('animate-fade-in')
        sectionContent.addEventListener('animationend', () => {
            sectionContent.classList.remove('animate-fade-in')
        }, { once: true })
    }
})