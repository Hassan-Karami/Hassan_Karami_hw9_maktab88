let w=10;
let l=10;
$("button").on("click", function () {
    if (w < 100) {
      $("#load").animate({ width: `${(w += 10)}%` }, 200, () => {
        if (w == 100) {
          alert("You Won");
        }
      });
      $("p").html(`${(l += 10)}%`);
    }
  });