var Todo = React.createClass({
   render: function(){
     return (
       <div>
         <h1>Things To Do</h1>
         <div className="form-inline">
             <div className="form-group">
               <input className="form-control" placeholder='Add Todo'></input>
               <button className="btn btn-default btn-sm">+</button>
             </div>
         </div>
         <ul>
           <li className="todo">Call Amma</li>
           <li className="todo">Pay Phone bill</li>
         </ul>
       </div>
     );
   }
});

React.render(<Todo />, document.getElementById('todo'))
