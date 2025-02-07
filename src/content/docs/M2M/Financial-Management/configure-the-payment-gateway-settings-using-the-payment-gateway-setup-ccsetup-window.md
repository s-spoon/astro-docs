---

title: "Configure payment gateway settings using the Payment Gateway Setup (CCSETUP) page"
draft: false


---

Made2Manage allows you to make credit card payments to pay sales orders or outstanding AR invoices. You must purchase the CC Processing optional module to do this. A payment gateway facilitates credit card payments.

Made2Manage supports the following payment gateways:

-   PayPal
-   Authorize.Net
-   Moneris
-   PayTrace
-   Stripe

    **Note**:

    - Only one payment gateway can be active at a time.

    -   If are using **Stripe** or **PayTrace** as your Payment Gateway, you do not have to perform any additional gateway settings in the **Payment Gateway Setup (CCSETUP)** page to determine if you are in the SANDBOX/Testing or LIVE/Production mode. It is controlled by different sign ins that are provided by the Payment Gateway when you set up your account.

To integrate the Made2Manage application with the payment gateway, configure its settings in Made2Manage. Use the **Payment Gateway Setup (CCSETUP)** page.

**To configure the payment gateway settings**

1.  Open the **Payment Gateway Setup (CCSETUP)** page.

    1.  Select **Utilities** *\>* **Company Setup** *\>* **Finance** *\>* **Payment Gateway Setup***.

    Or

    2.  Search for **CCSETUP** or **Payment Gateway Setup** in the **Navigation box** and then select **Payment Gateway Setup**.

       The **Payment Gateway Setup (CCSETUP)** page appears.

2.  Select the gateway that you want to configure:

    1.  On the **Toolbar**, click **Browse**.

    The **Browse For Payment Gateway Setup** window appears.

    2.  Select the row that contains the payment gateway name, and click **Select**.

[!Note]

The **Re-Authorization Days** field displays the re-authorization period of the selec- ted gateway. This is a read-only field and is not editable. The re-authorization period information is retrieved from the selected payment gateway.

3.  To specify the default payment type for the gateway, in the **Default Payment Type** section, click:

    » **Immediate Sale**: To process the credit card payment of a customer immediately.

    » **Pre-Authorization**: To pre-authorize a customer's credit card for upcoming payments.

4.  In the **Default Verification Method** section, to select the card verification method, click:

    » **CVV2**: To use the card verification value.

    » **Street Name**: To use the street name.

    » **Zip Code**: To use the zip code.

5.  In the **Supported Credit Card Types** section, select the appropriate checkboxes to indicate the credit cards supported by your M2M application for the payment gateway.

**Important**: You must select atleast one card type. 

**Note**:

- The card types supported by each payment gateway may vary.

- The selected cards are listed in the Credit Card Transaction window when you add a credit card to either a sales order or AR invoice.

6.  In the **Gateway Credentials** section, enter the **Tenant ID** and the **Secret Key** that you have obtained from the payment gateway. If the payment gateway requires a password, specify the password.

7.  Specify the required additional gateway settings in the grid in the right pane. For more information about the additional settings, see Payment Gateway Setup (CCSETUP).

8.  On the **Toolbar**, click **Save**.

A message, '*Payment Gateway configuration have been modified. Screen will auto refresh in \<nn\> seconds. Do not Refresh.*' appears.

9.  Click **Do not Refresh** if you want to restart Made2Manage later manually.