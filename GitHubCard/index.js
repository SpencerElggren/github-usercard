
/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/SpencerElggren")
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
entryPoint = document.querySelector(".cards");

axios.get("https://api.github.com/users/SpencerElggren")
    .then(response => { console.log(response.data);
    let cardOne = createCard(response.data);
    entryPoint.appendChild(cardOne);
    });

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["https://api.github.com/users/tadepew",
    "https://api.github.com/users/aalvinlin",
    "https://api.github.com/users/kjmagill",
    "https://api.github.com/users/vincesanders",
    "https://api.github.com/users/skooger",
    "https://api.github.com/users/heyclos"
];

followersArray.forEach(name => {
    axios.get(name)
        .then(response => { console.log(response.data);
            let cardOne = createCard(response.data);
            entryPoint.appendChild(cardOne);
        });

});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(gitObject) {
    const card = document.createElement("div"),
        portImg = document.createElement("img"),
        cardInfo = document.createElement("div"),
        name = document.createElement("h3"),
        username = document.createElement("p"),
        location = document.createElement("location"),
        profile = document.createElement("p"),
        address = document.createElement("a"),
        followers = document.createElement("p"),
        following = document.createElement("p"),
        bio = document.createElement("p");

    card.classList.add("card");
    cardInfo.classList.add("card-info");
    name.classList.add("name");
    username.classList.add("username");

    card.appendChild(portImg);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(username);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    profile.appendChild(address);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);

    portImg.src = gitObject.avatar_url;
    name.textContent = gitObject.name;
    username.textContent = gitObject.login;
    location.textContent = gitObject.location;
    profile.textContent = "Profile: " + gitObject.html_url;
    address.textContent = gitObject.html_url;
    followers.textContent = gitObject.followers;
    following.textContent = gitObject.following;
    bio.textContent = gitObject.bio;

    return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
