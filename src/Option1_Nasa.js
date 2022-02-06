// dependencies / things imported
// API KEY    dk7GLMwNo1M9bWTRJaEZNaGFZdDzxfNYpJSbBBiE
import { LitElement, html } from 'lit';
import '@lrnwebcomponents/accent-card/accent-card.js';

export class imageSearch extends LitElement {
  constructor() {
    super();
    this.nasaUrl = 'https://images-api.nasa.gov/search?api_key=';
    this.apikey = 'dk7GLMwNo1M9bWTRJaEZNaGFZdDzxfNYpJSbBBiE';
    this.searchName = 'Aliens';
    this.media_type = 'image';
    this.image = [];
    this.title = [];
    this.discription = [];
    this.secondary_creator = [];
  }
  // static properties = {

  // };
  async getNasaData() {
    return fetch(this.nasaUrl + this.apikey + this.searchName)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        return false;
      })
      .then(data => {
        console.log(data);
        this.image = data.href;
        this.title = data.title;
        this.description = data.description;
        this.secondary_creator = data.secondary_creator;
        return data;
      });
  }

  render() {
    return html` <accent-card
      image-src="https://webcomponents.psu.edu/styleguide/elements/accent-card/demo/images/image7.jpg"
      accent-color="green"
      horizontal
      style="max-width:600px;"
    >
      <div slot="heading">${this.title}</div>
      <div slot="content">${this.description}</div>
      <div slot="Secondary">${this.secondary_creator}</div>
    </accent-card>`;
  }
}
customElements.define('image-search', imageSearch);
