// general info the program should have for each person regardless of role
// lastSegment stands for the last question that should be different with each role
function generateInitialInfo(data, lastSegment){
    return `
    <div class="card col-lg-3 col-md-4 col-sm-6 p-1 m-2">
    <div class="bg-primary text-white p-3">
        <h2 class="card-title ml-2">${data.getName()}</h2>
        <h5 class="card-subtitle ml-2">${data.getRole()}</h5>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
            ${lastSegment}
          </ul>
    </div>
    </div>
    `    
}

// add section about the manager's office number
function generateManagerCard(data){
    const lastSegment = `<li class="list-group-item">Office Number: ${data.officeNumber}</li>`
    return generateInitialInfo(data, lastSegment);
} 

// add section about the engineer's Github username
function generateEngineerCard(data){
    const lastSegment = `<li class="list-group-item">GitHub Username: <a href="https://github.com/${data.getGithub()}">${data.getGithub()}</a></li>`
    return generateInitialInfo(data, lastSegment);
} 

// add section about the intern's school
function generateInternCard(data){
    const lastSegment = `<li class="list-group-item">School: ${data.getSchool()}</li>`
    return generateInitialInfo(data, lastSegment);
} 

// export all three functions
module.exports = {generateManagerCard, generateEngineerCard, generateInternCard};