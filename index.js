const dropzoneBox = document.getElementByClassName("dropzone-box")[0];

const inputFiles = document.querySelectorAll(".dropzone-area input[type='file']");

const inputElement = inputFiles[0];

const dropZoneElement = inputElement.closest(".dropzone-area");

inputElement.addEventListener("change", (e) => {
    if(inputElement.files.length){
        updateDropzoneFileList
        (dropZoneElement, inputElement.files[0]);
    }
});

dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("dropzone--over");
});

["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.classList.remove("dropzone--over");
});

dropZoneElement.addEventListener("drop",(e) => {
    e.preventDefault();

    if(e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;

        updateDropzoneFileList(dropZoneElement, e.dataTransfer.files[0])
   }
   dropZoneElement.classList.remove("dropzone--over");
});

const updateDropzoneFileList = (dropZoneElement, file) => {
    let dropzoneFileMessage = dropzoneElement.querySelector("message");

    dropzoneFileMessage.innerHTML = `${file.name}, ${file.size} bytes`;
};

dropzoneElement.addEventListener("reset", (e) => {
    let dropzoneFileMessage = dropzoneElement.querySelector("message");

    dropzoneFileMessage.innerHTML = ` NO files Selected`;
});

dropzoneBox.addEventListener("submit", (e) => {
    e.preventDefault();
    const myFiled = document.getElementById("upload-file");
    console.log(myFiled.files[0]);
});