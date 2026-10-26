// Draws a small bar chart of skill levels to demo the <canvas> element.
const canvas = document.getElementById('skills-canvas');
const ctx = canvas.getContext('2d');
const skills = [['Python', 80], ['JavaScript', 85], ['Java', 75], ['C++', 65]]; // Same as about.html
ctx.font = '16px sans-serif';
skills.forEach(([name, level], i) => {
  const y = 20 + i * 40;
  ctx.fillStyle = '#222';
  ctx.fillText(name, 10, y + 18);
  ctx.fillStyle = '#2563eb';
  ctx.fillRect(100, y, level * 2.5, 24);
});
