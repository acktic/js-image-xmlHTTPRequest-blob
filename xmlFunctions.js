              var request = new XMLHttpRequest();
              request.open("GET", cors + src, true);
              request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
              request.setRequestHeader(`X-Requested-With`, `*`);
              request.responseType = "blob";
              request.onload = function () {
                var read = new FileReader();
                read.readAsDataURL(request.response);
                read.onload = function (e) { };
                read.onerror = function (e) { };
              }
              request.send();
