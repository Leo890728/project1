
function readFile(fileName) {
  return fetch(fileName)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var data = data
      return data;
    })
}


function template(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function redirect(url) {
  window.location.href = url;
}

function textToElements(text) {
  let parser = new DOMParser();
  let childrens = parser.parseFromString(`<div>${text}</div>`, "text/html").querySelector('div').children;
  let result = [];
  for (let i = 0; i < childrens.length; i++){
    result.push(childrens.item(i));
  };
  return result;
}