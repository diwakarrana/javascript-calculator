	//this function is disabling the keyboard 
	document.onkeydown = function (e) 
	{
 		return false;
	}

	function sin(){
        var x = document.getElementById("inputfield").value;
        var y = Math.sin(x);
        document.getElementById("inputfield").value = y;
	}

	function cos(){
        var x = document.getElementById("inputfield").value;
        var y = Math.cos(x);
        document.getElementById("inputfield").value = y;
	}

	function tan(){
        var x = document.getElementsByClassName("input_data")[0].value;
        var y = Math.tan(x);
        document.getElementById("inputfield").value = y;
	}

	function BACKSPC(){
	    var a = document.querySelector("#inputfield").value;
	    document.querySelector("#inputfield").value = a.substr(0, a.length-1);
	}

	function square(){
        var x = document.querySelector("#inputfield").value;
	    var y = Math.pow(x, 2);
        document.querySelector("#inputfield").value = y;
	}

	function cubed(){
         var x = document.querySelector("#inputfield").value;
         var y = Math.pow(x, 3);
        document.querySelector("#inputfield").value = y;
	}

	function sqrt2(){
        var x = document.querySelector("#inputfield").value;
	    var y = Math.pow(x, 0.5);
        document.querySelector("#inputfield").value = y;
	}

	function sqrt3(){
        var x = document.querySelector("#inputfield").value;
	    var y = Math.pow(x, 1/3);
        document.querySelector("#inputfield").value = y;
	}

	function number(value){
        var x = document.querySelector("#inputfield").value;
	    var y = x + value;
        document.querySelector("#inputfield").value = y;
	}

	function remv(){
	document.querySelector("#inputfield").value=" ";
	}

	function equal(){
        var x = document.querySelector("#inputfield").value;
	    var y = eval(x);
        document.querySelector("#inputfield").value = y;
	}
