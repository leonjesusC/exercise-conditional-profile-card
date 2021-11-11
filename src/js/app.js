import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */

function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let namez = `<h1>${variables.name} ${variables.lastname}</h1>`;
  if (variables.name == null || variables.lastname == null)
    namez = `<h1>Type Name / Last Name</h1>`;

  /* INTENTO CON TERNARY OPERATORS (TODOS VAN DENTRO DE POSITIONZ) */

  let tweety = `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`;
  variables.twitter == null
    ? (tweety = `<li><a href="" style="pointer-events:none;"><i></i></a></li>`)
    : tweety;

  let gitty = `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`;
  variables.github == null
    ? (gitty = `<li><a href="" style="pointer-events:none;"><i></i></a></li>`)
    : gitty;

  let linky = `<li><a href="https://www.linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`;
  variables.linkedin == null
    ? (linky = `<li><a href="" style="pointer-events:none;"><i></i></a></li>`)
    : linky;

  let iggy = `<li><a href="https://www.instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`;
  variables.instagram == null
    ? (iggy = `<li><a href="" style="pointer-events:none;"><i></i></a></li>`)
    : iggy;

  let positionz = `<ul class=${variables.socialMediaPosition}>
                        ${tweety}
                        ${gitty}
                        ${linky}
                        ${iggy}
                    </ul>`;

  let rolypoly = `<h2>${variables.role}</h2>`;
  if (variables.role == null) rolypoly = `<h2>Select Role</h2>`;

  let locationz = `<h3>${variables.country}, ${variables.city}</h3>`;
  if (variables.country == null || variables.city == null)
    locationz = `<h3>Select Country/City</h3>`;
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
            <img src="${variables.avatarURL}" class="photo" />
                ${namez}
                ${rolypoly}
                ${locationz}
                ${positionz}
          </div>`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://www.dirt.com/wp-content/uploads/2020/12/LB-Starkman-Building-Paddys-Pub-Its-Always-Sunny-2.jpg?w=800",
    // this is the url for the profile avatar
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
