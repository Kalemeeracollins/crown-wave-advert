document.getElementById('uploadInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageSrc = e.target.result;
        document.getElementById('downloadedImage').src = imageSrc;
        document.getElementById('downloadButton').disabled = false;
        document.getElementById('downloadedImage').style.display = 'block';
      }
      reader.readAsDataURL(file);
    }
  });
  
  document.getElementById('downloadButton').addEventListener('click', function() {
    const imageSrc = document.getElementById('downloadedImage').src;
    const a = document.createElement('a');
    a.href = imageSrc;
    a.download = 'image.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
  });
  document.getElementById('uploadInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageSrc = e.target.result;
        document.getElementById('downloadedImage').src = imageSrc;
        document.getElementById('downloadButton').disabled = false;
        document.getElementById('downloadedImage').style.display = 'block';
        displayUploadedImage(imageSrc);
      }
      reader.readAsDataURL(file);
    }
  });
  
  function displayUploadedImage(imageSrc) {
    const uploadedImageContainer = document.getElementById('uploadedImage');
    uploadedImageContainer.innerHTML = `<img src="${imageSrc}" alt="  Image">`;
  }
  