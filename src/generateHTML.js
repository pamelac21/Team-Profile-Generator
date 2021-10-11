

const generateHTML = data => {
    if (!data) {
        return '';
    }

    return `<section class="card">${data}</section>
    `
}

module.exports = template => {
    switch (employee.getRole()) {
    case "Manager":
        addData = `Office Number: ${manager.getOfficeNumber()}`;
        break;
    case "Engineer":
        addData = `GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a>`;
        break;
    case "Intern":
        addData = `School: ${intern.getSchool()}`
        break;
    }
    return `
    <div class="col-lg-4 mb-4">
    <div class="card employee-card">
      <div class="card-header employee-header">
        <h4>${employee.getName()}</h4>
        <h5>${employee.getRole()}</h5>
      </div>
      <div class="card-body">
        <div class="input">
          ID: ${employee.getId()}
        </div>
        <div class="input">
          Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
        </div>
        <div class="input">
          ${addData}
        </div>
      </div>
    </div>
  </div>`;
}
generateHTML()
    
