console.log("Hello World!");

const projectNode = document.querySelector('#project-container')

for (i = 1; i <= 6; i++) {
    // create div element
    const div = document.createElement('div')

    // style div element
    div.style.display = 'flex'
    div.style.flexDirection = 'column'
    div.style.justifyContent = 'space-between'
    div.style.borderRadius = '12px'
    div.style.border = '1px solid black'
    div.style.backgroundColor = 'white'
    div.style.padding = '24px'

    // append div to its designated parent node
    projectNode.appendChild(div)

    //another parent
    const parent = document.createElement('div')
    div.appendChild(parent)

    // create title and style it
    const p = document.createElement('p')
    p.style.margin = '0px'
    p.style.padding = '0px'
    p.style.fontSize = '18px'
    p.style.fontWeight = 'bold'

    // create description and style it
    const describe = document.createElement('p')
    describe.style.margin = '0px'
    describe.style.padding = '0px'
    describe.style.paddingTop = '12px'

    // dynamic logic to create the text content of the titles and descriptions
    if (i == 1) {
        p.textContent = 'Super Cool Project'
        describe.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    } else if (i == 2) {
        p.textContent = 'Less Cool Project'
        describe.textContent = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    } else if (i == 3) {
        p.textContent = 'Impossible App'
        describe.textContent = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    } else if (i == 4) {
        p.textContent = 'Easy Peasy App'
        describe.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'        
    } else if (i == 5) {
        p.textContent = 'Ad Blocker'
        describe.textContent = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    } else {
        p.textContent = 'Money Maker'
        describe.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }

    // append the elements in order
    parent.appendChild(p)
    parent.appendChild(describe)

    // create, style, and append the second parent 
    const parent2 = document.createElement('div')
    parent2.style.display = 'flex'
    parent2.style.justifyContent = 'end'
    parent2.style.gap = '8px'
    div.appendChild(parent2)

    // create icons and style them 

    // share icon 
    const share = document.createElement('img')
    share.src = 'assets/share-1-svgrepo-com.svg'
    share.alt = 'Share Icon'
    share.height = 24
    parent2.appendChild(share)

    // save icon
    const save = document.createElement('img')
    save.src = 'assets/bookmark-square-minimalistic-svgrepo-com.svg'
    save.alt = 'Save Icon'
    save.height = 24
    parent2.appendChild(save)

    const _delete = document.createElement('img')
    _delete.src = 'assets/delete-svgrepo-com.svg'
    _delete.alt = 'Delete Icon'
    _delete.height = 24
    parent2.appendChild(_delete)
}


// parent for the extra info section

const extraParent = document.querySelector('#extra-info')

// create div element
const div = document.createElement('div')

// style div element
div.style.display = 'flex'
div.setAttribute('id', 'announcements')
div.style.flexDirection = 'column'
div.style.borderRadius = '12px'
div.style.alignItems = 'center'
div.style.textAlign = 'center'
div.style.border = '1px solid black'
div.style.backgroundColor = 'white'
div.style.padding = '24px'
div.style.paddingTop = '0px'

// append div to its designated parent node
extraParent.appendChild(div)

for (i = 1; i <= 3; i++) {
    // create title and style it
    const p = document.createElement('p')
    p.style.margin = '0px'
    p.style.padding = '0px'
    p.style.fontSize = '14px'
    p.style.fontWeight = 'bold'
    p.style.marginTop = '24px'

    // create description and style it
    const describe = document.createElement('p')
    describe.style.margin = '0px'
    describe.style.padding = '0px'
    describe.style.fontSize = '12px'
    describe.style.paddingTop = '10px'

    // dynamic logic to create the text content of the titles and descriptions
    if (i == 1) {
        p.textContent = 'Site Maintenance'
        describe.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>_____________________'
    } else if (i == 2) {
        p.textContent = 'Community Share Day'
        describe.innerHTML = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br>_____________________'
    } else if (i == 3) {
        p.textContent = 'Updated Privacy Policy'
        describe.textContent = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    } 
    const parent = document.querySelector('#announcements')
    parent.appendChild(p)
    parent.appendChild(describe)
}
