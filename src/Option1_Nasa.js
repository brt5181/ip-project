// dependencies / things imported
import { LitElement, html } from 'lit';
import '@lrnwebcomponents/accent-card/accent-card.js';

export class imageSearch extends LitElement {
  // static properties = {

  // };
  // constructor{

  // }

  render() {
    return html` <accent-card
      image-src="https://webcomponents.psu.edu/styleguide/elements/accent-card/demo/images/image7.jpg"
      accent-color="green"
      horizontal
      style="max-width:600px;"
    >
      <div slot="heading">Ut Integer Massa Nulla Sed</div>
      <div slot="content">
        Libero elit sed consequat. Ut nisi nulla sapien id a ultricies.
      </div>
    </accent-card>`;
  }
}
customElements.define('image-search', imageSearch);
