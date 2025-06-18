document.querySelectorAll('.meme').forEach((memeBox) => {
  memeBox.addEventListener('click', () => {
    alert('Ad will play here... (Insert Adsterra)');
    memeBox.querySelector('img').classList.remove('blurred');
    memeBox.querySelector('.unlock-overlay').style.display = 'none';
  });
});
