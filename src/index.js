
import {getUsers} from './services/user-service'

let resultElem = document.querySelector('.result')


function readAndRenederUsers(targetElement){
    getUsers().then((data)=>{
        let ulElem = document.createElement("ul")

        data.forEach(user => {
            let liElem = document.createElement('li'),
                h3Elem = document.createElement('h3'),
                pElem = document.createElement('p');

                h3Elem.innerHTML = `${user.lastName},${user.firstName}`
                pElem.innerHTML = `${user.email}`
                liElem.appendChild(h3Elem)
                liElem.appendChild(pElem)
                ulElem.appendChild(liElem)

        });

        targetElement.appendChild(ulElem)

    })
}

readAndRenederUsers(resultElem)