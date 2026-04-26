let emp1 = 'Alice Smith';
let emp2 = 'Bob Jones';
let emp3 = 'Carol White';
let emp4 = 'David Brown';
let emp5 = 'Eva Green';
let emp6 = 'Frank Black';

const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}}>
        <li>{emp1}</li>
        <li>{emp2}</li>
        <li>{emp3}</li>
        <li>{emp4}</li>
        <li>{emp5}</li>
        <li>{emp6}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('root'))
