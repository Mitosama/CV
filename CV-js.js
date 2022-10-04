/* Image loaded */
$(document).ready(function() {
    $(".company-image").attr("src","file:///D:/Duy/CV/icon/building-F1F1F4.svg");
    $(".duration-image").attr("src","file:///D:/Duy/CV/icon/clock-F1F1F4.svg");
    $(".position-image").attr("src","file:///D:/Duy/CV/icon/person%201-F1F1F4.svg");
    $(".info-image").attr("src","file:///D:/Duy/CV/icon/info%20354259.svg");
  });
  /* Skills tooltip */
  $(document).ready(function () {
    $(".skill-tooltip").mouseenter(function () {
      var id = $(this).attr("id");
      var tooltipText = id.concat("-text");
      $("#" + tooltipText).css({ "display": "inline" });
    });
  });
  $(document).ready(function () {
    $(".skill-tooltip").mouseleave(function () {
      var id = $(this).attr("id");
      var tooltipText = id.concat("-text");
      $("#" + tooltipText).css({ "display": "none" });
    });
  });
  /* Position tooltip */
  $(document).ready(function () {
    $(".position-details").mouseenter(function () {
      var id = $(this).attr("id");
      var tooltipId = id.concat("-tooltip");
      $("#" + tooltipId).css({ "display": "inline" });
    });
  });
  $(document).ready(function () {
    $(".position-details").mouseleave(function () {
      var id = $(this).attr("id");
      var tooltipId = id.concat("-tooltip");
      $("#" + tooltipId).css({ "display": "none" });
    });
  });
  /* Animated score */
  $(".score span").each(function () {
    var calWidth = (($(this).parent().width() * parseInt($(this).attr("score"))) / 100) - 2;
    var calWidth100 = (($(this).parent().width() * parseInt($(this).attr("score"))) / 100) - 7;
    $(this).text($(this).attr("score"));
    if ($(this).attr("score") == "100") {
      $(this).css({ "border-top-right-radius": "5px", "border-bottom-right-radius": "5px" });
      $(this).animate(
        {
          width: calWidth100,
        },
        1000
      );
    } else {
      $(this).animate(
        {
          width: calWidth,
        },
        1000
      );
    }
  });
  /* Switch Biography - Project */
  $("#project-tab").click(function() {
    $("#biography-tab").removeClass("tab-selected");
    $("#project-tab").addClass("tab-selected");
    $("#biography-content").hide();
    $("#project-content").show();
  });
  $("#biography-tab").click(function() {
    $("#project-tab").removeClass("tab-selected");
    $("#biography-tab").addClass("tab-selected");
    $("#project-content").hide();
    $("#biography-content").show();
  });