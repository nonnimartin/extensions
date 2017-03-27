$(document).ready(function () {

	var dispatchMouseEvent = function(target, var_args) {
	  var e = document.createEvent("MouseEvents");
	  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1))
	  target.dispatchEvent(e)
	};
    
    var trigEl = document.getElementById('cas7_ilecell')

    dispatchMouseEvent(trigEl, 'dblclick', true)
    
    //Setting values  - may need to make the selectors more intelligent
    $( "#cas7 option[value='Closed']").prop('selected', true);
    
    if ($( "#cas7 option[value='Closed']").prop('selected')) {

        var clickOk     = document.getElementById('cas7_ilecell')
        var closeDialog = document.getElementById('InlineEditDialogX')

        dispatchMouseEvent(clickOk, 'click', true)
        dispatchMouseEvent(closeDialog, 'click', true)

        if ($( "#cas7 option[value='Closed']").prop('selected')) {
            
            //Get resolution text value and then fill in default close settings
            var resolutionText = prompt("Resolution Text:")
            var trigEl = document.getElementById('00NG000000COwcj_ilecell')

            //Resolution
            $( "#00NG0000009dNvI_ileinner" ).text( resolutionText );
            
            //Default product text
            $( "#Product_ileinner" ).text( "Software Composition Analysis Enterprise Edition" );
            
            //Click to reveal some needed elements
            dispatchMouseEvent(trigEl, 'dblclick', true)
            $( "#00NG000000COwcj option[value='Resolved by TSE']").prop('selected', true);

        }

    }
});