"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegexValidator = (function () {
    function RegexValidator() {
    }
    RegexValidator.prototype.ValidateWholeNumber = function (userInput) {
        var regex = /^\d+$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateDecimalNumber = function (userInput) {
        var regex = /^\d*\.\d+$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateWholeAndDecimalNumbers = function (userInput) {
        var regex = /^\d*(\.\d+)?$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateNegativePositiveWholeAndDecimalNumber = function (userInput) {
        var regex = /^-?\d*(\.\d+)?$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateWholeDecimalAndFractionNumbers = function (userInput) {
        var regex = /[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateAlphanumericWithoutSpace = function (userInput) {
        var regex = /^[a-zA-Z0-9]*$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateAlphanumericWithSpace = function (userInput) {
        var regex = /^[a-zA-Z0-9 ]*$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateCommonEmail = function (userInput) {
        var regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateUncommonEmail = function (userInput) {
        var regex = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateComplexPassword = function (userInput) {
        var regex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateModeratePassword = function (userInput) {
        var regex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateUsername = function (userInput) {
        var regex = /^[a-z0-9_-]{3,16}$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateURLWithHTTPS = function (userInput) {
        var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateURLWithOptionalHTTPS = function (userInput) {
        var regex = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateIPV4Address = function (userInput) {
        var regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateIPV6Address = function (userInput) {
        var regex = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateIPV4OrV6Address = function (userInput) {
        var regex = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateYearMonthDayDate = function (userInput) {
        var regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateDayMonthYearDate = function (userInput) {
        var regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateDayMonthAbvYearDate = function (userInput) {
        var regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.Validate12hrTimeFormat = function (userInput) {
        var regex = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.Validate24HrTimeFormat = function (userInput) {
        var regex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateHTMLTag = function (userInput) {
        var regex = /<\/?[\w\s]*>|<.+[\W]>/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateInlineJSHandler = function (userInput) {
        var regex = /\bon\w+=\S+(?=.*>)/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateInlineJSHandlerWithElement = function (userInput) {
        var regex = /(?:<[^>]+\s)(on\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateSlug = function (userInput) {
        var regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.MatchDuplicates = function (userInput) {
        var regex = /(\b\w+\b)(?=.*\b\1\b)/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidatePhoneNumbers = function (userInput) {
        var regex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateFilePathWithNameAndExtension = function (userInput) {
        var regex = /((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateFilePathWithOptionalNameAndExtension = function (userInput) {
        var regex = /^(.+)\/([^/]+)$/;
        return regex.test(userInput);
    };
    RegexValidator.prototype.ValidateFileNameWithExtension = function (userInput) {
        var regex = /^[\w,\s-]+\.[A-Za-z]{3}$/;
        return regex.test(userInput);
    };
    return RegexValidator;
}());
exports.default = RegexValidator;
//# sourceMappingURL=index.js.map