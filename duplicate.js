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
        $( "#00NG0000009dNvI").val('Duplicate incident - multiple cases open for this issue.')
        var resOkButton = $('input[type="button"][value="OK"]')
        resOkButton.click()

        var prodEl = document.getElementById('Product_ileinner')
        dispatchMouseEvent(prodEl, 'dblclick', true)
        $( "#Product").val('Software Composition Analysis Enterprise Edition')
        dispatchMouseEvent(clickOff, 'click', true)

        var typeEl = document.getElementById('00NG000000DHTJt_ilecell')
        dispatchMouseEvent(typeEl, 'dblclick', true)
        $( "#00NG000000DHTJt option[value='Other']").prop('selected', true)
        var typeOkButton = $('input[type="button"][value="OK"]')
        typeOkButton.click()
    }

    var resCodeEl = document.getElementById('00NG000000COwcj_ilecell')
    var clickOff = document.getElementById('section_header')

    //Setting values  - may need to make the selectors more intelligent
    setTimeout(function() { dispatchMouseEvent(resCodeEl, 'dblclick', true);}, 50);
    setTimeout(function() { $( "#00NG000000COwcj option[value='Duplicate Incident']").prop('selected', true);;}, 500);
    setTimeout(function() { dispatchMouseEvent(clickOff, 'click', true);}, 600);
    setTimeout(function() { setValues();}, 700);

});