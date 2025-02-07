---

title: "Understanding filters in Reports"
draft: false
type: Article

---

A filter is a logical statement that tells Made2Manage what information to get.

**A simple filter is,**

**Apmast.fcinvoice >= 100**

which means, "In the Accounts Payable master table, invoice numbers that are 100 or higher." This filter prevents invoices with numbers less than 100 from appearing in the report.

You can also use certain Visual FoxPro functions in your expression.

**For example,**

**SUBSTRC(UPPER(Apmast.fccompany),1,3) = "IND"**

which means, "In the Accounts Payable master table, companies whose names begin with the letters ind." This filter uses the UPPER() function to convert company names to all uppercase, and then applies the SUBSTRC() function to the result to return the name's first three characters. So **Indiana Fan Co.** and **IND Box Mfg, Inc.**, get in, but Windy City Pipe does not.

> [!TIP]For more information about functions, search the index of Visual FoxPro Help.

​