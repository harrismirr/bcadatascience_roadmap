const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const addSkillBtn = document.getElementById("addSkill");
const newSkillInput = document.getElementById("newSkill");
const skillList = document.getElementById("skillList");
const editBtn = document.getElementById("editBtn");
const aboutText = document.getElementById("aboutText");

// 🌙 Dark/Light Mode Toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "☀ Light Mode" : "🌙 Dark Mode";
});

// ➕ Add new skill
addSkillBtn.addEventListener("click", () => {
  const skill = newSkillInput.value.trim();
  if (skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    skillList.appendChild(li);
    newSkillInput.value = "";
  }
});

// ✏ Edit About Section
editBtn.addEventListener("click", () => {
  const newInfo = prompt("Update your About info:", aboutText.textContent);
  if (newInfo) aboutText.textContent = newInfo;
});