// my solution
$(document).ready(function () {
  $(".toast-close").click(function () {
    $(this).parent(".toast").remove();
  });
  $('.toast').delay(4000).fadeOut();
});

// his solution
// $(document).ready(function () {
//   $(".toast-close").click(function () {
//     var parent = $(this).parent(".toast");
//     parent.fadeOut("slow", function () {
//       $(this).remove();
//     });
//   });
//   $('.toast').delay(4000).fadeOut("slow", function () {
//       $(this).remove();
//     //   it has some problems
//     });
// });
