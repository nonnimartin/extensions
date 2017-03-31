$(document).ready(function () {

	var dispatchMouseEvent = function(target, var_args) {
	  var e = document.createEvent("MouseEvents");
	  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1))
	  target.dispatchEvent(e)
	};
    
    //Clickoff for inside dialog box
    var resCodeEl = document.getElementById('00NG000000COwcj_ilecell')
    var clickOff = document.getElementById('section_header')

    //Setting values  - may need to make the selectors more intelligent
    dispatchMouseEvent(resCodeEl, 'dblclick', true)
    $( "#00NG000000COwcj option[value='Resolved by TSE']").prop('selected', true);
    dispatchMouseEvent(clickOff, 'click', true)

    if ($( "#00NG000000COwcj option[value='Resolved by TSE']").prop('selected')) {
        var statusEl       = document.getElementById('cas7_ileinner')
        var statusOkButton = $('input[type="button"][value="OK"]')
        dispatchMouseEvent(statusEl, 'dblclick', true)
        $( "#cas7 option[value='Closed']").prop('selected', true)
        statusOkButton.click()
    }

    if ($( "#00NG000000COwcj option[value='Resolved by TSE']").prop('selected')) {
        var resEl       = document.getElementById('00NG0000009dNvI_ileinner')
        dispatchMouseEvent(resEl, 'dblclick', true)
        var resolutionText = prompt("Resolution text: ")
        $( "#00NG0000009dNvI").val(resolutionText)
        var resOkButton = $('input[type="button"][value="OK"]')
        resOkButton.click()
    }

    if ($( "#00NG000000COwcj option[value='Resolved by TSE']").prop('selected')) {
        var prodEl = document.getElementById('Product_ileinner')
        dispatchMouseEvent(prodEl, 'dblclick', true)
        $( "#Product").val('Software Composition Analysis Enterprise Edition')
        dispatchMouseEvent(clickOff, 'click', true)
    }

});