$(function () {
  var bar = '';
  bar += '<div class="topnav" id="myTopnav">';
  bar += "<p>Maria's Portfolio</p>";
  bar += '<div class="navcontent">';
  bar += '<a href="index.html" id="index">Home</a>';
  bar += '<a href="projects.html" id="projects">Projects</a>';
  bar += '<a href="#contact">Contact</a>';
  bar += '<a href="#about">About</a>';
  bar += '<i class="fab fa-linkedin"></i>';
  bar += '</div>';
  bar += '<a href="javascript:void(0);" class="icon" onclick="myNavBar()">';
  bar += '<i class="fa fa-bars"></i>';
  bar += '</a>';
  bar += '</div>';

  $("#main-bar").html(bar);

  var id = getValueByName("id");
  $("#" + id).addClass("active");
});

function getValueByName(name) {
  var url = document.getElementById('nav-bar').getAttribute('src');
  var param = new Array();
  if (url.indexOf("?") != -1) {
    var source = url.split("?")[1];
    items = source.split("&");
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var parameters = item.split("=");
      if (parameters[0] == "id") {
        return parameters[1];
      }
    }
  }
} 