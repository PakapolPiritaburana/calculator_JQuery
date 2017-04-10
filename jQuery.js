
$("document").ready(function () {
	var result1 = "";
	var result2 = "";
	var result = 0;
	var oper = null;
	$(".Show").click(function() {
   		var addNum = $(this).val();
   		if(oper == null) {
   			result1 = result1 + addNum;
   			$("#Result").val(result1);
   		} else {
   			result2 = result2 + addNum;
   			$("#Result").val(result2);
   		}
	});
	$(".operators").click(function() {
		oper = $(this).val();
		$("#Result").val(oper);
	});
	$(".operand").click(function() {
		result = calcu(result1, result2, oper);
		oper = null;
		result1 = result;
		result2 = "";
		$("#Result").val(result);
	})
	$("#ClearAll").click(function() {
		oper = null;
		result1 = "";
		result2 = "";
		$("#Result").val("");
	});
	$("#Clear").click(function() {
		$("#Result").val("");
		if(result1 != "" && oper == null) {
			result1 = "";
		}
		else if(result1 != "" && oper != null && result2 == "") {
			oper = null;
		}
		else if(result1 != "" && oper != null && result2 != "") {
			result2 = "";
		}
	});
	function calcu(val1, val2, oper) {
		var res;
		switch (oper) {
			case "+":
				res = parseFloat(val1) + parseFloat(val2)
				break;
			case "-":
				res = parseFloat(val1) - parseFloat(val2)
				break;
			case "*":
				res = parseFloat(val1) * parseFloat(val2)
				break;
			case "/":
				res = parseFloat(val1) / parseFloat(val2)
				break;
		}
		return res;
	}
});		