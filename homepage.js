window.addEventListener('load', OnWebsiteLoad);


document.getElementById("Games-Section").onclick = OnGamesClick;
document.getElementById("About-Section").onclick = OnAboutClick;
document.getElementById("Home-Section").onclick = OnHomeClick;

document.getElementById("LatestGameVisitBtn").onclick = OnHellucinateClick;

document.getElementById("Hellucinate-Game").onclick = OnHellucinateClick;


function OnWebsiteLoad()
{
  console.log("Website loaded");
}

function OnGamesClick()
{
  window.scrollTo({ top: 625, behavior: 'smooth' });
}
function OnAboutClick()
{
  window.scrollTo({ top: 10000, behavior: 'smooth'});
}
function OnHomeClick()
{
  window.scrollTo({ top:0, behavior: 'smooth'});
}

function OnHellucinateClick()
{
  window.location.href = "https://horelemstudio.itch.io/hellucinate";
}