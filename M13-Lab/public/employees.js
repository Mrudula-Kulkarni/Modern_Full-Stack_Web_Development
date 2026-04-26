let emp1 = 'Alice Smith';
let emp2 = 'Bob Jones';
let emp3 = 'Carol White';
let emp4 = 'David Brown';
let emp5 = 'Eva Green';
let emp6 = 'Mrudula Kulkarni';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, emp1), /*#__PURE__*/React.createElement("li", null, emp2), /*#__PURE__*/React.createElement("li", null, emp3), /*#__PURE__*/React.createElement("li", null, emp4), /*#__PURE__*/React.createElement("li", null, emp5), /*#__PURE__*/React.createElement("li", null, emp6));
ReactDOM.render(element, document.getElementById('root'));