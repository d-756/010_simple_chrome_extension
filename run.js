window.addEventListener ("load", myMain, false);
function myMain (evt) {
  var body = document.body; 
  var html = document.documentElement;
  var footer = $("#footer");

  setTimeout(() => {
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    console.log("-----------------docuement", height);
    window.scrollBy(0, 10994);
  }, 2000);


  console.log("**************");
  /* Personal Information */

  // initialize variables
  var personalInformation = {};
  var creditReportDate = {};
  var name = {};
  var alsoKnownAs = {};
  var former = {};
  var dateOfBirth = {};
  var currentAddress = {};
  var previousAddress = {};
  var employers = {};

  // Credit report date
  var creditTransUnion = $(".rpt_content_table").eq(1).find("tr.rowAlt").eq(0).find("td.info").eq(0).find("ng-repeat").html().trim();
  var creditExperian = $(".rpt_content_table").eq(1).find("tr.rowAlt").eq(0).find("td.info").eq(1).find("ng-repeat").html().trim();
  var creditEquifax = $(".rpt_content_table").eq(1).find("tr.rowAlt").eq(0).find("td.info").eq(2).find("ng-repeat").html().trim();
  creditReportDate.TransUnion = creditTransUnion;
  creditReportDate.Experian = creditExperian;
  creditReportDate.Equifax = creditEquifax;

  // Name
  var nameTransUnion = $(".rpt_content_table").eq(1).find("tr").eq(2).find("td").eq(1).find("ng-if").eq(0).html() + $(".rpt_content_table").eq(1).find("tr").eq(2).find("td").eq(1).find("ng-if").eq(1).html();
  var nameExperian = $(".rpt_content_table").eq(1).find("tr").eq(2).find("td").eq(2).find("ng-if").eq(0).html() + $(".rpt_content_table").eq(1).find("tr").eq(2).find("td").eq(2).find("ng-if").eq(1).html();
  var nameEquifax = $(".rpt_content_table").eq(1).find("tr").eq(2).find("td").eq(3).find("ng-if").eq(0).html() + $(".rpt_content_table").eq(1).find("tr").eq(2).find("td").eq(3).find("ng-if").eq(1).html();
  name.TransUnion = nameTransUnion;
  name.Experian = nameExperian;
  name.Equifax = nameEquifax;

  // Also Known As
  var knownAsTransUnion = $(".rpt_content_table").eq(1).find("tr").eq(3).find("td").eq(1).find("ng").html();
  var knownAsExperian = $(".rpt_content_table").eq(1).find("tr").eq(3).find("td").eq(2).find("ng").html();
  var knownAsEquifax = $(".rpt_content_table").eq(1).find("tr").eq(3).find("td").eq(3).find("ng").html();
  alsoKnownAs.TransUnion = knownAsTransUnion;
  alsoKnownAs.Experian = knownAsExperian;
  alsoKnownAs.Equifax = knownAsEquifax;

  // Former
  var formerTransUnion = $(".rpt_content_table").eq(1).find("tr").eq(4).find("td").eq(1).find("ng").html();
  var formerExperian = $(".rpt_content_table").eq(1).find("tr").eq(4).find("td").eq(2).find("ng").html();
  var formerEquifax = $(".rpt_content_table").eq(1).find("tr").eq(4).find("td").eq(3).find("ng").html();
  former.TransUnion = formerTransUnion;
  former.Experian = formerExperian;
  former.Equifax = formerEquifax;

  // Date of Birth
  var dateBirthTransUnion = $(".rpt_content_table").eq(1).find("tr").eq(5).find("td").eq(1).find("ng-repeat div.ng-binding").html().trim();
  var dateBirthExperian = $(".rpt_content_table").eq(1).find("tr").eq(5).find("td").eq(2).find("ng-repeat div.ng-binding").html().trim();
  var dateBirthEquifax = $(".rpt_content_table").eq(1).find("tr").eq(5).find("td").eq(3).find("ng-repeat div.ng-binding").html().trim();

  dateOfBirth.TransUnion = dateBirthTransUnion;
  dateOfBirth.Experian = dateBirthExperian;
  dateOfBirth.Equifax = dateBirthEquifax;

  // Current Address(es)
  var currentAddressTransUnion = $(".rpt_content_table").eq(1).find("tr").eq(6).find("td").eq(1).find("ng-repeat ng-include").find("ng-if").eq(0).text()
                               + $(".rpt_content_table").eq(1).find("tr").eq(6).find("td").eq(1).find("ng-repeat ng-include").find("ng-if").eq(1).text()
                               + $(".rpt_content_table").eq(1).find("tr").eq(6).find("td").eq(1).find("ng-repeat ng-include").find("ng-if").eq(2).text();
  var currentAddressExperian =  $(".rpt_content_table").eq(1).find("tr").eq(6).find("td").eq(2).find("ng-repeat ng-include").find("ng-if").eq(0).text()
                              + $(".rpt_content_table").eq(1).find("tr").eq(6).find("td").eq(2).find("ng-repeat ng-include").find("ng-if").eq(1).text()
                              + $(".rpt_content_table").eq(1).find("tr").eq(6).find("td").eq(2).find("ng-repeat ng-include").find("ng-if").eq(2).text()
                              + $(".rpt_content_table").eq(1).find("tr").eq(6).find("td").eq(2).find("ng-repeat div.ng-binding").text();
  var currentAddressEquifax = $(".rpt_content_table").eq(1).find("tr").eq(6).find("td").eq(3).find("ng-repeat ng-include").find("ng-if").eq(0).text()
                            + $(".rpt_content_table").eq(1).find("tr").eq(6).find("td").eq(3).find("ng-repeat ng-include").find("ng-if").eq(1).text()
                            + $(".rpt_content_table").eq(1).find("tr").eq(6).find("td").eq(3).find("ng-repeat ng-include").find("ng-if").eq(2).text();
  currentAddress.TransUnion = currentAddressTransUnion;
  currentAddress.Experian = currentAddressExperian;
  currentAddress.Equifax = currentAddressEquifax;

  // Previous Address(es)
  var previousAddressTransUnion = $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(1).find("ng-repeat ng-include").find("ng-if").eq(0).text()
                                + $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(1).find("ng-repeat ng-include").find("ng-if").eq(1).text()
                                + $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(1).find("ng-repeat ng-include").find("ng-if").eq(2).text();
  var previousAddressExperian = $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(2).find("ng-repeat").eq(0).find("ng-include").find("ng-if").eq(0).text()
                              + $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(2).find("ng-repeat").eq(0).find("ng-include").find("ng-if").eq(1).text()
                              + $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(2).find("ng-repeat").eq(0).find("ng-include").find("ng-if").eq(2).text()
                              + $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(2).find("ng-repeat").eq(0).find("div.ng-binding").text()
                              + $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(2).find("ng-repeat").eq(1).find("ng-include").find("ng-if").eq(0).text()
                              + $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(2).find("ng-repeat").eq(1).find("ng-include").find("ng-if").eq(1).text()
                              + $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(2).find("ng-repeat").eq(1).find("ng-include").find("ng-if").eq(2).text()
                              + $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(2).find("ng-repeat").eq(1).find("div.ng-binding").text();
  var previousAddressEquifax = $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(3).find("ng-repeat ng-include").find("ng-if").eq(0).text()
                             + $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(3).find("ng-repeat ng-include").find("ng-if").eq(1).text()
                             + $(".rpt_content_table").eq(1).find("tr").eq(7).find("td").eq(3).find("ng-repeat ng-include").find("ng-if").eq(2).text();
  previousAddress.TransUnion = previousAddressTransUnion;
  previousAddress.Experian = previousAddressExperian;
  previousAddress.Equifax = previousAddressEquifax;

  // Employers
  var employersTransUnion = $(".rpt_content_table").eq(1).find("tr").eq(8).find("td").eq(1).find("ng").text();
  var employersExperian   = $(".rpt_content_table").eq(1).find("tr").eq(8).find("td").eq(2).find("ng-repeat ng-if").text();
  var employersEquifax    = $(".rpt_content_table").eq(1).find("tr").eq(8).find("td").eq(3).find("ng").text();

  employers.TransUnion = employersTransUnion;
  employers.Experian = employersExperian;
  employers.Equifax = employersEquifax;

  // Personal Information Object
  personalInformation.CreditReportDate = creditReportDate;
  personalInformation.Name = name;
  personalInformation.AlsoKnownAs = alsoKnownAs;
  personalInformation.Former = former;
  personalInformation.DateOfBirth = dateOfBirth;
  personalInformation.CurrentAddress = currentAddress;
  personalInformation.PreviousAddress = previousAddress;
  personalInformation.Employers = employers;
  personalInformation = { 
    "PersonalInformation" : personalInformation
  }

  console.log("Personal Information Object: ", personalInformation);

  /* Account History */

  // initialize variables
  var accountHistory = [];

  var accountHistoryItem = {};
  var creditorName = "";
  var accountNumber = {};
  var accountType = {};
  var accountTypeDetail = {};
  var bureauCode = {};
  var accountStatus = {};
  var monthlyPayment = {};
  var dateOpened = {};
  var balance = {};
  var noOfMonthsTerms = {};
  var highCredit = {};
  var creditLimit = {};
  var pastDue = {};
  var paymentStatus = {};
  var lastReported = {};
  var comments = {};
  var dateLastActive = {};
  var dateOfLastPayment = {};

  setTimeout(function(){
    $("div.rpt_content_wrapper").eq(5).find("div").eq(1).find("address-history").children().children().each(function(index){
      // Creditor Name
      accountHistoryItem.CreditorName = ($(this).find("div.sub_header").text()).trim();

      // Account Number
      accountNumber.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(1).find("td").eq(1).find("ng-repeat").text().trim();
      accountNumber.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(1).find("td").eq(2).find("ng-repeat").text().trim();
      accountNumber.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(1).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.AccountNumber = accountNumber;

      // Account Type
      accountType.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(2).find("td").eq(1).find("ng-repeat").text().trim();
      accountType.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(2).find("td").eq(2).find("ng-repeat").text().trim();
      accountType.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(2).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.AccountType = accountType;

      // Account Type - Detail
      accountTypeDetail.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(3).find("td").eq(1).find("ng-repeat ng").text().trim();
      accountTypeDetail.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(3).find("td").eq(2).find("ng-repeat ng").text().trim();
      accountTypeDetail.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(3).find("td").eq(3).find("ng-repeat ng").text().trim();
      accountHistoryItem.AccountTypeDetail = accountTypeDetail;

      // Bureau Code
      bureauCode.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(4).find("td").eq(1).find("ng-repeat").text().trim();
      bureauCode.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(4).find("td").eq(2).find("ng-repeat").text().trim();
      bureauCode.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(4).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.BureauCode = bureauCode;

      // Acccount Status
      accountStatus.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(5).find("td").eq(1).find("ng-repeat").text().trim();
      accountStatus.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(5).find("td").eq(2).find("ng-repeat").text().trim();
      accountStatus.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(5).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.AccountStatus = accountStatus;

      // Monthly Payment
      monthlyPayment.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(6).find("td").eq(1).find("ng-repeat").text().trim();
      monthlyPayment.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(6).find("td").eq(2).find("ng-repeat").text().trim();
      monthlyPayment.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(6).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.MonthlyPayment = monthlyPayment;

      // Date Opended
      dateOpened.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(7).find("td").eq(1).find("ng-repeat").text().trim();
      dateOpened.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(7).find("td").eq(2).find("ng-repeat").text().trim();
      dateOpened.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(7).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.DateOpened = dateOpened;

      // Balance
      balance.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(8).find("td").eq(1).find("ng-repeat").text().trim();
      balance.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(8).find("td").eq(2).find("ng-repeat").text().trim();
      balance.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(8).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.Balance = balance;

      // No. of Months (terms)
      noOfMonthsTerms.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(9).find("td").eq(1).find("ng-repeat").text().trim();
      noOfMonthsTerms.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(9).find("td").eq(2).find("ng-repeat").text().trim();
      noOfMonthsTerms.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(9).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.NoOfMonths = noOfMonthsTerms;

      // High Credit
      highCredit.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(10).find("td").eq(1).find("ng-repeat").text().trim();
      highCredit.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(10).find("td").eq(2).find("ng-repeat").text().trim();
      highCredit.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(10).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.HighCredit = highCredit;

      // Credit Limit
      creditLimit.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(11).find("td").eq(1).find("ng-repeat").text().trim();
      creditLimit.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(11).find("td").eq(2).find("ng-repeat").text().trim();
      creditLimit.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(11).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.CreditLimit = creditLimit;

      // Past Due
      pastDue.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(12).find("td").eq(1).find("ng-repeat").text().trim();
      pastDue.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(12).find("td").eq(2).find("ng-repeat").text().trim();
      pastDue.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(12).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.PastDue = pastDue;

      // Payment Status
      paymentStatus.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(13).find("td").eq(1).find("ng-repeat").text().trim();
      paymentStatus.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(13).find("td").eq(2).find("ng-repeat").text().trim();
      paymentStatus.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(13).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.PaymentStatus = paymentStatus;

      // Last Reported
      lastReported.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(14).find("td").eq(1).find("ng-repeat").text().trim();
      lastReported.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(14).find("td").eq(2).find("ng-repeat").text().trim();
      lastReported.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(14).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.LastReported = lastReported;

      // Comments
      comments.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(15).find("td").eq(1).find("ng-repeat").text().trim();
      comments.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(15).find("td").eq(2).find("ng-repeat").text().trim();
      comments.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(15).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.Comments = comments;

      // Date Last Active
      dateLastActive.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(16).find("td").eq(1).find("ng-repeat").text().trim();
      dateLastActive.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(16).find("td").eq(2).find("ng-repeat").text().trim();
      dateLastActive.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(16).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.DateLastActive = dateLastActive;

      // Date of Last Payment
      dateOfLastPayment.TransUnion = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(16).find("td").eq(1).find("ng-repeat").text().trim();
      dateOfLastPayment.Experian   = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(16).find("td").eq(2).find("ng-repeat").text().trim();
      dateOfLastPayment.Equifax    = $(this).find("table.rpt_content_table.rpt_content_header").find("tr").eq(16).find("td").eq(3).find("ng-repeat").text().trim();
      accountHistoryItem.DateOfLastPayment = dateOfLastPayment;

      var twoYearPaymentHistory = [];
      var keys = ['Month', 'Year', 'TransUnion', 'Experian', 'Equifax'];
      $(this).find("table.rpt_content_table.addr_hsrty").find("tr").each(function(i){
        $(this).find("td").each(function(j){
          if(j !== 0) {
            twoYearPaymentHistory[j] = twoYearPaymentHistory[j] || {};
            if (($(this).text()).trim() != "")
              twoYearPaymentHistory[j][keys[i]] = $(this).text().trim();
            else
              twoYearPaymentHistory[j][keys[i]] = "NoData";
          }
        });
      });
      accountHistoryItem.TwoYearPaymentHistory = twoYearPaymentHistory;

      accountHistory.push(accountHistoryItem);

      accountHistoryItem = {};
      creditorName = "";
      accountNumber = {};
      accountType = {};
      accountTypeDetail = {};
      bureauCode = {};
      accountStatus = {};
      monthlyPayment = {};
      dateOpened = {};
      balance = {};
      noOfMonthsTerms = {};
      highCredit = {};
      creditLimit = {};
      pastDue = {};
      paymentStatus = {};
      lastReported = {};
      comments = {};
      dateLastActive = {};
      dateOfLastPayment = {};
    });
    accountHistory = {
      Accounts: accountHistory
    }
    console.log("Account History: ", accountHistory);
  }, 800);
}