---
title: "Add a master engineering change order"
draft: false

---

An Engineering Change Order (ECO) outlines the proposed change to a part or a document. The Master ECO describes the details of the change. Use the **Master ECO Summary (ECOMAST)** page to create multiple standard ECOs from a master ECO.

To add a master engineering change order

1.  Open the **Master ECO Summary (ECOMAST)** page.

    Select **Production Management** > **Production Transactions** > **Quality** > **Engineering Change Management** > **Master ECO Summary**.

    Or

1.  *Search for* **ECOMAST** *or* **Master ECO Summary** *in the* **Navigation box** *and then select* **Master ECO Summary**.

    *The* **Master ECO Summary (ECOMAST)** *page appears.*

2.  On the **Toolbar**, click **New**.
3.  In the **Description** field, type an appropriate description.
4.  Set information about the Master ECO in the **Master ECO** tab:

    » Click the **Author** lookup reference and double-click the user name from the **Lookup For Author** window.

    » Specify the recipients who must be notified of the changes in the ECO:

5.  On the grid toolbar, click **Get Broadcast Recipients**.
6.  Select the check boxes that correspond to recipients in the

    **Recipient Type** column of the grid to include the recipients.

    » In the **Change Source** list, select the source for the ECO.

    » In the **Change Priority** list, select the change priority for the ECO.

    » In the **Change Info** field, type some information about the change.

    » In the **Anticipated Eff** field, specify the anticipated date for the ECO to become effective.

7.  On the **Toolbar**, click **Save** to save the information.

**Note:** If you have not added any approvers in the **Approval Maintenance List (ECOAPP)**

page, a warning message, *No Approvers Defined. Please add and designate Approvers*

*using ECOAPP* appears and the Master ECO is not saved.

If you have added approvers and designated them in the **Approval Maintenance List (ECOAPP)** page, a label **Approval Complete** with a cleared check box appears next to the **ECO No** field.

1.  Generate the standard ECOs from the Master ECO:
1.  Click the **ECO Generation Tools** tab.

    Before generating the ECOs the **Master State** is set to **Initial**. When the ECOs are generated the **Master State** is set to **Update**.

    1.  Select the parts:

        » To select a single part:

        1.  Click the **Part** lookup reference and select the part from the

            **Lookup For Part** window.

        2.  Select the **Revision All** check box to issue a new revision number.

            » To select multiple parts:

2.  Click **Query Parts** to fill the grid with the parts from the Item Master.
3.  Select the **Revision All** check box to issue a new revision number to all parts from the bottom-up. The top-most master part is also issued a new revision number.
4.  The grid has the following columns:

    ≡ **Select**: Check box that is selected for included parts.

    ≡ **Level**: 0 for root parts, 1 for parts beneath.

    ≡ **Fac**: The part facility.

    ≡ **Part**: The part number.

    ≡ **Rev**: The part revision.

    ≡ **Description**: The part description.

    ≡ **RootFac**: The root part facility.

    ≡ **RootPart**: The root part number.

    ≡ **RootRev**: The root part revision.

    ≡ **BOMID**: The Bills of Material (BOM) ID.

5.  When you select the **Revision All** check box, the **Select**

    check box is automatically selected for all the parts in the grid.

1.  Select the check boxes in the **Select** column of the appropriate parts that must be included in the ECO.
2.  On the grid toolbar, click **Show Parts Where Used** to display all parts that have the selected parts as component parts.
    1.  On the grid toolbar, click **Generate ECOs** to generate one standard ECO for every part selected.
    2.  On the **Toolbar**, click **Save**.

    **Note:** If you have not added any approvers in the **Approval Maintenance List (ECOAPP)** page, a warning message, *No Approvers Defined. Please add and designate Approvers using ECOAPP* appears and the Master ECO is not saved.

    If you have added approvers and designated them in the **Approval Maintenance List (ECOAPP)** page, a label **Approval Complete** with a cleared check box appears next to the **ECO No** field.

1.  Click the **ECO List** tab to view the generated ECOs.
2.  Modify the generated standard ECOs, if required:
1.  Click the **Master ECO** tab.
    1.  Change the value in the following fields, if required:

        By default, these fields display the values of the Master ECO.

        ≡ **Description**

        ≡ **Change Source**

        ≡ **Change Priority**

        ≡ **Change Info**

        ≡ **Anticipated Eff**

    2.  Click the **Drawing Link** lookup reference, and from the **Browse Shared Files** window, select the file containing the drawing of the ECO.
    3.  On the **Toolbar**, click **Save**.

    **Note:** If you have not added any approvers in the **Approval Maintenance List (ECOAPP)**

    page, a warning message, *No Approvers Defined. Please add and designate Approvers*

    *using ECOAPP* appears and the Master ECO is not saved.

    If you have added approvers and designated them in the **Approval Maintenance List (ECOAPP)** page, a label **Approval Complete** with a cleared check box appears next to the **ECO No** field.

1.  Select **Status** drop-down button > **Awaiting Approval** to change the status of the Master ECO.