let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

function getUsd(rub) {
    return new Promise(function(resolve, reject) {
        rub.addEventListener('input', () => {
            let request = new XMLHttpRequest();
    
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            
            
            request.addEventListener('readystatechange', function() {
                if (request.readyState === 4 && request.status == 200) {
                  resolve();
                    // let data = JSON.parse(request.response);
    
                    // inputUsd.value = rub.value / data.usd;
                } else {
                  reject();
                    // inputUsd.value = "Что-то пошло не так!";
                }
            });
            request.send();
        });  
    })
      
}
getUsd(inputRub)
    .then(() => {
      let data = JSON.parse(request.response);
      inputUsd.value = rub.value / data.usd;
    })
    .catch(() => inputUsd.value = "Что-то пошло не так!");






