let movieArray = JSON.parse(movies);
console.log(movieArray);

function moviesHTML(){
    for (let i = 0; i < movieArray.length; i++){
        document.getElementById("demo").innerHTML += `
        <div class="media col-lg-4 col-md-6 col-sm-12 g-5">
    
       <div class="cardx">
       <div class="movie">
    <img src="${movieArray[i].image}" alt="...">
    </div>
    <div class="description">
     <h5>${movieArray[i].title}</h5>
     <p>${movieArray[i].description}</p>
     <div class ="likes"> <p class="btn btn-primary AddLikes">Like</p><span>Likes </span><span class="likelabel">${movieArray[i].likes}</span></div>
    </div>
    </div>
      </div>
      `
    }
    }


moviesHTML();
addLikes();

function addLikes (){
    let likes = document.getElementsByClassName("AddLikes");


    for (let i = 0; i<likes.length; i++){
        likes[i].addEventListener("click", function(){
            plusLike(i);
        })
    }
}

function plusLike(i){

    movieArray[i].likes++;
    document.getElementsByClassName("likelabel")[i].innerHTML =movieArray[i].likes;
}

document.getElementById("sort").addEventListener("click", sortDES);

function sortDES() {
  movieArray.sort(function(a,b){
      if (a.likes < b.likes) {
          return 1;
      }
      if (a.likes > b.likes) {
          return -1;
      }
      return 0;
  })
  
  document.getElementById("demo").innerHTML = "";
 
  moviesHTML();
  addLikes();
}
