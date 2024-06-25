
// 点击隐藏遮幕层并播放视频
function PlayVideo(id) {
    document.getElementsByClassName("jw-video-expense")[0].setAttribute("style", "display: none");
    document.getElementById(id).play();
}