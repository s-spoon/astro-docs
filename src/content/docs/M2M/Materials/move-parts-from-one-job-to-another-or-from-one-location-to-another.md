---

title: "Move parts from one job to another or from one location to another"
draft: false
type: Article

---

When you move parts from one job to another, or from one location to another, record an inventory transaction.

>[!NOTE] Scan the bar code of the component part from INMAST when performing Job to Location / Job to Job transactions.

**To move parts from one job to another or one location to another**

1. Open the **Inventory Transactions (INVTR)** page.

    - Select **Production Management** > **Production Transactions** > **Inventory** > **Inventory Transactions**.

    Or

    - Search for **INVTR** or **Inventory Transactions** in the **Navigation box** and then select **Inventory Transactions.**

   The **Inventory Transactions (INVTR)** page appears.

2. Create a transaction:

    1. On the **Toolbar**, click **New** if the transaction is entirely a new one.

    2. On the **Toolbar**, click **Copy** to base the transaction on the transaction displayed on the page, if the transaction is related to moving a part from Job to Location /Job to Job.

3. If you are creating a new transaction, the **Create New Inventory Transactions** window appears. In the **Transaction Type** area, click **Transfer** and then click **Accept**.

4. Specify the transaction details in the **From** section:

    1. In the **Facility** list, select the facility from which you want to transfer the items.

    2. Click the **Part Number** Lookup Reference, and select the part from the **Lookup For Part Number** window.

    3. In the **Transfer Quantity** field, type the value of the quantity to move.

    4. In the **Date** field, type the move date.

    5. In the **Comment** field, type any comments.

5. To move parts from one job to another:

    1. In the **From** section, click the **Job Number** Lookup Reference and select the job from the **Lookup For Job Number** window.

    2. In the **To** section, click the **Job Number** Lookup Reference and select the job from the **Lookup For Job Number** window.

6. To move parts from one location to another:

    1. In the **From** section, specify the location to move parts from:

        1. Click the **Location** Lookup Reference, and select the location from the **Lookup For Location** window.

        2. If you have bins set up in Made2Manage, specify the bin number:

            - In the **Bin** field, type the bin number.

            - Click the **Bin** Lookup Reference, and select the bin from the **Lookup For Bin** window.

    2. In the **To** section, specify the location to move parts to:

        1. Click the **Location** Lookup Reference, and select the location from the **Lookup For Location** window.

        2. If you have bins set up in Made2Manage, specify the bin number:

            - In the **Bin** field, type the bin number.

            - Click the **Bin** Lookup Reference, and select the bin from the **Lookup For Bin** window.

7. On the **Toolbar**, click **Save** to save the transaction details.

​