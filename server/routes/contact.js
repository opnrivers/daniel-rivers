module.exports = {
  method: 'GET',
  path: '/contact',
  handler: async function handler(request, h) {
    return h.view('contact', {
      title: 'Contact',
    }, {});
  },
};
