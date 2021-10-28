<?php

	if (isset($_POST['submit'])) 
	{
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];
		
		$msg = "Dear " .$name. ",\n\nGreetings from Ikigai Studios !\n\nYour query regarding - ".$subject. "\nHas successfully been recorded and here is a copy of your enquiry for future reference - \n" .$message. "\n\nSincerely, \nThe Team at Ikigai Studios";
		$subject1 = "Your Enquiry at Ikigai Studios";

		$email1 = "ikigaistudios1856@gmail.com";
		$msg1 = "My name is " .$name. " , my email address is - " .$email. " \nI wanted to enquire about - " .$subject. " \n\n" .$message. "\n\nSincerely,\n" .$name. "\n" .$phone;
		$x = 0;
		
		// $ipaddress = getenv("REMOTE_ADDR") ; 
		/*echo $ipaddress;*/
		
		
		
		if (mail($email,$subject1,$msg) && mail($email1,$subject,$msg1))
		{
			
			$dbHost = 'localhost';//or localhost 
			$dbName = 'ikigai'; // your db_name 
			$dbUsername = 'root'; // root by default for localhost  
			$dbPassword = '';  // by default empty for localhost 
			$conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName); 

			if(!$conn){
				die("Failed to connect: ".mysqli_connect_error());
			}
			// else{
			// 	echo "Connection Succesfull! <br>";
			// }

			$check = "SELECT * FROM enquiry WHERE enquiry.email = '$email'";

			if(mysqli_query($conn,$check)->num_rows == 0)
			{
				$insert = "INSERT INTO `enquiry` (`name`, `email`, `phone`, `totalquery`) VALUES ('$name', '$email', '$phone', '1')";
				$result = mysqli_query($conn,$insert);
			}
			else
			{
				$update = "UPDATE enquiry SET totalquery = totalquery + 1 WHERE email = '$email'";
				$result = mysqli_query($conn,$update);
			}
			
			$pending = "SELECT totalquery FROM enquiry WHERE enquiry.email = '$email'";
			$test = mysqli_query($conn,$pending);
		
			// while ($row = $test->fetch_assoc()) {
			// 	$test1 =  $row['totalquery'];
			// }
			$row = $test->fetch_assoc();
			echo $row;
			$test1 =  $row['totalquery'];
			
			// echo $test1;
			
			
			//creating a table

			// $sql = "CREATE DATABASE ikigai;
			// CREATE TABLE `project`.`info` ( `Name` VARCHAR(20) NOT NULL , `Phone Number` INT(10) NOT NULL , `Email` VARCHAR(30) NOT NULL , `ID` INT(10) NOT NULL , PRIMARY KEY (`ID`), UNIQUE (`Email`)) ENGINE = InnoDB;
			// Expand Requery Edit Explain Profiling Bookmark Database : project Queried time : 15:14:33
			// SELECT * FROM `info`"
			// $result = mysqli_query($conn,$sql);

			// if($result){
			//     echo "table created! <br>";
			// }
			// else{
			//     echo "Not created error -".mysqli_error($conn);
			// }
			
			echo 
				"<script>
					alert('Hello $name, Your query has successfully been recorded and a confirmation mail has been sent to you ! You have made $test1 number of queries to Ikigai Studios');
					location='index.html';
				</script>";	
		}
		else
		{
			echo
				"<script>
					alert('Your Query was not recorded. Please Try Again.');
					location='index.html';
				</script>";		
		}

		/*header("Location:index.html");*/
	}

?>