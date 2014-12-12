Router.route('/', function () {
  this.render('home');
},{
  name: 'home'
});

Router.route('/confirmation', function () {
  this.render('confirmation');
},{
  name: 'confirmation'
});
