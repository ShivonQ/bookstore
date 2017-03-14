## -Simple Bookstore Ember Front, Run Locally
## -Specs---------------------
- ember-cli: 2.3.0
- rails: 5.0.2
- ruby: 2.2.3p222
- node: 6.9.1
- bower: 1.8.0
- npm: 4.3.0                   

## ----------------------------

## -You will need the following repos for this to function correctly
That App (Rails):
https://github.com/shivonq/bookstore-api

This App (Ember):
https://github.com/shivonq/bookstore

## -Once you have them successfully installed, open three terminal/console windows/tabs and run the following commands.
### -In Window/Tab 1 - start rails server on localhost:3000
- cd into rails app and run the following command:
`bundle install && bin/rails server --binding 0.0.0.0`

### -In Window/Tab 2 - drop, migrate and seed db
- cd into rails app and run the following command:
`rails db:drop && rails db:migrate && rails db:seed`

### -In Window/Tab 3 - Start Ember server on localhost:4200
- cd into ember app and run the following command:
`npm install && bower install && ember server --proxy http://localhost:3000`
