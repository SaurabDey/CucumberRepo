$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SecondFeatureFile.feature");
formatter.feature({
  "line": 2,
  "name": "This is my second feature file",
  "description": "",
  "id": "this-is-my-second-feature-file",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Second"
    }
  ]
});
formatter.before({
  "duration": 15495839560,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I want to delete cookies",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to remove the cookies",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination1.back1()"
});
formatter.result({
  "duration": 5337902948,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.back2()"
});
formatter.result({
  "duration": 5016871664,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "First Scenerio-----------",
  "description": "",
  "id": "this-is-my-second-feature-file;first-scenerio-----------",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@saur"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I have login page of facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I login using saurab.gmail and saurab1234",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination1.i_have_login_page_of_facebook()"
});
formatter.result({
  "duration": 38591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saurab.gmail",
      "offset": 14
    },
    {
      "val": "saurab1234",
      "offset": 31
    }
  ],
  "location": "StepDefination1.i_login_using_saurab_and_saurab(String,String)"
});
formatter.result({
  "duration": 4236445111,
  "status": "passed"
});
formatter.after({
  "duration": 904902291,
  "status": "passed"
});
});