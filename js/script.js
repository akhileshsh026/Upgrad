
/*
For example, you need to add {"variable": "var3", "matchType": "Regex", "value": ".*"} to 
the variables property from request Object...
*/

var request = {
    "name": "Name",
    "id": 3,
    "rules":[
      {
        "name": "Rule name",
        "tags": [
          {
            "tagId": 1,
            "variables":[
              {
                "variable": "var1",
                "matchType": "Regex",
                "value": ".*"
              },
              {
                "variable": "var2",
                "matchType": "Regex",
                "value": ".*"
              }
            ],
            "condition": false,
          },
          {
            "tagId": 1,
            "condition": false,
          }
        ],
        "ruleSetId": 3,
      }
    ]
  }

  // You have to "navigate" properly in your object:
  
  request.rules[0].tags[0].variables.push({
    "variable":"var3",
    "matchType": "Regex",
    "value": ".*"
  })