'use strict';

module.exports = function (sqlService) {
  let operations = {
    GET
  };

  function GET(req, res, next) {
    sqlService.list().then((results) => {
      console.log(results);
      
      res.status(200).json({
        results: results
      });
    });
  }

  GET.apiDoc = {
    summary: 'Returns worlds by name.',
    operationId: 'getWorlds',
    parameters: [{ in: 'query',
      name: 'worldName',
      required: true,
      type: 'string'
    }],
    responses: {
      200: {
        description: 'A list of worlds that match the requested name.',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/World'
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
  return operations;
}