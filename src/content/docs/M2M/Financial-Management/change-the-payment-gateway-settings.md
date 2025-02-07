---

title: "Change payment gateway settings"
draft: false


---

Made2Manage supports the following payment gateways:

**Note**:

Only one payment gateway can be active at a time.

Use the **Payment Gateway Setup (CCSETUP)** page to change the settings configured for a payment gateway.

**To change the payment gateway settings**

1.  Open the **Payment Gateway Setup (CCSETUP)** page.

    1.  Select **Utilities** *\>* **Company Setup** *\>* **Finance** *\>* **Payment Gateway Setup**.

    Or

    2.  Search for **CCSETUP** or **Payment Gateway Setup** in the **Navigation box** and then select **Payment Gateway Setup**.

        The **Payment Gateway Setup (CCSETUP)** page appears.

2.  Select the gateway for which you want to change the configured settings:

    1.  On the **Toolbar**, click **Browse**.

        The **Browse For Payment Gateway Setup** window appears.

    2.  Select the required payment gateway, and click **Select**. Or double-click the required payment gateway.

        The **Re-Authorization Days** field displays the re-authorization period of the selected gateway. This is a read-only field and is not editable. The re-authorization period information is retrieved from the selected payment gateway.

3.  To change the default payment type for the gateway, in the **Default Payment Type** section, click:

    » **Immediate Sale**: To process the credit card payment of a customer immediately.

    » **Pre-Authorization**: To pre-authorize a customer's credit card for upcoming payments.

4.  In the **Default Verification Method** area, to change the card verification method, click:

    » **CVV2**: To use the card verification value.

    » **Street Name**: To use the street name.

    » **Zip Code**: To use the zip code.

5.  In the **Supported Credit Card Types** section, select the appropriate checkboxes to indicate the credit cards supported by your M2M application for the payment gateway. Clear a selected checkbox if you do not want to use it for the payment gateway.

**Important:** You must select at least one card type.

[!Note]

- The card types supported by each payment gateway may vary.

- The selected cards are listed in the Credit Card Transaction window when you add a credit card to either a sales order or AR invoice.

6.  In the **Gateway Credentials** section, enter the **Tenant ID** and the **Secret Key** that you have obtained from the payment gateway. If the payment gateway requires a password, specify the password.

7.  On the **Toolbar**, click **Save**.

    The message, '*Payment Gateway configuration have been modified. Screen will auto refresh in \<nn\> seconds. Do not Refresh.*' appears.

3.  Click **Do not Refresh** if you want to restart Made2Manage later manually.