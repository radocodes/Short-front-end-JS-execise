const jsMenuText = "JS side menu here";
const jsMenuTextChanged = "JS Just kidding :)";
const JqMenuText = "JQ side menu here";
const JqMenuTextChanged = "JQ Just kidding :)";
const errorTextUI = "Unable to execute request. An error occurred while loading data: ";
const tableBodyAjax = "#table-body-ajax-content";
const tableBodyPersons = "#table-body-persons";
const jsonUrl = "https://api.myjson.com/bins/jvvjx";
const jqButton = "#jq-button";
const jqText = "#jq-text";
const jsButton = "#js-button";
const jsText = "#js-text";
const infoBtnText = "Info";
const eatBtnText = "Eat!";
const talkBtnText = "Talk!";
const bounceBtnText = "Bounce with tits!";
const BirthBtnText = "Become a mother and have a baby!";
const shaveBtnText = "Shave your beard!";
const PeeStandingBtnText = "Pee standing upright!";

//this func replace displayed text from html content with another by Jquery 
let replaceTextJQ = ($content) => {
  if ($content.html() == JqMenuText) {
    $content.html(JqMenuTextChanged);
  } else if ($content.html() == JqMenuTextChanged) {
    $content.html(JqMenuText);
  }
};

//Jquery main part
$textChangerJquery = $(jqButton).click(() => {
  $jqueryHtmlContent = $(jqText);
  replaceTextJQ($jqueryHtmlContent);

});

//this func replace displayed text from html content with another by vanilla js
let replaceTextJS = (content) => {
  if (content.innerHTML === jsMenuText) {
    content.innerHTML = jsMenuTextChanged;
  } else if (content.innerHTML === jsMenuTextChanged) {
    content.innerHTML = jsMenuText;
  }
};

//vanilla js main part
let textChangerJsVanilla = () => {
  let changing = () => {
    let htmlContent = document.querySelector(jsText);
    replaceTextJS(htmlContent);
  }
  let btn = document.querySelector(jsButton);
  btn.addEventListener("click", changing, false);
};

//here starts the part of third task:
/* 
//its work using server based url: "https://api.myjson.com/bins/19em9m"
$displayPeopleNames = $.getJSON(jsonUrl, {
    //url: jsonUrl,
    //type: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    //crossDomain: true,
    data: "json",
    dataType: "aplication/json",
  },
  (json) => {
    for (let i = 0; i < json.peopleNames.length; i++) {
      $(tableBody).append("<tr><td>" + json.peopleNames[i] + "</td></tr>");
    }
  }); */

$displayPeopleNames = $.ajax(jsonUrl, {
  //dataType: "aplication/json",
  error: (jqXHR, textStatus, errorThrown) => {
    console.log(textStatus + " " + errorThrown);
    //shows user info about error:
    $(tableBodyAjax).append("<tr><td>" + errorTextUI + textStatus + " " + errorThrown + "</td></tr>");
  },
  success: (json, textStatus, jqXHR) => {
    for (let i = 0; i < json.peopleNames.length; i++) {
      $(tableBodyAjax).append("<tr><td>" + json.peopleNames[i] + "</td></tr>");
    }
  }
});

//OOP Task:
let addCommandButton = (command, buttonText) => {
  return `<button type='button' class='btn btn-info info' data-toggle='popover' data-placement='top' data-content='${command}'>${buttonText}</button> `
  }

let AddHumanCommandButtons = (human) => {
return addCommandButton(human.info(), infoBtnText) +
addCommandButton(human.eat(), eatBtnText) +
addCommandButton(human.talk(), talkBtnText);
}

let women = [sisi, emi]

women.forEach(currWoman => {
$(tableBodyPersons).append(`<tr><td>${currWoman.name}</td><td>
${AddHumanCommandButtons(currWoman)}
${addCommandButton(currWoman.makeBounce(), bounceBtnText)}
${addCommandButton(currWoman.giveBirth(), BirthBtnText)}
</td></tr>`)
});

let men = [kire, rado];

men.forEach(currMan => {
  $(tableBodyPersons).append(`<tr><td>${currMan.name}</td><td>
  ${AddHumanCommandButtons(currMan)}
  ${addCommandButton(currMan.shaveBeard(), shaveBtnText)}
  ${addCommandButton(currMan.peeStanding(), PeeStandingBtnText)}
  </td></tr>`)
  });

$('[data-toggle="popover"]').popover()

textChangerJsVanilla();
$textChangerJquery;
$displayPeopleNames;