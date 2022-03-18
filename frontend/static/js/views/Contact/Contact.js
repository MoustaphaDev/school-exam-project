import AbstractView from "../AbstractView.js";

class ContactView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Contactez-nous");
  }
  async getHtml() {
    return `
  <div class="grid grid-cols-2 justify-between pt-16">
      <img class="shadow-3xl h-screen -translate-x-8" src="https://lh3.googleusercontent.com/fKNJUa38jD_KKFXuKrRFFfdMoDGIKWWUtr-DdNBd70rfH4qW_DWE8KF7cZ5xyDQ2TSfcsxuFKenFoP66ZM8M-SRE83s9_5oSdCw64MPY498qG5ngS3itaF17xoNNSvUptQjL1p9kzzpAMW-OQcB_IcSFDaSX3MVLQj0-Kh2HDi2iVWuJ6cDOtrNkBcKjJyti0ooPz7ap1woMCl2p0aZguQ2mnOL1yBZjfJUlZf78Jt7z5vNPjcV8N04bRG0rfU-b0GLder8UrbQOTS_KG13F2CSHwvzq4-pFiikKt3b_UjSWozXLjn1hDv4oMgld3A8qytSxuQ2Fpk2KL-MKSzrwYSDRVIiRAxcn3ZTPfHwF-b1Gdns32TpM9Jsj8OdroxzkEOhM-2OqB0L5LxpyxcY0pOCz2vze6j5Q5cLdKHmMxhUJWxg86Zo_SjAcKRPFFYCqey2oUQkBlJIfxhzNHbGc1XeJ1Ih7pGZcBj5_oC3kGrmo6z2rZUPA37NoQMJ6Rlzy5BJ9Kod-bzQq_8TkjvowtbVuJCcX9xxXUxpNPVNzNkQjSYDBewi7tBKLvVq8Tm4c5b-h5P2XkSGuhDKfdb2AyjBNLQhKnwQVjJonQPTBo6pgErQ9YdC3aAWnQ1W_IUnmKkTGyJm_zrjxdZGhNe73O5NbNGgHS5PaCbf7kGKGmZSpS5dA4eU33FCaNUBYCU5LRwvwdvmluNVq13nkMVqHuzXSphVZyHuAFbfJyyc1xfXGgD9ZVJDzD-U7Fcyk=w1149-h919-no?authuser=0" alt="">
      <div class="container">
          <div class="row">
                  <h1>Contactez-nous</h1>
          </div>
          <div class="row">
                  <h4 style="text-align:center">Nous aimerions fort discuter avex vous!</h4>
          </div>
          <div class="row input-container">
                  <div class="col-xs-12">
                      <div class="styled-input wide">
                          <input type="text" required />
                          <label>Nom</label> 
                      </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                      <div class="styled-input">
                          <input type="text" required />
                          <label>Email</label> 
                      </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                      <div class="styled-input" style="float:right;">
                          <input type="text" required />
                          <label>Numéro de téléphone</label> 
                      </div>
                  </div>
                  <div class="col-xs-12">
                      <div class="styled-input wide">
                          <textarea required></textarea>
                          <label>Message</label>
                      </div>
                  </div>
                  <div>
                      </div>
                      <div class="submit-btn">Envoyer message</div>
                    </div>
      </div>
  </div>

  `;
  }
}
const Contact = {
  route: "/contact",
  view: ContactView,
};

export default Contact;
