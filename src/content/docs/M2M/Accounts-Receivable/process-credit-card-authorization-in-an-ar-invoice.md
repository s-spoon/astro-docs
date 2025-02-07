---
title: "**Process Credit Card Authorization in an AR Invoice**"
draft: false
type: Article
---

If you have the credit card feature enabled, you can authorize an unpaid AR invoice for credit card payment even if the sales order (SO) associated with the invoice has not been processed for credit card payment. The following conditions must be met to add credit card details to an unpaid AR invoice:

Your company must have an account with a payment gateway supported by Made2Manage (PayPal, Authorize.Net, or Moneris). 

* You must setup the payment gateway for integration with Made2Manage. 
* A payment gateway must be set in the **Active** status. 
* The logged in user must have the required permissions to create an AR invoice and change its status.
* The logged in user must have the required permissions to add credit card information to the AR invoice.
* Only one credit card transaction can be associated with an AR invoice. Therefore, it is recommended that you enter the complete amount to be paid when processing an AR invoice for credit card authorization. 
* The invoice must be marked for credit card payment before you add the credit card details. 
* You can add credit card details only in an **Unpaid** invoice. 

<br>To add and process credit card information in an unpaid AR invoice

**Important:** Ensure that the status of the invoice is **Unpaid**. For more information on changing the invoice status to **Unpaid**, see Confirm invoices and credit memos.

1. [Select the unpaid invoice.](open-the-invoice.md)

2. Ensure that you are in the **Order Info** tab.

3. In the **Payment/Tax Info** area, perform the following actions:

    a. In the **Pay Type** area, click **Cash**. 

    b. Click **Save** on the **Toolbar**. 

4. On the **Toolbar**, click **More Actions**.

5. Select **More Actions** > **Actions** > **Credit Card Transaction**.
The **Credit Card Transaction** window appears. The **Customer Number**, **Company**, **Invoice Number**, **Invoice Amount**, and the **Paid Amount** fields are automatically populated.

6. Specify the credit card details:
    » To use a credit card already associated with the customer when multiple credit card details have been added for the customer, click the **Card ID** lookup reference in the **Credit Card Details** area and select the card ID of the credit card that you want to use.
<br>The card ID is generated when you add a credit card for a customer in the **Credit Card Information (CCINFO)** window.
<br> If only one credit card is associated with the customer, then the **Card Type**, **Card Number**, **Expiry Month**, and the **Expiry Year** are automatically retrieved from the payment gateway. The customer information (the phone number or the e-mail ID) specified in the **Credit Card Information (CCINFO)** window is also automatically retrieved. If multiple credit cards are associated with the customer, these details are retrieved and displayed when you select the card ID.
    
    » To use a new credit card, perform the following steps:

    a. Select the **New Card** check box. 
    <br>b. To save the details entered in the currently active payment gateway, select the **Save Card** check box. Leave the check box unselected if you want to use the details only once. 
    <br>c. In the **Card Number** field, type the credit card number. 
<br>d. In the **MM** field, type the month that the credit card expires.

    e. In the **YY** field, type the year that the credit card expires. 
   <br>f. In the **CVV** field, specify the card verification detail selected in the **Default Verification Method** area of the **Payment Gateway Setup (CCSETUP)** page, if required. 

    g. In the **Customer Information** area, specify the following details: 


    **First Name**: The first name given on the customer’s credit card. 


     **Last Name**: The last name given on the customer’s credit card. 


    **Street**: The billing address of the credit card.

    **City**: The city associated with the customer’s billing address. 

     **State**: The state associated with the customer’s billing address. 

     **Country**: The country associated with the customer’s billing address. 

**Tip:** Click the **Country** Lookup Reference, and select the required country in the **Lookup For Country** window.


    **Zip**: The zip code associated with the customer’s billing address. 

     **Phone number**: The phone number associated with the customer’s billing address. 
    <br>**Email**: The customer's e-mail address. 

> [!Note]: For the **Moneris** payment gateway, enter only the phone number and the email address. You cannot view the other fields.


7. Click **Process**.

The system validates the specified information and if valid contacts the active payment gateway to process the credit card pre-authorization.


8. If the payment gateway successfully processes the transaction, the message, *Pre-authorization successful* is displayed. If the payment gateway returns an error, the message, *Unable to process pre-authorization. Please check log file for more information.* is displayed.

9. Close the message window.


10. Close the **Customer Invoices & Credit Memo (ARINV)** page.

If the pre-authorization processing of the of the unpaid AR invoice is successful, the authorization token is saved and the AR invoice is displayed in the **Batch Processing - Authorized Payments (CCBATCH)** page for processing the payment by credit card. The status of the AR invoice remains unchanged.
