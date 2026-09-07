function toggleVotes(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
  btn.nextElementSibling.nextElementSibling.classList.toggle('hidden');
}
function filterByTier(tier, card) {
  const isActive = card.classList.contains('active');
  document.querySelectorAll('.stat-card').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.card').forEach(c => c.classList.remove('hidden'));
  if (isActive) return;
  card.classList.add('active');
  document.querySelectorAll('.card').forEach(c => c.classList.toggle('hidden', !c.dataset.categories.split(' ').includes(tier)));
}

window.addEventListener('load', function() {
    window.parent.postMessage({ frameHeight: document.body.scrollHeight }, '*');
  });
