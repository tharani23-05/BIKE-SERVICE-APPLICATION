'user strict';
var sql = require('../db');

var Booking=function(booking) {
    this.booking_date=booking.date,
    this.booking_status=booking.status;
    this.station_id=booking.station_id;
    this.service_id=booking.service_id;
    this.customer_id=booking.customer_id;

};

//QUERY TO GET ALL THE BOOKINGS FOR A STATION
Booking.getallBookingById=function(id,result) {
    sql.query("SELECT booking.booking_id,customer_details.customer_name,service_details.service_name,booking.booking_status FROM booking,service_details,customer_details WHERE booking.station_id=?",id,function(err,res) {
        
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

//TO INSERT A BOOKING
Booking.create_booking=function(new_booking,result) {
    sql.query("INSERT INTO booking set ?",new_booking,function(err,res) {
        
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

//TO RETURN BOOKINGS WITH PENDING STATUS
Booking.getPendingBookingsByid=function(id,result){
    sql.query("SELECT booking.booking_id,customer_details.customer_name,service_details.service_name,booking.booking_status FROM booking,service_details,customer_details WHERE booking.station_id=? and booking.booking_status='pending' ",id,function(err,res) {
        
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

//TO RETURN BOOKINGS WITH READY FOR DELIVERY STATUS
Booking.getDeliveryBookingsByid=function(id,result){
    sql.query("SELECT booking.booking_id,customer_details.customer_name,service_details.service_name,booking.booking_status FROM booking,service_details,customer_details WHERE booking.station_id=? and booking.booking_status='ready for delivery' ",id,function(err,res) {
        
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

//TO RETURN BOOKINGS WITH COMPLETED STATUS
Booking.getCompletedBookingsByid=function(id,result){
    sql.query("SELECT booking.booking_id,customer_details.customer_name,service_details.service_name,booking.booking_status FROM booking,service_details,customer_details WHERE booking.station_id=? and booking.booking_status='completed' ",id,function(err,res) {
        
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

//TO CHANGE THE STATUS OF A PARTICULAR BOOKING
Booking.changeBookingStatusByid=function(id,status,result){
    sql.query("UPDATE booking SET booking_status=? WHERE booking.booking_id=?",[status,id],function (err, res) {
        if(err) {
            console.log("error: ", err);
                result(null, err);
            }
        else{   
                result(null, res);
            }
        }); 
};

//TO ADD A BOOKING
Booking.BookingById= function (new_booking, result) {    
    sql.query("INSERT INTO booking set ?", new_booking, function (err, res) {
            
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
//TO GET SERVICE HISTORY
Booking.getServicehistoryById=function(id,result){
    sql.query("select  s.service_name , ss.station_name ,b.booking_status from booking  b inner join  customer_details c  on c.customer_id=3002  inner join service_station ss on ss.station_id = b.station_id inner join service_details s on  s.service_id = b.service_id ", id, function (err, res) {
            
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

//TO KNOW THE BOOKING STATUS
Booking.getbookingstatusById=function(id,result){
    sql.query("SELECT booking.booking_status FROM booking WHERE booking.booking_id=?",id,function(err,res) {
        
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


module.exports = Booking;