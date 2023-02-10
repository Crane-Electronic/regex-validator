## Simple Regex Validator
This is a simple regex validator that contains contains common regex patterns. 
## Installation
### Yarn
`yarn add simple-regex-validator`
### NPM
`npm i simple-regex-validator`
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
    validator.ValidateAlphanumericWithoutSpace('Test123') //True
    validator.ValidateAlphanumericWithoutSpace('Test123 Test') //False

    validator.ValidateAlphanumericWithSpace('Test123') //True
    validator.ValidateAlphanumericWithSpace('Test123 Test') //True
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
    validator.ValidateComplexPassword('QWEt0rd1234!') //True

    validator.ValidateModeratePassword('QWEt0rd1234') //True
```