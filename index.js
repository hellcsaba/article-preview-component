const articleShareButton = document.querySelector(".article__share");
const articleShareContent = document.querySelector(".article__share-content");
const articleAuthorContent = document.querySelector(".article__author-content");
const articleShareButtonInv = document.querySelector(
  ".article__share--inverse"
);

articleShareButton.addEventListener("click", () => {
  articleShareContent.classList.toggle("hidden");
  articleAuthorContent.classList.toggle("hidden");
});

articleShareButtonInv.addEventListener("click", () => {
  articleShareContent.classList.toggle("hidden");
  articleAuthorContent.classList.toggle("hidden");
});
