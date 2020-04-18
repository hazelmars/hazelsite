/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
let twiceButton = document.querySelector("#twice");
console.log(twiceButton);

let commentContainer = document.querySelector("#commentContainer");

twiceButton.addEventListener("click", () => {
  let comment = document.querySelector("#comment");
  console.log(comment.value);

  commentContainer.innerHTML += `
<div id="commentBox">
<h3>
${comment.value}
</h3>
</div>`
})

let itzyButton = document.querySelector("#itzy")
itzyButton.addEventListener ("click", () => {
  sendItzyApiRequest()
})

async function sendItzyApiRequest (){
  let response = await fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "dedb1222c7msh916956338c9367cp112a5ajsn8a45bb361825"
	}
})
console.log(response)
  let itzy = await response.json()
  console.log(itzy)
  useCovidStatsApi(itzy)
}

function useCovidStatsApi(itzy){
  document.querySelector("#confirmed").innerHTML+=`confirmed cases=${itzy[0].confirmed}`
  document.querySelector("#recovering").innerHTML+=`recovered cases=${itzy[0].recovered}`
  document.querySelector("#deaths").innerHTML+=`death cases=${itzy[0].deaths}`
}
