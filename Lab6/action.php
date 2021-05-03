<?php
	$con = mysqli_connect('localhost:3306','root','','portfolio');
	$title = $_POST['title'];
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$mobilenumber = $_POST['mobilenumber'];
	$emailid = $_POST['emailid'];
	$message = $_POST['message'];
	$sql = "INSERT INTO `portfolio`(`TITLE`,`FIRSTNAME`,`LASTNAME`,`PHONENUMBER`,`EMAIL`,`MESSAGE`) VALUES ('$title','$firstname','$lastname','$mobilenumber','$emailid','$message')";
	$rs = mysqli_query($con, $sql);
	if($rs)
	{
		echo "Records Inserted";
	}
?>
