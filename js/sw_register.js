if(navigator.serviceWorker)
    {
        navigator.serviceWorker.register('./sw.js')
        .then(()=>{
            console.log('registration worked!');
        })
        .catch(function(){
            console.log('registration failed!')
        });
    }

