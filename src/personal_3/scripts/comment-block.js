import { HTTPService } from "../../common/scripts/http-service";

export class CommentBlock {
	constructor(rootElement) {
		this.rootElement = rootElement;
		this.httpService = new HTTPService()
    this.render();
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

    this.form.appendChild(this.input);
		this.form.appendChild(this.submitBtn);
		this.formContainer.appendChild(this.comment);
		this.formContainer.appendChild(this.form);
    
    //this.form.addEventListener('submit', t);

    this.rootElement.appendChild(this.formContainer);
	}
	
	
}