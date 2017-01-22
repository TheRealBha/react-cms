'use strict';

module.exports = function (sqlService) {
    let operations = {
        PUT,
        DELETE
    };

    function PUT(req, res, next) {
        // Reassigning for readability
        let id = req.params.id;
        let title = req.body.title;
        let body = req.body.body;
        sqlService.update(
            id,
            title,
            body
        ).then((results) => {
            res.status(200).json({
                results: results
            });
        })
    }

    function DELETE(req, res, next) {
        // Reassigning for readability
        let id = req.params.id;
        sqlService.delete(
            id
        ).then((results) => {
            res.status(200).json({
                results: results
            });
        })
    }

    PUT.apiDoc = {
        summary: 'Update an alert.',
        operationId: 'putAlert',
        parameters: [{
                name: 'id',
                in: 'path',
                type: 'number',
                required: true
            },
            {
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
            }
        ],
        responses: {
            200: {
                description: 'Returns the alert that was updated in the database',
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

    DELETE.apiDoc = {
        summary: 'DELETE an alert by id.',
        operationId: 'deleteAlert',
        parameters: [{
                name: 'id',
                in: 'path',
                type: 'number',
                required: true
            }
        ],
        responses: {
            200: {
                description: 'Returns confirmation that the alert was deleted.',
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