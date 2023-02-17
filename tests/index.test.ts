import RegexValidator from '../index';

describe('ValidateWholeNumber', () => {

    const validator = new RegexValidator();
    test('ValidateWholeNumber_WholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeNumber_LargeWholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '111111111111'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeNumber_DecimalNumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '1.5'
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateWholeNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeNumber_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'Test'
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateWholeNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidateDecimalNumber', () => {
    const validator = new RegexValidator();
    test('ValidateDecimalNumber_DecimalNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1.5'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateDecimalNumber_PiPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '3.14159'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })



    test('ValidateDecimalNumber_WholeNumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '1'
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateDecimalNumber_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'Test'
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('ValidateWholeAndDecimalNumbers', () => {
    const validator = new RegexValidator();
    test('ValidateWholeAndDecimalNumbers_DecimalNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1.5'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeAndDecimalNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeAndDecimalNumbers_WholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeAndDecimalNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeAndDecimalNumbers_PiPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '3.14159'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeAndDecimalNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeAndDecimalNumbers_LargeWholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '111111111111'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeAndDecimalNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeAndDecimalNumbers_LargeDecimalPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '111111111111.111111111'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeAndDecimalNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeAndDecimalNumbers_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'Test'
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateWholeAndDecimalNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('ValidateNegativePositiveWholeAndDecimalNumber', () => {
    const validator = new RegexValidator();
    test('ValidateNegativePositiveWholeAndDecimalNumber_NegativeFractionPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '-6.12/23412.90'
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateNegativePositiveWholeAndDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateNegativePositiveWholeAndDecimalNumber_FractionPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '20.4/10'
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateNegativePositiveWholeAndDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateNegativePositiveWholeAndDecimalNumber_DecimalNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1.5'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateNegativePositiveWholeAndDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateNegativePositiveWholeAndDecimalNumber_WholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateNegativePositiveWholeAndDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateNegativePositiveWholeAndDecimalNumber_PiPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '3.14159'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateNegativePositiveWholeAndDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateNegativePositiveWholeAndDecimalNumber_LargeWholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '111111111111'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateNegativePositiveWholeAndDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateNegativePositiveWholeAndDecimalNumber_LargeDecimalPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '111111111111.111111111'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateNegativePositiveWholeAndDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateNegativePositiveWholeAndDecimalNumber_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'Test'
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateNegativePositiveWholeAndDecimalNumber(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('ValidateWholeDecimalAndFractionNumbers', () => {
    const validator = new RegexValidator();
    test('ValidateWholeDecimalAndFractionNumbers_NegativeFractionPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '-6.12/23'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeDecimalAndFractionNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateWholeDecimalAndFractionNumbers_FractionPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '20.4/10'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeDecimalAndFractionNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateWholeDecimalAndFractionNumbers_DecimalNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1.5'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeDecimalAndFractionNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeDecimalAndFractionNumbers_WholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeDecimalAndFractionNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeDecimalAndFractionNumbers_PiPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '3.14159'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeDecimalAndFractionNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeDecimalAndFractionNumbers_LargeWholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '111111111111'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeDecimalAndFractionNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeDecimalAndFractionNumbers_LargeDecimalPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '111111111111.111111111'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateWholeDecimalAndFractionNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateWholeDecimalAndFractionNumbers_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'Test'
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateWholeDecimalAndFractionNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('ValidateAlphanumericWithoutSpace', () => {
    const validator = new RegexValidator();
    test('ValidateAlphanumericWithoutSpace_StringWithoutSpacePassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'Test';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithoutSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateAlphanumericWithoutSpace_StringWithSpacePassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'Test Test';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithoutSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateAlphanumericWithoutSpace_AlphaNumericStringWithOutSpacePassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'Test1234';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithoutSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateAlphanumericWithoutSpace_AlphaNumericStringWithSpacePassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'Test 1234';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithoutSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateAlphanumericWithoutSpace_LargeWholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '111111111111'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithoutSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateAlphanumericWithoutSpace_LargeDecimalPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '111111111111.111111111'
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithoutSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateAlphanumericWithoutSpace_WholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithoutSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('ValidateAlphanumericWithSpace', () => {
    const validator = new RegexValidator();
    test('ValidateAlphanumericWithSpace_StringWithoutSpacePassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'Test';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateAlphanumericWithSpace_StringWithSpacePassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'Test Test';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateAlphanumericWithSpace_AlphaNumericStringWithOutSpacePassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'Test1234';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateAlphanumericWithSpace_AlphaNumericStringWithSpacePassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'Test 1234';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateAlphanumericWithSpace_LargeWholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '111111111111'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateAlphanumericWithSpace_LargeDecimalPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '111111111111.111111111'
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateAlphanumericWithSpace_WholeNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1'
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateAlphanumericWithSpace(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('ValidateCommonEmail', () => {
    const validator = new RegexValidator();
    test('ValidateCommonEmail_StandardEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'test@email.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateCommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateCommonEmail_EmailWithSubDomainPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'test@email.subdomain.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateCommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateCommonEmail_FirstNameLastNameEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'firstname.lastname@email.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateCommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateCommonEmail_NumberedEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '12345@email.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateCommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateCommonEmail_EmailWithHyphensPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'user-one@email.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateCommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateCommonEmail_UKEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'user-one@email.co.uk';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateCommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateCommonEmail_OrgEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'user-one@email.org';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateCommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateCommonEmail_NonStandardEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'user-one@email.museum';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateCommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateCommonEmail_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notanemail';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateCommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateCommonEmail_NumbersPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '1234';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateCommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateCommonEmail_AlphaNumPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'a1b2c3';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateCommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidateUncommonEmail', () => {
    const validator = new RegexValidator();
    test('ValidateUncommonEmail_StandardEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'test@email.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_EmailWithSubDomainPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'test@email.subdomain.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateUncommonEmail_FirstNameLastNameEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'firstname.lastname@email.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_NumberedEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '12345@email.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_EmailWithHyphensPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'user-one@email.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_UKEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'user-one@email.co.uk';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_OrgEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'user-one@email.org';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_NonStandardEmailPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'user-one@email.museum';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_EmailWithPositiveSymbol_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'firstname+lastname@example.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_EmailWithIPAddress_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'email@123.123.123.123';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_EmailWithIPAddressInBrackets_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'email@[123.123.123.123]';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_EmailWithQuoteSymbols_ReturnsFalse', () => {
        //Arrange
        const testString: string = '"email"@example.com';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notanemail';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_NumbersPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '1234';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUncommonEmail_AlphaNumPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'a1b2c3';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateUncommonEmail(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidateComplexPassword', () => {
    const validator = new RegexValidator();
    test('ValidateComplexPassword_PlainStringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'pass';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateComplexPassword(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateComplexPassword_PlainStringPassedCorrectLength_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'password';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateComplexPassword(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateComplexPassword_StringWithUppercase_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'passWord';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateComplexPassword(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateComplexPassword_StringWithUppercaseAndNumber_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'passWord1234';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateComplexPassword(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateComplexPassword_StringWithUppercaseNumberAndSymbol_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'QWEt0rd1234!';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateComplexPassword(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidateModeratePassword', () => {
    const validator = new RegexValidator();
    test('ValidateModeratePassword_PlainStringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'pass';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateModeratePassword(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateModeratePassword_PlainStringPassedCorrectLength_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'password';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateModeratePassword(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateModeratePassword_StringWithUppercase_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'passWord';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateModeratePassword(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateModeratePassword_StringWithUppercaseAndNumber_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'passWord1234';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateModeratePassword(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateModeratePassword_StringWithUppercaseNumberAndSymbol_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'passWord1234!';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateModeratePassword(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidateUsername', () => {
    const validator = new RegexValidator();
    test('ValidateUsername_UsernameBelowMin_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'us';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateUsername(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUsername_UsernameWithForbiddenCharacter_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'user!';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateUsername(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUsername_UsernameInCorrectFormat_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'username';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUsername(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUsername_UsernameInCorrectFormat_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'username';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUsername(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUsername_UsernameWithUnderscore_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'user_name';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUsername(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateUsername_UsernameWithHyphen_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'user-name';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateUsername(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidateURLWithHTTPS', () => {
    const validator = new RegexValidator();
    test('ValidateURLWithHTTPS_PlainStringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notaurl';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateURLWithHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithHTTPS_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateURLWithHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateURLWithHTTPS_URLWithoutHTTPS_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'www.google.com';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateURLWithHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithHTTPS_IPAddressURL_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'http://www.192.168.0.1';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateURLWithHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithHTTPS_FTPAddress_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'ftp://www.google.com';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateURLWithHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithHTTPS_DeformedHTTPAddress_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'http:// ww.google.com';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateURLWithHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithHTTPS_DeformedHTTPSAddress_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'https:// ww.google.com';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateURLWithHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithHTTPS_GoodHTTPAddress_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'http://www.google.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateURLWithHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithHTTPS_GoodHTTPSAddress_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'https://www.google.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateURLWithHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })


})

describe('ValidateURLWithOptionalHTTPS', () => {
    const validator = new RegexValidator
    test('ValidateURLWithOptionalHTTPS_PlainStringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notaurl';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateURLWithOptionalHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithOptionalHTTPS_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateURLWithOptionalHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithOptionalHTTPS_URLWithoutHTTPS_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'www.google.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateURLWithOptionalHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithOptionalHTTPS_IPAddressURL_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'http://www.192.168.0.1';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateURLWithOptionalHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithOptionalHTTPS_FTPAddress_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'ftp://www.google.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateURLWithOptionalHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithOptionalHTTPS_GoodHTTPAddress_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'http://www.google.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateURLWithOptionalHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateURLWithOptionalHTTPS_GoodHTTPSAddress_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'https://www.google.com';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateURLWithOptionalHTTPS(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('ValidateIPV4Address', () => {
    const validator = new RegexValidator();
    test('ValidateIPV4Address_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notanip';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4Address_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4Address_InvalidFirstOctet_ReturnsFalse', () => {
        //Arrange
        const testString: string = '256.0.0.0';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4Address_InvalidSecondOctet_ReturnsFalse', () => {
        //Arrange
        const testString: string = '0.256.0.0';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4Address_InvalidThirdOctet_ReturnsFalse', () => {
        //Arrange
        const testString: string = '0.0.256.0';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4Address_InvalidFourthOctet_ReturnsFalse', () => {
        //Arrange
        const testString: string = '0.0.0.256';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4Address_IPV6Address_ReturnsFalse', () => {
        //Arrange
        const testString: string = '1200:0000:AB00:1234:0000:2552:7777:1313';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4Address_ValidIPV4Address_ReturnsTrue', () => {
        //Arrange
        const testString: string = '192.168.0.1';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateIPV4Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidateIPV6Address', () => {
    const validator = new RegexValidator();
    test('ValidateIPV6Address_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notanip';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV6Address_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV6Address_InvalidIPV6Passed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '1200:0000:AB00:1234:O000:2552:7777:1313';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV6Address_ValidShortIPV6_ReturnsTrue', () => {
        //Arrange
        const testString: string = '21DA:D3:0:2F3B:2AA:FF:FE28:9C5A';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateIPV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV6Address_ValidLongIPV6_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'FE80:0000:0000:0000:0202:B3FF:FE1E:8329';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateIPV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidateIPV4OrV6Address', () => {
    const validator = new RegexValidator();
    test('ValidateIPV4OrV6Address_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notanip';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4OrV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4OrV6Address_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4OrV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4OrV6Address_InvalidIPV6Passed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '1200:0000:AB00:1234:O000:2552:7777:1313';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4OrV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4OrV6Address_InvalidFirstOctet_ReturnsFalse', () => {
        //Arrange
        const testString: string = '256.0.0.0';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4OrV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4OrV6Address_InvalidSecondOctet_ReturnsFalse', () => {
        //Arrange
        const testString: string = '0.256.0.0';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4OrV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4OrV6Address_InvalidThirdOctet_ReturnsFalse', () => {
        //Arrange
        const testString: string = '0.0.256.0';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4OrV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4OrV6Address_InvalidFourthOctet_ReturnsFalse', () => {
        //Arrange
        const testString: string = '0.0.0.256';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateIPV4OrV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4OrV6Address_ValidShortIPV6_ReturnsTrue', () => {
        //Arrange
        const testString: string = '21DA:D3:0:2F3B:2AA:FF:FE28:9C5A';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateIPV4OrV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4OrV6Address_ValidLongIPV6_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'FE80:0000:0000:0000:0202:B3FF:FE1E:8329';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateIPV4OrV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateIPV4OrV6Address_ValidIPV4Address_ReturnsTrue', () => {
        //Arrange
        const testString: string = '192.168.0.1';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateIPV4OrV6Address(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('ValidateYearMonthDayDate', () => {
    const validator = new RegexValidator();
    test('ValidateYearMonthDayDate_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notadate';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateYearMonthDayDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateYearMonthDayDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_InvalidMonthPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '2002-00-02';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateYearMonthDayDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_MonthIsTooShort_ReturnsFalse', () => {
        //Arrange
        const testString: string = '2002-0-02';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateYearMonthDayDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_MonthIsOutOfRange_ReturnsFalse', () => {
        //Arrange
        const testString: string = '2002-15-02';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateYearMonthDayDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_DayIsInvalid_ReturnsFalse', () => {
        //Arrange
        const testString: string = '2002-05-44';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateYearMonthDayDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_DayIsTooShort_ReturnsFalse', () => {
        //Arrange
        const testString: string = '2002-05-1';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateYearMonthDayDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_DayIsOutOfRange_ReturnsFalse', () => {
        //Arrange
        const testString: string = '2002-05-33';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateYearMonthDayDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_ValidDate_ReturnsTrue', () => {
        //Arrange
        const testString: string = '2002-05-01';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateYearMonthDayDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidateDayMonthYearDate', () => {
    const validator = new RegexValidator();
    test('ValidateDayMonthYearDate_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notadate';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthYearDate_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthYearDate_InvalidMonthPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02/00/2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthYearDate_InvalidMonthPassedUsingDecimal_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02.00.2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthYearDate_InvalidMonthPassedUsingHyphen_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02-00-2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthYearDate_MonthIsOutOfRange_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02/15/2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthYearDate_MonthIsOutOfRangeUsingDecimal_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02.15.2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthYearDate_MonthIsOutOfRangeUsingHyphen_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02-15-2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthYearDate_DayIsInvalid_ReturnsFalse', () => {
        //Arrange
        const testString: string = '44/05/2023';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthYearDate_DayIsInvalidWithDecimal_ReturnsFalse', () => {
        //Arrange
        const testString: string = '44.05.2023';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthYearDate_DayIsInvalidWithHyphen_ReturnsFalse', () => {
        //Arrange
        const testString: string = '44-05-2023';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_DayIsShorthand_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1/05/2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_DayIsShorthandWithHyphen_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1-05-2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_DayIsShorthandWithDecimal_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1.05.2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_CorrectlyFormattedDate_ReturnsTrue', () => {
        //Arrange
        const testString: string = '01/05/2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_CorrectlyFormattedDateWithHyphen_ReturnsTrue', () => {
        //Arrange
        const testString: string = '01-05-2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateYearMonthDayDate_CorrectlyFormattedDateWithDecimal_ReturnsTrue', () => {
        //Arrange
        const testString: string = '01.05.2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidateDayMonthAbvYearDate', () => {
    const validator = new RegexValidator();
    test('ValidateDayMonthAbvYearDate_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notadate';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_InvalidMonthPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02/00/2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_InvalidAbbreviatedMonthPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02/No/2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_InvalidMonthPassedUsingDecimal_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02.00.2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_InvalidAbbreviatedMonthPassedWithDecimal_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02.No.2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_InvalidMonthPassedUsingHyphen_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02-00-2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_InvalidAbbreviatedMonthPassedWithHyphen_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02-No-2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_MonthIsOutOfRange_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02/15/2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_MonthIsOutOfRangeUsingDecimal_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02.15.2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_MonthIsOutOfRangeUsingHyphen_ReturnsFalse', () => {
        //Arrange
        const testString: string = '02-15-2002';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_DayIsInvalid_ReturnsFalse', () => {
        //Arrange
        const testString: string = '44/05/2023';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_DayIsInvalidAbbreviatedMonth_ReturnsFalse', () => {
        //Arrange
        const testString: string = '44/May/2023';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_DayIsInvalidWithDecimal_ReturnsFalse', () => {
        //Arrange
        const testString: string = '44.05.2023';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_DayIsInvalidAbbreviatedMonthWithDecimal_ReturnsFalse', () => {
        //Arrange
        const testString: string = '44.May.2023';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_DayIsInvalidWithHyphen_ReturnsFalse', () => {
        //Arrange
        const testString: string = '44-05-2023';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_DayIsInvalidAbbreviatedMonthWithHyphen_ReturnsFalse', () => {
        //Arrange
        const testString: string = '44.May.2023';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_DayIsShorthand_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1/05/2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_DayIsShorthandWithHyphen_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1-05-2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_DayIsShorthandWithDecimal_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1.05.2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_CorrectlyFormattedDate_ReturnsTrue', () => {
        //Arrange
        const testString: string = '01/05/2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_CorrectlyFormattedDateWithHyphen_ReturnsTrue', () => {
        //Arrange
        const testString: string = '01-05-2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_CorrectlyFormattedDateWithDecimal_ReturnsTrue', () => {
        //Arrange
        const testString: string = '01.05.2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_CorrectlyFormattedDateWithAbbreviatedMonth_ReturnsTrue', () => {
        //Arrange
        const testString: string = '01/Mar/2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_CorrectlyFormattedDateWithAbbreviatedMonthAndDecimal_ReturnsTrue', () => {
        //Arrange
        const testString: string = '01.Apr.2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateDayMonthAbvYearDate_CorrectlyFormattedDateWithAbbreviatedMonthAndHyphen_ReturnsTrue', () => {
        //Arrange
        const testString: string = '01-Oct-2023';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateDayMonthAbvYearDate(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('Validate12hrTimeFormat', () => {
    const validator = new RegexValidator();
    test('Validate12hrTimeFormat_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notatime';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.Validate12hrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('Validate12hrTimeFormat_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.Validate12hrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('Validate12hrTimeFormat_InvalidHour_ReturnsFalse', () => {
        //Arrange
        const testString: string = '00:12';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.Validate12hrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('Validate12hrTimeFormat_InvalidMinutes_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12:65';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.Validate12hrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('Validate12hrTimeFormat_ValidTimeWithLeading0_ReturnsTrue', () => {
        //Arrange
        const testString: string = '01:30';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.Validate12hrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('Validate12hrTimeFormat_ValidTimeWithoutLeading0_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1:30';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.Validate12hrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('Validate24HrTimeFormat', () => {
    const validator = new RegexValidator();
    test('Validate24HrTimeFormat_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notatime';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.Validate24HrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('Validate24HrTimeFormat_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.Validate24HrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('Validate24HrTimeFormat_InvalidHour_ReturnsFalse', () => {
        //Arrange
        const testString: string = '50:12';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.Validate24HrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('Validate24HrTimeFormat_InvalidMinutes_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12:65';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.Validate24HrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('Validate24HrTimeFormat_ValidTimeWithLeading0_ReturnsTrue', () => {
        //Arrange
        const testString: string = '01:30';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.Validate24HrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('Validate24HrTimeFormat_ValidTimeWithoutLeading0_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1:30';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.Validate24HrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('Validate24HrTimeFormat_Valid24HrTime_ReturnsTrue', () => {
        //Arrange
        const testString: string = '13:30';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.Validate24HrTimeFormat(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidateHTMLTag', () => {
    const validator = new RegexValidator();
    test('ValidateHTMLTag_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notatime';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateHTMLTag(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateHTMLTag_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateHTMLTag(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateHTMLTag_ValidHTMLTagWithClass_ReturnsTrue', () => {
        //Arrange
        const testString: string = '<h2 class="example"></h2>';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateHTMLTag(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateHTMLTag_ValidHTMLTagWithOutClass_ReturnsTrue', () => {
        //Arrange
        const testString: string = '<h2></h2>';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateHTMLTag(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('ValidateInlineJSHandler', () => {
    const validator = new RegexValidator();
    test('ValidateInlineJSHandler_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notajshandler';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateInlineJSHandler(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateInlineJSHandler_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateInlineJSHandler(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateInlineJSHandler_JSHandlerOutsideOfTag_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'onload=()';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateInlineJSHandler(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateInlineJSHandler_JSHandlerInsideOfTag_ReturnsTrue', () => {
        //Arrange
        const testString: string = '<img onload=() />';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateInlineJSHandler(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateInlineJSHandler_MultipleJSHandlersInsideOfTag_ReturnsTrue', () => {
        //Arrange
        const testString: string = '<img onload=() onclick=example()/>';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateInlineJSHandler(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('ValidateInlineJSHandlerWithElement', () => {
    const validator = new RegexValidator();
    test('ValidateInlineJSHandlerWithElement_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'notajshandler';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateInlineJSHandlerWithElement(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateInlineJSHandlerWithElement_NumberPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = '12345';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateInlineJSHandlerWithElement(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateInlineJSHandlerWithElement_JSHandlerOutsideOfTag_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'onload=()';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateInlineJSHandlerWithElement(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateInlineJSHandlerWithElement_JSHandlerInsideOfTag_ReturnsTrue', () => {
        //Arrange
        const testString: string = '<img onload=() />';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateInlineJSHandlerWithElement(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateInlineJSHandlerWithElement_MultipleJSHandlersInsideOfTag_ReturnsTrue', () => {
        //Arrange
        const testString: string = '<img onload=() onclick=example()/>';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateInlineJSHandlerWithElement(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('ValidateSlug', () => {
    const validator = new RegexValidator();
    test('ValidateSlug_InvalidSlug_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'slug-';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateSlug(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateSlug_InvalidSlugWithHyphenAtStart_ReturnsFalse', () => {
        //Arrange
        const testString: string = '-slug';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateSlug(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateSlug_InvalidSlugWithMultipleHyphens_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'slug---fail';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateSlug(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateSlug_InvalidSlugWithDollarSign_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'slug-$-fail';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateSlug(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

    test('ValidateSlug_StringPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'slug';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateSlug(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateSlug_ValidSlugPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'slug-slug';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateSlug(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateSlug_ValidSlugWithNumbersPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'slug-slug-123';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateSlug(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
})

describe('MatchDuplicates', () => {
    const validator = new RegexValidator();
    test('MatchDuplicates_StringWithNoDuplicates_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'test';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.MatchDuplicates(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('MatchDuplicates_NumberWithNoDuplicates_ReturnsFalse', () => {
        //Arrange
        const testString: string = '1234';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.MatchDuplicates(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('MatchDuplicates_StringWithDuplicates_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'test test';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.MatchDuplicates(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('MatchDuplicates_NumbersWithDuplicates_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1234 1234';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.MatchDuplicates(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('MatchDuplicates_NumbersWithDuplicatesNotInSeries_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1234 11 1234';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.MatchDuplicates(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('MatchDuplicates_StringWithDuplicatesNotInSeries_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'test no test';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.MatchDuplicates(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})

describe('ValidatePhoneNumbers', () => {
    const validator = new RegexValidator();
    test('ValidatePhoneNumbers_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'test';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidatePhoneNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidatePhoneNumbers_InternationalNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '(+351) 282 43 50 50';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidatePhoneNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidatePhoneNumbers_InternationalNumberPassed_ReturnsTrue', () => {
        //Arrange
        const testString: string = '(+351) 282 43 50 50';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidatePhoneNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidatePhoneNumbers_NumberWithExtension_ReturnsTrue', () => {
        //Arrange
        const testString: string = '1-234-567-8901 x1234';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidatePhoneNumbers(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })



})

describe('ValidateFilePathWithNameAndExtension', () => {
    const validator = new RegexValidator();
    test('ValidateFilePathWithNameAndExtension_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'test';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateFilePathWithNameAndExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateFilePathWithNameAndExtension_FilePathWithoutExtension_ReturnsFalse', () => {
        //Arrange
        const testString: string = '/example/examplefile';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateFilePathWithNameAndExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateFilePathWithNameAndExtension_FilePathWithExtension_ReturnsTrue', () => {
        //Arrange
        const testString: string = '/example/examplefile.zip';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateFilePathWithNameAndExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateFilePathWithNameAndExtension_FilePathHostedOnWebsite_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'https://example.org/file.zip';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateFilePathWithNameAndExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateFilePathWithNameAndExtension_FilePathHostedOnHTTPWebsite_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'http://example.org/file.zip';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateFilePathWithNameAndExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})
describe('ValidateFilePathWithOptionalNameAndExtension', () => {
    const validator = new RegexValidator();
    test('ValidateFilePathWithOptionalNameAndExtension_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'test';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateFilePathWithOptionalNameAndExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateFilePathWithOptionalNameAndExtension_FilePathWithoutExtension_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'c:/example/examplefile';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateFilePathWithOptionalNameAndExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateFilePathWithOptionalNameAndExtension_FilePathHostedOnWebsite_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'https://example.org/file.zip';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateFilePathWithOptionalNameAndExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateFilePathWithOptionalNameAndExtension_FilePathHostedOnHTTPWebsite_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'http://example.org/file.zip';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateFilePathWithOptionalNameAndExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})
describe('ValidateFileNameWithExtension', () => {
    const validator = new RegexValidator();
    test('ValidateFileNameWithExtension_StringPassed_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'test';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateFileNameWithExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateFileNameWithExtension_FilePathWithoutExtension_ReturnsFalse', () => {
        //Arrange
        const testString: string = 'c:/example/examplefile';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateFileNameWithExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateFileNameWithExtension_FilePathWithExtension_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'c:/example/examplefile.jpeg';
        const expectedResponse: boolean = false;
        //Act
        const response: boolean = validator.ValidateFileNameWithExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateFileNameWithExtension_FileIsAJpg_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'file.jpg';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateFileNameWithExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })
    test('ValidateFileNameWithExtension_FileIsAZip_ReturnsTrue', () => {
        //Arrange
        const testString: string = 'file.zip';
        const expectedResponse: boolean = true;
        //Act
        const response: boolean = validator.ValidateFileNameWithExtension(testString);
        //Assert
        expect(response).toBe(expectedResponse);
    })

})












