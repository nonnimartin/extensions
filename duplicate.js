$(document).ready(function () {

	var dispatchMouseEvent = function(target, var_args) {
	  var e = document.createEvent("MouseEvents");
	  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1))
	  target.dispatchEvent(e)
	};

    var trigEl = document.getElementById('00NG000000COwcj_ilecell')

    dispatchMouseEvent(trigEl, 'dblclick', true)

    var randomClick = $( ".pageDescription" )

    //Setting values  - may need to make the selectors more intelligent
    $( "#00NG000000COwcj option[value='Duplicate Incident']").prop('selected', true);
    
    if ($( "#00NG000000COwcj option[value='Duplicate Incident']").prop('selected')) {
    	var statusEl       = document.getElementById('cas7_ileinner')
        var statusOkButton = $('input[type="button"][value="OK"]')
        dispatchMouseEvent(statusEl, 'dblclick', true)
        $( "#cas7 option[value='Closed']").prop('selected', true)
        statusOkButton.click()
    }

    if ($( "#00NG000000COwcj option[value='Duplicate Incident']").prop('selected')) {
        var resEl       = document.getElementById('00NG0000009dNvI_ileinner')
        dispatchMouseEvent(resEl, 'dblclick', true)
        $( "#00NG0000009dNvI").val('Duplicate incident - multiple cases open for this issue.')
        var resOkButton = $('input[type="button"][value="OK"]')
        statusOkButton.click()
    }

    if ($( "#00NG000000COwcj option[value='Duplicate Incident']").prop('selected')) {
    	$( "#lookup01t1600000LsQZuProduct" ).val("", "Software Composition Analysis Enterprise Edition" );
    }

    //randomClick.click()
});