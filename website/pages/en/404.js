/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const siteConfig = require(process.cwd() + "/siteConfig.js");

/* Code to redirect old links to new links at Docusaurus
 * In order to know more about this workaround see
 * https://chillicream.com/blog/2018/11/07/docusaurus-docs-redirect
 * https://github.com/facebook/docusaurus/issues/248
 * 
 * TODO: Create a complete 404 page for links not present in the REDIRECT list 
 */

 class RedirectScript extends React.Component {
  render() {
      return (
          <script
              dangerouslySetInnerHTML={{
                  __html: `
function redirectURL(path) {
  console.log(path);
  const REDIRECT = {
      "hc": "docs/concepts/builder/builder-visao-geral-variaveis",
      "hc/pt-br/articles/360000661451-Facilitando-a-criação-de-seu-chatbot-através-das-extensões": "/docs/en/hello-world.html",
      GLOSSARY: "/docs/en/glossary"
  };
  var OLD_PATH_LIST = Object.keys(REDIRECT);
  for (var i = 0; i < OLD_PATH_LIST.length; i++) {
      const OLD_PATH = OLD_PATH_LIST[i];
      const NEW_URL = REDIRECT[OLD_PATH];
      if (path.indexOf(OLD_PATH) !== -1) {
          return NEW_URL;
      }
  }
  return '/';
}
const newURL =
  typeof window !== "undefined" && typeof window.location !== "undefined"
      ? redirectURL(window.location.href)
      : undefined;
if(newURL){
  location.replace(newURL);
}
`
              }}
          />
      );
  }
}


class Hc extends React.Component {
  render() {
    return (
      <RedirectScript />
    );
  }
}

module.exports = Hc;
