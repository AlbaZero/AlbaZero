<?php
session_start();
if(!isset($_SESSION['loggedin_az']) || empty($_SESSION['loggedin_az']))
{
	header('Location: login.php');
	die();
}
?>
<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"><title>React App</title><link href="/consult/static/css/main.a313f2af.css" rel="stylesheet"></head><body><div id="root"></div><script type="text/javascript" src="/consult/static/js/main.6e562b7d.js"></script></body></html>