// Toggle sidebar agar melebar/menyempit
document.getElementById('toggleBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});

// Gerakan mata karakter mengikuti kursor
document.addEventListener('mousemove', (e) => {
  const chibi = document.getElementById('chibi');
  if (!chibi) return;

  // Hitung posisi tengah elemen chibi
  const rect = chibi.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Hitung arah kursor relatif ke chibi
  const deltaX = (e.clientX - centerX) / 30; // dibagi untuk gerakan halus
  const deltaY = (e.clientY - centerY) / 30;

  // Ubah posisi gambar
  chibi.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});

// Klik karakter chibi akan arahkan ke halaman About Me
document.getElementById('chibi').addEventListener('click', () => {
  window.location.href = 'about.html';
});
