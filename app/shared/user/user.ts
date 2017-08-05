var validator = require("email-validator");
// ^ requiring a node module
export class User {
  email: string;
  password: string;
  isValidEmail() {
    return validator.validate(this.email);
  }
}
