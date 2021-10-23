function generateManager(manager) {
  return `
      <div class="card employee-card col-md-3">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><span style="font-size: 1.5em; color: Tomato;"><i class="fas fa-mug-hot mr-2"></span></i>MANAGER</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office #: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>`;
}

function generateEngineer(engineer) {
  return `
      <div class="card employee-card col-md-3">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><span style="font-size: 1.5em; color: Dodgerblue;"><i class="fas fa-glasses mr-2"></span></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
            </ul>
        </div>
    </div>`;
}

function generateIntern(intern) {
  return `
      <div class="card employee-card col-md-3">
        <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><span style="font-size: 1.5em; color: Mediumslateblue;"><i class="fas fa-user-graduate mr-2"></span></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>`;
}


function generateHTML(employeeCards) {
  return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center mt-5">
            ${employeeCards}
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>
`;
}

module.exports = {
  generateIntern,
  generateManager,
  generateHTML,
  generateEngineer,
};
