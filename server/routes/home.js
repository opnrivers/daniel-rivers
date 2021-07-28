module.exports = {
  method: 'GET',
  path: '/',
  handler: async function handler(request, h) {
    return h.view('index', {
      title: 'Home',
    }, {});
  },
};
