const RIGHT = 39;
const LEFT = 37;
const OFFSET = 48; // == keycode of "0"

function init() {
	$("div").each(function(idx) {
		$(this).attr("id", "s" + String(idx + 1));
	});
}

$(document).on("ready", function() {
	const P_MAX = $(".slides").length;
	const P_MIN = 1;
	let pos = P_MIN;

	init();

	$("html").on("keyup", (e) => {
		const key = e.keyCode;
		if (key == RIGHT || key == LEFT) {
			$("#s" + String(pos)).hide();
		}

		if (key == RIGHT) {
			if (pos < P_MAX) 
				pos++;
		} else if (key == LEFT) {
			if (pos > P_MIN)
				pos--;
		} else {
			const num = key - OFFSET;
			if (P_MIN <= num && num <= P_MAX) {
				$("#s" + String(pos)).hide();
				$("#s" + String(num)).show();
				pos = num;
			}
			return;
		}
		$("#s" + String(pos)).show();
	});

	$(".clickable").on("click", function() {
		const tid = $(this).attr("id");
	  	$("#abs-reb").fadeIn();
		switch (tid) {
		  case "clk-pad":
		  	$("*").css("margin", "0")
		  		  .css("padding", "0")
		  		  .css("line-height", "1em");
		  	break;

		  case "clk-shd":
		  	$("div").css("box-shadow", "none")
		  		  .css("border", "10px solid #000");
		  	break;

		  case "clk-fnt":
		  	$("*").css("font-family", "ＭＳ 明朝")
		  		  .css("font-weight", "normal")
		  		  .css("font-size", "30pt");
		  	break;

		  case "clk-fnt-k":
		  	$("*").css("font-family", "ＭＳ 明朝");
		  	break;

		  case "clk-fnt-s":
		  	$("*").css("font-weight", "normal")
		  		  .css("font-size", "30pt");
		  	break;

		  case "clk-clr":
		  	$("html, body").css("background", "green");
		  	$("*").css("color", "#000");
		  	$("h1").css("border-color", "#000")
		  		   .css("background", "green")
		  		   .css("color", "#fff");
		  	break;

		  case "clk-inf":
		  	$("ul#e-kan-ji").append("<span id='ipsum' style='font-family: \"ＭＳ 明朝\"'><br/>良い感じにするためには他にもいろいろな要素があると思いますが、良い感じを獲得するためには慣れが大事だという点が大きかったり、無意識にやってたりすることもあると思うので全ては書ききれません…(´・ω・｀)</font>")
		  	break;
		}
	});

	$("#abs-reb").on("click", function() {
	  	$("*").css("margin", "")
	  		  .css("border-color", "")
	  		  .css("color", "")
	  		  .css("padding", "")
	  		  .css("font-family", "")
	  		  .css("font-weight", "")
	  		  .css("font-size", "")
	  		  .css("line-height", "");
	  	$("h1").css("background", "")
	  		   .css("color", "");
	  	$("html, body").css("background", "");
	  	$("div").css("box-shadow", "")
	  		  .css("border", "");
	  	$("span#ipsum").hide();
	  	$(this).fadeOut();
	})
});