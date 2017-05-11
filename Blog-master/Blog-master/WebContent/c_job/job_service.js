'use strict';
 
app.service('JobService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
	
	console.log("JobService...")
	
	var BASE_URL='http://localhost:12057/BlogMiddleEnd/';
		
    return {
         
		applyForJob: function(jobID) {
                    return $http.post(BASE_URL+"/applyForJob/"+jobID)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while applying for job');
                                       
                                    }
                            );
            },
            
            getJobDetails: function(jobID) {
            	console.log("Getting job details of " + jobID)
                return $http.get(BASE_URL+"/getJobDetails/" + jobID)
                        .then(
                                function(response){
                                	$rootScope.selectedJob = response.data
                                    return response.data;
                                }, 
                                function(errResponse){
                                    console.error('Error while getting job details');
                                   
                                }
                        );
        },
        
             
            getMyAppliedJobs: function(){
                    return $http.get(BASE_URL+'/getMyAppliedJobs/')
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while getting applyied jobs');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
            postAJob: function(job){
                return $http.post(BASE_URL+'/postAJob/', job)
                        .then(
                                function(response){
                                    return response.data;
                                }, 
                                function(errResponse){
                                    console.error('Error while posting job');
                                    return $q.reject(errResponse);
                                }
                        );
        },
             
            rejectJobApplication: function(userID, jobID,remarks){
                    return $http.put(BASE_URL+'/rejectJobApplication/'+userID+ "/" + jobID+ "/"+remarks)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while rejecting job');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            callForInterview: function(userID, jobID,remarks){
            	  return $http.put(BASE_URL+'/callForInterview/'+userID+ "/" + jobID+ "/"+remarks)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while call for interview');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
            selectUser: function(userID,jobID,remarks){
            	  return $http.put(BASE_URL+'/selectUser/'+userID +"/"+ jobID+ "/"+remarks)
                            .then(
                                function(response){
                                    return response.data;
                                }, 
                                function(errResponse){
                                    console.error('Error while selecting the user for job');
                                    return $q.reject(errResponse);
                                }
                        );
        }
        ,
        getAllJobs: function(){
            return $http.get(BASE_URL+'/getAllJobs/')
                    .then(
                            function(response){
                                return response.data;
                            }, 
                            function(errResponse){
                                console.error('Error while getting all jobs');
                                return $q.reject(errResponse);
                            }
                    );
    },
    
    getAllNewJobs: function(){
            return $http.get(BASE_URL+'/getAllNewJobs/')
                    .then(
                            function(response){
                            	$rootScope.selectedJob = response.data
                                return response.data;
                            }, 
                            function(errResponse){
                                console.error('Error while getting all New jobs');
                                return $q.reject(errResponse);
                            }
                    );
    }
    
            
           
         
    };
 
}]);