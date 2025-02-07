---
title: "Setup the Transaction Audit Configuration"
draft: false
type: Article
---

Use the **Transaction Audit Configuration (TRANAUDT)** page to set up your audit configuration. By auditing, you can track:

- Table insertions and deletions.

- Table updates.

- The screen that updates another screen or business object.

### To setup the transaction audit configuration

1. Open the Transaction Audit Configuration (TRANAUDT) page.

    1. Select **Utilities > Maintenance** > **Transaction Audit Configuration**.

    Or

    2. Search for **TRANAUDT** or **Transaction Audit Configuration** in the **Navigation box** and then select **Transaction Audit Configuration**.

    **Transaction Audit Configuration (TRANAUDT)** page appears.

2. Allow or block the audit transactions:

    1. To allow auditing of transactions (insert / delete/ update), select the **Allow Transaction Auditing** check box. To block auditing of transactions, clear the check box.

    The **Allow Transaction Auditing** check box is selected by default.

    2. To enable auditing of screens running under the Made2Manage Processor Service, select the **Allow Transaction Auditing Under Processor Service** check box. To block auditing of screens running under the Made2Manage Processor Service, clear the check box.

    The **Allow Transaction Auditing Under Processor Service** check box is cleared by default.

3. In the **Configuration** grid, specify the type of auditing to perform for the screens:

    You can select the auditing type only if you have selected the **Allow Transaction Auditing** check box.

    1. To locate the screen for which you want to set the audit type, do one of the following actions:

        - In the blank field under the **Mnemonic** column, type the screen's mnemonic.

        - Scroll down the **Configuration** grid and select the screen row.

    2. From the list in the corresponding **Audit Type** column, select:

        - **None**: No auditing is performed.

        - **Single**: A single audit entry is made for Insert and Delete transactions. Each field update in a row is audited.

        - **Full**: An entry is made for every non-empty field value for Insert and Delete transactions. Each field update in a row is audited.

4. On the **Toolbar**, click **Save** .

    The message, *Transaction Audit Configuration has been modified. Screen will auto refresh in \<number\> seconds.* is displayed.

5. Close the message window.