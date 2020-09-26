'user strict';
var sql = require('../db');

//CUSTOMER DETAILS OBJECT CONSTRUCTOR
var Customer = function(customer){
    this.customer_name=customer.name;
    this.customer_address=customer.address;
    this.customer_email=customer.email;
    this.customer_phone=customer.phone;
    this.customer_password=customer.password;
    this.vehicle_no=customer.vehicle_no
};

//TO ADD A NEW CUSTOMER
Customer.create_customer = function (new_customer, result) {    
    sql.query("INSERT INTO customer_details set ?", new_customer, function (err, res) {
            
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

//TO GET ID OF A CUSTOMER
Customer.getCustomerById=function(user,password,result) {
    sql.query("SELECT customer_details.customer_id from customer_details where((customer_details.customer_email=? or customer_details.customer_phone=?) and (customer_details.customer_password=?))",[user,user,password],function(err,res) {
        
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

//TO GET PROFILE DETAILS OF A CUSTOMER
Customer.getprofileById=function(id,result) {
    sql.query("SELECT customer_details.customer_name,customer_details.customer_address,customer_details.customer_email,customer_details.customer_phone FROM customer_details WHERE customer_details.customer_id=?",[id],function(err,res) {
        
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

module.exports=Customer;