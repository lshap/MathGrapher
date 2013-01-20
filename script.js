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
			var ParametricLineIn=$("#liparametricline").val();
			if (ParametricLineIn==''){
				empt=empt+"Parametric Line, ";
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
			var VectorValueIn=$("#vfvectorvaluefunction").val();
			if (VectorValueIn==''){
				empt=empt+"Vector Value Function, ";
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
		
			//displays input variables
			$("#graph").contents().find("#here").append(TopFunctionIn);
			
			$("#graph").contents().find("#here").append(BottomFunctionIn);
			
			$("#graph").contents().find("#here").append(LeftBoundIn);
			
			$("#graph").contents().find("#here").append(RightBoundIn);
		
			$("#graph").contents().find("#here").append(AxisIn);
		
			$("#graph").contents().find("#here").append(ParametricLineIn);
		
			$("#graph").contents().find("#here").append(StartTimeIn);
		
			$("#graph").contents().find("#here").append(EndTimeIn);
		
			$("#graph").contents().find("#here").append(SurfaceFunctionIn);
		
			$("#graph").contents().find("#here").append(DirectionVectorIn);
		
			$("#graph").contents().find("#here").append(VectorValueIn);
		
			$("#graph").contents().find("#here").append(FunctionIn);
		
			$("#graph").contents().find("#here").append(XBoundsIn);
		
			$("#graph").contents().find("#here").append(YBoundsIn);
		
			$("#graph").contents().find("#here").append(ZBoundsIn);
		}
	});
});