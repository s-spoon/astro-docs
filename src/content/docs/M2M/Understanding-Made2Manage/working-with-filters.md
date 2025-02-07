---

title: "Working with filters in Reports"
draft: false
type: Article

---

A filter is a logical statement that tells Made2Manage what information to retrive.

**A simple filter is,**

**Apmast.fcinvoice >= 100**

which means, "In the Accounts Payable master table, invoice numbers that are 100 or higher." This filter excludes invoices with numbers below 100 from the report.

You can also use Visual FoxPro functions in your expression.

**For example,**

**SUBSTRC(UPPER(Apmast.fccompany),1,3) = "IND"**

which means, "In the Accounts Payable master table, select companies whose names begin with the letters IND." This filter uses the UPPER() function to convert company names to all uppercase, and then extracts the first three characters with the SUBSTRC() function. As a **Indiana Fan Co.** and **IND Box Mfg, Inc.**, get in, but Windy City Pipe does not.

> [!TIP] For more information about functions, search the index of Visual FoxPro Help.

​