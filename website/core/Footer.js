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
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
          {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="150"
                height="75"
              />
            )}
          </a>
          <div>
            <h5>Áreas do BLiP</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Analytics
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Builder
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              Canais
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              CRM
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              Desk
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              Growth
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              Help Desk
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              I.A.
            </a>
          </div>
          <div>
            <h5>Recursos</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              API Reference
            </a>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Changelogs
            </a>
            <a href='/faq'>
              Faq
            </a>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Github 
            </a>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Status 
            </a>
          </div>
          <div>
            <h5>Cursos</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Certificação BLiP
            </a>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Tutoriais
            </a>
          </div>
          <div>
            <h5>Comunidade</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              BLiP Beta
            </a>
            <a href={this.pageUrl('users.html', this.props.language)}>
              BLiP Ideas
            </a>
            <a href={this.pageUrl('users.html', this.props.language)}>
              BLiP Lovers
            </a>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Blog 
            </a>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Eventos 
            </a>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Fórum 
            </a>
          </div>
          <div>
            <h5>Políticas</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              LGPD 
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
