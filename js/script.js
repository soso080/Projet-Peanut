document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "9f68057616b722079fe2dfc8ccbefcec";
  const search = document.getElementById("search");
  const search_result = document.getElementById("search_result");
  const video_liste_film = document.getElementById("video_liste_film");
  const video_liste_serie = document.getElementById("video_liste_serie");
  const video_liste_collection = document.getElementById("video_liste_collection");

  async function movieList() {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
    let data = await res.json();
    data = data.results
    console.log(data)
    video_liste_film.innerHTML = `
            <div class="imgcaption">
              <figure>
                <li><a href=""><img src="${data["0"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["0"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
                <figcaption>${data["0"].title}</figcaption>
              </figure>
            </div>
            
            <div class="imgcaption">
              <figure>
                <li><a href=""><img src="${data["1"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["1"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
                <figcaption>${data["1"].title}</figcaption>
              </figure>
            </div>
            
            <div class="imgcaption">
              <figure>
                <li><a href=""><img src="${data["2"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["2"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
                <figcaption>${data["2"].title}</figcaption>
              </figure>
            </div>
            
            <div class="imgcaption">
              <figure>
                <li><a href=""><img src="${data["3"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["3"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
                <figcaption>${data["3"].title}</figcaption>
              </figure>
            </div>
            
            <div class="imgcaption">
              <figure>
                <li><a href=""><img src="${data["4"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["4"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
                <figcaption>${data["4"].title}</figcaption>
              </figure>
            </div>  `
  }

  movieList()


  async function serieList(){
    try{
      const res = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`)
      let data = await res.json();
      data = data.results
      console.log(data)
      video_liste_serie.innerHTML = `
          <div class="imgcaption">
            <figure>
              <li><a href=""><img src="${data["0"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["0"].poster_path : 'https://via.placeholder.com/150'}" alt="Paris"></a></li>
              <figcaption>${data["0"].name}</figcaption>
            </figure>
          </div>

            <div class="imgcaption">

            <figure>
              <li><a href=""><img src="${data["1"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["1"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
              <figcaption>${data["1"].name}</figcaption>
            </figure>
          </div>

            <div class="imgcaption">

            <figure>
              <li><a href=""><img src="${data["2"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["2"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
              <figcaption>${data["2"].name}</figcaption>
            </figure>
          </div>

            <div class="imgcaption">

            <figure>
              <li><a href=""><img src="${data["3"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["3"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
              <figcaption>${data["3"].name}</figcaption>
            </figure>
          </div>

            <div class="imgcaption">

            <figure>
              <li><a href=""><img src="${data["4"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["4"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
              <figcaption>${data["4"].name}</figcaption>
            </figure>
          </div>`
    }catch(error){
      console.log(error)
    }

  }

  serieList()


  async function collectionList(){
    try {
      const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      let data = await res.json();
      data = data.results

      video_liste_collection.innerHTML = `<div class="imgcaption">
            <figure>
              <li><a href=""><img src="${data["0"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["0"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
              <figcaption>${data["0"].name ? data["0"].name : data["0"].title}</figcaption>
            </figure>
          </div>

            <div class="imgcaption">
            <figure>
              <li><a href=""><img src="${data["1"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["1"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
              <figcaption>${data["1"].name ? data["1"].name : data["1"].title}</figcaption>
            </figure>
          </div>

            <div class="imgcaption">
            <figure>
              <li><a href=""><img src="${data["2"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["2"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
              <figcaption>${data["2"].name ? data["2"].name : data["2"].title}</figcaption>
            </figure>
          </div>

            <div class="imgcaption">
            <figure>
              <li><a href=""><img src="${data["3"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["3"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
              <figcaption>${data["3"].name ? data["3"].name : data["3"].title}</figcaption>
            </figure>
          </div>

            <div class="imgcaption">
            <figure>
              <li><a href=""><img src="${data["4"].poster_path ? 'https://image.tmdb.org/t/p/w500' + data["4"].poster_path : 'https://via.placeholder.com/150'}" alt="Dark Matter"></a></li>
              <figcaption>${data["4"].name ? data["4"].name : data["4"].title}</figcaption>
            </figure>
          </div>`

      console.log(data)
    }catch(error){
      console.log(error)
    }
  }

  collectionList()

  function noresult(){
    search_result.innerHTML = "";
  }
  async  function loadFilm(recherche) {
    try{
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(recherche)}`);
      if (!res.ok) {
        throw new Error(`Erreur lors du chargement de l'api`);
      }
      let data = await res.json();
      data = data.results;
      data.forEach(item => {
        search_result.innerHTML += `<a href="html/page_detail.html?id=${item.id}"><div style="display: flex; gap: 10%; background-color: #FFBD59; padding: 10px 40px 10px 40px; border: 1px solid gray;" >
        <img src="${item.poster_path ? 'https://image.tmdb.org/t/p/w500' + item.poster_path : 'https://via.placeholder.com/150'}" alt="Logo" class="logo_result" width="50px" height="50px">
          <p>${item.title}</p>
      </div></a>`
      })

      console.log(data);
    }catch(err) {
      console.error(err);
    }




  }

  search.addEventListener("input", () =>{
    let searchValue = search.value;
    if (searchValue.length === 0){
      noresult()
    }

    if (searchValue.length > 1 ){
      search_result.innerHTML = "";
      loadFilm(searchValue);
    }





  })























  let slideIndex = 1;
  showSlides(slideIndex);

// Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

// Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
})

