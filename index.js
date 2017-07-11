function wiki(k) {
  anim();
  $.getJSON(link + k + "&callback=?", function(data) {

    $.each(data.query.pages, function(x, y) {
      extracts.push(y.extract);
      titles.push(y.title);
      pageids.push(y.pageid);
    });
    $("#links").empty();
    for (i=0; i<extracts.length; i++){

      $("#links").append("<a class='divlinks' href='" + pagelink + pageids[i] + "' target='_blank'><div class='links'><h2 class='hdr'>" + titles[i] + "</h2><h3 class='descript'>" + extracts[i] + "</h3></div></a>");
    }
  });
}
var inpt = "ayyyyy";
var extracts = [];
var titles = [];
var pageids = [];
var info = [];
var pagelink = "http://en.wikipedia.org/?curid=";
var link =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cextracts&titles=Main+Page&generator=search&exsentences=1&exintro=1&explaintext=1&gsrsearch=";
$(document).ready(function(){
  $("form").submit(function(event) {
      event.preventDefault();
      console.log('he');
      inpt = $("input").val();
      extracts = [];
      pageids = [];
      titles = [];
      wiki(inpt);
  });
});


function anim() {
  $("h1").slideUp(400);
  $(".random").animate({ marginLeft: "60%", marginBottom: "-43px" }, 550);
}
