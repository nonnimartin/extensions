$(document).ready(function () {

	var dispatchMouseEvent = function(target, var_args) {
	  var e = document.createEvent("MouseEvents");
	  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1))
	  target.dispatchEvent(e)
	};
    
    var clickOff = document.getElementById('section_header')
    //Clickoff for inside dialog box
    var clickOff2 = document.getElementById('InlineEditDialog_buttons')

    //Setting values  - may need to make the selectors more intelligent

    //Set status value
    var statEl       = document.getElementById('cas7_ileinner')
    dispatchMouseEvent(statEl, 'dblclick', true)
    var statusOkButton = $('input[type="button"][value="OK"]')
    $( "#cas7 option[value='Closed']").prop('selected', true)

    if ($( "#cas7 option[value='Closed']").prop('selected', true)) {
        statusOkButton.click()
    }
    
    //var statusOkButton = $('input[type="button"][value="OK"]')
    // statusOkButton.click()
    //dispatchMouseEvent(clickOff, 'click', true)

    // if ($( "#cas7 option[value='Closed']").prop('selected')) {
        
    //     //Get resolution text value and then fill in default close settings
    //     var resolutionText = prompt("Resolution Text:")
    //     var trigEl = document.getElementById('00NG000000COwcj_ilecell')

    //     //Resolution
    //     $( "#00NG0000009dNvI_ileinner" ).text( resolutionText );
        
    //     //Default product text
    //     $( "#Product_ileinner" ).text( "Software Composition Analysis Enterprise Edition" );
        
    //     //Click to reveal some needed elements
    //     dispatchMouseEvent(trigEl, 'dblclick', true)
    //     $( "#00NG000000COwcj option[value='Resolved by TSE']").prop('selected', true);

    // }
});