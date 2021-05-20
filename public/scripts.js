const addSocialMediaShareEventListener = () => {
  const articleShare = document.querySelector("#articleShareIcon");
  console.log({ articleShare });
  if (articleShare) {
    articleShare.addEventListener("click", function () {
      const socialMediaIcons = document.querySelector("#socialMediaIcons");
      socialMediaIcons.classList.toggle("hidden");
    });
  }
};

addSocialMediaShareEventListener();
