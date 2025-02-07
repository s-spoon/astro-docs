---
title: "Non Conformance Request (NCR)"
draft: false
type: Article
---

This module is intended for all M2M users. An NCR can be created against any master or transactional document that requires an inspection after receipt that identifies and reports any discrepancies with part number or service. This module helps you to:

-   "Add a new Non Conformance Request" on the next page
-   "Copy the details of an existing Non Conformance Request to a new Non Conformance Request" on page 16
-   "Approve or Reject the Non Conformance Request" on page 27
-   "Close the Non Conformance Request" on page 28
-   "Add an attachment to the Non Conformance Request" on page 29
-   "Access the Entity linked to the NCR" on page 30
-   "To add Non Conformance Request via Entity breadcrumbs" on page 30
-   To create NCR from Shop Floor Manager


# Add a new Non Conformance Request

Use the Non Conformance Request page to add a new Non Conformance Request.

## To Add a new Non Conformance Request

1.  Open the **Non Conformance Request (NCR)** page.

    a. Select Production Management > Production Transaction > Quality > Non Conformance > Non Conformance Request.

        Or

    b.  Search for **NCR** in the Navigation box and then select **Non Conformance Request**. 
    The **Non Conformance Request** page appears.

2.  On the Toolbar, click **New**.
3.  From the **Entity** list, select the entity for which you are raising the Non Conformance Request.
4.  Specify values in the fields indicated in the following table according to the criteria selected in the **Entity** field.

