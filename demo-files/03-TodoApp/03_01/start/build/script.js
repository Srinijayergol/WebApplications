var Todo = React.createClass({displayName: "Todo",
   render: function(){
     return (
       React.createElement("div", null, 
         React.createElement("h1", null, "Things To Do"), 
         React.createElement("div", {className: "form-inline"}, 
             React.createElement("div", {className: "form-group"}, 
               React.createElement("input", {className: "form-control", placeholder: "Add Todo"}), 
               React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
             )
         ), 
         React.createElement("ul", null, 
           React.createElement("li", {className: "todo"}, "Call Amma"), 
           React.createElement("li", {className: "todo"}, "Pay Phone bill")
         )
       )
     );
   }
});

React.render(React.createElement(Todo, null), document.getElementById('todo'))
