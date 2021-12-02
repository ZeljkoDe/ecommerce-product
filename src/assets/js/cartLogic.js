export default function cart() {
	const number = document.querySelector('.js-number');
	const quantity = document.querySelector(".quantity");
	const iconCart = document.querySelector('.cart > img');
	const popUp = document.querySelector('.cart-wrapper');
	const empty = document.querySelector('.empty');
	const addedProduct = document.querySelector('.added-product');
	const addToCart = document.querySelector('.btn-add');
	const deleteProduct = document.querySelector('.product-delete');
	let count = 0;

	// cart popup icon showing/hiding
	iconCart.addEventListener('click', () => {
		popUp.classList.toggle('active');
	});

	// updating the number of products wanted
	quantity.addEventListener('click', (e) => {
		const clicked = e.target.classList;

		if (clicked.contains('js-add')) {
			count++;
			number.innerHTML = count;
		} else if (clicked.contains('js-remove')) {
			if (count === 0) return;
			count--;
			number.innerHTML = count;
		} else {
			return;
		}
	});

	// adding items to the cart
	addToCart.addEventListener('click', (e) => {
		const productDelete = document.querySelector('.product-delete');
		const addedNumber = document.querySelector('.js-added-number');
		const price = document.querySelector('.product-price strong');
		empty.style.display = 'none';
		addedProduct.style.display = 'block';
		addedNumber.innerHTML = count;
		price.innerHTML = `$${count * 125}.00`;
	});

	// deleting items from the cart
	deleteProduct.addEventListener('click', () => {
		empty.style.display = 'block';
		addedProduct.style.display = 'none';
	});
}