// COURSES page (2)
// Selected-Software 2
$(document).ready(function () {
  $("#hide").click(function () {
    $(".card-Software").toggle();
  });
});

// Selected-Author 3
$(document).ready(function () {
  $("#toggle").click(function () {
    $(".card-Author").toggle();
  });
});

// Selected-Price 4
$(document).ready(function () {
  $("#Price").click(function () {
    $(".card-Price").toggle();
  });
});

// Selected-Skill level 5
$(document).ready(function () {
  $("#skill").click(function () {
    $(".card-skill").toggle();
  });
});

//  Selected-Rating 6
$(document).ready(function () {
  $("#rating").click(function () {
    $(".card-Rating").toggle();
  });
});

// course-details page (3)
// tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
