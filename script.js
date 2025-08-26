const toggleBtn = document.getElementById("darkModeBtn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  
  localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}
