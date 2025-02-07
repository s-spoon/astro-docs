---

title: "Reasons why the cash account may appear out of balance"
draft: false


---

-   Manual journal entries posted before the statement end date do not appear on the report.

-   The functional and transactional currencies use different decimal places. To make the currencies compatible, Made2Manage rounds the currency with the greater number of values to the right of the decimal. A process that may cause a slight variation in the calculation of the converted amount. For example, if one of your currencies uses four digits to the right of the decimal point, Made2Manage rounds it to two digits to the right of the decimal point.

-   Conversion factors change between the date of the transaction and the statement date. Made2Manage converts the cash account balance to the checking currency and the ending balance amount to the functional currency using the conversion factor that was current on the statement date. Made2Manage converts other amounts using the conversion factor that was current on the transaction date.
