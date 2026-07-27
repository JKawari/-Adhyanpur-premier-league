document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Adhyanpur Premier League!");

  const cards = document.querySelectorAll(
    ".team-card, .match-card, .award-card, .news-card"
  );

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.style.transform = "scale(1.03)";
      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 200);
    });
  });
});