
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  const flash=require('express-flash')
  port = process.env.PORT || 3000;

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'sample',
  multipleStatements : true
});

// connect to database 
// creates tables and insert values
mc.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
  mc.query("CREATE TABLE IF NOT EXISTS service_station (station_id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,station_name varchar(200) NOT NULL,station_address varchar(200) NOT NULL,station_email varchar(200) UNIQUE KEY NOT NULL, station_phone numeric UNIQUE KEY NOT NULL,station_password varchar(200) NOT NULL);CREATE TABLE IF NOT EXISTS customer_details ( customer_id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,customer_name varchar(200) NOT NULL,customer_address varchar(200) NOT NULL,customer_email varchar(200) UNIQUE KEY NOT NULL,customer_phone numeric UNIQUE KEY NOT NULL,customer_password varchar(200) NOT NULL,vehicle_no varchar(20) NOT NULL);CREATE TABLE IF NOT EXISTS service_details(service_id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,service_name varchar(200) NOT NULL,cost DOUBLE PRECISION NOT NULL,station_id integer,FOREIGN KEY (station_id) REFERENCES service_station(station_id)) ; CREATE TABLE IF NOT EXISTS booking ( booking_id integer NOT NULL PRIMARY KEY AUTO_INCREMENT, station_id integer,foreign key (station_id) REFERENCES service_station(station_id), service_id integer, FOREIGN KEY (service_id) REFERENCES service_details(service_id),customer_id integer,FOREIGN KEY (customer_id) REFERENCES customer_details(customer_id),booking_date datetime NOT NULL,booking_status varchar(100) NOT NULL CONSTRAINT check_status CHECK (booking_status in ('Pending','Progress','Ready For Delivery','Completed')))", function (err, res) {   
    if(err) {
        console.log("error: ", err);
    }
    else{
      console.log("ALL TABLES ARE CREATED")
    }
  });
  
  mc.query("insert into service_station values ( 1001,'Exprees_bike Service','95/2,Sathy road Coimbatore','express.bike@gmail.com',9697100023,'express');insert into service_station values  ( 1002,'Wings Bike Zone','72A,Nava India  road Coimbatore','Bike.zone@gmail.com',9886612340,'wings');insert into service_station values  ( 1003,'Gem Motors service station','17B, puliyakulam Coimbatore','gemservices@gmail.com',9944338998,'gem'); insert into service_station values  ( 1004,'The Bullet garage','B3, Raju nagar , Coimbatore','garagebullet@gmail.com',9697100438,'bullet'); insert into service_station values  ( 1005,'Frigate Bike Crafters ','24C ,Siddhapudur Coimbatore','frigatecrafters@gmail.com',9894111220,'frigate')", function (err, res) {   
    if(err) {
        console.log("error: ", err);
    }
    else{
        console.log("STATION DETAILS FILLED");
    }
}); 

  mc.query("insert into customer_details values ( 3001,'Sundar','105 ,avarampalayam , Coimbatore','sundar21@gmail.com',9597100564,'sundar21','TN 37 D 8000');insert into customer_details values ( 3002,'Krithika','shakthi Garden , Coimbatore','ks6krithika@gmail.com',7359466357,'kiru6','TN 37  GF 5478');insert into customer_details values ( 3003,'Harish',' Ramanathapuram Road , Coimbatore','ramsuba@gmail.com',7045905299,'xy456','TN 37 AF 7557'); insert into customer_details values ( 3004,'Sheela','206 ,Gandhi nagar , Coimbatore','sheela22@gmail.com',8723901298,'sheela','TN 37 WQ 2323');insert into customer_details values ( 3005,'Xavier','89 ,Raja Street , Coimbatore','xavier54@gmail.com',8957009976,'xavier34','TN 37 RP 8080')", function (err, res) {   
  if(err) {
      console.log("error: ", err);
  }
  else{
    console.log("CUSTOMER DETAILS FILLED")
  }
});

 mc.query("insert into service_details values ( 4001,'oil change',200.00,1002);insert into service_details values ( 4002,'oil change',250.00,1005); insert into service_details values ( 4003,'air filter cleaning',400.00,1003);insert into service_details values ( 4004,'air filter cleaning',300.00,1001); insert into service_details values ( 4005,'brake pad fixation',500.00,1004); insert into service_details values ( 4006,'water wash',250.00,1002); insert into service_details values ( 4007,'water wash',240.00,1003); insert into service_details values ( 4008,'water wash',230.00,1004); insert into service_details values ( 4009,'clutch service',100.00,1005); insert into service_details values ( 4010,'general service checkup',90,1001); insert into service_details values ( 4011,'brake pad fixation',120.00,1003); insert into service_details values ( 4012,'general service checkup',85.00,1004); insert into service_details values ( 4013,'clutch service',95.00,1002)", function (err, res) {
  if(err) {
      console.log("error: ", err);
  }
  else{
    console.log("SERVICE DETAILS FILLED")
  }
}); 

mc.query("insert into booking values(11001,1005,4009,3002,'2020-07-27 14:05:45','completed');insert into booking values(11002,1003,4003,3004,'2020-08-15 20:14:01','completed');insert into booking values(11003,1002,4001,3003,'2020-09-25 11:55:00','Ready for Delivery');insert into booking values(11004,1004,4012,3005,'2020-09-23 18:27:29','pending');insert into booking values(11005,1003,4007,3001,'2020-09-15 19:20:56','Ready for Delivery');insert into booking values(11006,1001,4010,3002,'2020-09-24 17:00:00','pending');insert into booking values(11007,1001,4004,3002,'2020-09-25 16:20:33','Ready for Delivery');insert into booking values(11008,1005,4002,3001,'2020-08-10 08:26:46','completed');insert into booking values(11009,1004,4005,3003,'2020-09-26 10:30:16','pending');insert into booking values(11010,1003,4007,3004,'2020-09-20 21:30:00','pending');insert into booking values(11011,1002,4013,3005,'2020-06-26 11:40:10','completed')", function (err, res) {
  if(err) {
      console.log("error: ", err);
  }
  else{
    console.log("BOOKING DETAILS FILLED")
  }
}); 
  
})


app.listen(port);

console.log('API server started on: ' + port);




app.use(express.urlencoded({extended:false}))



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/Users'); //importing route
routes(app); //register the route
