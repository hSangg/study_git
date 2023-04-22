let video = document.querySelector("video");
console.log(video);
if (navigator.mediaDevices.getUserMedia()) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((s) => {
      video.srcObject = s;
    })
    .catch((e) => {
      console.log(e);
    });
}
