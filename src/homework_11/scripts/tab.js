
export function tab () {
	const ITEM_ACTIVE_CLASS = 'tab__item__article_active';
	const CONTENT_ACTIVE_CLASS = 'tab__content__item_active';
	const itemArticle = document.querySelectorAll('.tab__item__article');
	const itemContent = document.querySelectorAll('.tab__content__item');
	let activeElement =  itemArticle[0];
	let activeArticle = itemContent[0];
	
		function switchContent (element) {
			if (activeElement !== undefined) {
				console.log(activeElement);
				activeElement.classList.remove(CONTENT_ACTIVE_CLASS);
			}
			activeElement = element;
			element.classList.add(CONTENT_ACTIVE_CLASS);
		}
	
		function switchArticle (element) {
			if (activeArticle !== undefined) {
				activeArticle.classList.remove(ITEM_ACTIVE_CLASS);
			}
			activeArticle = element;
			element.classList.add(ITEM_ACTIVE_CLASS);
		}
	
		for (let i = 0; i < itemArticle.length; i++) {
			itemArticle[i].addEventListener('click', () => {
				switchContent(itemContent[i]);
				switchArticle(itemArticle[i]);
			})
		}
	}