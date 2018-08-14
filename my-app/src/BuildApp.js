import React, { Component } from 'react';
import './App.css';

class BuildApp extends Component {
  render() {
    return (
      <div class = "container">

  	    	<nav class="navbar navbar-default">
  	            <div class="container-fluid">

  	                <div class="navbar-header">
  	                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
  	                    <span class="sr-only">Toggle navigation</span>
  	                    <span class="icon-bar"></span>
  	                    <span class="icon-bar"></span>
  	                    <span class="icon-bar"></span>
  	                    </button>
  	                    <a class="navbar-brand" href="index.html">GW Performance</a>
  	                </div>
  	                <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
  	                    <ul class="nav navbar-nav">
  	                       	<li><a href="build.html">Build </a></li>
  	                        <li><a href="result_history.html">History/Results</a></li>
  	                    </ul>
  	                </div>
  	            </div>
  	        </nav>
  			<div class="col-md-13">
  				<div class="form-area">
  					<form role="form">

  						<h3 style="margin-bottom: 25px;">Build Gateway performance test</h3>

  						<div class="form-group">
  							<label for="WPG_Client" class="col-sm-3 control-label"> 1. WPG_client_server_type: </label>
  							<div class="col-sm-9">
                                  <select class="form-control" id="wpg_clientServer" name="wpg_clientServer">
                                      <option>Select</option>
                                      <option>C4.Large</option>
                                      <option>C4.XLarge</option>
                                  </select>
                              </div>
  			            </div>
  			           <br><br>
  			            <div class="form-group">

  				                <label for="gw_required" class="col-sm-3 control-label"><b>2. Is_GW_required: </b></label>
  				                <div class="col-sm-9">
  					            <div class ="radio">
  					            	<label><input type="radio" name="optradio">Yes </input></label>
  					            	<label><input type="radio" name="optradio">No </input></label>
  					            </div>
  				                </div>
  			            </div>
  			            <br>
  				        <div class="form-group">
  			                <label for="users" class="col-sm-3 control-label">3. No_of_users: </label>
  			                <div class="col-sm-9">
  				               <input type="text" class="form-control" id="users"/>
  				            </div>
  				        </div>
  				        <br><br>
  				        <div class="form-group">
  			                <label for="gwnode" class="col-sm-3 control-label">4. GW_node: </label>
  			                <div class="col-sm-9">
  				               <input type="text" class="form-control" id="gwnode"/>
  				            </div>
  				        </div>
  				        <br><br>
  				        <div class="form-group">
  				            <label for="pgoptions" class="col-sm-3 control-label">5. PG_Options: </label>
  				            <div class="col-sm-9">
  			                    <textarea class="form-control" rows="4" id="pgoptions"></textarea>
  			                </div>
  			            </div>

  			            <br></br><br></br>

  			            <div id="pgFile" class="form-group">
  			                <label for="pg_File" class="col-sm-3 control-label">6. PG_File: </label>
  				            <div class="col-sm-9">
                                  <select class="form-control" id="pgFiledropdown" onclick="test();">
                                      <option val="select">Select</option>
                                      <option val="fileDelete" >File_delete</option>
                                      <option val="fileUpload">File_update</option>
                                      <option val="fileShare">File_share</option>
                                      <option val="folderCreate">Folder_Create</option>
                                      <option val="folderUpdate">Folder_update</option>
                                      <option val="folderDelete">Folder_delete</option>
                                      <option val="folderShare">Folder_share</option>
                                      <option val="protoBuf">ProtoBuf</option>
                                      <option val="protoBufGmail">Protobuf_Gmail</option>
                                      <option val="getEPD">Get_Non_EPD</option>
                                      <option val="postEPD">Post_Non_EPD</option>
                                  </select>
                              </div>
  				        </div>


                </br></br>
  			            <div id="showhide" style="display:none">
  								<label for="saas_domain" class="col-sm-3 control-label">7. saas_domain: </label>
  				                <div class="col-sm-9">
  	                                <select class="form-control" id="saas" name="saas">
  	                                    <option>Select</option>
  	                                    <option>www.dropbox.com</option>
  	                                </select>
  			                    </div>
  			            </div>
                  </br></br>

  			            <div class="form-group">
  			            	<button type="submit" id="submit" name="submit" class="btn btn-primary pull-right">Build</button>
  			            </div>
                  </br>
                </br>
              </br>
  			        </form>
  	            </div>
              </div>
          </div>
     );
  }
}
export default BuildApp;
