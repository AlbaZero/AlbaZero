<?php
	session_start();
	$users = array(
		"Tim" => "pass",
		"Jonas" => "JonAlba"
	);
	if(isset($_POST['username']) && !empty($_POST['username']) && isset($_POST['password']) && !empty($_POST['password']))
	{
		if(array_key_exists($_POST['username'], $users) && $users[$_POST['username']] == $_POST['password'])
		{	
			$_SESSION['loggedin_az'] = $_POST['username'];
		}
	}
	if(isset($_GET['logout']))
		unset($_SESSION['loggedin_az']);
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Alba Zero</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
	<style type="text/css">
		.login_container
		{
			width: 300px;
			padding: 5px;
			margin: 40px auto;
			border: 1px solid #ccc;
			border-radius: 5px;
			-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
			-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
			box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);			
		}
		.login_container
		{
			text-align: center;
		}
		.login_container input
		{
			text-align: center;
		}
		.login_container .btn
		{
			width: 100%;
		}
	</style>	
</head>
<body>
	<div class="login_container">
		<h1>Alba Zero</h1>
		<?php if(isset($_SESSION['loggedin_az']) && !empty($_SESSION['loggedin_az'])) { ?>
			Inloggad som <? echo $_SESSION['loggedin_az']; ?> <br />
			<a href="/consult/">Till applikationen &raquo;</a><br />
			<br>
			<br>
			<a href="?logout" class="btn btn-danger">Logga ut</a>
		<?php } else { ?>	
		<div class="form-group">
			<form method="post" action="login.php">
				<input type="text" class="form-control" placeholder="Username" name="username" />
				<br />
				<input type="password" class="form-control" placeholder="Password" name="password" />
				<br />
				<input type="submit" class="btn btn-success" value="Login" />
			</form>
		</div>
		<?php } ?>
	</div>
</body>
</html>