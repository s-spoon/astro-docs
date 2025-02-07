---

title: "Add sold-to, ship-to, and bill-to addresses for a prospect or customer"
draft: false
type: Article

---

When a prospect or customer has more than one ship-to, sold-to, or bill-to address, record them all in Made2Manage.

You can also specify a ship-to or bill-to address without storing it in Made2Manage. 

**To add a ship-to, sold-to, or bill-to address**

1. Open the **Account Address (CRMADDR)** page.

    a. Select **Sales Management** > **Master Data** > **Accounts Address**.

    Or

    b. Search for **CRMADDR** or **Account Address** in the **Navigation box** and then select **Account Address**.

    The **Account Address (CRMADDR)** page appears.

2. To add a new customer address:

    a. On the **Toolbar**, click **New**.

    b. Click the **Account No** lookup reference.

    The **Lookup For Account No** window appears.

    c. Select the row that contains the required account, and click **Select**. Or double-click the required account.

    Or

    To copy an existing customer address and edit that to create a new one:

    a. On the **Toolbar**, click **Browse**.

    The **Browse For Account Address** window appears.

    b. Select the row that contains the required account address that you want copy, and click **Select**.

    Or double-click the required account address.

    c. On the **Toolbar**, click **Copy** to copy the existing account address.

    The **Account No** field is populated automatically.

3. In the **Address Type** dropdown, select one of the following:

    - SHIP TO

    - SOLD TO

    - BILL TO

    The **Key** field is populated based on the **Address Type** selected.

4. In the **Name** field, change the name if the company name is different.

    The company name need not be the same as the primary company name. This allows for division names to be used and easily handled without changing the master account name.

5. Click the **Jurisdiction** lookup reference to select a tax jurisdiction.

    If the address is chosen on a document such as a **Quote** or **Purchase Order**, this tax jurisdiction is used as the default tax jurisdiction for the document and taxable items added to it. If your company uses geographic-based taxes, and if the address is a ship-to address, click the **Jurisdiction** lookup reference, and select the jurisdiction.

6. Click the **Contact** lookup reference to select the contact for the address.

7. Click **Save**.

8. On the **Toolbar**, click **More Actions**.

9. Select **More Actions** > **Actions** > **Associated Sales Persons**.

    The **Associated Sales Persons (ADSLS)** window appears.

    For more information, see the help topic [Associate a salesperson with an address]()

10. In the **Contact Information** section, enter the appropriate phone numbers in the **Business Phone**, **Home Phone**, **Business Fax**, and **Mobile** fields.

11. In the **Address**, **City**, **State/province**, **Zip/postal Code**, and **Country** fields, specify the address information.

12. Click **Save**.

    > [!Note] The **Created Date** field automatically displays the current date.