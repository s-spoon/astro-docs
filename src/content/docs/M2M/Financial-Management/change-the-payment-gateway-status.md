---

title: "Change payment gateway status"
draft: false


---

Made2Manage supports the following payment gateways:

-   PayPal
-   Authorize.Net
-   Moneris
-   PayTrace
-   Stripe

    **Note**:

    - Only one payment gateway can be active at a time.

    -   If are using **Stripe** or **PayTrace** as your Payment Gateway, you do not have to perform any additional gateway settings in the **Payment Gateway Setup (CCSETUP)** page to determine if you are in the SANDBOX/Testing or LIVE/Production mode. It is controlled by different sign-ins that are provided by the Payment Gateway when you set up your account.

The mode in which you are currently transacting with the payment gateway account determines if actual transactions are done or not. The following modes are available in Made2Manage:

-   **SANDBOX**: Allows you to test your connection to the payment gateway without actually authorizing or charging real credit cards or bank accounts.

-   **LIVE**: Enables you to work with live accounts containing real money.

Use the **Payment Gateway Setup (CCSETUP)** page to change the payment gateway status.

**To change the payment gateway status**

1.  Open the **Payment Gateway Setup (CCSETUP)** page.

    1.  Select **Utilities** *\>* **Company Setup** *\>* **Finance** *\>* **Payment Gateway Setup***.

    Or

    2.  Search for **CCSETUP** or **Payment Gateway Setup** in the **Navigation box** and then select **Payment Gateway Setup***.

       The **Payment Gateway Setup (CCSETUP)** page appears.

2.  Select the gateway for which you want to change the status:

    1.  On the toolbar, click **Browse**.

    The **Browse For Payment Gateway Setup** window appears.

    2.  Select the required payment gateway, and click **Select**. Or, double-click the required payment gateway.

3.  Click **Status**. 

    » **Active**: To make a payment gateway active.
    
    If any other payment gateway is active, an error message appears.

    » **Inactive**: To make a payment gateway inactive.

    The message, *Changing the Payment Gateway status to inactive makes the credit card information inaccessible on the transaction forms. Do you want to proceed?* appears. 
    
    Click **Proceed** to change the status. Click **Cancel** to retain the status as **Active**.

    You cannot change a payment gateway's status to **Inactive** if any active tokens exist for the gateway.