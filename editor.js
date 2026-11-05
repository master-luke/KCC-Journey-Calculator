(function (wp) {
  const el = wp.element.createElement;
  wp.blocks.registerBlockType('kcc/journey-estimator', {
    edit: function () {
      return el('div', wp.blockEditor.useBlockProps(), el('strong', null, 'KCC Journey Estimator'),
        el('p', null, 'Preview this page to try guest numbers and an optional extra. Example rates only.'));
    },
    save: function () { return null; }
  });
})(window.wp);
