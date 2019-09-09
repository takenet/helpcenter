/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <div>

        <div className="custom-footer">
          <div className="footer-content">
              <div className="content-links">
                <p className="title">Áreas do BLiP</p>
                <a href="/helpdesk" className="link-footer">Atendimento Humano</a>
                  <a href="/builder" className="link-footer">Builder</a>
                  <a href="/channels" className="link-footer">Canais</a>
                  <a href="/integrations" className="link-footer">Integrações</a>
                  <a href="/ai" className="link-footer">Inteligência Artificial</a>
                  {/* <a href="#" className="link-footer">CRM</a> */}
                  <a href="/analytics" className="link-footer">Métricas e Analytics</a>
                  <a href="/growth" className="link-footer">Retenção e Engajamento</a>
              </div>
               
              <div className="content-links">
                <p className="title">Recursos</p>
                  <a href="https://docs.blip.ai/" target="_blank" className="link-footer">API Reference</a>
                  <a href="/changelog" className="link-footer">Changelogs</a>
                  <a href="/faq" className="link-footer">Faq</a>
                  <a href="https://github.com/takenet" target="_blank" className="link-footer">Github</a>
                  <a href="https://status.blip.ai" target="_blank" className="link-footer">Status</a>
              </div>

              <div className="content-links">
                  <p className="title">Cursos</p>
                  <a className="link-footer" target="blank" href="http://learn.take.net/courses/criando-chatbots-com-a-plataforma-blip">Curso Gratuito</a>
                  <a className="link-footer" target="blank" href="http://botcamp.blip.ai">Botcamp</a>
                  {/* <a href="#" className="link-footer">Certificação BLiP</a> */}
              </div>

              <div className="content-links">
                  <p className="title">Comunidade</p>
                  <a href="/beta" className="link-footer">BLiP Beta</a>
                  <a href="https://ideas.blip.ai/" target="_blak" className="link-footer">BLiP Ideas</a>
                  {/* <a href="#" className="link-footer">BLiP Lovers</a> */}
                  <a href="http://meetup.blip.ai" target="_blank" className="link-footer">Eventos</a>
                  <a href="https://forum.blip.ai/" target="_blank" className="link-footer">Fórum</a>
              </div>
               
              <div className="content-links">
                  <p className="title">Políticas</p>
                 {/*  <a href="#" className="link-footer">DPA</a>
                  <a href="#" className="link-footer">Governança de Dados</a>
                  <a href="#" className="link-footer">Legal</a> */}
                  <a href="/docs/security/cookies" className="link-footer">Políticas de Cookies</a>
                  <a href="#" className="link-footer">Políticas de Privacidade</a>
                 {/*  <a href="#" className="link-footer">Privacidade de Dados</a> */}
                  <a href="/docs/security/terms" className="link-footer">Termos de Uso</a>
              </div>

          </div>

          <div>
              <p className="custom-copyright">{this.props.config.copyright} <a className="link-footer" target="blank" href="https://take.net"> Take</a></p>
          </div>

        </div>
      </div>
    );
  }
}

module.exports = Footer;
