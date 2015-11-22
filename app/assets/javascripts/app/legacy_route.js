angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/faq', { controller: function($window) { $window.location.replace('https://github.com/bountysource/frontend/wiki/Frequently-Asked-Questions'); }, template: "" })
      .when('/about', { redirectTo: "/learn" })
      .when('/account', { redirectTo: "/settings" })
      .when('/account/forgot_password', { redirectTo: "/signin/reset" })
      .when('/account/change_password', { redirectTo: "/settings/accounts" })
      .when('/projects', { redirectTo: "/teams" })
      .when('/users/:id', { redirectTo: function(param) { return "/people/"+param.id; } })
      .when('/trackers/:id/issues', { redirectTo: function(param) { return "/trackers/"+param.id; } })
      .when('/issues/:issue_id/bounties', { redirectTo: function(param) { return "/issues/"+param.issue_id+"/backers"; } })
      .when('/issues/:issue_id/bounties/:id/receipt', { redirectTo: function() { return "/activity/backers"; } })
      .when('/issues/:issue_id/solutions/:id/disputes/create', { redirectTo: function(param) { return "/issues/"+param.issue_id+"/solutions"; } })
      .when('/issues/:issue_id/solutions/:id/disputes', { redirectTo: function(param) { return "/issues/"+param.issue_id+"/solutions"; } })
      .when('/issues/:issue_id/comments', { redirectTo: function(param) { return "/issues/"+param.issue_id; } })
      .when('/issues/:issue_id/claims', { redirectTo: function(param) { return "/issues/"+param.issue_id; } })
      .when('/issues/:issue_id/developers', { redirectTo: function(param) { return "/issues/"+param.issue_id; } })
      .when('/solutions', { redirectTo: "/activity/solutions" })
      .when('/solutions/:id', { redirectTo: function() { return "/activity/solutions"; } })
      .when('/contributions', { redirectTo: "/activity" })
      .when('/termsofservice', { redirectTo: "/terms" })
      .when('/privacypolicy', { redirectTo: "/privacy" })
      .when('/fundraisers/:id/edit/basic-info', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/edit"; } })
      .when('/fundraisers/:id/edit/description', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/edit"; } })
      .when('/fundraisers/:id/edit/description', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/edit"; } })
      .when('/fundraisers/:id/edit/rewards', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/edit"; } })
      .when('/fundraisers/:id/edit/funding', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/edit"; } })
      .when('/fundraisers/:id/edit/duration', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/edit"; } })
      .when('/account/fundraisers', { redirectTo: "/activity/fundraisers" })
      .when('/account/create_fundraiser', { controller: function($window) { $window.location.replace('https://salt.bountysource.com/'); }, template: "" })
      .when('/fundraisers/:fundraiser_id/pledges/:id', { redirectTo: function() { return "/activity/pledges"; } })
      .when('/fundraisers/:id/info', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/rewards"; } })
      .when('/undefined', { redirectTo: "/" })
      .when('/account/fundraisers/:id/basic_info', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/edit"; } })
      .when('/account/fundraisers/:id/description', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/edit"; } })
      .when('/account/fundraisers/:id/rewards', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/edit"; } })
      .when('/account/fundraisers/:id/funding', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/edit"; } })
      .when('/account/fundraisers/:id/duration', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/edit"; } })
      .when('/bounties', { redirectTo: "/bounties/search" })
      .when('/create_account', { redirectTo: "/signin" })
      .when('/activity/solutions', { redirectTo: "/activity/claims" })
      .when('/activity/account', { redirectTo: "/activity/cash_outs" })
      .when('/activity/transactions', { redirectTo: "/orders" })
      .when('/transactions/:id', { redirectTo: function(param) { return "/orders"; } })
      .when('/fundraisers/:id/pledges', { redirectTo: function(param) { return "/fundraisers/"+param.id+"/backers"; } })
      .when('/issues/:issue_id/solutions', { redirectTo: function(params) { return "/issues/"+params.issue_id+"/claims"; } })
      .when('/issues/:issue_id/bounty', { redirectTo: function (params) { return "/issues/"+params.issue_id; } })
      .when('/teams/:slug/activity', { redirectTo: function (params) { return "/teams/"+params.slug; } })
      .when('/teams/:id/subscription', { controller: function($window) { $window.location.replace($window.location.href.replace(/https:\/\/www(.*?)\/teams\/(.*?)\/subscription/, 'https://salt$1/teams/$2')); }, template: "" })
      .when('/notifications/cancel_all', { redirectTo: function(param,path,search) { return "/notifications/unsubscribe?type=all&email="+search.email; } })
    ;
  });