'use strict';
module.exports = function(app) {
    var actions = require('../Controller/controller.js');

  // todoList Routes
  /*
    app.route('/t')
        .get(actions.list_all_tasks)
        .post(actions.create_a_task);

    app.route('/tasks/:taskId')
    .get(actions.read_a_task)
    .put(actions.update_a_task)
    .delete(actions.delete_a_task);
  
    */


  //OPENS HOME PAGE - FIRST PAGE OF THE APPLICATION
  
  app.get('/',(req,res)=>{
    res.render('homepage.ejs');
  })

  app.get('/customerlogin',(req,res)=>{
    res.render('customerlogin.ejs');
  })
  
  app.get('/customersignup',(req,res)=>{
    res.render('customersignup.ejs');
  })

  app.post('/customersignup',(req,res)=>{
    console.log(req.body);
    actions.creation_of_customersignup;
    res.redirect('/customerlogin');
  })

  app.post('/customerlogin',(req,res)=>{
    res.render("maincustomerpage.ejs")
  })

  app.get('/customerservices',(req,res)=>{
    res.render('customerservices.ejs')
  })

  app.get('/generalservice',(req,res)=>{
    res.render('generalservice.ejs');
  })

  app.get('/waterwash',(req,res)=>{
    res.render('waterwash.ejs');
  })

  app.get('/oilchange',(req,res)=>{
    res.render('oilchange.ejs');
  })

  app.get('/airfilter',(req,res)=>{
    res.render('airfilter.ejs');
  })

  app.get('/brakepad',(req,res)=>{
    res.render('brakepad.ejs');
  })

  app.get('/clutchservice',(req,res)=>{
    res.render('clutchservice.ejs');
  })

  
  app.get('/book',(req,res)=>{
    res.render('book.ejs');
  })



  app.get('/checkstatus',(req,res)=>{
    res.render('checkstatus.ejs')
  })

  app.get('/customerprofile',(req,res)=>{
    res.render('customerprofile.ejs')
  })

  app.get('/viewhistory',(req,res)=>{
    res.render('viewhistory.ejs')
  })

  app.get('/stationlogin',(req,res)=>{
    res.render('stationlogin.ejs');
  })

  app.post('/stationlogin',(req,res)=>{
    res.render('mainstationpage.ejs');
  })
  /*app.get('/stationsignup',(req,res)=>{
    res.render('stationsignup.ejs');
  })*/

  
   
  // TO STORE THE SIGN UP DETAILS INTO THE TABLE
  app.get('/stationsignup',(req,res)=>{
    res.render('stationsignup.ejs');})
  
  app.post('/stationsignup',(req,res)=>{
   console.log(req.body);
   actions.creation_of_stationsignup(req);
   console.log("here we are");
   res.redirect('/stationlogin')

 })

 

 
    

  app.get('/mainstationpage',(req,res)=>{
    res.render('mainstationpage.ejs');
  })

  app.get('/bookings',(req,res)=>{
    res.render('bookings.ejs');
  })

  app.get('/services',(req,res)=>{
    res.render('services.ejs');
  })
  
  app.get('/stationprofile',(req,res)=>{
    res.render('stationprofile.ejs');
  })
  

  app.get('/index',(req,res)=>{
    res.render('index.ejs');
  })

  app.get('/stationpage',(req,res)=>{
    res.render('stationpage.ejs');
  })

  

  

  