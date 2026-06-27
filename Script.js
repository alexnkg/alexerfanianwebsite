function openVideo(url){
document.getElementById("videoFrame").src = url;
document.getElementById("videoModal").style.display = "flex";
}

function closeVideo(){
document.getElementById("videoModal").style.display = "none";
document.getElementById("videoFrame").src = "";
}
