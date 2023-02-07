/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-o1wdglbml3ts8wb2.us', // the auth0 domain prefix
    audience: 'coffee image', // the audience set for the auth0 app
    clientId: '3qNJ8IJgYvGucBH4x0GiZ1q5Jj8UeoVI', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100/drinks', // the base url of the running ionic application. 
  }
};
