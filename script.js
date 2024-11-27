document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contentItems = document.querySelectorAll(".content-item");
  const burgerBtn = document.getElementById("burger-btn");
  const menuTabs = document.getElementById("menu-tabs");

  burgerBtn.addEventListener("click", () => {
    menuTabs.classList.toggle("show");
  });


  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const contentId = tab.getAttribute("data-content");

      contentItems.forEach(item => {
        item.classList.toggle("active", item.id === contentId);
      });

      if (menuTabs.classList.contains("show")) {
        menuTabs.classList.remove("show");
      }
    });
  });
});
