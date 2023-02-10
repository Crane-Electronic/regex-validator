class RegexValidator {
    constructor() {

    }
    //Numbers
    ValidateWholeNumber(userInput: string) {
        const regex: RegExp = /^\d+$/;
        return regex.test(userInput);
    }

    ValidateDecimalNumber(userInput: string) {
        const regex: RegExp = /^\d*\.\d+$/;
        return regex.test(userInput);
    }

    ValidateWholeAndDecimalNumbers(userInput: string) {
        const regex: RegExp = /^\d*(\.\d+)?$/;
        return regex.test(userInput)
    }

    ValidateNegativePositiveWholeAndDecimalNumber(userInput: string) {
        const regex: RegExp = /^-?\d*(\.\d+)?$/;
        return regex.test(userInput);
    }


    ValidateWholeDecimalAndFractionNumbers(userInput: string) {
        const regex: RegExp = /[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/;
        return regex.test(userInput)
    }

    //Alphanumeric
    ValidateAlphanumericWithoutSpace(userInput: string) {
        const regex: RegExp = /^[a-zA-Z0-9]*$/;
        return regex.test(userInput)
    }

    ValidateAlphanumericWithSpace(userInput: string) {
        const regex: RegExp = /^[a-zA-Z0-9 ]*$/;
        return regex.test(userInput)
    }

    //Emails
    ValidateCommonEmail(userInput: string) {
        const regex: RegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        return regex.test(userInput)
    }

    ValidateUncommonEmail(userInput: string) {
        const regex: RegExp = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return regex.test(userInput)
    }

    //Passwords
    ValidateComplexPassword(userInput: string) {
        const regex: RegExp = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
        return regex.test(userInput)
    }

    ValidateModeratePassword(userInput: string) {
        const regex: RegExp = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
        return regex.test(userInput)
    }

    //UserName
    ValidateUsername(userInput: string) {
        const regex: RegExp = /^[a-z0-9_-]{3,16}$/;
        return regex.test(userInput)
    }

    //URLs
    ValidateURLWithHTTPS(userInput: string) {
        const regex: RegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
        return regex.test(userInput)
    }

    ValidateURLWithOptionalHTTPS(userInput: string) {
        const regex: RegExp = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        return regex.test(userInput)
    }

    //IPs
    ValidateIPV4Address(userInput: string) {
        const regex: RegExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
        return regex.test(userInput)
    }

    ValidateIPV6Address(userInput: string) {
        const regex: RegExp = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
        return regex.test(userInput)
    }

    ValidateIPV4OrV6Address(userInput: string) {
        const regex: RegExp = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
        return regex.test(userInput)
    }

    //Dates
    ValidateYearMonthDayDate(userInput: string) {
        const regex: RegExp = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
        return regex.test(userInput)
    }

    ValidateDayMonthYearDate(userInput: string) {
        const regex: RegExp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return regex.test(userInput)
    }

    ValidateDayMonthAbvYearDate(userInput: string) {
        const regex: RegExp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return regex.test(userInput)
    }

    //Time
    Validate12hrTimeFormat(userInput: string) {
        const regex: RegExp = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/;
        return regex.test(userInput)
    }

    Validate24HrTimeFormat(userInput: string) {
        const regex: RegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        return regex.test(userInput)
    }

    //HTMLTags
    ValidateHTMLTag(userInput: string) {
        const regex: RegExp = /<\/?[\w\s]*>|<.+[\W]>/;
        return regex.test(userInput)
    }

    //JSHandlers
    ValidateInlineJSHandler(userInput: string) {
        const regex: RegExp = /\bon\w+=\S+(?=.*>)/;
        return regex.test(userInput)
    }

    ValidateInlineJSHandlerWithElement(userInput: string) {
        const regex: RegExp = /(?:<[^>]+\s)(on\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/;
        return regex.test(userInput)
    }

    //Slug
    ValidateSlug(userInput: string) {
        const regex: RegExp = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
        return regex.test(userInput)
    }

    //Match Duplicates
    MatchDuplicates(userInput: string) {
        const regex: RegExp = /(\b\w+\b)(?=.*\b\1\b)/;
        return regex.test(userInput)
    }

    //Phone Numbers
    ValidatePhoneNumbers(userInput: string) {
        const regex: RegExp = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
        return regex.test(userInput)
    }

    //File Paths
    ValidateFilePathWithNameAndExtension(userInput: string) {
        const regex: RegExp = /((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/;
        return regex.test(userInput)
    }

    ValidateFilePathWithOptionalNameAndExtension(userInput: string) {
        const regex: RegExp = /^(.+)\/([^/]+)$/;
        return regex.test(userInput)
    }

    ValidateFileNameWithExtension(userInput: string) {
        const regex: RegExp = /^[\w,\s-]+\.[A-Za-z]{3}$/;
        return regex.test(userInput)
    }

} export default RegexValidator;