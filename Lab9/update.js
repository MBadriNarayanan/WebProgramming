const prompt = require('prompt');

prompt.start();

prompt.get(['name', 'newname', 'newphonenumber'], function (err, result)
{
    if (err) { return onErr(err); }
    console.log('\n Name to be changed \n');
    console.log('  Name: ' + result.name);
    console.log(' Changed Name: ' + result.newname);
    console.log(' Changed Number: ' + result.newphonenumber);
    name = result.name;
    newname = result.newname;
    newphonenumber = result.newphonenumber;
    var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db)
	{
	  	if (err) throw err;
	  	var dbo = db.db("webprogramming");
	  	var myquery = {name : name};
  		var newvalues = { $set: {name: newname, phonenumber : newphonenumber}};
	  	dbo.collection("webprogramming").updateOne(myquery, newvalues, function(err, res)
	  	{
	    	if (err) throw err;
	    	console.log("1 document updated");
	    	db.close();
	  	});
	});
});