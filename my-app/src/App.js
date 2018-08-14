import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
	    	<nav className="navbar navbar-default">
	            <div className="container-fluid">
	                <div className="navbar-header">
	                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	                    <span className="sr-only">Toggle navigation</span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                    </button>
	                    <a className="navbar-brand" href="index.html">GW Performance</a>
	                </div>
	                <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
	                    <ul className="nav navbar-nav">
	                       	<li><Link to="BuildApp">Build</Link></li>
	                        <li><a href="result_history.html">History/Results</a></li>
	                    </ul>
	                </div>
	            </div>
	        </nav>
        </div>
            <div className="col-xs-4">
                <h2 className="sub-header">List of GW Machines Running</h2>
                <div className="table-responsive">
	                <table className="table table-striped">
		              <thead>
		                <tr>
		                  <th className="col-md-1">#</th>
		                </tr>
		              </thead>
		              <tbody>
		                <tr>
		                  <td className="col-md-1">1,001</td>

		                </tr>
		                <tr>
		                  <td className="col-md-1">1,001</td>

		                </tr>
		                 <tr>
		                  <td className="col-md-1">1,001</td>

		                </tr>
		              </tbody>
	                </table>
                </div>
            </div>
            <div className="col-xs-4">
                <h2 className="sub-header">List of HA Proxies Running</h2>
                <div className="table-responsive">
	                <table className="table table-striped">
		               <thead>
		                    <tr>
		                        <th className="col-md-1">#</th>

		                    </tr>
		                </thead>
		                <tbody>
		                    <tr>
		                        <td className="col-md-1">1,001</td>

		                    </tr>
		                    <tr>
		                        <td className="col-md-1">1,001</td>

		                    </tr>
		                    <tr>
		                       <td className="col-md-1">1,001</td>

		                    </tr>
		                </tbody>
	                </table>
                </div>
	        </div>
	        <div className="col-xs-4">
                <h2 className="sub-header">List of WPG Machines Running</h2>
                <div className="table-responsive">
	                <table className="table table-striped">
		               <thead>
		                    <tr>
		                        <th className="col-md-1">#</th>

		                    </tr>
		                </thead>
		                <tbody>
		                    <tr>
		                        <td className="col-md-1">1,001</td>

		                    </tr>
		                    <tr>
		                        <td className="col-md-1">1,001</td>

		                    </tr>
		                    <tr>
		                       <td className="col-md-1">1,001</td>

		                    </tr>
		                    <tr>
		                       <td className="col-md-1">1,001</td>

		                    </tr>
		                    <tr>
		                       <td className="col-md-1">1,001</td>

		                    </tr>
		                    <tr>
		                       <td className="col-md-1">1,001</td>

		                    </tr>
		                    <tr>
		                       <td className="col-md-1">1,001</td>

		                    </tr>
		                    <tr>
		                       <td className="col-md-1">1,001</td>

		                    </tr>
		                    <tr>
		                       <td className="col-md-1">1,001</td>

		                    </tr>
		                    <tr>
		                       <td className="col-md-1">1,001</td>

		                    </tr>
		                </tbody>
	                </table>
                </div>
        </div>
          <div className="row">
             <div className="jumbotron">
                <h1>Current Builds in Progress </h1>
                  <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
                  </p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
