'use strict';

module.exports = function (sqlService) {
  let operations = {
    GET,
    POST
  };

  function GET(req, res, next) {
    sqlService.list().then((results) => {
      console.log(results);

      res.status(200).json({
        results: results
      });
    });
  }

  function POST(req, res, next) {
    let title = req.body.title;
    let body = req.body.body;
    sqlService.insert({title, body}).then((results) => {
      res.status(200).json({
        results: results
      });
    })
  }

  GET.apiDoc = {
    summary: 'Returns Alerts most recent first',
    operationId: 'getAlerts',
    parameters: [],
    responses: {
      200: {
        description: 'A list alerts.',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/alerts'
          }
        }
      },
      default: {
        description: 'An error occurred',
        schema: {
          additionalProperties: true
        }
      }
    }
  };

  POST.apiDoc = {
    summary: 'Inserts a new alert.',
    operationId: 'postAlert',
    parameters: [{
      name: 'alert',
      in: 'body',
      description: 'The alert to create',
      schema: {
        properties: {
          title: {
            type: 'string'
          },
          body: {
            type: 'string'
          }
        }
      }
    }],
    responses: {
      200: {
        description: 'Returns the alert that was added to the database',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/alerts'
          }
        }
      },
      default: {
        description: 'An error occurred. Could not insert the alert.',
        schema: {
          additionalProperties: true
        }
      }
    }
  };
  return operations;
}