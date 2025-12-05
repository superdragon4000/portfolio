const buttons = document.querySelectorAll(".lang-switch button");
const nodes = document.querySelectorAll(".lang");
function setLang(target) {
  const lang = target?.dataset.lang || "en";
  document.documentElement.lang = lang;
  buttons.forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  nodes.forEach((node) => {
    const text = node.dataset[lang];
    if (typeof text === "string") node.innerHTML = text;
  });
}
buttons.forEach((btn) => btn.addEventListener("click", () => setLang(btn)));
// Default: emit EN
setLang(document.querySelector('.lang-switch button[data-lang="ru"]'));
