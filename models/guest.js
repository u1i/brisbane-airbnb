var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('guest', {
    "connector": "memory",
    "fields": {
        "name": {
            "type": "string",
            "required": true
        },
        "email": {
            "type": "string",
            "required": true
        },
        "smoking": {
            "type": "string",
            "required": true
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;