| **Entity**    | **Fields** |
|-|-|
| ITEM MASTER   | **Facility**: Select the facility from the list. **Part Number**: Click the lookup reference button and select the part number in the **Lookup For Part Number** window.  <br> [!Note] The **Description** and **Revision** fields are auto-populated based on your selection. |
| STANDARD BOMS | **Facility**: Select the facility from the list. **Part Numbe**r: Click the lookup reference button and select the part number in the Lookup For Part Number window. Note: The Revision field is auto-populated based on your selection. **Component**: Click the lookup reference button and select the component number in the **Lookup For Component** window.  [!Note] The **Component Revision** field is auto-populated based on your selection.                                                                                                                                                            |
| STANDARD ROUTINGS | **Facility**: Select the facility from the list. **Part Number**: Click the lookup reference button and select the part number in the Lookup For Part Number window.  [!Note] The **Revision** field is auto-populated based on your selection.     **Operation Number**: Click the lookup reference button and select the operation number in the **Lookup For Operation Number** window.  [!Note] The **Work Center ID** field is auto-populated based on your selection. |
| ACCOUNTS     | **Customer Number**: Click the lookup reference button and select the customer number in the **Lookup For Customer Number** window. |
| VENDORS      | **Vendor Number**: Click the lookup reference button and select the Vendor number in the **Lookup For Vendor Number** window.  |
| QUOTES       | **Quote Number**: Click the lookup reference button and select the quote number in the **Lookup For Quote Number** window. **Quote Item Number**: Click the lookup reference button and select the quote item number in the Lookup For Quote Item Number window.  [!Note] The Part Number, Revision, and Facility fields are auto-populated based on your selection. |
| SALES ORDERS | **Sales Order Number**: Click the lookup reference button and select the sales order number in the **Lookup For Sales Order Number** window. **SO Item Number**: Click the lookup reference button and select the sales order item number in the **Lookup For SO Item Number** window.   <br> [!Note] The **Part** **Number**, **Revision**, **Facility**, and **Release** fields are auto-populated based on your selection.     [!Note] If the item is a master release item then the **Release** field will have a look up for reference button to select the specific release.    |
| JOB ORDERS      | **Job Number**: Click the lookup reference button and select the job number in the **Lookup For Job Number window**.  [!Note] The **Revision**, **Facility**, and **Part Number** fields are auto-populated based on your selection.     **Lot/SN**: Click the lookup reference button and select the serial number in the **Lookup For Lot/SN** window. |
| PURCHASE ORDERS | **PO Number**: Click the lookup reference button and select the po number in the **Lookup For PO Number** window. **Item Number**: Click the lookup reference button and select the item number in the **Lookup For Item Number** window.  [!Note] The **Part** **Number**, **Revision**, and **Facility** fields are auto-populated based on your selection.|
| RECEIVING  | **Receiver Number**: Click the lookup reference button and select the receiver number in the **Lookup For Receiver Number** window. **Item Number**: Click the lookup reference button and select the item number in the Lookup For Item Number window.  [!Note] The **Part** **Number**, **Revision**, **PO Number**, **Facility**, and **RMA Number** fields are auto-populated based on your selection. |
| SHIPPING   | **Shipper Number**: Click the lookup reference button and select the receiver number in the **Lookup For Shipper Number** window. **Item Number**: Click the lookup reference button and select the item number in the **Lookup For Item Number** window.<br> [!Note] The **Part** **Number**, **Revision**, **Sales Order Number**, and **Facility** fields are auto-populated based on your selection.|
| INVENTORY TRANSACTIONS | **Inventory Transaction**: Click the lookup reference button and select the transaction transaction in the **Lookup For Inventory Transaction** window.  [!Note] The **Transaction Type**, **From Facility**, **Part** **Number**, **Revision**, **From Lot No**, **Quantity**, **U/M**, **Posting Date**, **From Location**, and **From Bin** fields are auto-populated based on your selection. |
| DAILY LABOR | **Employee Number**: Click the lookup reference button and select the employee number in the **Lookup For Employee Number** window. **Job Number**: Click the lookup reference button and select the job number in the **Lookup For Job Number** window. |<br> [!Note] The **Labor Type**, **Operation Number**, and **Work Center** fields are auto-populated based on your selection.|
| RETURN MATERIAL AUTHORIZATION | **RMA Number**: Click the lookup reference button and select the RMA number in the **Lookup For RMA Number** window. **Item Number**: Click the lookup reference button and select the item number in the **Lookup For Item Number** window.  [!Note] The **Part** **Number**, **Revision**, **Customer Number**, and **Facility** fields are auto-populated based on your selection. |
| RECEIVING INSPECTION    | **Receiver**: Click the lookup reference button and select the receiver in the **Lookup For Receiver** window.  [!Note] The **Facility**, **Part Number**, **Revision**, **RMA Number**, and **P O Number fields** are auto-populated based on your selection.
| PRODUCTION INSPECTION       | **Job Number**: Click the lookup reference button and select the job number in the Lookup For Job Number window.  [!Note] The **Facility**, **Part Number**, and **Revision fields** are auto-populated based on your selection.     **Operation**: Click the lookup reference button and select the Operation in the **Lookup For Operation** window.  [!Note] The **Work Center** field gets auto-populated based on your selection. |
| CUSTOMER SERVICE INQUIRY    | **Inquiry No**: Click the lookup reference button and select the inquiry number in the **Lookup For Inquiry No** window.  [!Note] The **Inquiry Type** and **Customer Number** fields are auto-populated based on your selection.|
| INTER-FACILITY SUPPLY ORDER | **ISO No**: Click the lookup reference button and select the iso number in the **Lookup For ISO No** window.<br> [!Note] The **IDO number**, **Source Facility**, **Destination Facility**, **Part Number**, **Rev**, **SO No**, **SO Item Number**, **Release**, **Job Number**, and **BOM item Number** fields are auto-populated based on your selection.|
| INTER-FACILITY DEMAND ORDER | **IDO No**: Click the lookup reference button and select the IDO number in the **Lookup For IDO No** window.  [!Note] The **ISO number**, **Source Facility**, **Destination Facility**, **Part Number**, **Rev**, **SO No**, **SO Item Number**, **Release**, **Job Number**, and **BOM item Number** fields are auto-populated based on your selection. |

5.  In the **Issue Description** field, type in the issues related to the Non Conformance Request.
6.  From the **Requested By** dropdown list, select the requester.
    1.  If you want to add a different requester other than the ones listed:
        1.  Click **Edit** at the end of the list.

            The Popup **Table Maintenance window** appears.

        1.  On the **Toolbar** click **New**.
        2.  In the **Stored Value** field type the value for the new requester.
        3.  In the **Description** field type the description.
        4.  Click on **Save**.
        5.  Close the popup page and return to the non conformance page.
            >[!Note] After clicking Save, the **Entered By** and **Entered Time** fields are auto-populated.


7.  Set details about **Immediate Correction/Fix**:
    1.  In the **Immediate Correction/Fix** field, type the immediate correction needed or done for the Non Conformance Request.
    2.  From the **Disposition** list, select the type of disposition.

        >[!Note] Use Edit as described above to add additional dispositions.

