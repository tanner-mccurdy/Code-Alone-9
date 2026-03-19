// Get image source from uploaded file
function getImageFromUpload() {
    let image = document.querySelector("#imageUpload").files[0];
    if (!image) return "";
    return URL.createObjectURL(image);
}

// Username live preview
let usernameInput = document.querySelector("#username");
let usernamePreview = document.querySelector(".profile-name");

usernameInput.addEventListener("input", function () {
    if (usernameInput.value.trim() === "") {
        usernamePreview.textContent = "User Name";
    } else {
        usernamePreview.textContent = usernameInput.value;
    }
});

// Image upload live preview
let imageUpload = document.querySelector("#imageUpload");
let imagePreview = document.querySelector("#previewImage");

imageUpload.addEventListener("change", function () {
    imagePreview.src = getImageFromUpload();
});

// Post text live preview
let postTextInput = document.querySelector("#postText");
let postTextPreview = document.querySelector(".post-text");

postTextInput.addEventListener("input", function () {
    if (postTextInput.value.trim() === "") {
        postTextPreview.textContent = "Your post will show here...";
    } else {
        postTextPreview.textContent = postTextInput.value;
    }
});

// Image style dropdown preview
let imageStyleSelect = document.querySelector("#imageStyle");

imageStyleSelect.addEventListener("change", function () {
    let selectedStyle = imageStyleSelect.value;
    imagePreview.className = `post-image ${selectedStyle}`;
});