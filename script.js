document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    const accCollapse = item.nextElementSibling;

    if (!item.classList.contains("collapsing")) {
      if (!item.classList.contains("open")) {
        console.log("toggle accordion button");

        accCollapse.style.display = "block";
        const accHeight = accCollapse.clientHeight;

        setTimeout(() => {
          accCollapse.style.height = accHeight + "px";
          accCollapse.style.display = "";
        }, 1);

        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          console.log("open accordion line");
          accCollapse.classList = "accordion__collapse collapse open";
          accCollapse.style.height = "";
        }, 300);
      } else {
        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accCollapse.style.height = "0px";
        }, 1);

        setTimeout(() => {
          console.log("close accordion line");
          accCollapse.classList = "accordion__collapse collapse";
          accCollapse.style.height = "";
        }, 300);
      }
      item.classList.toggle("open");
    }
  });
});
