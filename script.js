const viewImage = document.getElementById("preview-container");

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  e.preventDefault();
  document.getElementById("input-file").files = e.dataTransfer.files;

  const files = e.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (event) {
        viewImage.innerHTML = `<img src="${event.target.result}" alt="Dropped Image">`;
      };
      reader.readAsDataURL(file);
    } else {
      viewImage.innerHTML = `<p style="color: red;">Only image files are allowed!</p>`;
    }
  }
});
