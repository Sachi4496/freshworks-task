var timerId;

    let movies_div = document.getElementById("movies");

    async function searchMovies(movie_name) {
        try {
            let res = await fetch(`https://www.omdbapi.com/?apikey=65714494&s=${movie_name}`);
            let data = await res.json();
            console.log("data-----:", data);

            return data;
        } catch (e) {
            // alert("not found")
            console.log("e:", e)
        }

    }

    // searchMovies("inception");
    var movie_details = document.getElementById("details");
    var errorData = document.getElementById("error");

    async function main() {
        let name = document.getElementById("movie").value;

        //get search movies

        if (name.length < 3) {
            return false;
        }

        movies_div.style.display = "block";

        // movies_div.addEventListener("mouseenter",()=>{
        //     movies_div.style.display = "block"
        // })



        let res = await searchMovies(name);

        let movie_data = res.Search;
        appendMovies(movie_data);
        console.log("res---", movie_data);


    }


    function debounce(func, delay) {

        //lets take about A
        //func = main()

        //ave = setTimeout -  func - main- searchMovie("ave")
        //aven - clear the previous timeout - setTimeout - func - main- searchMovie("ave")

        if (timerId) {
            clearTimeout(timerId);
        }


        timerId = setTimeout(function () {

            func();

        }, delay);

    }
    
