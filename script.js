$(document).ready(function(){
	$(".parameters").hide();
	var button;
	$("#buttonsor").hover(
		function() { 
			$(this).css({"backgroundColor": "gray"}); 
		},
		function() { 
			$(this).css({"backgroundColor": "#CCC"}); 
	});
	
	$("#buttonli").hover(
		function() { 
			$(this).css({"backgroundColor": "gray"}); 
		},
		function() { 
			$(this).css({"backgroundColor": "#CCC"}); 
	});
	
	$("#buttondd").hover(
		function() { 
			$(this).css({"backgroundColor": "gray"});
		},
		function() { 
			$(this).css({"backgroundColor": "#CCC"}); 
	});
	
	$("#buttonvf").hover(
		function() { 
			$(this).css({"backgroundColor": "gray"}); 
		},
		function() { 
			$(this).css({"backgroundColor": "#CCC"}); 
	});
	
	$("#buttonti").hover(
		function() { 
			$(this).css({"backgroundColor": "gray"}); 
		},
		function() {
			$(this).css({"backgroundColor": "#CCC"}); 
	});
	
	$("#buttonsi").hover(
		function() { 
			$(this).css({"backgroundColor": "gray"}); 
		},
		function() { 
			$(this).css({"backgroundColor": "#CCC"}); 
	});															
		
	$("#buttonsor").click( 
		function() { 
			$(".parameters").hide(), $("#sorparameters").show(); 
			$(this).css({"backgroundColor": "black"});
			button="sor";
	});
	
	$("#buttonli").click( 
		function() { 
			$(".parameters").hide(), $("#liparameters").show(); 
			$(this).css({"backgroundColor": "black"});
			button="li";
	});
	
	$("#buttondd").click( 
		function() { 
			$(".parameters").hide(), $("#ddparameters").show(); 
			$(this).css({"backgroundColor": "black"});
			button="dd";
	});
	
	$("#buttonvf").click( 
		function() { 
			$(".parameters").hide(), $("#vfparameters").show(); 
			$(this).css({"backgroundColor": "black"});
			button = "vf";
	});
	
	$("#buttonti").click( 
		function() { 
			$(".parameters").hide(), $("#tiparameters").show(); 
			$(this).css({"backgroundColor": "black"});
			button = "ti";
	});
		
	$("#buttonsi").click( 
		function() { 
			$(".parameters").hide(), $("#siparameters").show(); 
			$(this).css({"backgroundColor": "black"});
	});


	$("#graphbut").click(function(){
	var empt="";
		if (button == "sor"){
			//Top Button
			var TopFunctionIn=$("#sortopfunction").val();
			if (TopFunctionIn==''){
				empt=empt+"Top Function, ";
			}
		
			//Bottom Button
			var BottomFunctionIn=$("#sorbottomfunction").val();
			if (BottomFunctionIn==''){
				empt=empt+"Bottom Function, ";
			}
		
			//Left Bound
			var LeftBoundIn=$("#sorleftbound").val();
			if (LeftBoundIn==''){
				empt=empt+"Left Bound, ";	
			}
		
			//Right Bound
			var RightBoundIn=$("#sorrightbound").val();
			if (RightBoundIn==''){
				empt=empt+"Right Bound, ";
			}
		
			//Axis
			var AxisIn=$("#soraxis").val();
			if (AxisIn==''){
				empt=empt+"Axis, ";
			}
		}
		else if (button == "li"){
			//Parametric Line
			var xtIn=$("#lixt").val();
			if (xtIn==''){
				empt=empt+"xt, ";
			}
			var ytIn=$("#liyt").val();
			if (ytIn==''){
				empt=empt+"yt, ";
			}
			
			var ztIn=$("#lizt").val();
			if (ztIn==''){
				empt=empt+"zt, ";
			}
			
			//Start Time
			var StartTimeIn=$("#listarttime").val();
			if (StartTimeIn==''){
				empt=empt+"Start Time, ";
			}
		
			//End Time
			var EndTimeIn=$("#liendtime").val();
			if (EndTimeIn==''){
				empt=empt+"End Time, ";
			}
		
			//Surface Function
			var SurfaceFunctionIn=$("#lisurfacefunction").val();
			if (SurfaceFunctionIn==''){
				empt=empt+"Surface Function, ";
			}
		
		}else if (button == "dd"){
			//Surface Function
			var SurfaceFunctionIn=$("#lisurfacefunction").val();
			if (SurfaceFunctionIn==''){
				empt=empt+"Surface Function, ";
			}
		
			//Direction Vector
			var DirectionVectorIn=$("#dddirectionvector").val();
			if (DirectionVectorIn==''){
				empt=empt+"Direction Vector, ";
			}
		}else if (button == "vf"){
			//Vector Value Function
			var XValueIn=$("#xvectorvaluefunction").val();
			if (XValueIn==''){
				empt=empt+"X Component Function, ";
			}
			
			var YValueIn=$("#yvectorvaluefunction").val();
			if (YValueIn==''){
				empt=empt+"Y Component Function, ";
			}
		}else if (button == "ti"){
			//Function
			var FunctionIn=$("#tifunction").val();
			if (FunctionIn==''){
				empt=empt+"Function, ";
			}
		
			//XBounds
			var XBoundsIn=$("#tixbounds").val();
			if (XBoundsIn==''){		
				empt=empt+"XBounds, ";
			}
		
			//YBounds
			var YBoundsIn=$("#tiybounds").val();
			if (YBoundsIn==''){
				empt=empt+"YBounds, ";
			}
		
			//ZBounds
			var ZBoundsIn=$("#tizbounds").val();
			if (ZBoundsIn==''){
				empt=empt+"ZBounds, ";
			}
		}
		if (empt != ""){
			alert(empt + "cannot be empty");
		}else{
			$("#graph").remove();
			if( button == "li"){
				$(".logo").prepend('<iframe id="graph" src="/~jnewlin/pennapps?xoft='+xtIn+'&yoft='+ytIn+'&zoft='+ztIn+'&t0='+StartTimeIn+'&t1='+EndTimeIn+'&fnstring='+SurfaceFunctionIn+'"></iframe>');
			}
			else if (button == "vf"){
				$(".logo").prepend('<iframe id="graph" src="/~jnewlin/pennapps/vectorfield.html?vectorfn1='+XValueIn+'&vectorfn2='+YValueIn+'"></iframe>');
			}
			//displays input variables
			/*$("#graph").contents().find("#variablescript").append(TopFunctionIn);
			
			$("#graph").contents().find("#variablescript").append(BottomFunctionIn);
			
			$("#graph").contents().find("#variablescript").append(LeftBoundIn);
			
			$("#graph").contents().find("#variablescript").append(RightBoundIn);
		
			$("#graph").contents().find("#variablescript").append(AxisIn);
		
			$("#graph").contents().find("#variablescript").append(ParametricLineIn);
		
			$("#graph").contents().find("#variablescript").append(StartTimeIn);
		
			$("#graph").contents().find("#variablescript").append(EndTimeIn);
		
			$("#graph").contents().find("#variablescript").prepend('var fnstring = "' + SurfaceFunctionIn +'";').reload(true);

			$("#graph").contents().find("#variablescript").append(DirectionVectorIn);
		
			$("#graph").contents().find("#variablescript").append(VectorValueIn);
		
			$("#graph").contents().find("#variablescript").append(FunctionIn);
		
			$("#graph").contents().find("#variablescript").append(XBoundsIn);
		
			$("#graph").contents().find("#variablescript").append(YBoundsIn);
		
			$("#graph").contents().find("#variablescript").append(ZBoundsIn);*/
		}
	});
});