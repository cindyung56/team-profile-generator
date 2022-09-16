function generateManagerCard(data){
return `
<div class="card col-lg-3 col-md-4 col-sm-6 p-1 m-2">
<div class="bg-primary text-white p-3">
    <h2 class="card-title ml-2">${data.getName()}</h2>
    <h5 class="card-subtitle ml-2">${data.getRole()}</h5>
</div>
<div class="card-body bg-light">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.getId()}</li>
        <li class="list-group-item">Email: ${data.getEmail()}</li>
        <li class="list-group-item">Office Number: ${data.officeNumber}</li>
      </ul>
</div>
</div>
`
} 

function generateEngineerCard(data){
    return `
    <div class="card col-lg-3 col-md-4 col-sm-6 p-1 m-2">
    <div class="bg-primary text-white p-3">
        <h2 class="card-title ml-2">${data.getName()}</h2>
        <h5 class="card-subtitle ml-2">${data.getRole()}</h5>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email: ${data.getEmail()}</li>
            <li class="list-group-item">GitHub Username: ${data.getGithub()}</li>
          </ul>
    </div>
    </div>
    `
    } 

function generateInternCard(data){
    return `
    <div class="card col-lg-3 col-md-4 col-sm-6 p-1 m-2">
    <div class="bg-primary text-white p-3">
        <h2 class="card-title ml-2">${data.getName()}</h2>
        <h5 class="card-subtitle ml-2">${data.getRole()}</h5>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email: ${data.getEmail()}</li>
            <li class="list-group-item">School: ${data.getSchool()}</li>
            </ul>
    </div>
    </div>
    `
    } 


module.exports = {generateManagerCard, generateEngineerCard, generateInternCard};