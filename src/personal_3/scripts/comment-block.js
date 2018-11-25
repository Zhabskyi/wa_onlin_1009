import { HTTPService } from "../../common/scripts/http-service";

const BTN_DEL_CLASS_NAME = 'btn_del';
const AUTHOR_ATTR = 'author';
const TEXT_ATTR = 'text';
const COMMENT_ITEM_TEMPLATE = `<div>
		<span class = "author-name" data-name="${AUTHOR_ATTR}">{{author}}</span>
		<span class = "comment" data-name="${TEXT_ATTR}">{{text}}</span>
		</div>
		<div>
		<span class = "date"">{{date}}</span>
		<button type="button" class="${BTN_DEL_CLASS_NAME}">DELETE</button>
		</div>`;
const URL = 'http://localhost:4001/comments';
const TASK_ID_PREFIX = 'taskID';

export class CommentBlock {
	constructor(rootElement) {
		this.rootElement = rootElement;
		this.httpService = new HTTPService();
		this.getList();
		this.render();
	}
	getList() {
		this.httpService
			.get(URL)
			.then((response) => this.renderList(response))
			.catch((e) => console.log(e));
  }

	render() {
		this.formContainer = document.createElement('div');
		this.comment = document.createElement('div');
    this.form = document.createElement('form');
    this.input = document.createElement('textarea');
    this.submitBtn = document.createElement('button');
		this.submitBtn.textContent = 'Add Comment';
		
		this.input.setAttribute('rows', 3);
		this.input.setAttribute('cols', 50);
		this.input.setAttribute('placeholder', 'Enter your comment here');

		this.formContainer.classList.add('comments');
		this.comment.classList.add('comments__item')
		this.form.classList.add('comments__form');
		this.input.classList.add('comments__form__input');
		this.submitBtn.classList.add('comments__form__submit-btn');

		this.form.addEventListener('submit', (e) => {
			e.preventDefault();
			let currentText = this.input.value;
			this.httpService.post(URL, {author: 'Ilya', text: currentText})
			.then((comment) => {this.list.appendChild(this.renderOne(comment))})
			.catch((e) => {console.log('Error', e)})
			})
    this.form.appendChild(this.input);
		this.form.appendChild(this.submitBtn);
		this.formContainer.appendChild(this.comment);
		this.formContainer.appendChild(this.form);

    this.rootElement.appendChild(this.formContainer);
	}

	renderOne(comment) {
    const div = document.createElement('div');
    div.id = TASK_ID_PREFIX + comment.id;
    div.innerHTML = COMMENT_ITEM_TEMPLATE
      .replace('{{author}}', comment.author)
			.replace('{{text}}', comment.text)
			.replace('{{date}}', Date(comment.date));

    return div
	}
	
	renderList(comments) {
    this.list = document.createElement('div');
    const fragment = document.createDocumentFragment();
    comments.forEach((comment) => {
      fragment.appendChild(this.renderOne(comment));
    });

    this.list.appendChild(fragment);
    
    // this.list.addEventListener('click', (e) => {
    //   if (e.target.classList.contains(BTN_DEL_CLASS_NAME)) {
    //     e.stopPropagation();
    //     const id = e.target.closest('li').getAttribute('id').replace(TASK_ID_PREFIX, '');
    //     this.deleteItem(id);
    //   }
    //   if (e.target.classList.contains(CHACKBOX_CLASS_NAME)) {
    //     const id = e.target.closest('li').getAttribute('id').replace(TASK_ID_PREFIX, '');
    //     console.log(id);
    //     this.updateItem(id)
    //   }
    // })
    this.rootElement.appendChild(this.list);
	}
	
}