const adLink =https://www.profitableratecpm.com/z4mqz8div?key=64839d757daf4d8b6b640bd7992a37ca

function showAdAndUnlock(memeElement) {
    window.open(adLink, "_blank");

    setTimeout(() => {
        memeElement.classList.remove("blurred");
        memeElement.querySelector('.overlay').style.display = "none";
    }, 5000); // Wait 5 seconds
}
