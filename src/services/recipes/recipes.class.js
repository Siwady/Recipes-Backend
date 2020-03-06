const { Service } = require('feathers-mongodb');

exports.Recipes = class Recipes extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('recipes');
    });
  }
};
