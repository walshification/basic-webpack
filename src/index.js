const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  // asks server for the given module to dynamically load it
  System.import('./image_viewer').then(module => {
    // access the default export of the imported module
    module.default();
  });
};

document.body.appendChild(button);
