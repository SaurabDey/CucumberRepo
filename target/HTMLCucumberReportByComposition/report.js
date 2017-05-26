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
  "duration": 16131004598,
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
  "duration": 5589950,
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
  "duration": 11617142212,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.method()"
});
formatter.result({
  "duration": 174891,
  "status": "passed"
});
formatter.after({
  "duration": 1273636998,
  "status": "passed"
});
formatter.before({
  "duration": 12706916003,
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
  "duration": 39412,
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
  "duration": 7565842024,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.method()"
});
formatter.result({
  "duration": 147795,
  "status": "passed"
});
formatter.after({
  "duration": 818857870,
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
  "duration": 8083706791,
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
  "duration": 46391,
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
  "duration": 3177660728,
  "status": "passed"
});
formatter.after({
  "duration": 897302734,
  "status": "passed"
});
formatter.before({
  "duration": 8316704163,
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
  "duration": 41054,
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
  "duration": 2714458904,
  "status": "passed"
});
formatter.after({
  "duration": 767876262,
  "status": "passed"
});
});