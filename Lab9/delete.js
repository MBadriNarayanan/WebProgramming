const prompt = require('prompt');

prompt.start();

prompt.get(['name'], function (err, result)
{
    if (err) { return onErr(err); }
    console.log('\n Name to be deleted \n');
    console.log('  Name: ' + result.name);
    name = result.name;
    var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db)
	{
	  	if (err) throw err;
	  	var dbo = db.db("webprogramming");
	  	var myquery = {name: name};
	  	dbo.collection("webprogramming").deleteOne(myquery, function(err, obj)
	  	{
	    	if (err) throw err;
	    	console.log("1 document deleted");
	    	db.close();
	  	});
	});
});