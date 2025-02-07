function changeActive(currHeading: string) {
  console.log(currHeading);

  document
    .querySelectorAll(`.in-this-article a`)
    .forEach(el => el.parentElement!.classList.remove("active"));

  document
    .querySelectorAll(`.in-this-article a[href="#${currHeading}"]`)
    .forEach(el => {
      el.parentElement!.classList.add("active");
      // TODO: Add auto-scrolling to in this article
      // el.parentElement!.scrollIntoView({
      //   block: "end",
      //   inline: "nearest",
      // });
    });
}

function setHashHeading() {
  if (!location.hash) return;

  document.querySelector(location.hash)?.scrollIntoView({
    behavior: "smooth",
  });
  changeActive(location.hash.replace("#", ""));
}

function bootstrap() {
  console.log(`Bootstrap in process...`);

  document.querySelectorAll("article img").forEach(img => {
    img.addEventListener("click", () => img.classList.toggle("active"));
    if (img.previousSibling?.nodeType === 3 && /[A-z]/.test(img.previousSibling?.textContent || "")) {
      img.classList.add("w-auto", "h-8", "!m-0");
    }
  });

  document.querySelector("#toc-open")?.addEventListener("click", function(){
    document.querySelector("#toc-sidebar")!.classList.add("expanded");
  })
  document.querySelector("#toc-close")?.addEventListener("click", function(){
    document.querySelector("#toc-sidebar")!.classList.remove("expanded");
  })

  Object.assign(window, { changeActive });
  setHashHeading()

  console.log(`Bootstrap complete!`);
}

window.addEventListener("heading-change", e => {
  const currHeading = (e as CustomEvent<string>).detail;
  changeActive(currHeading);
});

document.addEventListener("astro:page-load", bootstrap);
