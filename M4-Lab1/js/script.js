// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const employeeTable = document.getElementById('employees');
const employeeCount = document.getElementById('empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const newRow = employeeTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const cellID = newRow.insertCell(0);
    const cellName = newRow.insertCell(1);
    const cellExt = newRow.insertCell(2);
    const cellEmail = newRow.insertCell(3);
    const cellDept = newRow.insertCell(4);
    const cellDelete = newRow.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.appendChild(document.createTextNode('Delete'));

    // ADD EVENT LISTENER FOR DELETE BUTTON
    deleteBtn.addEventListener('click', (e) => {
        if (confirm('Are you sure you want to delete this employee?')) {
            // DELETE THE ROW
            employeeTable.deleteRow(newRow.rowIndex);

            // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
            count--;
            employeeCount.textContent = `(${count})`;
        }
    });

    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    employeeCount.textContent = `(${count})`;
});