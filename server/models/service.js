var sql = require('../db');

//SERVICE OBJECT CONSTRUCTOR
var Service = function(service){
    this.service_name = service.name;
    this.cost = service.cost;
    this.station_id = service.station_id;
};

//TO GET ALL THE SERVICES FOR A STATION
Service.getallServicesById=function(id,result){
    sql.query("SELECT service_details.service_id,service_details.service_name,service_details.cost FROM service_details WHERE service_details.station_id=? ",id,function(err,res) {
        
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null, res);
        }
    });
};

//TO ADD A NEW SERVICE TO A STATION
Service.create_service= function (new_service, result) {    
    sql.query("INSERT INTO service_details set ?", new_service, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};

//TO GET ALL THE SERVICES NAME
Service.getallServices=function(result){
    sql.query("SELECT DISTINCT service_details.service_name  FROM service_details",function(err,res) {
        
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null, res);
        }
    });
};

Service.updateservice=function(id,cost,result){
    sql.query("UPDATE service_details SET cost=? WHERE service_details.service_id=?",[cost,id],function (err, res) {
        if(err) {
            console.log("error: ", err);
                result(null, err);
            }
        else{   
                result(null, res);
            }
        }); 
};


module.exports = Service;
