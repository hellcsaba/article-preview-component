const articleShareButton = document.querySelector(".article__share");
const articleShareContent = document.querySelector(".article__share-content");
const articleAuthorContent = document.querySelector(".article__author-content");
const articleShareButtonInv = document.querySelector(
  ".article__share--inverse"
);

articleShareButton.addEventListener("click", () => {
  const inverseButtonStyle = window.getComputedStyle(articleShareButtonInv);
  if (inverseButtonStyle.display !== "none") {
    articleAuthorContent.classList.toggle("hidden");
  }
  articleShareContent.classList.toggle("hidden");
});

articleShareButtonInv.addEventListener("click", () => {
  articleShareContent.classList.toggle("hidden");
  articleAuthorContent.classList.remove("hidden");
});
