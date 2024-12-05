<template>
  <div class="sib-form" style="text-align: center;
         background-color: transparent;                                 ">
    <div id="sib-form-container" class="sib-form-container">
      <div id="error-message" class="sib-form-message-panel"
        style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
        <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
          <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
            <path
              d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
          </svg>
          <span class="sib-form-message-panel__inner-text">
            Não conseguimos guardar as suas informações de contato.
          </span>
        </div>
      </div>
      <div></div>
      <div id="success-message" class="sib-form-message-panel"
        style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
        <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
          <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
            <path
              d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
          </svg>
          <span class="sib-form-message-panel__inner-text">
            Entraremos em contato com você o quanto antes.
          </span>
        </div>
      </div>
      <div></div>
      <div id="sib-container" class="sib-container--large sib-container--vertical"
        style="text-align:center; background-color:rgba(255,255,255,1); max-width:650px; border-radius:7px; border-width:2px; border-color:#edede8; border-style:solid; direction:ltr">
        <form id="sib-form" method="POST"
          action="https://37037727.sibforms.com/serve/MUIFALLFko0BtP86CG4QtQ32RiagFjJbR1z4z6iC4HU5mEZJmXxKucp89umXjTYJpEgtB9QLhCozHXd1vSSBmjwupti0CA-2DspxHwjZrCTZ47FjGdBOh6UJ7Mm2aSFj6A4dWlGxQpbjFco_-rqfVdJvjOOox1Bn7ltYlS1j49YQIHwt9rmnMXM3i2ReDLoSqeoOcMiVDKlB4hbK"
          data-type="subscription">
          <div style="padding: 8px 0;">
            <div class="sib-form-block"
              style="font-size:32px; text-align:left; font-weight:700; font-family:Helvetica, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
              <p>Gostou?</p>
            </div>
          </div>
          <div style="padding: 8px 0;">
            <div class="sib-form-block"
              style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
              <div class="sib-text-form-block">
                <p>Preencha o formulário que entraremos em contato</p>
              </div>
            </div>
          </div>
          <div style="padding: 8px 0;">
            <div class="sib-input sib-form-block">
              <div class="form__entry entry_block">
                <div class="form__label-row ">

                  <div class="entry__field">
                    <input class="input " maxlength="200" type="text" id="NOME" name="NOME" autocomplete="off"
                      placeholder="NOME" data-required="true" required />
                  </div>
                </div>

                <label class="entry__error entry__error--primary"
                  style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                </label>
              </div>
            </div>
          </div>
          <div style="padding: 8px 0;">
            <div class="sib-input sib-form-block">
              <div class="form__entry entry_block">
                <div class="form__label-row ">

                  <div class="entry__field">
                    <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL"
                      data-required="true" required />
                  </div>
                </div>

                <label class="entry__error entry__error--primary"
                  style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                </label>
              </div>
            </div>
          </div>
          <div style="padding: 8px 0;">
            <div class="sib-input sib-form-block">
              <div class="form__entry entry_block">
                <div class="form__label-row ">

                  <div class="entry__field">
                    <input class="input " maxlength="200" type="text" id="MENSSAGEM" name="MENSSAGEM" autocomplete="off"
                      placeholder="MENSSAGEM" />
                  </div>
                </div>

                <label class="entry__error entry__error--primary"
                  style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                </label>
              </div>
            </div>
          </div>
          <div style="padding: 8px 0;">
            <div class="sib-form-block"
              style="font-size:15px; text-align:left; font-family:Futura, sans-serif; color:#888888; background-color:transparent; text-align:left">
              <div class="sib-text-form-block">
                <p>*Os dados pessoais coletados neste formulário têm por finalidade o retorno à mensagem enviada.
                  Referidos dados não serão utilizados para outra finalidade. Qualquer dúvida, basta entrar em contato
                  com a Governança.</p>
              </div>
            </div>
          </div>
          <div style="padding: 8px 0;">
            <div class="sib-form-block" style="text-align: center">
              <button class="sib-form-block__button sib-form-block__button-with-loader"
                style="font-size:16px; text-align:center; font-weight:700; font-family:Futura, sans-serif; color:#FFFFFF; background-color:#f8b01f; border-radius:4px; border-width:0px;"
                form="sib-form" type="submit">
                <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                  <path
                    d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                </svg>
                QUERO FALAR COM O CONTADOR
              </button>
            </div>
          </div>

          <input type="text" name="email_address_check" value="" class="input--hidden">
          <input type="hidden" name="locale" value="pt">
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactForm'
}

declare global {
  interface Window {
    REQUIRED_CODE_ERROR_MESSAGE?: string;
    LOCALE?: string;
    EMAIL_INVALID_MESSAGE?: string;
    SMS_INVALID_MESSAGE?: string;
    REQUIRED_ERROR_MESSAGE?: string;
    GENERIC_INVALID_MESSAGE?: string;
    translation?: {
      common: {
        selectedList: string;
        selectedLists: string;
      };
    };
  }
}

window.REQUIRED_CODE_ERROR_MESSAGE = 'Escolha um código de país';
window.LOCALE = 'pt';
window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "A informação fornecida não é valida. Verifique o formato do campo e tente novamente.";

window.REQUIRED_ERROR_MESSAGE = "Este campo não pode ser deixado em branco. ";

window.GENERIC_INVALID_MESSAGE = "A informação fornecida não é valida. Verifique o formato do campo e tente novamente.";

window.translation = {
  common: {
    selectedList: '{quantity} lista selecionada',
    selectedLists: '{quantity} listas selecionadas'
  }
};

var AUTOHIDE = Boolean(0);
</script>

<style>
@font-face {
  font-display: block;
  font-family: Roboto;
  src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
}

@font-face {
  font-display: fallback;
  font-family: Roboto;
  font-weight: 600;
  src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
}

@font-face {
  font-display: fallback;
  font-family: Roboto;
  font-weight: 700;
  src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
}

#sib-container input:-ms-input-placeholder {
  text-align: left;
  font-family: Helvetica, sans-serif;
  color: #c0ccda;
}

#sib-container input::placeholder {
  text-align: left;
  font-family: Helvetica, sans-serif;
  color: #c0ccda;
}

#sib-container textarea::placeholder {
  text-align: left;
  font-family: Helvetica, sans-serif;
  color: #c0ccda;
}

#sib-container a {
  text-decoration: underline;
  color: #2BB2FC;
}
</style>