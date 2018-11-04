<!DOCTYPE html>
<html>
<head>
	<title>Post It</title>

	<link rel="stylesheet" type="text/css" href="css/dashboard.css">
	<link rel="stylesheet" type="text/css" href="css/postIt.css">
	<link rel="stylesheet" type="text/css" href="css/fontawesome/all.css">
	<!-- 
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css">
	 -->
	<link href="https://fonts.googleapis.com/css?family=Merienda" rel="stylesheet">
	<script type="text/javascript" src="library/jquery.min.js"></script>
</head>
<body style="margin: 0; padding: 0; /*overflow: hidden;*/">
	<div id="leftSide">
		<ul id="menuBar">
			<a href="#"><li><i class="fas fa-home fa-2x"></i></li></a>
			<a href="#"><li><i class="far fa-calendar-check fa-2x"></i></li></a>
				
			<a id="createPostIt" href="#"><li><i class="fas fa-list-alt fa-2x"></i></li></a>
		</ul>
	</div>
	<div id="mainSide">

		<div id="mainContent">

		</div>	

	</div>
</body>
	<script type="text/javascript">
		window.addEventListener('selectstart', function(e){ e.preventDefault(); });
	</script>
	<script type="text/javascript" src="postIt.js"></script>
</html>