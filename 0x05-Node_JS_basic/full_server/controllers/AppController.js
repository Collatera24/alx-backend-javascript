/* eslint-disable */

/**
 * Contains the miscellaneous route handlers.
 * @author Kolawole Tella <https://github.com/Collatera24>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;