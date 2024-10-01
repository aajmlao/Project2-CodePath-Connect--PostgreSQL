const renderTeams = async () => {

    const response = await fetch('/teams')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
    if (data) {
        data.map(team => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            card.style.backgroundImage = `url(${team.image})`
            card.style.backgroundRepeat = 'no-repeat'
            card.style.backgroundSize = '100%'

            const name = document.createElement('h3')
            name.textContent = team.name
            topContainer.appendChild(name)

            const championship = document.createElement('p')
            championship.textContent = 'Total Championships: ' + team.championship
            topContainer.appendChild(championship)
            
            const link = document.createElement('a')
            link.textContent = 'Read More'
            link.setAttribute('role', 'button')
            link.href = `/teams/${team.id}`
            topContainer.appendChild(link)

            card.appendChild(topContainer)
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Teams Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
} else {
    renderTeams();
}
