## Simple Regex Validator
This is a simple regex validator that contains contains common regex patterns. 
## Installation
### Yarn
`yarn add simple-regex-validator`
### NPM
`npm i simple-regex-validator`
## Unit Tests Passing?
![Jest Workflow](https://github.com/Crane-Electronic/regex-validator/actions/workflows/main.yml/badge.svg)
## Demo Website
[Demo](https://main.d1v0mei09mjabl.amplifyapp.com/)
## Basic Usage
```
    import RegexValidator from 'simple-regex-validator';
    const validator = new RegexValidator();
    validator.ValidateCommonEmail('test@email.com');
```
Note: All values must be passed as a string to the validator.
## Number Regex 
There a multiple regex patterns for matching numbers.

```
    validator.ValidateWholeNumber('1'); //True

    validator.ValidateDecimalNumber('1.5'); //True

    validator.ValidateWholeAndDecimalNumbers('1.5'); //True
    validator.ValidateWholeAndDecimalNumbers('1'); //True

    validator.ValidateNegativePositiveWholeAndDecimalNumber('1'); //True
    validator.ValidateNegativePositiveWholeAndDecimalNumber('1.5'); //True

    validator.ValidateWholeDecimalAndFractionNumbers('1'); //True
    validator.ValidateWholeDecimalAndFractionNumbers('-6.12/23'); //True
    validator.ValidateWholeDecimalAndFractionNumbers('20.4/10'); //True
```

## Alphanumeric
Two patterns for validating alphanumeric strings, one with a space and one without.

```
    validator.ValidateAlphanumericWithoutSpace('Test123'); //True
    validator.ValidateAlphanumericWithoutSpace('Test123 Test'); //False

    validator.ValidateAlphanumericWithSpace('Test123'); //True
    validator.ValidateAlphanumericWithSpace('Test123 Test'); //True
```

## Emails
Two patterns for validating emails, one that is simple and quick and another that can catch more uncommon emails.

```
    validator.ValidateCommonEmail('test@email.subdomain.com'); //True

    validator.ValidateUncommonEmail('test@email.subdomain.com'); //True
```

## Passwords
Two patterns for passwords, one complex (8 Characters, Uppercase, Numbers and one symbol), and one moderate (8 Characters, Uppercase with numbers).

```
    validator.ValidateComplexPassword('QWEt0rd1234!'); //True

    validator.ValidateModeratePassword('QWEt0rd1234'); //True
```

## Username
There is one pattern to match usernames between 3 and 16 characters long with only A-Z, 0-9 and _- allowed.

```
    validator.ValidateUsername('Test-User_123'); // True
```

## URLs
There are two pattern to match URLs, a URL with HTTPS/HTTP and one with optional HTTPS/HTTP.

```
    validator.ValidateURLWithHTTPS('http://www.google.com'); // True
    validator.ValidateURLWithHTTPS('https://www.google.com'); // True

    validator.ValidateURLWithOptionalHTTPS('www.google.com'); // True
```

## IP Addresses
Three patterns to match IP Addresses, one that will match IPv4, one that will match IPv6 and one that can match either.

```
    validator.ValidateIPV4Address('192.168.0.1'); // True

    validator.ValidateIPV6Address('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A'); // True
    validator.ValidateIPV6Address('FE80:0000:0000:0000:0202:B3FF:FE1E:8329'); // True

    validator.ValidateIPV4OrV6Address('192.168.0.1'); // True
    validator.ValidateIPV4OrV6Address('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A'); // True
    validator.ValidateIPV4OrV6Address('FE80:0000:0000:0000:0202:B3FF:FE1E:8329'); // True
```

## Dates
Three patterns to match dates. YYYY-MM-DD DD-MM-YYYY and DD-MON-YYYY
```
    validator.ValidateYearMonthDayDate('2002-05-01'); //True

    validator.ValidateDayMonthYearDate('1-05-2023'); //True
    validator.ValidateDayMonthYearDate('1.05.2023'); //True
    validator.ValidateDayMonthYearDate('1/05/2023'); //True
    validator.ValidateDayMonthYearDate('01/05/2023'); //True

    validator.ValidateDayMonthAbvYearDate('1-05-2023'); //True
    validator.ValidateDayMonthAbvYearDate('1.05.2023'); //True
    validator.ValidateDayMonthAbvYearDate('1/05/2023'); //True
    validator.ValidateDayMonthAbvYearDate('01/05/2023'); //True
    validator.ValidateDayMonthAbvYearDate('01-Oct-2023'); //True
    validator.ValidateDayMonthAbvYearDate('01/Oct/2023'); //True
    validator.ValidateDayMonthAbvYearDate('01.Oct.2023'); //True
```

## Time
Two patterns for time, one for 12hr the other for 24hr.
```
    validator.Validate12hrTimeFormat('1:30'); //True
    validator.Validate12hrTimeFormat('01:30'); //True

    validator.Validate24HrTimeFormat('1:30'); //True
    validator.Validate24HrTimeFormat('01:30'); //True
    validator.Validate24HrTimeFormat('13:30'); //True
```

## HTML Tags
One pattern for HTML tags. 
```
    validator.ValidateHTMLTag('<h2 class="example"></h2>'); //True
    validator.ValidateHTMLTag('<h2></h2>'); //True 
```

## JS Handlers
One pattern for an inline handler and one for a handler with an element.
```
    validator.ValidateInlineJSHandler('<img onload=() />'); //True
    validator.ValidateInlineJSHandler('<img onload=() onclick=example()/>'); //True

    validator.ValidateInlineJSHandlerWithElement('<img onload=() />'); //True
    validator.ValidateInlineJSHandlerWithElement('<img onload=() onclick=example()/>'); //True
```

## Slugs 
One pattern to match slugs. 
```
    validator.ValidateSlug('slug'); //True
    validator.ValidateSlug('slug-slug'); //True
    validator.ValidateSlug('slug-slug-123'); //True
```

## Match Duplicates
A pattern to match repeated words or patterns within a string.
```
    validator.MatchDuplicates('test test'); //True
    validator.MatchDuplicates('test no test'); //True
    validator.MatchDuplicates('1234 1234'); //True
    validator.MatchDuplicates('1234 11 1234'); //True
```

## Phone Numbers
A pattern to match phone numbers with country code and extension options. 
```
    validator.ValidatePhoneNumbers('(+351) 282 43 50 50'); //True
    validator.ValidatePhoneNumbers('1-234-567-8901 x1234'); //True 
    validator.ValidatePhoneNumbers('1-234-567-8901 ext1234'); //True 
    validator.ValidatePhoneNumbers('1-234-567-8901 extension1234'); //True 
```

## File Paths
Multiple patterns to match file paths with and without extensions and file names with extensions.
```
    validator.ValidateFilePathWithNameAndExtension('https://example.org/file.zip'); //True
    validator.ValidateFilePathWithNameAndExtension('http://example.org/file.zip'); //True
    validator.ValidateFilePathWithNameAndExtension('/example/examplefile.zip'); //True

    validator.ValidateFilePathWithOptionalNameAndExtension('https://example.org/file.zip'); //True
    validator.ValidateFilePathWithOptionalNameAndExtension('http://example.org/file.zip'); //True
    validator.ValidateFilePathWithOptionalNameAndExtension('/example/examplefile.zip'); //True
    validator.ValidateFilePathWithOptionalNameAndExtension('/example/examplefile'); //True

    validator.ValidateFileNameWithExtension('/example/examplefile.zip'); //False
    validator.ValidateFileNameWithExtension('/example/examplefile'); //False
    validator.ValidateFileNameWithExtension('file.jpg'); //True
    validator.ValidateFileNameWithExtension('file.zip'); //True
```