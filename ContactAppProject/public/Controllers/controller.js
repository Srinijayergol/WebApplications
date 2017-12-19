var app = angular.module('myApp', []);

app.controller('appCtrl', function($scope,$http){
  	console.log("Hello World from controller");

    var refresh = function(){
	   $http.get('/contactlist').then(function(response){
            $scope.contactlist = response.data;
            $scope.contact = {};
	    });
    };
    refresh();

    $scope.emailValidation = function() {
    	var email_expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    	var emailId = $scope.contact.email;
        
    	if(email_expression.test(emailId)== false){
            alert("Invalid Email!!. Email should be of the format example@domain.com");
        }
        else{
        	return true;
        }

    }
     
    $scope.nameValidation = function() {
    	var name_expression = /^([a-zA-z\s]{3,32})$/;
    	var name = $scope.contact.name;
    	if(name_expression.test(name) == false) {
    		alert("Invalid Name!!. Name should not contain numbers, special symbols. Name should be of min length 3 and maximum of 32");
    	}
    	else{
    		return true;
    	}
    }

    $scope.numberValidation = function() {
    	var number_expression = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/; 
    	var number = $scope.contact.number;
    	if(number_expression.test(number) == false){
    		alert("Invalid Number!!. Number should be of 10 digits and should be of the format (999)<space>666-8888");
    	}
    	else {
    		return true;
    	}
    }

	$scope.addContact = function() {
		console.log($scope.contact);
		if($scope.nameValidation() && $scope.emailValidation() && $scope.numberValidation()){
			$http.post('/contactlist', $scope.contact).then(function(response){
               console.log(response.data);
               refresh();
            })  
		}
    };
       

	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/contactlist/' + id).then(function(response){
            refresh();	
		});
	};

	$scope.edit = function(id){
		console.log(id);
		$http.get('/contactlist/' + id).then(function(response){
			$scope.contact = response.data;	
	    });
    };
    
    $scope.update = function() {
    	console.log($scope.contact._id);
    	$http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response){
            refresh();	
		});
    };

    $scope.deselect = function() {
    	$scope.contact = {};
    };
});

