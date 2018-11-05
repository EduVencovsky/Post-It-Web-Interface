<!DOCTYPE html>
<html>
<head>
	<title>Post It</title>

	<link rel="stylesheet" type="text/css" href="css/postIt.css">
	<link rel="stylesheet" type="text/css" href="css/layout.css">

	<link href="https://fonts.googleapis.com/css?family=Merienda" rel="stylesheet">

	<script type="text/javascript" src="library/jquery.min.js"></script>
</head>
<body>
	<div id="mainContent">
		<div id="addPostIt"></div>
	</div>	
</body>
	<script type="text/javascript">
		window.addEventListener('selectstart', function(e){ e.preventDefault(); });
	</script>
	<script type="text/javascript" src="postIt.js"></script>
</html>