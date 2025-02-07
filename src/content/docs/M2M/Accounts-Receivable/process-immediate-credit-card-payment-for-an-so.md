---
title: "Process immediate credit card payment for an SO"
draft: false
type: Article
---

Made2Manage provides you the option to make an immediate credit card payment for a Sales Order (SO) provided the following conditions are met:

-   Your company must have an account with a payment gateway supported by Made2Manage (PayPal, Authorize.Net, or Moneris).
-   You must setup the payment gateway for integration with Made2Manage.
-   A payment gateway must be set in the **Active** status.
-   The logged in user must have the required permissions to create an SO and change its status.
-   The logged in user must have the required permissions to add credit card inform- ation during SO entry.

**Caution:** Only one credit card transaction can be associated with an SO. You also cannot change the payment type after processing a credit card transaction. Therefore, ensure that you enter the complete amount to be paid when processing an SO for immediate credit card payment.

You can select a credit card added for a customer in the **Credit Card Information (CCINFO)** window. Or, you can add the details of a new credit card while processing the SO for credit card payment. You can also save the new credit card details in the currently active payment gateway.

To process an immediate credit card payment for an SO

1.  Open the required sales order.
2.  In the **Financial Info** tab, select **Payment Type** as **Cash**. The **Pay By Credit Card** check box appears.
3.  Select the **Pay By Credit Card** check box.
4.  On the **Toolbar**, click **Save**.

    The **Credit Card Transaction** button is enabled.

5.  On the **Toolbar**, click **More Actions**.
6.  Select **More Actions** > **Actions** > **Credit Card Transaction**.

The **Sales Order Credit Card Transaction** window appears. The **Customer Number**, **Company**, **SO Number**, **SO Total Amount**, and the **Paid Amount** fields are automatically populated.

1.  Ensure that the **Payment Type** is **Immediate Sale**.



1.  Specify the credit card details:

    » To use a credit card already associated with the customer when mul- tiple credit card details have been added for the customer, click the **Card ID** lookup reference button in the **Credit Card Details** area and select the card ID of the credit card that you want to use.

    » If only one credit card is associated with the customer, then the **Card Type**, **Card Number**, **Expiry Month**, and the **Expiry Year** are automatically retrieved from the payment gateway. The cus- tomer information (the phone number or the email ID) specified in the **Credit Card Information (CCINFO)** window is also auto- matically retrieved. If multiple credit cards are associated with the customer, these details are retrieved and displayed when you select the card ID.

    » To use a new credit card, perform the following steps:

    1.  Select the **New Card** check box.
    2.  To save the details entered in the currently active payment gateway, select the **Save Card** check box. Leave the check box unselected if you want to use the details only once.
    3.  In the **Card Number** field, type the credit card number.
    4.  In the **YY** field, type the year that the credit card expires.
    5.  In the **MM** field, type the month that the credit card expires.
    6.  In the **CVV** field, specify the card verification detail selected in the **Default Verification Method** area of the **Payment Gateway Setup (CCSETUP)** page, if required.
    7.  In the **Customer Information** area, specify the following details:

        **First Name**: The first name given on the cus- tomer’s credit card.

        **Last Name**: The last name given on the cus- tomer’s credit card.

        **Street**: The billing address of the credit card.

        **City**: The city associated with the customer’s billing address.

        **State**: The state associated with the customer’s billing address.

        **Country**: The country associated with the cus- tomer’s billing address.



        **Zip**: The zip code associated with the customer’s billing address.

        **Phone number**: The phone number associated with the customer’s billing address.

        **Email**: The customer's email address.



1.  Click **Process**.

    The system validates the specified information and if valid, contacts the active payment gateway to process the credit card payment.

2.  If the payment gateway successfully processes the transaction, the message, *Immediate Sale successful* is displayed. If the payment gateway returns an error, the message, *Unable to process immediate sale. Please check log file for more information.* is displayed.
3.  Click **Close** to close the message window.
4.  Close the **Sales Order Credit Card Transaction** window.

    When approval is received from the payment gateway, the status of the SO is changed to **Open**. A prepayment invoice is created for the paid amount with the status as **Unpaid** and can be viewed in the **Customer Invoices & Credit Memo (ARINV)** page. A prepayment cash receipt with the **Payment Method** as **Credit Card** and status as **Paid** is also created and can be viewed in the **Cash Receipts (CASH)** page. Normal postings for the prepayment cash receipt occur.