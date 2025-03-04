const user1 = {
    firstName: "Billie",
    lastName: "Krenzer",
    email: "uneadressemail@nomdedomaine.com",
    picture: "user.jpg",
    location: "ville",
    jobs: "RSA",
    id: "2321"
}


// const employees = [
//     {
//         firstName: "Alice",
//         lastName: "Dupont",
//         email: "alice.dupont@example.com",
//         picture: "user.jpg",
//         location: "Paris",
//         jobs: "Développeur",
//         id: "1001"
//     },
//     {
//         firstName: "Bob",
//         lastName: "Martin",
//         email: "bob.martin@example.com",
//         picture: "user.jpg",
//         location: "Lyon",
//         jobs: "Designer",
//         id: "1002"
//     },
//     {
//         firstName: "Charlie",
//         lastName: "Lefevre",
//         email: "charlie.lefevre@example.com",
//         picture: "user.jpg",
//         location: "Marseille",
//         jobs: "Analyste",
//         id: "1003"
//     },
//     {
//         firstName: "David",
//         lastName: "Durand",
//         email: "david.durand@example.com",
//         picture: "user.jpg",
//         location: "Toulouse",
//         jobs: "Chef de projet",
//         id: "1004"
//     },
//     {
//         firstName: "Eva",
//         lastName: "Rousseau",
//         email: "eva.rousseau@example.com",
//         picture: "user.jpg",
//         location: "Nice",
//         jobs: "Marketing",
//         id: "1005"
//     },
//     {
//         firstName: "Frank",
//         lastName: "Moreau",
//         email: "frank.moreau@example.com",
//         picture: "user.jpg",
//         location: "Strasbourg",
//         jobs: "Consultant",
//         id: "1006"
//     },
//     {
//         firstName: "Grace",
//         lastName: "Fournier",
//         email: "grace.fournier@example.com",
//         picture: "user.jpg",
//         location: "Bordeaux",
//         jobs: "RH",
//         id: "1007"
//     },
//     {
//         firstName: "Hugo",
//         lastName: "Girard",
//         email: "hugo.girard@example.com",
//         picture: "user.jpg",
//         location: "Lille",
//         jobs: "Support technique",
//         id: "1008"
//     },
//     {
//         firstName: "Ines",
//         lastName: "Lemaire",
//         email: "ines.lemaire@example.com",
//         picture: "user.jpg",
//         location: "Nantes",
//         jobs: "Comptable",
//         id: "1009"
//     },
//     {
//         firstName: "Jack",
//         lastName: "Bernard",
//         email: "jack.bernard@example.com",
//         picture: "user.jpg",
//         location: "Rennes",
//         jobs: "Administrateur",
//         id: "1010"
//     }
// ];


const $employeeGrid = document.querySelector('.employee-grid')

async function createCard(){
    const response = await fetch("https://randomuser.me/api/?results=10")
    const employees = await response.json()
    employees.forEach(element => {


        const $employeeCard = document.createElement('div')
        $employeeCard.classList.add('employee-card')
    
    
        const $employeePic = document.createElement('img')
        $employeePic.src =  element.picture
    
        const $employeeInfos = document.createElement('div')
    
    
        const $employeeName = document.createElement('p')
        $employeeName.classList.add('employee-name')
        $employeeName.textContent = element.firstName + " " +element.lastName
    
    
        const $employeeEmail = document.createElement('p')
        $employeeEmail.classList.add('employee-email')
        $employeeEmail.textContent = element.email
    
        const $employeeLocation = document.createElement('p')
        $employeeLocation.classList.add('employee-location')
        $employeeLocation.textContent = element.location
    
        $employeeGrid.appendChild($employeeCard)
        $employeeCard.appendChild($employeePic)
        $employeeCard.appendChild($employeeInfos)
        $employeeInfos.appendChild($employeeName)
        $employeeInfos.appendChild($employeeEmail)
        $employeeInfos.appendChild($employeeLocation)
    });
}

createCard()