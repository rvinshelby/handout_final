<?php  
	header('Access-Control-Allow-Origin: *');
	$conn=mysqli_connect("localhost","root","");
	$query=mysqli_select_db($conn, "handout");
?>