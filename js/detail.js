document.addEventListener('DOMContentLoaded', () => {
    async function loadDetail(){
        const api_key =  "9f68057616b722079fe2dfc8ccbefcec"
        const urlParams = new URLSearchParams(window.location.search);
        const movieId = urlParams.get('id');
        try {
            const res = await fetch(`https://api.themoviedb.org/3/list/${movieId}?&api_key=${api_key}`)

        }catch (error) {
            console.error(error);
        }
    }
})