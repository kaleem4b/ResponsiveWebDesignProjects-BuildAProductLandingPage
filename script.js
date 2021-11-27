const emailTextBox = document.querySelector("#email");

window.addEventListener("click", function (e) {
  console.log(e.target.id);

  if (e.target.id === "email") {
    emailTextBox.style.borderBottom = "2px solid var(--logo-color)";
  } else {
    emailTextBox.style.borderBottom = "2px solid black";
  }
});

const mainFunc = async function () {
  const video = fetch(
    "https://api.pexels.com/videos/videos/7385122"
  ).then((data) => {
    console.log(data);
  });
  console.log(video);
};

mainFunc();


import { createClient } from '/pexels';

const client = createClient('563492ad6f9170000100000183389731a6c74b32b4538b37414cde0b');

client.video.show({ id: 7385122 }).then(video => {
    console.log(video);
});


