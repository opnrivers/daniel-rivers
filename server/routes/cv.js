module.exports = {
  method: 'GET',
  path: '/cv',
  handler: async function handler(request, h) {
    return h.view('cv', {
      title: 'CV',
    }, {});
  },
};
