(function () {
  const url = new URL('./dist/estimator.js', document.currentScript.src);
  import(url.href).then(({ mount }) => {
    document.querySelectorAll('[data-kcc-estimator]').forEach(mount);
  }).catch(() => {
    document.querySelectorAll('[data-kcc-estimator]').forEach(node => {
      node.textContent = 'The estimator could not load. Please reload the page.';
    });
  });
})();
