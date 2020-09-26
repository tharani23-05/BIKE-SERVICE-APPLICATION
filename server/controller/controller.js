'use strict';

var Task = require('../Models/UserModel');
var Service = require('../Models/service');
var Station = require('../Models/station');
var Customer = require('../Models/customer');
var Booking = require('../Models/booking');

//DIRECTS TO CUSTOMER SIGNUP QUERY
exports.creation_of_customersignup = function(req, res) {
    var new_customer = new Customer(req.body);
 
    if(!new_customer.customer_name || !new_customer.customer_address || !new_customer.customer_email ||!new_customer.customer_phone || !new_customer.customer_password || !new_customer.vehicle_no){

                res.status(400).send({ error:true, message: 'please provide all the details about the customer' });

            }
    else{
    
    Customer.create_customer(new_customer, function(err, customer) {
        
        if (err)
        res.send(err);
        res.json(customer);

    });
    }
};

//DIRECTS TO STATION SIGNUP QUERY
exports.creation_of_stationsignup = function(req, res) {
    var new_station = new Station(req.body);
    console.log("entered");
    //handles null error 
    if(!new_station.station_name || !new_station.station_address || !new_station.station_email ||!new_station.station_phone || !new_station.station_password) {

                res.status(400).send({ error:true, message: 'please provide all the details about the station' });

            }
    else{
    
    Station.create_station(new_station, function(err,station) {


    });
    }
    };

//DIRECTS TO CUSTOMERLOGIN QUERY
exports.creation_of_customerlogin= function(req, res) {

    Customer.getCustomerById(req.body.user,req.body.password, function(err, id) {
        if (err)
        res.send(err);
        res.json(id[0]);
    });
    };

 //DIRECTS TO STATIONLOGIN QUERY
exports.creation_of_stationlogin= function(req, res) {

    Station.getStationById(req.body.user,req.body.password,function(err, id) {
        if (err)
        res.send(err);
        res.json(id[0]);
    });
    };

//DIRECTS TO QUERY TO DISPLAY ALL BOOKINGS
exports.creation_of_listofbookings=function(req,res) {
    Booking.getallBookingById(req.body.id,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO QUERY TO DISPLAY PENDING BOOKINGS
exports.creation_of_pendinglist=function(req,res) {
    Booking.getPendingBookingsByid(req.body.id,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO QUERY TO DISPLAY READY FOR DELIVERY BOOKINGS
exports.creation_of_deliverylist=function(req,res) {
    Booking.getDeliveryBookingsByid(req.body.id,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO QUERY TO DISPLAY COMPLETED BOOKINGS
exports.creation_of_completedlist=function(req,res) {
    Booking.getCompletedBookingsByid(req.body.id,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO UPDATE STATUS QUERY
exports.updation_of_bookingstatus=function(req,res) {
    Booking.changeBookingStatusByid(req.body.id,req.body.status,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO DISPLAY SERVICES QUERY
exports.creation_of_serviceslist=function(req,res) {
    Service.getallServicesById(req.body.id,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//TO ADD A NEW SERVICE
exports.creation_of_services = function(req, res) {
    var new_service = new Service(req.body);

    //handles null error 
    if(!new_service.service_name || !new_service.cost || !new_service.station_id)  {

                res.status(400).send({ error:true, message: 'please provide all the details about the service' });

            }
    else{
    
    Service.create_service(new_service, function(err,service) {
        
        if (err)
        res.send(err);
        res.json(service);

    });
    }
};

//DIRECTS TO DISPLAY ALL SERVICES QUERY
exports.creation_of_listofservices=function(req,res) {
    Service.getallServices(function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO DISPLAY ALL STATIONS FOR A SERVICE QUERY
exports.creation_of_stationlist=function(req,res) {
    Station.getallStationsByName(req.body.name,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO QUERY TO ADD BOOKING
exports.creation_of_booking=function(req,res) {
    Booking.BookingById(req.body.customer_id,req.body.station_id,req.body.service_id,req.body.datetime,req.body.status,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO QUERY TO ADD BOOKING
exports.creation_of_booking = function(req, res) {
    var new_booking = new Booking(req.body);

    //handles null error 
    if(!new_booking.customer_id || !new_booking.station_id || !new_booking.service_id || !new_booking.booking_date || !new_booking.booking_status) {

                res.status(400).send({ error:true, message: 'please provide all the details about the booking' });

            }
    else{
    
    Booking.create_booking(new_booking, function(err,booking) {
        
        if (err)
        res.send(err);
        res.json(booking);

    });
    }
    };

// DIRECTS TO BOOKING STATUS OF SERVICE QUERY
exports.getting_bookingstatus=function(req,res) {
    Booking.getbookingstatusById(req.body.id,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO CUSTOMER SERVICE HISTORY QUERY
exports.getting_servicehistory=function(req,res) {
    Booking.getServicehistoryById(req.body.id,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO CUSTOMER PROFILE DETAILS QUERY
exports.getting_profiledetails=function(req,res) {
    Customer.getprofileById(req.body.id,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO STATION PROFILE DETAILS QUERY
exports.getting_stationprofiledetails=function(req,res) {
    Station.getstationprofileById(req.body.id,function(err,id) {
            if(err)
            res.send(err);
            res.json(id);
    });
};

//DIRECTS TO SERVICE UPDATE QUERY
exports.updation_of_service=function(req,res){
    Service.updateservice(req.body.cost,req.body.id,function(err,id){
        if(err)
        res.send(err);
        res.json(id);
    })
};






 