8.  Click **Save**.

    >[!Note] The **Approved By** and **Approved Date** fields are auto-populated once the approver for **Immediate Correction/Fix** approves or rejects the **Immediate Correction/Fix**.

9.  Set details about **Root Cause Analysis**:
    1.  Click the **Root Cause Analysis** tab.
    2.  In the **Root Cause Analysis** field, type the root cause for the Non Conformance Request.
    3.  From the **RCA Performed By** list, select the RCA performer.
    4.  If you want to add a different RCA performer other than the ones listed:
        1.  Click **Edit** at the end of the list.

            The **Popup Table Maintenance** window appears.

        2.  On the **Toolbar**, click **New**.
        3.  In the **Stored Value field**, type the value for the new requester.
        4.  In the **Description field**, type the description.
        5.  Click on **Save**.
        6.  Close the popup page and return to the non conformance page.
    2.  In the **RCA Date** field, type the date on which RCA is done.

        Or, click the calendar icon at the end of the **RCA Date** field. This displays the calendar. You can select the desired date.

10.  Set details about **Corrective/Preventive Action** (Optional):

    Select the **Corrective/Preventive Required** checkbox on the RCA tab to show the **Corrective/Preventive Action** tab.

11.  Click **Save**.

    >[Note] The **RCA Approver** and **RCA Approval Date** fields are auto-populated after the approver for RCA approves or rejects the RCA.

12.  Select the **Corrective/Preventive Action** tab.
13.  To select corrective/preventive action from the existing CAPA List:
    
    1.  Click the **Corrective/Preventive Action** tab.
    2.  Click the **CAPA** lookup reference button.

        The **Lookup For CAPA** window appears with active CAPAs.

    3.  Select the required row and click **Select**. CAPA details will be auto-filled if available.
    4.  From the **CAPA Submitted By** list, select the CAPA submitter.
    5.  In the **CAPA Submitted Date** field, type the date on which CAPA is done.

        Or, click the calendar icon at the end of the **CAPA Submitted Date** field. This displays the calendar. You can select the desired date.

14.  To add a new CAPA:

    1.  Click the **Corrective/Preventive Action** tab.
    2.  Select the **New CAPA** check box.
    3.  In the **CAPA** field, type a new value for the CAPA.
    4.  In the **CAPA Details** field, type the CAPA details.
    5.  From the **CAPA Submitted By** list, select the CAPA submitter.
    6.  In the **CAPA Submitted Date** field, type the date on which RCA is done.

        Or, click the calendar icon at the end of the **CAPA Submitted Date** field. This displays the calendar. You can select the desired date.

    7.  Click **Save**.
        A message *Do you want to add ‘New Value of CAPA’ in CAPA Library?* appears.

    8.  Click **Yes** to add the new CAPA to the CAPA Library.
    9.  Click **No** to close the message window and return to the CAPA tab and no new values will be added to the CAPA library.
    10.  Click **Cancel** to abort the entire operation.
    11.  Click **Save**
15.  Click the **Approvers** tab.

    By default, the **Approvers** tab displays the **Approvers** from the **Approvers list** page with respect to the NCR segment.

    1.  If you want to add a new approver to the approver tab:
        1.  On the **Child Grid Tollbar**, click **New**.
        2.  In the **User Name** field, type the appropriate value or click the **User Name**

            lookup reference button.

            The **Lookup For User Name** window appears.

        3.  Highlight the row that contains the required user name, and click **Select**. Or, doubleclick the required row that contains the user name.
        4.  From the **Approver For** dropdown list, select the Non Conformance Request Segment for which the user should be an approver.
    2.  If you want to delete an Approver from the Approvers tab:
        1.  Highlight the Approver you want to delete.
        2.  Click the **Delete** icon in the **Action** column to delete the Approver from the Non Conformance Request Approver List.

            A message, *Are you sure you would like to delete this record?* displays.

        3.  Click **Ok** to delete the entry. Or click **Cancel** to retain the entry.

            >[!Note] You can only delete an approver from the Approvers tab, if no action (Approved/Rejected) is taken for the respective records.

16.  Click **Save**.
17.  After updating the necessary tabs (**Immediate Correction**, **Root Cause Analysis**, and **Corrective/Preventive Action**), in the **Document Status** list, change the status from **Started** to **Awaiting Approval**.

    Once the **Document Status** is changed to **Awaiting For Approval**, the respective approver will get a notification.
    >[!Note] To receive notification, in the Events and Actions page the Approver must be manually selected.
 
