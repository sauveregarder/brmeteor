Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/linhaDeComando', {
 name: 'linhaDeComando',
 template: 'linhaDeComando'
});

Router.route('/templating', {
 name: 'templating',
 template: 'templating'
});

Router.route('/routing', {
 name: 'routing',
 template: 'routing'
});

Router.route('/mongodb', {
 name: 'mongodb',
 template: 'mongodb'
});

Router.route('/testing', {
 name: 'testing',
 template: 'testing'
});

Router.route('/deploying', {
 name: 'deploying',
 template: 'deploying'
});


