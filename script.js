
//var steamId = prompt("Please Enter your Steam id.");

var input;
window.onload=function(){
  
document.getElementById("formBtn").onclick = function(){
  input = document.getElementById("userInput").value;
  $(".formp2").css("visibility", "visible");
  console.log(input);
  if(input != ""){
    
  $.getJSON('https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=252490&key=D989B173369B8FC2AEFE02729C6BD689&steamid='+input, function(data) {
    console.log(data);

    $.each(data, function(index, value) {
      console.log(value);
      var testxD = localStorage.getItem("StartDeaths"); // ovo i sve ispod gleda na pocetku koji su statsi od lika

      var steamid = value.steamID;
      console.log("The user's steamID is", steamid);

      var deaths = value.stats[0].value;
      console.log("Player has died", deaths, "times");

      var kills = value.stats[8].value;
      console.log("Player has killed", kills, "people");

      var suicides = value.stats[5].value;
      console.log("Player has suicided", suicides, "times");

      var animalkills = value.stats[13].value + value.stats[14].value + value.stats[15].value + value.stats[16].value + value.stats[17].value;
      console.log("you have killed " + animalkills + " animals")

      var animaldeaths = value.stats[26].value + value.stats[27].value + value.stats[28].value;
      console.log("you have died " + animaldeaths + ' times from animals');

      var resources = value.stats[46].value + value.stats[66].value;
      console.log("You have gathered " + resources + " stones,metal & sulfur")

      // odavde pa do dole su novi statsi.
      var olddeaths = localStorage.getItem("StartDeaths");
      var oldkills = localStorage.getItem("StartKills");
      var oldsuicides = localStorage.getItem("Suicides");
      var oldanimalkills = localStorage.getItem("AnimalKills");
      var oldanimaldeaths = localStorage.getItem("AnimalKills");
      var oldresources = localStorage.getItem("Resources");

      //odavde pa dole su funkcije i to
     $("#startbutton").click(function(){  // ako je prvo dugme stisnito

        localStorage.setItem("StartDeaths", deaths); // stavi deaths u localstorage
        localStorage.setItem("StartKills", kills); // steavi kills u localstorage
        localStorage.setItem("StartSuicides",suicides);
        localStorage.setItem("StartAnimalKills",animalkills);
        localStorage.setItem("StartAnimalDeaths",animaldeaths);
        localStorage.setItem("StartResources",resources);
      });
     
      $("#endbuttone").click(function(){
        $(".amog").css({ visibility: "visible"});
        var newsuicides = value.stats[5].value
        var newdeaths = value.stats[0].value;
        var newkills = value.stats[8].value;
        var newanimalkills = value.stats[13].value + value.stats[14].value + value.stats[15].value + value.stats[16].value + value.stats[17].value;
        var newanimaldeaths = value.stats[26].value + value.stats[27].value + value.stats[28].value;
        var newresources = value.stats[46].value + value.stats[66].value;

        var totaldeaths = newdeaths - olddeaths;
        var totalkills = newkills - oldkills;
        var totalsuicides = newsuicides - oldsuicides;
        var totalanimalkills = newanimalkills - oldanimalkills;
        var totalanimaldeaths = newanimaldeaths - oldanimaldeaths;
        var totalresources = newresources - oldresources;

        console.log("New deaths are" , newdeaths - olddeaths);
        console.log("new kills are", newkills - oldkills);

        localStorage.setItem("TotalDeaths", totaldeaths);
        localStorage.setItem("TotalKills", totalkills);
        localStorage.setItem("TotalSuicides", totalsuicides);
        localStorage.setItem("TotalAnimalKills", totalanimalkills);
        localStorage.setItem("TotalAnimalDeaths", totalanimaldeaths);
        localStorage.setItem("TotalResources", totalresources);

         var totalscore = localStorage.getItem("StartDeaths") - localStorage.getItem("StartKills");
         localStorage.setItem("TotalScore",totalscore)
      });

      $(".modal-body1").text("You have killed a total of " + localStorage.getItem("StartKills") + " players."); // napise to u text
      $(".modal-body2").text("You have died a total of " + localStorage.getItem("StartDeaths") + " times.");
      $(".modal-body3").text("You have commited suicide " + localStorage.getItem("StartSuicides") + " times.");
      $(".modal-body4").text("You have kileld a total of " + localStorage.getItem("StartAnimalKills") + " animals.");
      $(".modal-body5").text("You have died a total of " + localStorage.getItem("StartAnimalDeaths") + " times by animals.");
      $(".modal-body6").text("You have mined a total of " + localStorage.getItem("StartResources") + " resources.");
      $(".modal-body7").text("Your total score is: " + localStorage.getItem("TotalScore"));

      
 /* document.getElementById('#ytbutton').onclick = function(){
    window.open("https://www.youtube.com/channel/UCtcSUWMxFAnIbEdBVQn-ttA");
  }
  document.getElementById('#steambutton').onclick = function(){
    window.open("http://steamcommunity.com/waachuu");
  }
  document.getElementById('#twitterbutton').onclick = function(){
    window.open("http://twitter.com");
  }
  document.getElementById('gmailbutton').onclick = function(){
    window.open("http://gmail.com");
  }
  */
    });
  });

  }
}


}


if(input > null){

  alert(input);






}
