module.exports = {
  method: 'GET',
  path: '/{any*}',
  handler: async function handler(request, h) {
    return h.view('not-found', {
      title: '404 Not Found',
    }, {}).code(404);
  },
};
