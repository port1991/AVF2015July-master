exports.createCameraWin = function(){
	var win = Ti.UI.createWindow({
		title: 'Camera'
	});

	var buttonCamera = Ti.UI.createButton ({
		title:"CAMERA",
		width:288,
		height:215,
		top:10,
		zIndex:2
		
	});
	
	win.add(buttonCamera);


	buttonCamera.addEventListener("click", function(e) {
		
		Ti.Media.showCamera({
			success:function(e) {
					if(e.mediaType === Ti.Media.MEDIA_TYPE_PHOTO) {
						//ITS A PHOTO
						var imageView = Ti.UI.createImageView({
							image: e.media,
							width: 28,
							height:215,
							top: 12,
							zIndex:1
						});
						scroller.add(imageView);
						
					}else if(e.mediaType === Ti.Media.MEDIA_TYPE_VIDEO) {
						//It's a video
						var w= Ti.UI.createWindow ({
							title: "NEW VIDEO",
							backgroundColor: "#000000"
						});
						
						var videoPlayer = Ti.UI.createVideoPlayer({
							media:e.media
							
						});
						w.add(videoPlayer);
						
						videoPlayer.addEventListener("complete", function (e) {
							w.remove(videoPlayer);
							videoPlayer = null;
							w.close();
						});
					}
			},
			error:function(e) {
				alert("There was an error");
			},
			cancel:function(e) {
				alert("so much Cancel");
			},
			allowEditing:true,
			saveToPhotoGallery: true,
			mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO, Ti.Media.MEDIA_TYPE_VIDEO],
			videoQuality: Ti.Media.QUALITY_HIGH
		});
		
	});
	
	return win;
};