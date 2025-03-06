const user1 = {
    firstName: "Billie",
    lastName: "Krenzer",
    email: "uneadressemail@nomdedomaine.com",
    picture: "user.jpg",
    location: "ville",
    jobs: "RSA",
    id: "2321"
}

let employees

const $employeeDatailsModal = document.querySelector('.employee-details-modal')
const $employeeGrid = document.querySelector('.employee-grid')

async function getEmployees() {
    await fetch("https://randomuser.me/api/?results=12")
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            employees = data.results


            employees.forEach(employee => {

                const $employeeCard = document.createElement('div')
                $employeeCard.classList.add('employee-card')


                const $employeePic = document.createElement('img')
                $employeePic.src = employee.picture.large

                const $employeeInfos = document.createElement('div')


                const $employeeName = document.createElement('p')
                $employeeName.classList.add('employee-name')
                $employeeName.textContent = employee.name.first + " " + employee.name.last


                const $employeeEmail = document.createElement('p')
                $employeeEmail.classList.add('employee-email')
                $employeeEmail.textContent = employee.email

                const $employeeLocation = document.createElement('p')
                $employeeLocation.classList.add('employee-location')
                $employeeLocation.textContent = employee.location.city



                $employeeGrid.appendChild($employeeCard)
                $employeeCard.appendChild($employeePic)
                $employeeCard.appendChild($employeeInfos)
                $employeeInfos.appendChild($employeeName)
                $employeeInfos.appendChild($employeeEmail)
                $employeeInfos.appendChild($employeeLocation)

                $employeeCard.addEventListener("click", () => {
                    $employeeDatailsModal.style.display = "initial"

                })
            });
        })
}


getEmployees()



