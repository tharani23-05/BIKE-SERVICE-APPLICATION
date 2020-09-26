'user strict';
var sql = require('../db');

//SERVICE STATION OBJECT CONSTRUCTOR
var Station = function(station){
    this.station_name=station.name;
    this.station_address=station.address;
    this.station_email=station.email;
    this.station_phone=station.phone;
    this.station_password=station.password;
};

//TO ADD A STATION TO TABLE
Station.create_station = function (new_station, result) {    
    sql.query("INSERT INTO service_station set ?", new_station, function (err, res) {
            
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

//TO GET STATION ID 
Station.getStationById=function(user,password,result) {
    sql.query("SELECT service_station.station_id from service_station where((service_station.station_email=? or service_station.station_phone=?) and (service_station.station_password=?))",[user,user,password],function(err,res) {
        
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

//TO GET ALL THE STATIONS FOR A SERVICE
Station.getallStationsByName=function(name,result) {
    sql.query("SELECT service_station.station_name,service_station.station_address,service_station.station_email,service_station.station_phone FROM service_station WHERE service_station.station_id= ANY(SELECT service_details.station_id FROM service_details WHERE service_details.service_name = ? ) ",name,function(err,res) {
        
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

//TO GET THE DETAILS ABOUT A STATION
Station.getstationprofileById=function(id,result) {
    sql.query("SELECT service_station.station_name,service_station.station_address,service_station.station_email,service_station.station_phone FROM service_station WHERE service_station.station_id=?",[id],function(err,res) {
        
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

module.exports=Station;