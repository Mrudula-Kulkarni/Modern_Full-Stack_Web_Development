
// CREATE AN ARRAY OF EMPLOYEES
let employees = [];

// Initial employee data (at least 5 employees)
let initialEmployees = [
  [12341234, "Mrudula Kulkarni", 1234, "mrudula.kulkarni@sdsu.edu", "Engineering"],
  [11223344, "Jane Smith", 5678, "jane.smith@sdsu.com", "Executive"],
  [33221144, "Robert Johnson", 9101, "robert.johnson@gmail.com", "Marketing"],
  [66557744, "Emily Davis", 1122, "emily.davis@outlook.com", "Sales"],
  [23412389, "Michael Brown", 3344, "michael.brown@ok.com", "Sales"]
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
function loadEmployeesFromStorage() {
    employees = JSON.parse(localStorage.getItem('employees')) || initialEmployees;
    buildGrid();
}

// GET DOM ELEMENTS
let form = document.getElementById('addForm');
let empTable = document.getElementById('empTable');
let employeeCountOutput = document.getElementById('empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;

// Function to save employee data to localStorage
function saveEmployeesToStorage(employees) {
    localStorage.setItem('employees', JSON.stringify(employees));
}

// Function to remove employee from localStorage
function removeEmployeeFromStorage(empId) {
    employees = employees.filter(employee => employee[0] !== empId);
    saveEmployeesToStorage(employees);
}

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empId = Number(document.getElementById('id').value);
    let name = document.getElementById('name').value;
    let extension = Number(document.getElementById('extension').value);
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    console.log(empId, name, extension, email, department);

    if (!empId || !name || !extension || !email || !department) {
        alert("Please fill out all fields.");
        return;
    }

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [empId, name, extension, email, department];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-id]');
    if (!btn) return;

    // CONFIRM THE DELETE
    if (!confirm('Are you sure you want to delete this employee?')) return;

    const empId = Number(btn.dataset.id);

    // REMOVE EMPLOYEE FROM ARRAY
    removeEmployeeFromStorage(empId);

    // BUILD THE GRID
    buildGrid();
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const oldTbody = empTable.querySelector('tbody');
    const newTbody = document.createElement('tbody');

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    employees.forEach(employee => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td>
                <button type="button" class="btn btn-danger" data-id="${employee[0]}">
                    Delete
                </button>
            </td>
        `;
        newTbody.appendChild(tr);
    });

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.replaceChild(newTbody, oldTbody);

    // UPDATE EMPLOYEE COUNT
    employeeCount = employees.length;
    employeeCountOutput.textContent = employeeCount;

    // STORE THE ARRAY IN STORAGE
    saveEmployeesToStorage(employees);
}

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.onload = function () {
    loadEmployeesFromStorage();
};