'use strict';

const { RequestHeaderFieldsTooLarge } = require('http-errors');

module.exports = function(app) {
    var actions = require('../Controller/controller.js');
  
 
  // TO STORE THE CUSTOMER SIGNUP DETAILS
  // ADD CUSTOMER ID,NAME,ADDRESS,EMAIL,PASSWORD,VEHICLE_NO TO REQUEST BODY
  app.route('/customersignup')  
    .post(actions.creation_of_customersignup);
   
  // TO STORE THE SIGN UP DETAILS INTO THE TABLE
  // ADD STATION ID,NAME,ADDRESS,EMAIL,PASSWORD TO REQUEST BODY
  app.route('/stationsignup')
    .post( actions.creation_of_stationsignup);

  //  CUSTOMER LOGIN RETURNS CUSTOMER ID AFTER VERIFICATION  
  // ADD CUSTOMER EMAIL/PHONE , PASSWORD TO REQUEST BODY
  app.route('/customerlogin')
      .get(actions.creation_of_customerlogin);
    
  // STATION LOGIN RETURNS STATION ID AFTER VERIFICATION
  // ADD SERVICE STATION EMAIL/PHONE , PASSWORD TO REQUEST BODY
  app.route('/stationlogin')
      .get(actions.creation_of_stationlogin);
  
  //TO GET ALL THE BOOKINGS FOR A PARTICULAR STATION
  // ADD STATION ID TO REQUEST BODY
    app.route('/allbookings')
      .get(actions.creation_of_listofbookings);
    
   //TO LIST THE PENDING BOOKINGS FOR A PARTICULAR STATION
   // ADD STATION ID TO REQUEST BODY
    app.route('/pendingbookings')
      .get(actions.creation_of_pendinglist);

    //TO LIST THE BOOKINGS THAT ARE READY FOR DELIVERY FOR A PARTICULAR STATION 
    // ADD STATION ID TO REQUEST BODY 
    app.route('deliverybookings')
      .get(actions.creation_of_deliverylist);

    //TO LIST THE BOOKINGS WHOSE STATUS IS COMPLETED  
    // ADD STATION ID TO REQUEST BODY
    app.route('/completedbookings')
      .get(actions.creation_of_completedlist);

    // TO CHANGE THE BOOKING STATUS FOR A BOOKING  
    // ADD BOOKING ID AND THE STATUS TO BE CHANGED IN THE REQUEST BODY
    app.route('/updatebookingstatus')
      .put(actions.updation_of_bookingstatus);

    // TO LIST ALL THE SERVICES FOR A PARTICULAR STATION
    // ADD STATION ID TO REQUEST BODY
    app.route('/allservices')
      .get(actions.creation_of_serviceslist);

    //TO LIST ADD NEW SERVICE TO A STATION
    // ADD SERVICE NAME,COST,STATION ID TO REQUEST BODY
    app.route('/addservice')
      .post(actions.creation_of_services);

    //TO UPDATE A NEW SERVICE
    // ADD SERVICE COST,ID TO REQUEST BODY
    app.route('/serviceupdate')
      .get(actions.updation_of_service);
    
    //TO VIEW THE PROFILE DETAILS FOR A PARTICULAR STATION 
    //ADD STATION ID TO REQUEST BODY
    app.route('/stationprofile')
      .get(actions.getting_stationprofiledetails);

    //TO VIEW CUSTOMER SERVICE HISTORY
    app.route('/viewhistory')
      .get(actions.getting_servicehistory)

    //DISPLAYS ALL THE AVAILABLE SERVICES 
    app.route('/newservices')
      .get(actions.creation_of_listofservices)

    //DISPLAYS ALL THE STATIONS WHICH HOLDS THE REQUESTED SERVICE
    // ADD SERVICE ID TO THE REQUEST BODY
    app.route('/newservices')
      .post(actions.creation_of_stationlist)
    
    //TO BOOK FOR A SERVICE
    // ADD CUSTOMER ID,STATION ID,SERVICE ID TO THE REQUEST BODY  
    app.route('/booking')
      .post(actions.creation_of_booking);

    //TO KNOW THE BOOKING STATUS
    // ADD BOOKING ID TO THE REQUEST BODY
    app.route('/bookedstatus')
      .get(actions.getting_bookingstatus);
    
    //TO VIEW THE CUSTOMER'S PROFILE
    //ADD CUSTOMER ID TO REQUEST BODY
    app.route('/customerprofile')
      .get(actions.getting_profiledetails);
  
    

};