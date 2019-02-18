var head = document.createElement('div')
head.innerHTML = `
  <meta name="viewport" content="width=device-width" />
  <link href="style.css" rel="stylesheet" />
`
while (head.childNodes.length)
  document.head.appendChild(head.childNodes[0])

var content = document.querySelector('noscript'),
    src = marked.setOptions({ smartypants: true })(content.innerText || content.innerHTML)

document.body.innerHTML = `<main>${src}</main>`
