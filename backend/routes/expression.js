const Expression = require('../models/expressionModel'); // Import User Model Schema/const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration
//const hbs = require('nodemailer-express-handlebars');
//const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const Culture = require('../models/cultureModel');


module.exports = (router) => {


    /* ========
    Register ROUTE
    ======== */
    router.post('/addExpression', (req, res) => {

        if ((req.body.name || req.body.descripcion || req.body.link || req.body.cultures) === '') {
            res.json({ success: false, message: "todos los datos deben estar completos" });
            console.log("no estan completos"); // Return error
        }
        else {

            var expression = new Expression();
            req.param.id
            expression.name = req.body.name;
            expression.descripcion = req.body.descripcion;
            expression.link = req.body.link;
            expression.cultures = req.body.cultures;
            console.log(req.body);
            expression.save(function (err) {
                if (err) {
                    res.json({ success: false, message: err }); // Return error
                    console.log("error registrando");
                }
                else {
                    console.log("ADD NEW culture");
                    res.json({ success: true, message: "Registrado Exitosamente" }); // Return success and token to frontend
                }
            });
        }
    });



    /* ========
  edit ROUTE
  ======== */

    router.put('/editExpression/:id', (req, res) => {
        var expression = new Expression();

        if ((req.params.id) == null) {
            //   res.status(422);
            res.json({ success: false, message: 'vacio' });
        }
        var ma = {

            name: req.body.name,
            descripcion: req.body.descripcion,
            link: req.body.link,
            cultures: req.body.cultures,

        };
        Expression.findByIdAndUpdate(req.params.id, { $set: ma }, { new: true }, (err, expression) => {

            if (err) {
                res.json({ success: false, message: err }); // Return error
                console.log("error");
            }
            else {

                res.json({ success: true, expression }); // Return success and token to frontend
                console.log("expressionssss" + expression);
            }


        });
    });

    router.get('/fineExpression/:id', (req, res) => {
        var expression = new Expression();
        var culture = new Culture();
        if ((req.params.id) == null) {
            //   res.status(422);
            res.json({ success: false, message: 'empy' });
        }

        Expression.findOne({ _id: req.params.id.toLowerCase() }, (err, expression) => {

            if (err) {
                // res.status(422);
                // res.json({success: false, message: 'no encontrado' } );
                res.json({ success: false, message: err }); // Return error
                console.log("error");
            }

            //res.json({ success: true, message: 'Success!'});
            res.json({ success: true, expression }); // Return success and token to frontend
            console.log(expression);

        })

    });

    router.delete('/deleteExpression/:id', (req, res) => {

        var expression = new Expression();
        console.log("eliminando");
        Expression.findByIdAndRemove(req.params.id, (err, expression) => {
            if (err) {
                res.json({ success: false, message: err }); // Return error
                console.log("error al eliminar su cuenta");
            }
            else {
                console.log("DELETE EXPRESSION");
                res.json({ success: true }); // Return success and token to frontend

            }
        });
    });

    /*
    router.get('/finesExpression',(request, response) => {
       var expression = new Expression();
     //   var culture = new Culture();
   
        Expression.find({ function (err, expression) {

            if (err) {
                // res.status(422);
                // res.json({success: false, message: 'no encontrado' } );
                res.json({ success: false, message: err }); // Return error
                console.log("error");
            }

            //res.json({ success: true, message: 'Success!'});
            response.json({ success: true, expression }); // Return success and token to frontend
            console.log(expression);

        });

    });
*/
router.get('/finesExpression', function(req, res)  {
 //   var expression = new Expression();
  //   var culture = new Culture();

     Expression.find({}, function (err, expression) {


       Culture.populate(expression, {path: "cultures"}, function(err , expression){

        res.status(200).send(expression);
       });
        

     });

 });
   

    return router;

}