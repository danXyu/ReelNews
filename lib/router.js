Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('featured', {
    path: '/',
  });
  
  this.route('popular', {
    path: '/popular'
  });
  
  this.route('search', {
    path: '/search'
  });
  
  // this.route('postPage', {
  //   path: '/posts/:_id',
  //   waitOn: function() {
  //     return [
  //       Meteor.subscribe('singlePost', this.params._id),
  //       Meteor.subscribe('comments', this.params._id)
  //     ];
  //   },
  //   data: function() { return Posts.findOne(this.params._id); }
  // });

  // this.route('postEdit', {
  //   path: '/posts/:_id/edit',
  //   waitOn: function() { 
  //     return Meteor.subscribe('singlePost', this.params._id);
  //   },
  //   data: function() { return Posts.findOne(this.params._id); }
  // });
  
  // this.route('postSubmit', {
  //   path: '/submit',
  //   disableProgress: true
  // });
});

