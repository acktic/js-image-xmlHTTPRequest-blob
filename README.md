# js-image-xmlHTTPRequest-blob
Hide image source when inspected from browser

`              var request = new XMLHttpRequest();`<br>
`              request.open("GET", cors + src, true);`<br>
`              request.setRequestHeader('Access-Control-Allow-Origin', '*');`<br>
`              request.setRequestHeader('X-Requested-With', '*');`<br>
`              request.responseType = "blob";`<br>
`              request.onload = function () {`<br>
`                var read = new FileReader();`<br>
`                read.readAsDataURL(request.response);`<br>
`                read.onload = function (e) {`<br>
`                                            newImg.setAttribute('src', e.target.result)`<br>
`                                           };`<br>
`                read.onerror = function (e) { };`<br>
`              }`<br>
`              request.send();`<br>

