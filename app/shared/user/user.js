"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("email-validator");
// ^ requiring a node module
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMzQyw0QkFBNEI7QUFDNUI7SUFBQTtJQU1BLENBQUM7SUFIQywyQkFBWSxHQUFaO1FBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbInZhciB2YWxpZGF0b3IgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpO1xuLy8gXiByZXF1aXJpbmcgYSBub2RlIG1vZHVsZVxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBpc1ZhbGlkRW1haWwoKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmVtYWlsKTtcbiAgfVxufVxuIl19