$(document).ready(function () {

	console.log("Duplicate ran!")

	var inputs = document.getElementsByTagName('input')

	console.log("Here's the seletor element" + $( "td#00NG000000COwcj_ilecell" ).html())

	//$( "td#00NG000000COwcj_ilecell" ).dblclick();

	//var $resTd = $( "td#00NG000000COwcj_ilecell" )
	var el = document.getElementById('00NG000000COwcj_ilecell')
	console.log(el.html)
	el.ondblclick.call(el, {target: el})
	//console.log('$resTd.length: ' + $resTd.length)
	//console.log($resTd)

	//$resTd.on('dblclick', function(e) {
	//	console.log("I'm in ur dblclick")
	//	this.ondblclick({target: this})
	//})
	//$resTd.trigger('focus').trigger('dblclick')

	console.log("Inputs = " + inputs.toString())

});