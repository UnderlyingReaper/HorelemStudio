let isBurgerMenuOpen = false;
document.getElementById("Hamburger-Btn").onclick = OnHamburgerClick;

document.getElementById("Games-Section").onclick = OnGamesClick;
document.getElementById("About-Section").onclick = OnAboutClick;
document.getElementById("Home-Section").onclick = OnHomeClick;

document.getElementById("LatestGameVisitBtn").onclick = OnHellucinateClick;

document.getElementById("Hellucinate-Game").onclick = OnHellucinateClick;

document.getElementById("X-Acc-Btn").onclick = OnXAccClick;
document.getElementById("Instagram-Acc-Btn").onclick = OnInstagramAccClick;
document.getElementById("Youtube-Channel-Btn").onclick = OnYoutubeChannelClick;


function OnHamburgerClick()
{
  const burgerMenu = document.getElementById("Hamburger-Menu");
  const burgerBtn = document.getElementById("Hamburger-Btn");
  
  if(!isBurgerMenuOpen) {
    isBurgerMenuOpen = true;
    burgerBtn.style.rotate = '90deg';
    burgerMenu.style.right = '0%';
  }
  else if(isBurgerMenuOpen) {
    isBurgerMenuOpen = false;
    burgerBtn.style.rotate = '0deg';
    burgerMenu.style.right = '100%';
  }
}
function OnGamesClick()
{
  window.scrollTo({ top: 625, behavior: 'smooth' });
}
function OnAboutClick()
{
  window.scrollTo({ top: 10000000000000000, behavior: 'smooth'});
}
function OnHomeClick()
{
  window.scrollTo({ top:0, behavior: 'smooth'});
}

function OnHellucinateClick()
{
  window.location.href = "https://horelemstudio.itch.io/hellucinate";
}

function OnXAccClick()
{
  window.location.href = "https://x.com/HorelemStudio";
}
function OnInstagramAccClick()
{
  window.location.href = "https://www.instagram.com/horelemstudio/";
}
function OnYoutubeChannelClick()
{
  window.location.href = "https://www.youtube.com/@HorelemStudio";
}