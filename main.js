
let myInput = document.querySelector(".get-repos input");
let myButton = document.querySelector(".get-button");
let result = document.querySelector(".show-data");

// console.log(myInput);
// console.log(myButton);
// console.log(result);

myButton.onclick = function(){
    getRepos();
}



function getRepos(){
    if (myInput.value == ""){
        result.innerHTML = "please enter a valid github username";
    }else{
        fetch(`https://api.github.com/users/${myInput.value}/repos`)
        .then((result) => result.json())
        .then ((repos) => {
          result.innerHTML = "";

          repos.forEach(repo => {
               let mainDiv = document.createElement("div");

               let repoName = document.createTextNode(repo.name);

               mainDiv.appendChild(repoName);


               let url = document.createElement("a");

               let urlText = document.createTextNode("visit this repo");

               url.appendChild(urlText);

               url.setAttribute("target" , "_blank");
               url.href = `https://github.com/${myInput.value}/${repo.name}`;

               mainDiv.appendChild(url);


               let starsSpan = document.createElement("span");
               let starsSpanContent = document.createTextNode(`Stars ${repo.stargazers_count}`)

               starsSpan.appendChild(starsSpanContent);

               mainDiv.appendChild(starsSpan);

               mainDiv.className = 'repo-box';

               result.appendChild(mainDiv);


          });

        })
    }
}






