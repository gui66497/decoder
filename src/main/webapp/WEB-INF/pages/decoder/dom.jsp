<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=9">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
		<link rel="shortcut icon" type="image/png" href="../../img/favicon.png">
        <title>jsPlumb 2.3.0 demo - flowchart</title>
		

<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
<link href="//fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
<link rel="stylesheet" href="../css/main.css">
<link rel="stylesheet" href="../css/jsplumbtoolkit-defaults.css">
<link rel="stylesheet" href="../css/jsplumbtoolkit-demo.css">
<link rel="stylesheet" href="../css/demo.css">
    </head>
    
    <body data-demo-id="flowchart">


        <div class="jtk-demo-main">
            <!-- demo -->
            <div class="jtk-demo-canvas canvas-wide flowchart-demo jtk-surface jtk-surface-nopan" id="canvas">
                <div class="window jtk-node" id="192.168.1.191" onclick="return alert(111);"><strong>监控摄像头-191</strong><br/><br/></div>
                <div class="window jtk-node" id="192.168.1.44"><strong>44</strong><br/><br/></div>
                <div class="window jtk-node" id="192.168.1.64"><strong>64</strong><br/><br/></div>
                <div class="window jtk-node" id="192.168.1.65"><strong>65</strong><br/><br/></div>
                <div class="window jtk-node" id="192.168.1.111"><strong>111</strong><br/><br/></div>
            </div>

            <!-- /demo -->
        </div>
        <div id ="status" >
            <textarea style="width: 100%;height:200px"  id="xmlStatus"></textarea>
        </div>
        <script src="../js/jquery.min.js"></script>
        <script src="../js/common.js"></script>
		<script src="../js/jsplumb.min.js"></script>
		
		<script src="../js/demo.js"></script>

		
		<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-49979015-1', 'auto');
    ga('send', 'pageview');

</script>

        
     </body>
</html>