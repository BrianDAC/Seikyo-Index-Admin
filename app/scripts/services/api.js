'use strict';

angular.module('seikyo.admin')

.service('API', function (BackendUrl) {

    var toUrl = this.toUrl = function (url) {
        return BackendUrl + url;
    };
    this.seikyos = toUrl('api/seikyos/:year/');
    this.seikyo = toUrl('api/seikyos/seikyo/:seikyo');
    this.token = toUrl('token');
    this.users = toUrl('api/users/:user');
    this.advertising = toUrl('api/seikyos/:seikyo/advertisings/:advertising');
    this.article = toUrl('api/seikyos/:seikyo/articles/:article');
    this.basicTerm = toUrl('api/seikyos/:seikyo/basicTerms/:basicTerm');
    this.editorial = toUrl('api/seikyos/:seikyo/editorials/:editorial');
    this.experience = toUrl('api/seikyos/:seikyo/experiences/:experience');
    this.femenineDivision = toUrl('api/seikyos/:seikyo/femenineDivisions/:femenineDivision');
    this.futureGroup = toUrl('api/seikyos/:seikyo/futureGroups/:futureGroup');
    this.masculineDivision = toUrl('api/seikyos/:seikyo/masculineDivisions/:masculineDivision');
    this.message = toUrl('api/seikyos/:seikyo/messages/:message');
    this.monthlyPhrase = toUrl('api/seikyos/:seikyo/monthlyPhrases/:monthlyPhrase');
    this.orientation = toUrl('api/seikyos/:seikyo/orientations/:orientation');
    this.review = toUrl('api/seikyos/:seikyo/reviews/:review');
    this.sokaAdvance = toUrl('api/seikyos/:seikyo/sokaAdvances/:sokaAdvance');
    this.studentGroup = toUrl('api/seikyos/:seikyo/studentGroups/:studentGroup');
    this.division = toUrl('api/seikyos/get/division');
});
