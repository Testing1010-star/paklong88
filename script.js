   // Promo Slider
let currentSlide = 0;
const slider = document.getElementById("promo-slider").firstElementChild;
setInterval(() => {
    currentSlide = (currentSlide + 1) % 2;
    slider.style.transform = `translateX(-${currentSlide * 33}%)`;
}, 6000);

// Scroll All Games
const scrollContainer = document.getElementById("all-games");
document.getElementById("scroll-left").addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
});
document.getElementById("scroll-right").addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
});

// Add click event to games
const hotGames = document.querySelectorAll("#hot-games a");
const allGames = document.querySelectorAll("#all-games a");

const gameLinks = {
    "Mahjong Ways": "https://m.pgsoft-games.com/65/index.html?ot=ca7094186b309ee149c55c8822e7ecf2&btt=2&language=id-ID&__refer=m.pg-redirect.com&or=static.pgsoft-games.com",
    "Mahjong Ways 2": "https://m.pgsoft-games.com/74/index.html?l=id&ot=ca7094186b309ee149c55c8822e7ecf2&btt=2&from=https://&language=id-ID&__refer=m.pg-redirect.net&or=static.pgsoft-games.com",
    "Wild Bandito": "https://m.pgsoft-games.com/104/index.html?l=id&ot=ca7094186b309ee149c55c8822e7ecf2&btt=2&from=https://&language=id-ID&__refer=m.pg-redirect.net&or=static.pgsoft-games.com",
    "Starlight X1000": "https://d3pvfi6m7bxu71.cloudfront.net/gs2c/html5Game.do?extGame=1&symbol=vs20starlightx&gname=Starlight%20Princess%201000&jurisdictionID=99&mgckey=stylename@generic~SESSION@45e71fc3-5579-492b-8bd2-8fdeffa76289https://d3pvfi6m7bxu71.cloudfront.net/gs2c/html5Game.do?extGame=1&symbol=vs20starlightx&gname=Starlight%20Princess%201000&jurisdictionID=99&mgckey=stylename@generic~SESSION@45e71fc3-5579-492b-8bd2-8fdeffa76289",
    "Olympus X1000": "https://d3pvfi6m7bxu71.cloudfront.net/gs2c/html5Game.do?extGame=1&symbol=vs20olympx&gname=Gates%20of%20Olympus%201000&jurisdictionID=99&mgckey=stylename@generic~SESSION@d1b4b4b5-268d-47c0-bf52-1c644472befc",
    "Werewolfs Hunt": "https://m.pgsoft-games.com/1615454/index.html?l=id&ot=ca7094186b309ee149c55c8822e7ecf2&btt=2&from=https://&language=id-ID&__refer=m.pg-redirect.net&or=static.pgsoft-games.com",
    "Game 1": "https://example.com/game-1",
    "Game 2": "https://example.com/game-2",
    "Game 3": "https://example.com/game-3",
    "Game 4": "https://example.com/game-4",
    "Game 5": "https://example.com/game-5",
    "Game 6": "https://example.com/game-6"
};
[...hotGames, ...allGames].forEach(game => {
    game.addEventListener("click", (event) => {
        event.preventDefault(); // Mencegah default action
        const gameName = game.textContent.trim().replace("🔥", "").trim(); // Hapus emoji dan spasi
        console.log("Game Name:", gameName); // Debugging
        const gameUrl = gameLinks[gameName];
        console.log("Game URL:", gameUrl); // Debugging
        if (gameUrl) {
            window.location.href = gameUrl; // Arahkan ke URL yang sesuai
        } else {
            console.error("URL tidak ditemukan untuk game:", gameName);
        }
    });
});

// Close Pop-up Modal
document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
})
