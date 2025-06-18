function showAdAndUnlock(memeElement) {
  // Open the real Adsterra Direct Link in a new tab
  window.open("https://www.profitableratecpm.com/z4mqz8div?key=64839d757daf4d8b6b640bd7992a37ca", "_blank");

  // Simulate a 5-second ad before unlocking the meme
  setTimeout(() => {
    memeElement.classList.remove("blurred");
    alert("Ad finished! Meme unlocked.");
  }, 5000);
}
