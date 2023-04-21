const image_arr = [];

function REQUEST() {
    axios.request().then(function(res) {
        for (let i = 0; i < response.data.results.length - 12; i++) {
            image_arr.push(`https://image.tmdb.org/t/p/original/${response.data.results[i].poster_path}`)

        }
    })
}

REQUEST();