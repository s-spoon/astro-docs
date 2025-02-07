---

title: "Add customer credit card information"
draft: false
type: Article

---

Using Made2Manage you can accept credit card payments from customers. Made2Manage allows you to process immediate credit card payments and authorize credit card payments. You have to store the credit card details of the customer to process the credit card payments. Use the **Credit Card Information (CCINFO)** window to add and view credit card details of a customer. You can open this page from the **Accounts (CUST)** page.

> [!Important] You must enable a customer to pay by credit card before adding the customer credit card information.

> [!Note] The credit card details entered other than the comments entered in the **Memo** field are not stored in Made2Manage for security reasons. They are stored in the payment gateway.

**To add customer credit card information**

1. Open the **Accounts (CUST)** page.

    a. Select **Sales Management** > **Master Data** > **Accounts**.

    Or

    b. Search for **CUST** or **Accounts** in the **Navigation box** and then select **Accounts**.

    The **Accounts (CUST)** page appears.

2. Select the customer:

    a. On the **Toolbar**, click **Browse**.

    The **Browse For Accounts** window appears.

    b. Select the row that contains the required customer, and click **Select**.

    Or double-click the row that contains the required customer.

3. Click the **Financial Information** tab.

4. In the **Terms** section, perform the following:

    a. In the **Payment Type** list, select **Cash**.

    b. Select the **Pay By Credit Card** checkbox.

    c. On the **Toolbar**, click **Save**.

5. On the **Toolbar**, click **More Actions**.

6. Select **More Actions** > **Actions** > **Credit Card Information**.

    The **Credit Card Information (CCINFO)** window appears.

7. On the **Toolbar**, click **New**.

8. Specify the credit card details:

    a. In the **Card number** box, enter the credit card number.

    b. In the **YY** box, enter the year that the credit card expires.

    c. In the **MM** box, enter the month that the credit card expires.

9. In the **CVV** field, specify the card verification detail selected in the **Default Verification Method** area of the **Payment Gateway Setup (CCSETUP)** page, if required.

10. In the **Customer Information** section, specify the following details:

    - **First Name**: The first name given on the customer’s credit card.

    - **Last Name**: The last name given on the customer’s credit card.

    - **Street**: The billing address of the credit card.

    - **City**: The city associated with the customer’s billing address.

    - **State**: The state associated with the customer’s billing address.

    - **Country**: The country associated with the customer’s billing address.

    > [!TIP] Click the **Country** lookup reference, and select the required country in the **Lookup For Country** window.

    - **Zip**: The zip code associated with the customer’s billing address.

    - **Phone number**: The phone number associated with the customer’s billing address.

    - **Email**: The customer's email address.

    > [!Note]  For the **Moneris** payment gateway, enter only the phone number and the email address. You cannot view the other fields.

11. In the **Memo** field of the **Customer Information** section, specify any comments if required.

12. Click **Save**.

    Made2Manage assigns a unique card ID for the saved credit card details. The card details are stored in the payment gateway and are retrieved based on the unique card ID and the customer number when required.