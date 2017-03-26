$(document).ready(function () {

	var dispatchMouseEvent = function(target, var_args) {
	  var e = document.createEvent("MouseEvents");
	  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1))
	  target.dispatchEvent(e)
	};

    var myDoc = document.getElementById('00NG000000COwcj_ilecell')

    dispatchMouseEvent(myDoc, 'dblclick', true)

    //Setting values  - may need to make the selectors more intelligent
    $( "#00NG000000COwcj option[value='Duplicate Incident']").prop('selected', true);
    
    if ($( "#00NG000000COwcj option[value='Duplicate Incident']").prop('selected')) {
    	$( "#cas7_ileinner" ).text( "Closed" );
    }

    if ($( "#00NG000000COwcj option[value='Duplicate Incident']").prop('selected')) {
    	$( "#00NG0000009dNvI_ileinner" ).text( "Duplicate incident - multiple cases open for this issue." );
    }

    if ($( "#00NG000000COwcj option[value='Duplicate Incident']").prop('selected')) {
    	$( "#Product_ileinner" ).text( "Software Composition Analysis Enterprise Edition" );
    }
});