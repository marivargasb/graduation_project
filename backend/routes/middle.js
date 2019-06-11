const Expression = require('../models/expressionModel'); // Import User Model Schema/const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration
//const hbs = require('nodemailer-express-handlebars');
//const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const Culture = require('../models/cultureModel');
const CultureExpression = require('../models/culture-expressionModel');


module.exports = (router) => {




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
            categorie: req.body.categorie,

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

    router.get('/fineCultureExpression', function (req, res) {
        CultureExpression.find(). 
         populate({ path: "cultures" } ).
         populate({ path: "expressions" })
         .exec(function (err, ce) {
            res.status(200).send(ce);
        }); 
        });

        router.get('/finesOneCE/:expressions/:cultures', function (req, res) {
            
            if ((req.params.expressions) == null & (req.params.cultures) == null) {
                //   res.status(422);
                res.json({ success: false, message: 'vasio' });
                console.log("los parametros estaan vacios");
            }
            CultureExpression.findOne({expressions: req.params.expressions.toLowerCase(), cultures: req.params.cultures.toLowerCase()}). 
             populate({ path: "cultures" } ).
             populate({ path: "expressions" })
             .exec(function (err, ce) {
                res.status(200).send(ce);
            }); 
            
            });

/*
    router.get('/finesOneExpression/:id/:cultures', function (req, res) {

        if ((req.params.id) == null) {
            //   res.status(422);
            res.json({ success: false, message: 'vasio' });
        }
        Expression.findOne({ _id: req.params.id.toLowerCase(), cultures: req.params.cultures.toLowerCase() }, function (err, expression) {
            Culture.populate(expression, { path: "cultures" }, function (err, expression) {
                res.status(200).send(expression);
            });
        });
    });
*/

    return router;

}