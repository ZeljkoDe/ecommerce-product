export default function findCorrectImg(e) {
	const bigImg = document.querySelector('.main-img');
	const thumbnailImg = document.querySelectorAll('.img-container img');
	const clickedImg = e.target.closest('.img-container img');

	if (!clickedImg) return;

	const clickedImgSrc = clickedImg.src.split('-')[2];

	thumbnailImg.forEach((img) => {
		const src = img.src.split('-')[2];
		if (clickedImgSrc === src) {
			bigImg.src = `./assets/images/image-product-${src}.jpg`;
		}

		img.classList.remove('active');
		clickedImg.classList.add('active');
	});
}
