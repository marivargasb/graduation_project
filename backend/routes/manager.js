const Manager = require('../models/managerModel'); // Import User Model Schema
//const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration
//const hbs = require('nodemailer-express-handlebars');
//const nodemailer = require('nodemailer');


module.exports = (router) => {


    /* ========
    Register ROUTE
    ======== */
    router.post('/add', (req, res) => {

        if ((req.body.email || req.body.password || req.body.name || req.body.surnames) === '') {
            res.json({ success: false, message: "todos los datos deben estar completos" });
            console.log("no estan completos"); // Return error
        }
        else {

            var manager = new Manager();
            req.param.id
            manager.email = req.body.email;
            manager.password = req.body.password;
            manager.name = req.body.name;
            manager.surnames = req.body.surnames;
            manager.state = req.body.state;
            console.log(req.body);
            manager.save(function (err) {
                if (err) {
                    res.json({ success: false, message: err }); // Return error
                    console.log("error registrando");
                }
                else {
                    console.log("ADD NEW manager");
                    res.json({ success: true, message: "Registrado Exitosamente" }); // Return success and token to frontend
                }
            });
        }
    });



    /* ========
  edit ROUTE
  ======== */

    router.put('/edit/:id', (req, res) => {
        var manager = new Manager();

        if ((req.params.id) == null) {
            //   res.status(422);
            res.json({ success: false, message: 'vacio' });
        }

        var ma = {

            name: req.body.name,
            surnames: req.body.surnames,
            email: req.body.email,
            password: req.body.password


        };
        Manager.findByIdAndUpdate(req.params.id, { $set: ma }, { new: true }, (err, manager) => {

            if (err) {
                res.json({ success: false, message: err }); // Return error
                console.log("error");
            }
            else {

                res.json({ success: true, manager }); // Return success and token to frontend
                console.log("managerssss" + manager);
            }


        });
    });

    router.get('/fine/:id', (req, res) => {
        var manager = new Manager();
        if ((req.params.id) == null) {
            //   res.status(422);
            res.json({ success: false, message: 'empy' });
        }

        Manager.findOne({ _id: req.params.id.toLowerCase() }, (err, manager) => {

            if (err) {
                // res.status(422);
                // res.json({success: false, message: 'no encontrado' } );
                res.json({ success: false, message: err }); // Return error
                console.log("error");
            }

            //res.json({ success: true, message: 'Success!'});
            res.json({ success: true, manager }); // Return success and token to frontend
            console.log(manager);

        })

    });

    router.delete('/delete/:id', (req, res) => {

        var manager = new Manager();
         console.log("eliminando");
        Manager.findByIdAndRemove(req.params.id, (err, manager) => {
          if (err) {  res.json({ success: false, message: err }); // Return error
          console.log("error al eliminar su cuenta");
         }
      else { 
           console.log("DELETE MANAGER");  
            res.json({ success: true }); // Return success and token to frontend
          
           }
        });
    });
    

    return router;


}