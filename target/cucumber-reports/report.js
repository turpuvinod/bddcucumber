$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginstudios.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature file",
  "description": "",
  "id": "login-feature-file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login to the application",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-login-to-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters email id \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-login-to-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "login-feature-file;user-should-be-able-to-login-to-the-application;;1"
    },
    {
      "cells": [
        "\"prashanthi.skvl@gmail.com\"",
        "\"Test@123\""
      ],
      "line": 14,
      "id": "login-feature-file;user-should-be-able-to-login-to-the-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to login to the application",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-login-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters email id \"prashanthi.skvl@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password \"Test@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstudioStepdefination.user_is_in_login_page()"
});
formatter.result({
  "duration": 4623213900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prashanthi.skvl@gmail.com",
      "offset": 22
    }
  ],
  "location": "loginstudioStepdefination.user_enters_email_id(String)"
});
formatter.result({
  "duration": 297452000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@123",
      "offset": 22
    }
  ],
  "location": "loginstudioStepdefination.user_enters_password(String)"
});
formatter.result({
  "duration": 338327400,
  "status": "passed"
});
formatter.match({
  "location": "loginstudioStepdefination.user_clicks_the_signin_button()"
});
formatter.result({
  "duration": 3162150900,
  "status": "passed"
});
formatter.match({
  "location": "loginstudioStepdefination.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 1445785500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should be able to logout from the application",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-logout-from-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User clicks the profile button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks the signout button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be logged out successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstudioStepdefination.user_clicks_the_profile_button()"
});
formatter.result({
  "duration": 3417047200,
  "status": "passed"
});
formatter.match({
  "location": "loginstudioStepdefination.user_clicks_the_signout_button()"
});
formatter.result({
  "duration": 50519800,
  "status": "passed"
});
formatter.match({
  "location": "loginstudioStepdefination.user_should_be_logged_out_successfully()"
});
formatter.result({
  "duration": 971858900,
  "status": "passed"
});
});