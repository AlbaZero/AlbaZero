{<?php
	$output= "";
	$techs = array("HTML", "CSS", "C#", "ASP.NET", "React", "Angular", "Django", "Java", "JavaScript", "jQuery", "Python", "IIS", "Node.js", "Ionic", "Meteor", "Swift", "PHP", "C++", "Erlang", "Hack", "Haskell");
	$markets = array("Finans", "Fastighet", "IT", "Juridik", "Bygg", "Jordbruk", "Hotell", "Service", "Offentlig");
	for($i = 0; $i < 20; $i++)
	{
		$cid = rand(1, 999);
		$techstring = "";
		$price = 300 + (50*rand(1,34));
		$available = date('Y-m-d', strtotime(date('Y-m-d'). ' + '.rand(0, 365).' days'));
		for($x = 0; $x < 3; $x++)
			$techstring .= '"'.$techs[rand(0, (count($techs)-1))].'",';
		$techstring = substr($techstring, 0, strlen($techstring)-1);
		
		$output .= '"Konsult #'.$cid.'":{"techniques":['.$techstring.'],"rating":'.rand(1,5).',"name":"Konsult #'.$cid.'","market":"'.$markets[rand(0, (count($markets)-1))].'","availability":"'.$available.'","id":'.$cid.',"rate":'.$price.'},';
	}
	$output = substr($output, 0, strlen($output)-1);
	echo $output;
?>}