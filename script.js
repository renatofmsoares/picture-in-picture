const videoElement = document.getElementById("video");
const startButton = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log("whoops, error here: ", error);
  }
}

startButton.addEventListener("click", async () => {
  startButton.disabled = true;
  await videoElement.requestPictureInPicture();
  startButton.disabled = false;
});

selectMediaStream();
