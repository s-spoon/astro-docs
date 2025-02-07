---
title: "Change an item master's status"
draft: false
type: Article
---

When you add a part or assembly by creating an item master, the item master may have a status of started. Before you can include a part on a bill of material, routing, sales order, job order, or purchase order, you must change the part's status from started to active.

If you decide not to use a part, you can change its status from active to obsolete. You cannot include an obsolete part on a bill of material or job order, unless you added the part to the bill of material or job order when the part was still active.

 >[!NOTE] A part can have multiple revisions, and each revision can have a different status. 
 >- If your company uses Engineering Change Management and the item is under ECM control, you should add an engineering change order before you change the status of the revision, especially when changing the status from active to obsolete or from obsolete to active. To add an engineering change order, see the **Related Information**. 
 >- If the item is under ECM control, users must have ECM permissions to make changes to the item once it is **Active** or **Obsolete**. To learn more about item master statuses, see the **Related Information**. 

## To change status of item master revision

1. Open the Item Master (INV) page.

    1. Select **Production Management** > **Master Data** > **Item Master**.

    Or

    2. Search for **INV** or **Item Master** in the **Navigation box** and then select **Item Master.**

    The **Item Master (INV)** page appears.

2. Select the item:

    1. On the toolbar, click **Browse**.

        The **Browse For Item Master** window appears.

    2. Select the row that contains the required part, and click **Select**.

        Or, double-click the row that contains the required part.

3. In the **Document Status** list, select one of the following:

    - **Started**

    - **Active**

    - **Obsolete**

    The **Item Master Change Status** window appears.

4. In the **Remarks** box, enter remarks about the status change.

5. Click **OK**.

    The status changes, and shows the appropriate color code.

