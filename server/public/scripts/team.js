const renderTeam = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/teams')
    const data = await response.json()

    const teamContent = document.getElementById('team-content');
    const teamDetials = document.getElementById('team-details');
    let team = data.find(team => team.id === requestedID);
    if (team) {
        
        document.getElementById('name').textContent = team.name;
        document.getElementById('descrption').textContent = team.description;
        document.getElementById('NBA-Titles').textContent = `NBA Titles: ${team.championship}`;
        document.getElementById('image').src = team.image;
        const link = document.createElement('a');
        link.textContent = 'Return Homne';
        link.setAttribute('role', 'button');
        link.classList.add('secondary');
        link.href = '/'
        teamDetials.appendChild(link);
        document.title = `Team - ${team.name}`; 
    } else {
        const message = document.createElement('h2')
        message.textContent = 'Not Available 😞'
        teamContent.appendChild(message)
        
        const link = document.createElement('a');
        link.textContent = 'Return Homne';
        link.setAttribute('role', 'button');
        link.classList.add('secondary');
        link.href = '/'
        teamDetials.appendChild(link);
    }
}

renderTeam();