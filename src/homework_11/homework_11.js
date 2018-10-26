import './homework_11.scss';

// let expandedElement;
// const EXPAND_CLASS_NAME = 'close';
// const article = document.querySelectorAll('.accordeon__header__article');
// const content = document.querySelectorAll('.accordeon__paragraph');


// for (let i = 0; i < article.length; i++) {
// 	let expandedElement = content[i];
// 	article[i].addEventListener('click', toggle);
	
// }

// function expand(content) {
// 	if (expandedElement) {
// 		expandedElement.classList.remove(EXPAND_CLASS_NAME);
// 	}
// 	content.classList.add(EXPAND_CLASS_NAME);
// 	expandedElement = content;
// }

// function collapse() {
// 	expandedElement.classList.remove(EXPAND_CLASS_NAME);
//   expandedElement = undefined;
// }

// function toggle () {
// 	for (let i = 0; i < article.length; i++) {
//     if(content[i].classList.contains(EXPAND_CLASS_NAME)) {
//       collapse();
//     } else {
//       expand(content[i]);
// 		}
// 	}
// }
const ITEM_ACTIVE_CLASS = 'tab__item__article_active';
const CONTENT_ACTIVE_CLASS = 'tab__content__item_active';
const itemArticle = document.querySelectorAll('.tab__item__article');
const itemContent = document.querySelectorAll('.tab__content__item');
let currentArticleIndex = [];
let currentContentIndex = [];

function toggle() {
	for (let i = 0; i < itemArticle.length; i++) {
		currentArticleIndex[i] = itemArticle[i].getAttribute('data-item-article');
		currentContentIndex[i] = itemContent[i].getAttribute('data-item-content');
	}

	for (let i = 0; i < itemArticle.length; i++) {
		itemArticle[i].addEventListener('click', () => {
			if (itemArticle[i] === itemContent[i]) {
				itemContent[i].classList.add(`${CONTENT_ACTIVE_CLASS}`)
			} else {
				itemContent[i].classList.remove(`${CONTENT_ACTIVE_CLASS}`)
			}
		})
	}
	
}

toggle();