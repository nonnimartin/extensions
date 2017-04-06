$(document).ready(function () {

    var clickOff = document.getElementById('section_header')

	var dispatchMouseEvent = function(target, var_args) {
	  var e = document.createEvent("MouseEvents");
	  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1))
	  target.dispatchEvent(e)
	};

    function clickOpt() {

        var optCheckBoxOuter       = document.getElementById('00NG000000COwcZ_chkbox')
        dispatchMouseEvent(optCheckBoxOuter, 'dblclick', true)
        var optCheckBoxInner      = document.getElementById('00NG000000COwcZ')
        optCheckBoxInner.click()
        clickOff.click()

    }

    function fillReason() {

        var reasonBox       = document.getElementById('00N1600000FFuMr_ilecell')
        dispatchMouseEvent(reasonBox, 'dblclick', true)
        $( "#00N1600000FFuMr").val('Strikeout emails often cause confusion.')
        clickOff.click()
    }

    clickOpt()
    fillReason()

});