$(document).ready(function () {

	var dispatchMouseEvent = function(target, var_args) {
	  var e = document.createEvent("MouseEvents");
	  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1))
	  target.dispatchEvent(e)
	};

   function setValues() {
        var statusEl       = document.getElementById('cas7_ileinner')
        var statusOkButton = $('input[type="button"][value="OK"]')
        dispatchMouseEvent(statusEl, 'dblclick', true)
        $( "#cas7 option[value='Closed']").prop('selected', true)
        statusOkButton.click()

        var resEl       = document.getElementById('00NG0000009dNvI_ileinner')
        dispatchMouseEvent(resEl, 'dblclick', true)
        var defaultResolutionText = $( "#00NG0000009dNvI").val()
        var resolutionText = prompt("Resolution text: ", defaultResolutionText)
        $( "#00NG0000009dNvI").val(resolutionText)
        var resOkButton = $('input[type="button"][value="OK"]')
        resOkButton.click()

        var prodEl = document.getElementById('Product_ileinner')
        dispatchMouseEvent(prodEl, 'dblclick', true)
        $( "#Product").val('Software Composition Analysis Enterprise Edition')
        dispatchMouseEvent(clickOff, 'click', true)
    }

    //Clickoff for inside dialog box
    var resCodeEl = document.getElementById('00NG000000COwcj_ilecell')
    var clickOff = document.getElementById('section_header')

    //Setting values  - may need to make the selectors more intelligent

    setTimeout(function() { dispatchMouseEvent(resCodeEl, 'dblclick', true);}, 50);
    setTimeout(function() { $( "#00NG000000COwcj option[value='Resolved by TSE']").prop('selected', true);}, 500);
    setTimeout(function() { dispatchMouseEvent(clickOff, 'click', true);}, 600);
    setTimeout(function() { setValues();}, 700);

});