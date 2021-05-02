const prompt = require('prompt');

prompt.start();

prompt.get(['name', 'phonenumber'], function (err, result)
{
    if (err) { return onErr(err); }
    console.log('\n Data to be inserted \n');
    console.log('  Name: ' + result.name);
    console.log('  Phone Number: ' + result.phonenumber);
    name = result.name;
    phonenumber = result.phonenumber;
    var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db)
	{
	  	if (err) throw err;
	  	var dbo = db.db("webprogramming");
	  	var myobj = { name: name, phonenumber: phonenumber};
	  	dbo.collection("webprogramming").insertOne(myobj, function(err, res)
	  	{
	    	if (err) throw err;
	    	console.log("1 document inserted");
	    	db.close();
	  	});
	});
});