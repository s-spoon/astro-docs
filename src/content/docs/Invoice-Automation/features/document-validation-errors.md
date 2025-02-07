---
title: "Document Validation Errors"
draft: false
---

## Purchase Invoice Validation Errors

Purchase/Expense Invoices have several validation checks, these:

---
> **The invoice has not been assigned to a facility**

*Expense invoices need to be assigned to a facility before they can be exported*

---
> **Shipping Charges on Purchase Order (x) does not match Invoice (y)**

*The detect shipping charges on the Invoice is different from the value on the imported Purchase Order.*

---
> **No 'Line Details' found on this Invoice**

*No Product lines have been detected.*

---
> **Detected a quantity of 0 for at least one line.**

*A product line has been detected but the quantity was 0.*

---
> **Line Extended Price (x) is out of tolerance (y) by z for Line No. w.**

*The total value for the line (w) does not match the corresponding line on the Purchase Order & is out by more than the configured tolerance value (y)*

---
> **Line Detail Totals (x) do not equal Sub Total (y).**

*The combined total of all the detected product lines (x) is not the same value as the detected Sub Total (y).*

---
> **No 'Line Details' found for Purchase Order (x)**

*The detected & linked Purchase Order does not have any lines*

---
> **Invoice could not be matched to a 'Purchase Order'**

*The Purchase Order Number that was detected is not a valid & active Purchase Order.*

---
> **A 'Purchase Order Number' could not be found on this Invoice.**

*No text was found in the area where the Purchase Order Number is defined.*

---
> **Quantity Invoiced (x) is greater than quantity received (y) for Line No. z.**

*More products are being invoiced than have currently been Received into the connected ERP solution.*

---
> **Invoice Total (x) is out of tolerance (y) by z.**

*The detected Invoice Total does not match that of the Purchase Order & is out by more than the configured tolerance value (y)*

---
> **Invoice Total (x) does not equal Sub Total \+ Tax \+ Shipping Charges - Discount (y).**

*The combined total for the detected Sub Total, Tax, Shipping Charge & Discount (y) does not match the Invoice total (this is an exact match with no tolerance).*

---
> **Invoice Unit Price (x) is out of tolerance (y) by z for Line No. w.**

*The detected Unit Price for product line w is not the same as the Purchase Order & is out by more than the configured tolerance value (y)*

---

> **(x) Line item(s) not found on the Purchase Order.**

*One or more (x) lines detected on the Invoice have not been found on the Purchase Order*

---

> **Line No. (x) does not have a valid Expense GL Account set.**

*The specified line has not had a Expense GL Account manually set & the associated vendor doesn't have a default configured*

---


## Statement Validation Errors

---

> **Date on this statement is not a valid date.**

*The detected date could not be parsed*

---

> **No 'Line Details' found on this Statement.**

*No statement lines have been detected*

---

> **No matching statement line for transaction with Invoice No. x.**

*A line on the statement couldn't be found for an outstanding transaction (x).*

---

> **No Transaction found for Invoice No. x.**

*A transaction couldn't be found for a line on the statement with Invoice Number x.*

---

> **Transaction for Invoice No. x has an outstanding value of y but the Statement Value 0 (Paid).**

*A transaction has been found for the Statement line. However the the transaction has an outstanding value & the Statement is marked as fully paid.*

---

> **Outstanding Transaction value (x) does not match Statement (y).**

*A transaction has been found for the Statement line. However the the transaction & statement values (x, y) are not the same*

---

> **Invoice No. x is overdue (by approximately y days) & has an outstanding balance of z.**

*A transaction has been found for the Statement line. However it has an outstanding balance & is past the detected due date by y days*

---

> **Transaction for Invoice No. x has been marked as paid but the Statement Value outstanding is y.**

*A transaction has been found for the statement line. However it has been marked as fully paid but the statement still have an outstanding balance*

---
