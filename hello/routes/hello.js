
/*
 * GET home page.
 */

exports.view = function(req, res){/*
  res.render('index', {
  	'name': '',
  });*/
  
  var nameToDisplay = req.params.userName;
  if (nameToDisplay == undefined){
      nameToDisplay = 'World';
   }
   console.log("Name is " + nameToDisplay);
   res.render('index', {
        'name': nameToDisplay,
        });
};
