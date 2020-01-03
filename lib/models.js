module.exports.MultichoiceModel = (err, config) => {
  return {
    "@type": "MessageCard",
    "@context": "http://schema.org/extensions",
    "themeColor": "0076D7",
    "summary": "Larry Bryant created a new task",
    "sections": [{
        "activityTitle": "![TestImage](https://47a92947.ngrok.io/Content/Images/default.png)Larry Bryant created a new task",
        "activitySubtitle": "On Project Tango",
        "activityImage": "https://teamsnodesample.azurewebsites.net/static/img/image5.png",
        "facts": [{
            "name": "Assigned to",
            "value": "Unassigned"
        }, {
            "name": "Due date",
            "value": "Mon May 01 2017 17:07:18 GMT-0700 (Pacific Daylight Time)"
        }, {
            "name": "Status",
            "value": "Not started"
        }],
        "markdown": true
    }],
    "potentialAction": [{
        "@type": "ActionCard",
        "name": "Add a comment",
        "inputs": [{
            "@type": "TextInput",
            "id": "comment",
            "isMultiline": false,
            "title": "Add a comment here for this task"
        }],
        "actions": [{
            "@type": "HttpPOST",
            "name": "Add comment",
            "target": "http://..."
        }]
    }, {
        "@type": "ActionCard",
        "name": "Set due date",
        "inputs": [{
            "@type": "DateInput",
            "id": "dueDate",
            "title": "Enter a due date for this task"
        }],
        "actions": [{
            "@type": "HttpPOST",
            "name": "Save",
            "target": "http://..."
        }]
    }, {
        "@type": "ActionCard",
        "name": "Change status",
        "inputs": [{
            "@type": "MultichoiceInput",
            "id": "list",
            "title": "Select a status",
            "isMultiSelect": "false",
            "choices": [{
                "display": "In Progress",
                "value": "1"
            }, {
                "display": "Active",
                "value": "2"
            }, {
                "display": "Closed",
                "value": "3"
            }]
        }],
        "actions": [{
            "@type": "HttpPOST",
            "name": "Save",
            "target": "https://b6dc15ac.ngrok.io"
        }]
    }]
}
}

module.exports.textInput = (err, config) => {
  return {
    "@type": "MessageCard",
    "@context": "http://schema.org/extensions",
    "themeColor": "0076D7",
    "summary": err.message,
    "sections": [{
      "activityTitle": `![TestImage](https://47a92947.ngrok.io/Content/Images/default.png) ${config.projectName || 'Sem nome do projeto'} criou um novo alerta de erro`,
      "activitySubtitle": config.methodName || 'Sem nome do método',
      "activityImage": "https://teamsnodesample.azurewebsites.net/static/img/image5.png",
      "facts": [{
        "name": "Mensagem",
        "value": err.message,
      },{
        "name": "Método",
        "value": config.methodName,
      },{
        "name": "Data",
        "value": new Date(),
      },{
        "name": "Status",
        "value": err.status || err.statusCode || 500
      }],
      "markdown": true
    }],
    "potentialAction": [{
      "@type": "ActionCard",
      "name": config.name,
      "inputs": [{
        "@type": "TextInput",
        "id": "comment",
        "isMultiline": false,
        "title": config.title,
      }],
      "actions": [{
        "@type": config.typeAction,
        "name": "Add comment",
        "target": config.target,
      }]
    },]
  }
}

module.exports.dateInputModel = (err, config) => {
  return {
    "@type": "MessageCard",
    "@context": "http://schema.org/extensions",
    "themeColor": "0076D7",
    "summary": err.message,
    "sections": [{
      "activityTitle": `![TestImage](https://47a92947.ngrok.io/Content/Images/default.png) ${config.projectName || 'Sem nome do projeto'} criou um novo alerta de erro`,
      "activitySubtitle": config.methodName || 'Sem nome do metodo',
      "activityImage": "https://teamsnodesample.azurewebsites.net/static/img/image5.png",
      "facts": [{
        "name": "Mensagem",
        "Value": err.message,
      },{
        "name": "Método",
        "value": config.methodName,
      },{
        "name": "Data",
        "value": new Date(),
      },{
        "name": "Status",
        "value": err.status || err.statusCode || 500,
      }],
      "markdown": true
    }],
    "potentialAction": [{
      "@type": "ActionCard",
      "name": config.name,
      "inputs": [{
        "@type": "DateInput",
        "id": "dueDate",
        "title": config.title
      }],
      "actions": [{
        "@type": config.typeAction,
        "name": "Save",
        "target": config.target
      }]
    }]
  }
}

module.exports.messageModel = (err, method, nameProject) => {
  return {
    "type": "message",
    "text": `Foi encontrado um error com a mensagem: ${err.message || '(Não existe um objeto de error)'} no método: ${method}
      com o status: ${err.status || err.statusCode || 500} no projeto ${nameProject || '(Nome do projeto não foi informado'}
      
      Stack: ${err.stack || ('Não existe uma stack de error')}`
  }
}