
angular.module('myModule', ['schemaForm'])
       .controller('FormController', function($scope) {
  $scope.today = new Date();
  $scope.schema = {
      "type": "object",
      "title": "Comment",
      "properties": {
          "loanAmount": {
            "title": "Loan Amount",
            "type": "integer",
            "model": "formData.loanAmount",
            "pattern": "^[5-9]\\d{1}$|^[1-9]\\d{2}$|^[1][0-4]\\d{2}$|^(1500)$",
            "description": "Enter your loan amount",
            "minimum": 50,
            "maximum": 2000,
            "validationMessage": "Please enter a valid value between £50 and £2000"
          },
          "loanDurationMonths": {
            "title": "Number of Months",
            "type": "integer",
            "model": "formData.loanDurationMonths",
            "pattern": "^[5-9]\\d{1}$|^[1-9]\\d{2}$|^[1][0-4]\\d{2}$|^(1500)$",
            "minimum": 1,
            "maximum": 24,
            "validationMessage": "Please enter a valid duration"
          },
          "loanPurpose": {
            "title": "Loan Purpose",
            "type": "string",
            "model": "formData.loanPurpose",
            "description": "Please select a loan purpose",
            "enum": [
              "Utility bill",
              "Cover rent or mortgage",
              "Consolidate debts",
              "Cover a temporary loss of income",
              "Vehicle costs",
              "Special occasion",
              "Household goods eg food",
              "Home improvement",
              "Emergency cash",
              "Living expenses",
              "Other"
            ]
          },
          "title": {
            "title": "Your Title",
            "type": "string",
            "model": "formData.title",
            "description": "Please select a title",
            "enum": [
              "Mr",
              "Mrs",
              "Miss",
              "Ms"
            ]
          },
          "firstName": {
            "title": "First Name",
            "type": "string",
            "model": "formData.firstName",
            "description": "Please enter first name",
            "minlength": 2,
            "maxlength": 25,
            "pattern": "^[a-zA-Z\\s.]{2,25}$",
            "validationMessage": "Please enter between 2 and 25 characters"
          },
          "lastName": {
            "title": "Last Name",
            "type": "string",
            "model": "formData.lastName",
            "description": "Please enter last name",
            "minlength": 2,
            "maxlength": 25,
            "pattern": "^[a-zA-Z\\s]{2,25}$",
            "validationMessage": "Please enter between 2 and 25 characters"
          },
          "dob": {
            "title": "DOB",
            "type": "object",
            "format": "date",
            "model": "formData.dob",            
            "validationMessage": "You need to be aged between 18 and 75 to apply for a loan"
          },
          "maritalStatus": {
            "title": "Marital Status",
            "type": "string",
            "model": "formData.maritalStatus",
            "description": "Please select",
            "enum": [
              "Living with Partner",
              "Divorced",
              "Married",
              "Separated",
              "Single",
              "Widowed",
              "Other"
            ]
          },
          "numberOfDependents": {
            "title": "Number of Dependents",
            "type": "number",
            "model": "formData.numberOfDependents",
            "description": "Please select a number of dependents",
            "minimum": 0,
            "maximum": 9
          },
          "email": {
            "title": "Email",
            "type": "string",
            "model": "formData.email",
            "pattern": "^\\S+@\\S+$",
            "description": "Enter Email Address"
          },
          "homePhone": {
            "title": "Home Phone No.",
            "type": "string",
            "model": "formData.homePhone",
            "pattern": "^(\\+44\\s?[127]\\d{3}|\\(?0[127]\\d{3}\\)?)\\s?\\d{3}\\s?\\d{3}$",
            "description": "Please Enter Number"
          },
          "cellPhone": {
            "title": "Mobile Phone No.",
            "type": "string",
            "model": "formData.cellPhone",
            "pattern": "^(\\+44\\s?7\\d{3}|\\(?07\\d{3}\\)?)\\s?\\d{3}\\s?\\d{3}$",
            "description": "Please Enter Number"
          },
          "consentContact": {
            "type": "array",
            "title": "LoanPig and our 3rd party partners would like to stay in touch with you via email and sms to send you reminders and occasional relevant offers, please tick below if you wish to receive this by",
            "items": {
              "type": "string",
              "enum": [
                "Email",
                "SMS",
                "Phone"
              ]
            }
          },
          "postCodeLookup": {
            "title": "Enter your postcode, then click find",
            "type": "string",
            "model": "qryPostCode",
            "pattern": "^([a-z,A-Z]{1,2}\\d[a-z,A-Z\\d]? ?\\d[a-z,A-Z]{2}|GIR ?0A{2})$"
          },
          "houseNameOrNumber": {
            "title": "House Name/Number",
            "type": "string",
            "model": "formData.houseNameOrNumber",
            "validationMessage": "Please enter House Name or Number"
          },
          "flatNumber": {
            "title": "Flat Number",
            "type": "string",
            "model": "formData.flatNumber"
          },
          "street": {
            "title": "Street",
            "type": "string",
            "model": "formData.street",
            "pattern": "^[a-zA-Z0-9\\s.\\-]{2,50}$",
            "validationMessage": "Please enter a street name between 2 and 50 characters"
          },
          "city": {
            "title": "Town or City",
            "type": "string",
            "model": "formData.city",
            "pattern": "^[a-zA-Z0-9\\s.\\-]{2,50}$",
            "validationMessage": "Please enter a city or town name between 2 and 50 characters"
          },
          "county": {
            "title": "County",
            "type": "string",
            "model": "formData.county",
            "pattern": "^[a-zA-Z0-9\\s.\\-]{2,50}$",
            "validationMessage": "Please enter a city or town name between 2 and 50 characters"
          },
          "postCode": {
            "title": "Postcode",
            "type": "string",
            "model": "formData.postCode",
            "pattern": "^([a-z,A-Z]{1,2}\\d[a-z,A-Z\\d]? ?\\d[a-z,A-Z]{2}|GIR ?0A{2})$",
            "validationMessage": "Please check the format of your postcode"
          },
          "residentialStatus": {
            "title": "Residence Type",
            "type": "string",
            "model": "formData.residentialStatus",
            "description": "Please select",
            "enum": [
              "Renting/Lodging",
              "Council House/Flat",
              "Own Home",
              "Living With Family",
              "Other"
            ]
          },
          "monthsAtAddress": {
            "title": "Months at address",
            "type": "integer",
            "model": "formData.monthsAtAddress",
            "validationMessage": "Please enter a number of months",
            "minimum": 1
          },
          "incomeType": {
            "title": "Income Source",
            "type": "string",
            "model": "formData.incomeType",
            "description": "Please select",
            "validationMessage": "Please select a source of income",
            "enum": [
              "Full time employed",
              "Part time employed",
              "Temporarily employed",
              "Self employed",
              "Unemployed",
              "Pension income",
              "Disability benefit",
              "Student"
            ]
          },
          "workCompanyName": {
            "title": "Employer Name",
            "type": "string",
            "model": "formData.workCompanyName",
            "pattern": "^[-a-zA-Z0-9\\s]{2,99}$",
            "validationMessage": "Please enter an employer name between 2 and 99 characters"
          },
          "workIndustry": {
            "title": "Employment Industry",
            "type": "string",
            "model": "formData.workIndustry",
            "description": "Please select",
            "validationMessage": "Please enter an employment industry",
            "enum": [
              "Accountancy",
              "Administration/Secretarial",
              "Advertising Media",
              "Business Consultancy",
              "Call Centre Operations",
              "Cleaning Services",
              "Computer Services",
              "Construction",
              "Driver",
              "Education",
              "Electricity/Gas/Water",
              "Finance",
              "Health",
              "Hotels/Restaurants",
              "Insurance",
              "Labour",
              "Legal Services",
              "Leisure/Culture",
              "Manager Mid Level",
              "Manager Senior Level",
              "Manufacturing",
              "Military",
              "Mining/Quarrying",
              "Professional",
              "Public Administration",
              "Publishing",
              "Real Estate/Property",
              "Research Development",
              "Retail",
              "Sales And Customer Service",
              "Skilled Trade",
              "Telecoms/Internet",
              "Transportation",
              "Other"
            ]
          },
          "workPhone": {
            "title": "Work Phone",
            "type": "string",
            "model": "formData.workPhone",
            "pattern": "^$|^\\d{10,11}$",
            "validationMessage": "Please leave blank or enter a valid phone number"
          },
          "workTimeAtEmployer": {
            "title": "Months at Employer",
            "type": "string",
            "model": "formData.workTimeAtEmployer",
            "pattern": "^$|^[1-9]([0-9]{0,2})$",
            "validationMessage": "Please enter a number between 1 and 999"
          },
          "workPosition": {
            "title": "Work Position",
            "type": "string",
            "model": "formData.workPosition",
            "pattern": "^$|^[a-zA-Z\\s]{2,50}$",
            "validationMessage": "Please leave blank or enter a job title between 2 and 50 characters"
          },
          "indexOfincomeType": {
            "type": "string",
            "enum": [ "workCompanyName",
            "Part time employed",
            "Temporarily employed",
            "Self employed" ]
          },
          "incomePaymentFrequency": {
            "title": "Income Frequency",
            "type": "string",
            "model": "formData.incomePaymentFrequency",
            "description": "Please select",
            "validationMessage": "Please select an income frequency",
            "enum": [ 
              "Weekly",
              "Every 2 weeks",
              "Twice a month",
              "Every 4 weeks",
              "Specific day of Month",
              "Last day of Month"
            ]
          },
          "incomeNextDate1": {
            "title": "Next Pay Date",
            "type": "object",
            "format": "date",
            "model": "formData.incomeNextDate1"
          },
          "incomeNextDate2": {
            "title": "Following Pay Date",
            "type": "object",
            "format": "date",
            "model": "formData.incomeNextDate2"
          },
          "incomeNetMonthly": {
            "title": "Total Monthly Income",
            "type": "integer",
            "model": "formData.incomeNetMonthly",
            "pattern": "^[0-9]{1,4}$|^[1][0-4][0-9]{3}$|^15000$",
            "validationMessage": "Enter your total monthy income (0-15000)",
            "minimum": 0
          },
          "expenseHousing": {
            "title": "Rent/Mortgage",
            "type": "integer",
            "model": "formData.expenseHousing",
            "pattern": "^[0-9]{1,3}$",
            "validationMessage": "Enter your monthly housing expense eg rent/mortgage payment (0-999)",
            "minimum": 0
          },
          "expenseAllLoans": {
            "title": "Loan Repayments",
            "type": "integer",
            "model": "formData.expenseAllLoans",
            "pattern": "^[0-9]{1,3}$",
            "validationMessage": "Enter your total monthly loan repayments (0-999)",
            "minimum": 0
          },
          "expenseFood": {
            "title": "Food Costs",
            "type": "integer",
            "model": "formData.expenseFood",
            "pattern": "^[0-9]{1,3}$",
            "validationMessage": "Enter your monthly food bills (0-999)",
            "minimum": 0
          },
          "expenseUtilities": {
            "title": "Utility Bills",
            "type": "integer",
            "model": "formData.expenseUtilities",
            "pattern": "^[0-9]{1,3}$",
            "validationMessage": "Enter your total monthly utility bills, eg Gas/Electricity/Water (0-999)",
            "minimum": 0
          },
          "expenseTransport": {
            "title": "Transport Costs",
            "type": "integer",
            "model": "formData.expenseTransport",
            "pattern": "^[0-9]{1,3}$",
            "validationMessage": "Enter your total monthly transport costs including cars, motorbikes or public transport (0-999)",
            "minimum": 0
          },
          "expenseOther": {
            "title": "Other",
            "type": "integer",
            "model": "formData.expenseOther",
            "pattern": "^[0-9]{1,3}$",
            "validationMessage": "Enter any other monthly costs (0-999)",
            "minimum": 0
          },
          "hasGuarantor": {
            "title": "Do you have a guarantor?",
            "type": "boolean",
            "model": "formData.hasGuarantor"
          },
          "consentFinancial": {
            "type": "boolean",
            "title": "Please confirm you have provided accurate financial information and considered potential future income and outgoings in determining your ability to repay.",
            "model": "formData.consentFinancial"
          },
          "bankName": {
            "title": "Bank Name",
            "type": "string",
            "model": "formData.bankName",
            "pattern": "^[a-zA-Z]{2,20}$",
            "validationMessage": "Enter your bank name"
          },
          "bankDebitCardType": {
            "title": "Debit Card Type",
            "type": "string",
            "model": "formData.bankDebitCardType",
            "description": "Please select",
            "validationMessage": "Please select a card type",
            "enum": [ 
              "Switch Maestro",
              "Visa Electron",
              "Visa Delta",
              "Visa Debit",
              "Master Card Debit",
              "No Debit Card"
            ]
          },
          "bankSortCode": {
            "title": "Bank Sort Code",
            "type": "string",
            "model": "formData.bankSortCode",
            "pattern": "^(?!(?:0{6}|00-00-00))(?:\\d{6}|\\d\\d-\\d\\d-\\d\\d)$",
            "validationMessage": "Please enter your bank sort code (6 digits)"
          },
          "bankAccountNumber": {
            "title": "Bank Account Number",
            "type": "string",
            "model": "formData.bankAccountNumber",
            "pattern": "^(\\d){8}$",
            "validationMessage": "Please enter your bank account number, if it has fewer than 8 digits, please enter a zero at the beginning of the number"
          },
          "bankDirectDeposit": {
            "title": "Account Accepts Direct Payments",
            "type": "string",
            "model": "formData.bankDirectDeposit",
            "description": "Please select",
            "validationMessage": "Please select whether your bank can accept direct payments.",
            "enum": [ 
              "No",
              "Yes"
            ]
          },
          "consentCreditSearch": {
            "type": "boolean",
            "title": "In order to process this application, LoanPig and our 3rd party partners may need to perform a credit check and will need to contact you via sms, email or telephone. Unfortunately we will not be able to proceed with your application unless you agree.",
            "model": "formData.consentCreditSearch"
          },
          "consentTerms": {
            "type": "boolean",
            "title": "Please confirm you have read and agree to our <a href='https://www.loanpig.co.uk/terms-conditions/' target='_blank'>Terms & Conditions</a> and <a href='https://www.loanpig.co.uk/privacy-policy/' target='_blank'>Privacy Policy</a>.",
            "model": "formData.consentTerms"
          },
          "optInCreditOffer": {
            "type": "boolean",
            "title": "<strong>FREE* 14 DAY TRIAL WITH UK CREDIT RATING FOR ALL LOAN APPLICATIONS.</strong> Please tick the box if you want to correct your credit score. This will open in a new window and will not affect your loan application but remember to come back for your loan.",
            "model": "optInCreditOffer"
          }
      },
      "required": [
        "loanAmount",
        "loanDurationMonths",
        "loanPurpose",
        "title",
        "firstName",
        "lastName",
        "dob",
        "maritalStatus",
        "numberOfDependents",
        "email",
        "cellPhone",
        "postCodeLookup",
        "houseNameOrNumber",
        "street",
        "city",
        "county",
        "postCode",
        "residentialStatus",
        "monthsAtAddress",
        "incomeType",
        "workCompanyName",
        "workIndustry",
        "workTimeAtEmployer",
        "incomePaymentFrequency",
        "incomeNextDate1",
        "incomeNextDate2",
        "incomeNetMonthly",
        "expenseHousing",
        "expenseAllLoans",
        "expenseFood",
        "expenseUtilities",
        "expenseTransport",
        "expenseOther",
        "bankSortCode",
        "bankAccountNumber",
        "bankDirectDeposit",
        "consentCreditSearch",
        "consentTerms"
      ]
  };

  $scope.form = [
    {
      "type": "help",
      "helpvalue": "<div class=\"alert alert-info\">Step 1: Fill In Personal Details</div>"
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "loanAmount", "loanDurationMonths", "loanPurpose"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "title", "firstName", "lastName"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "key": "dob",
          "type": "date",
          "htmlClass": "col-sm-12"
        },
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "maritalStatus", "numberOfDependents"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "email", "homePhone", "cellPhone"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "consentContact"
          ]
        }
      ]
    },
    {
      "type": "help",
      "helpvalue": "<div class=\"alert alert-info\">Step 2: Your Address</div>"
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "postCodeLookup"
          ]
        },
        {
          "type": "actions",
          "items": [
            { "type": 'button',
              "style": "btn-info",
              "title": "Find Address",
              "show": "(!appForm.postCodeLookup.$pristine && (appForm.postCodeLookup.$error.pattern)) || addressLookupFailed"
            },
            { "type": 'button',
              "style": "btn-info",
              "title": 'Enter Manually',
              "onClick": "addressLookupFailed=true" 
            }
            ]
        },
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "houseNameOrNumber", "flatNumber", "street"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "city", "county", "postCode"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "residentialStatus", "monthsAtAddress"
          ]
        }
      ]
    },
    {
      "type": "help",
      "helpvalue": "<div class=\"alert alert-info\">As you have lived at your current address for less than 3 years, please enter your previous postcode.</div>"
    },
    {
      "type": "help",
      "helpvalue": "<div class=\"alert alert-info\">Step 3: Your Income</div>"
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "incomeType"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "workCompanyName", "workIndustry", "workPosition"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "incomePaymentFrequency"
          ]
        },
        {
          "key": "incomeNextDate1",
          "type": "date",
          "htmlClass": "col-sm-12"
        },
        {
          "key": "incomeNextDate2",
          "type": "date",
          "htmlClass": "col-sm-12"
        }
      ]
    },
    {
      "type": "help",
      "helpvalue": "<div class=\"alert alert-info\">Step 4: Your Expenses</div>"
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "incomeNetMonthly"
          ]
        },
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "expenseHousing", "expenseAllLoans","expenseFood"
          ]
        },
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "expenseUtilities", "expenseTransport","expenseOther"
          ]
        },
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "hasGuarantor"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "consentFinancial"
          ]
        }
      ]
    },
    {
      "type": "help",
      "helpvalue": "<div class=\"alert alert-info\">Step 5: Bank Details & Submit</div>"
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "bankName", "bankDebitCardType"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "bankSortCode","bankAccountNumber", "bankDirectDeposit"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "consentCreditSearch"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "consentTerms"
          ]
        }
      ]
    },
    {
      "type": "section",
      "htmlClass": "row",
      "items": [
        {
          "type": "section",
          "htmlClass": "col-sm-12",
          "items": [
            "optInCreditOffer"
          ]
        }
      ]
    },
    {
      "key": "comment",
      "type": "textarea",
      "placeholder": "Make a comment",
      $parsers: [
        function(value) {
          if (value && value.replace) {
            return value.replace(/(damn|fuck|apple)/,'#!@%&');
          }
          return value;
        }
      ]
    },
    {
      "type": "submit",
      "style": "btn-info",
      "title": "OK"
    }
  ];
  
  $scope.model = {};
});

    
  

