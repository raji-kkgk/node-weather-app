console.log('Hello from main.js');

(async () => {
    const footer = document.querySelector('footer');

    footer.querySelector('#copyright-year').innerHTML = new Date().getFullYear();
})();

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.search-container button#get-location');

    button?.addEventListener('click', () => {
        const address = document.querySelector('.search-container input#location').value;
        const messageEle = document.querySelector('.search-container .success-msg');

        if (address) {
            document.querySelector('.search-container .error-msg').classList.add('hidden');
            messageEle.innerHTML = '';
            messageEle.classList.add('hidden');
            fetch(`/api/v1/location?address=${address}`,{method: 'GET', params: {caches: false}})
                .then(response => response.json())
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    messageEle.innerHTML = `Location: ${data.name}
                                            \nLabel: ${data.label}
                                            \nLatitude: ${data.latitude}, Longitude: ${data.longitude}`;
                    messageEle.classList.remove('hidden');
                }).catch(err => {
                    console.error(err);
                });
        } else {
            document.querySelector('.search-container .success-msg').classList.add('hidden');
            document.querySelector('.search-container .error-msg').classList.remove('hidden');
        }
    })
});