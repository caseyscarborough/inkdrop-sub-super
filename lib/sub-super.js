'use babel';

const { markdownRenderer } = require('inkdrop');
const subSuper = require('remark-sub-super');

module.exports = {
  activate() {
    return markdownRenderer.remarkPlugins.push(subSuper);
  },

  deactivate() {
    if (!markdownRenderer) {
      return;
    }
    markdownRenderer.remarkPlugins = markdownRenderer.remarkPlugins.filter((plugin) => plugin !== subSuper);
  }
};