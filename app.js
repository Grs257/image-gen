const API_KEY = "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";

const butt = document.querySelector("#button-icon");
const inputElement = document.querySelector("input");
const imagesection = document.querySelector(".image-section");

const getImages = async () => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: inputElement.value,
      n: 4,
      size: "1024x1024",
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      options
    );
    const data = await response.json();

    data?.data.forEach((imageobject) => {
      const ImageContainer = document.createElement("div");
      ImageContainer.classList.add("image-container");
      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", imageobject.url);
      ImageContainer.append(imageElement);
      imagesection.append(ImageContainer);
    });
  } catch (error) {
    console.error(error);
  }
};
butt.addEventListener("click", getImages);
