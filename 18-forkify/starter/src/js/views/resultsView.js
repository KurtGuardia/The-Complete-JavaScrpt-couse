import View from './View';
import icons from 'url:../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    "We couldn't find any recipe with that query. Please try another one!";
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generatoMarkupPreview).join('');
  }

  _generatoMarkupPreview(result) {
    return `
        <li class="preview">
            <a class="preview__link" href="#${result.id}">
                <figure class="preview__fig">
                    <img src="${result.image}" alt="${result.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${result.title}</h4>
                    <p class="preview__publisher">${result.publisher}</p>                    
                </div>
            </a>
        </li>           
    `;
  }
}

export default new ResultView();
