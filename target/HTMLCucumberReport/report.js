$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstfeatureFile.feature");
formatter.feature({
  "line": 2,
  "name": "facebook login feature, we will have diffrent username and password to login",
  "description": "",
  "id": "facebook-login-feature,-we-will-have-diffrent-username-and-password-to-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@First"
    }
  ]
});
formatter.before({
  "duration": 9227834387,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Second Scenerio---------",
  "description": "",
  "id": "facebook-login-feature,-we-will-have-diffrent-username-and-password-to-login;second-scenerio---------",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@vish"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have login page of facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I login using vishakha@com and vishakha1234",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "My modified fuction",
  "keyword": "But "
});
formatter.match({
  "location": "StepDefination1.i_have_login_page_of_facebook()"
});
formatter.result({
  "duration": 581708268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vishakha@com",
      "offset": 14
    },
    {
      "val": "vishakha1234",
      "offset": 31
    }
  ],
  "location": "StepDefination1.i_login_using_saurab_and_saurab(String,String)"
});
formatter.result({
  "duration": 3306137614,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.method()"
});
formatter.result({
  "duration": 236883,
  "status": "passed"
});
formatter.after({
  "duration": 1137899664,
  "status": "passed"
});
formatter.before({
  "duration": 7567960424,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Second Scenerio---------",
  "description": "",
  "id": "facebook-login-feature,-we-will-have-diffrent-username-and-password-to-login;second-scenerio---------",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sugat"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I have login page of facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I login using sugat@com and sugat1234",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "My modified fuction",
  "keyword": "But "
});
formatter.match({
  "location": "StepDefination1.i_have_login_page_of_facebook()"
});
formatter.result({
  "duration": 39822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sugat@com",
      "offset": 14
    },
    {
      "val": "sugat1234",
      "offset": 28
    }
  ],
  "location": "StepDefination1.i_login_using_saurab_and_saurab(String,String)"
});
formatter.result({
  "duration": 3116362181,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.method()"
});
formatter.result({
  "duration": 134658,
  "status": "passed"
});
formatter.after({
  "duration": 751911898,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Scenerio outline---------",
  "description": "",
  "id": "facebook-login-feature,-we-will-have-diffrent-username-and-password-to-login;scenerio-outline---------",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@multiple"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I have login page of facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I login using \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "facebook-login-feature,-we-will-have-diffrent-username-and-password-to-login;scenerio-outline---------;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "facebook-login-feature,-we-will-have-diffrent-username-and-password-to-login;scenerio-outline---------;;1"
    },
    {
      "cells": [
        "akshita",
        "akshita123"
      ],
      "line": 26,
      "id": "facebook-login-feature,-we-will-have-diffrent-username-and-password-to-login;scenerio-outline---------;;2"
    },
    {
      "cells": [
        "amba",
        "amba1233"
      ],
      "line": 27,
      "id": "facebook-login-feature,-we-will-have-diffrent-username-and-password-to-login;scenerio-outline---------;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7399909270,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Scenerio outline---------",
  "description": "",
  "id": "facebook-login-feature,-we-will-have-diffrent-username-and-password-to-login;scenerio-outline---------;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@First"
    },
    {
      "line": 18,
      "name": "@multiple"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I have login page of facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I login using akshita and akshita123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination1.i_have_login_page_of_facebook()"
});
formatter.result({
  "duration": 41465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akshita",
      "offset": 14
    },
    {
      "val": "akshita123",
      "offset": 26
    }
  ],
  "location": "StepDefination1.i_login_using_saurab_and_saurab(String,String)"
});
formatter.result({
  "duration": 2755089909,
  "status": "passed"
});
formatter.after({
  "duration": 859797603,
  "status": "passed"
});
formatter.before({
  "duration": 7479572625,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Scenerio outline---------",
  "description": "",
  "id": "facebook-login-feature,-we-will-have-diffrent-username-and-password-to-login;scenerio-outline---------;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@First"
    },
    {
      "line": 18,
      "name": "@multiple"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I have login page of facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I login using amba and amba1233",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination1.i_have_login_page_of_facebook()"
});
formatter.result({
  "duration": 46802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amba",
      "offset": 14
    },
    {
      "val": "amba1233",
      "offset": 23
    }
  ],
  "location": "StepDefination1.i_login_using_saurab_and_saurab(String,String)"
});
formatter.result({
  "duration": 2274819361,
  "status": "passed"
});
formatter.after({
  "duration": 766119550,
  "status": "passed"
});
formatter.uri("SecondFeatureFile.feature");
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
  "duration": 7464893670,
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
  "duration": 5018468265,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.back2()"
});
formatter.result({
  "duration": 5020447492,
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
  "duration": 47623,
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
  "duration": 3143102472,
  "status": "passed"
});
formatter.after({
  "duration": 826294031,
  "status": "passed"
});
});