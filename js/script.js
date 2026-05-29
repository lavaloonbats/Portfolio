const buttons = document.querySelectorAll(".menu-btn");
const pages = document.querySelectorAll(".page");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const target = button.dataset.page;

    pages.forEach(page => {
      page.classList.remove("active");
    });

    document
      .getElementById(target)
      .classList.add("active");

  });

});