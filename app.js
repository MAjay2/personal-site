let input = document.getElementById('inputPlace')
const searchBtn = document.getElementById('searchBtn')
const display = document.querySelector('.test')


function hello() {
    console.log('no');
}



 async function getMovieApi() {
    const res = await fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=82ecaef9`)
    const data = await res.json()
                 data.Search.map(indi=>{
                    fetch(`https://www.omdbapi.com/?i=${indi.imdbID}&apikey=82ecaef9`)
                    .then (res => res.json())
                    .then (info => {
                        console.log(info);
                        const movieID = info.imdbID
                        const movieIDkey = info.imdbID + 'key'
                        console.log(movieIDkey);
                        
                        display.innerHTML +=`
                        <div class="display">
                        <div class="posterImage">
                        <img src='${info.Poster}'>
                    </div>
                    
                    <div class="content">
                        <div class='titleHeader'>
                        <h2 class="posterTitle">${info.Title}</h2>
                        <p>⭐${info.Ratings[0].Value} </p>
            
                        </div>
                        
                        <p class='subtext'>${info.Runtime}   <span class='genre'> ${info.Genre}<span></p>
                        <button id="${movieIDkey}" class="buttons" >+</button>watchlist
                        <p class='plot'>${info.Plot}</p>
                    </div>
            
                        </div>
            
            
                        `


                              const   getBtn = document.getElementById(`${movieIDkey}`)
                                 console.log(getBtn);
                                 if()
                    })
                })

                input.value = ""

                display.innerHTML = ``

                //console.log(getBtn);

            }
            searchBtn.addEventListener('click', getMovieApi)


                //console.log(movie);

                    /*console.log(info)
                    display.innerHTML +=`
                    <div class="display">
                    <div class="posterImage">
                    <img src='${info.Poster}'>
                </div>
                
                <div class="content">
                    <div class='titleHeader'>
                    <h2 class="posterTitle">${info.Title}</h2>
                    <p>⭐${info.Ratings[0].Value} </p>
        
                    </div>
                    
                    <p class='subtext'>${info.Runtime}   <span class='genre'> ${info.Genre}<span></p>
                    <button id="watchlistBtn" class="buttons" >+</button>watchlist
                    <p class='plot'>${info.Plot}</p>
                </div>
        
                    </div>*/
        
        
                    /*`})
                     
                    /* const addWatchList = document.getElementById('watchlistBtn')
                      
                     })*/

                


          //  }*/

           
 

    



