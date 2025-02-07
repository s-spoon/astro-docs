---

title: "Copy details of an existing NCR to a new NCR"
draft: false
type: Article 

---

1.  Open the Non Conformance Request (NCR) page.

    1. Select **Production Management** > **Production Transaction** > **Quality** > **Non Conformance** > **Non Conformance Request**. 
        <br>Or 
    2. Search for **NCR** in the Navigation box and then select **Non Conformance Request**.
    <br> The **Non Conformance Request** page appears.
2.  On the **Toolbar**, click on **Copy** dropdown.
3.  Select any one of the following:
    -   Select **Current** to create a Non Conformance Request by copying the details of the existing Non Conformance Request.
    -   Select **Non Conformance Request** to copy from another Non Conformance Request.

    -   On selecting **Non Conformance Request**, the **Copying Non Conformance Request** window appears.

    -   Select the required row and click **Select**.

4.  Edit or change the values in the fields indicated in the following table according to the Entity of the copied Non Conformance Request.

| **Entity**  | **Fields** |
|---|--|
| ITEM MASTER | **Facility**: Select the facility from the list. Part Number: Click the lookup reference button and select the part number in the **Lookup For Part** <br> ![Note] The **Description** and **Revision** fields are auto-populated based on your selection.|
| STANDARD BOMS | **Facility**: Select the facility from the list. **Part Number**: Click the lookup reference button and select the part number in the **Lookup For Part Number** window. <br> ![Note] The **Revision** field is auto-populated based on your selection. **Component**: Click the lookup reference button and select the component number in the **Lookup For Component** window.  <br> ![Note] The **Component Revision** field is auto-populated based on your selection.|
| STANDARD ROUTINGS  | **Facility**: Select the facility from the list. **Part Number**: Click the lookup reference button and select the part number in the **Lookup For Part Number** window <br>![Note] The **Revision** field is auto-populated based on your selection. **Operation Number**: Click the lookup reference button and select the operation number in the **Lookup For Operation Number** window.  <br> ![Note] The **Work Center ID** field is auto-populated based on your selection. |
| ACCOUNTS     | **Customer Number**: Click the lookup reference button and select the customer number in the **Lookup For Customer Number** window. |
| VENDORS      | **Vendor Number**: Click the lookup reference button and select the Vendor number in the **Lookup For Vendor Number** window.  |
| QUOTES       | **Quote Number**: Click the lookup reference button and select the quote number in the **Lookup For Quote Number** window. **Quote Item Number**: Click the lookup reference button and select the quote item number in the **Lookup For Quote Item Number** window. <br> ![Note] The **Part Number**, **Revision**, and **Facility** fields are auto-populated based on your selection. |
| SALES ORDERS | **Sales Order Number**: Click the lookup reference button and select the sales order number in the **Lookup For Sales Order Number**  |window. **SO Item Number**: Click the lookup reference button and select the sales order item number in the **Lookup For SO Item Number** window.  <br>![Note] The **Part** **Number**, **Revision**, **Facility**, and **Release** fields are auto-populated based on your selection.  <br>>  ![Note] If the item is a master release item then the **Release** feild will have a look up for reference button to select the specific release. |
| JOB ORDERS | **Job Number**: Click the lookup reference button and select the job number in the **Lookup For Job Number** window.  <br> ![Note] The **Revision**, **Facility**, and **Part Number** fields are auto-populated based on your selection.     **Lot/SN**: Click the lookup reference button and select the serial number in the **Lookup For Lot/SN** window.  |
| PURCHASE ORDERS | **PO Number**: Click the lookup reference button and select the po number in the **Lookup For PO Number** window. **Item Number**: Click the lookup reference button and select the item number in the **Lookup For Item Number** window.  <br>![Note] The **Part** **Number**, **Revision**, and **Facility** fields are auto-populated based on your selection.  |
| RECEIVING       | **Receiver Number**: Click the lookup reference button and select the receiver number in the **Lookup For Receiver Number** window. **Item Number**: Click the lookup reference button and select the item number in the **Lookup For Item Number** window.  <br> ![Note] The **Part** **Number**, **Revision**, **PO Number**, **Facility**, and **RMA Number** fields are auto-populated based on your selection. |
| SHIPPING        | **Shipper Number**: Click the lookup reference button and select the receiver number in the **Lookup For Shipper Number** window. <br> **Item Number**: Click the lookup reference button and select the item number in the **Lookup For Item Number** window.  <br>![Note] The **Part** **Number**, **Revision**, **Sales Order Number**, and **Facility** fields are auto-populated based on your selection.|
| INVENTORY TRANSACTIONS | **Inventory Transaction**: Click the lookup reference button and select the transaction transaction in the **Lookup For Inventory Transaction** window.  <br> ![Note] The **Transaction Type**, **From Facility**, **Part** **Number**, **Revision**, **From Lot No**, **Quantity**, **U/M**, **Posting Date**, **From Location**, and **From Bin** fields are auto-populated based on your selection. |
| DAILY LABOR            | **Employee Number**: Click the lookup reference button and select the employee number in the **Lookup For Employee Number** window. **Job Number**: Click the lookup reference button and select the job number in the Lookup For Job Number window.  ![Note]![Note] The **Labor Type**, **Operation Number**, and **Work Center** fields are auto-populated based on your selection. |
| RETURN MATERIAL AUTHORIZATION | **RMA Number**: Click the lookup reference button and select the RMA number in the **Lookup For RMA Number** window. **Item Number**: Click the lookup reference button and select the item number in the Lookup For Item Number window.  ![Note]![Note] The **Part** **Number**, **Revision**, **Customer Number**, and **Facility** fields are auto-populated based on your selection. |
| RECEIVING INSPECTION          | **Receiver**: Click the lookup reference button and select the receiver in the **Lookup For Receiver** window. <br>![Note] The **Facility**, **Part Number**, **Revision**, **RMA Number**, and **P O Number fields** are auto-populated based on your selection. |
| PRODUCTION INSPECTION    | **Job Number**: Click the lookup reference button and select the job number in the **Lookup For Job Number** window.  <br> ![Note] The **Facility**, **Part Number**, and **Revision fields** are auto-populated based on your selection.     **Operation**: Click the lookup reference button and select the Operation in the **Lookup For Operation** window.  <br> ![Note] The **Work Center** field gets auto-populated based on your selection. |
| CUSTOMER SERVICE INQUIRY | **Inquiry No**: Click the lookup reference button and select the inquiry number in the **Lookup For Inquiry No** window.<br> ![Note] The **Inquiry Type** and **Customer Number** fields are auto-populated based on your selection. |
| INTER-FACILITY SUPPLY ORDER | **ISO No**: Click the lookup reference button and select the iso number in the **Lookup For ISO No** window.  <br>![Note] The **IDO number**, **Source Facility**, **Destination Facility**, **Part Number**, **Rev**, **SO No**, **SO Item Number**, **Release**, **Job Number**, and **BOM item Number** fields are auto-populated based on your selection. |
| INTER-FACILITY DEMAND ORDER | **IDO No**: Click the lookup reference button and select the IDO number in the **Lookup For IDO No** window.  <br![Note] The **ISO number**, **Source Facility**, **Destination Facility**, **Part Number**, **Rev**, **SO No**, **SO Item Number**, **Release**, **Job Number**, and **BOM item Number** fields are auto-populated based on your selection. |

5.  In the **Issue Description** field, edit/change the issues related to the Non Conformance Request.
6.  From the **Requested By** dropdown list, select the requester.
    1.  If you want to add a different requester other than the ones listed:
        1.  Click **Edit** at the end of the list.

            The Popup **Table Maintenance window** appears.

        2.  On the **Toolbar**, click **New**.
        3.  In the **Stored Value** field, type the value for the new requester.
        4.  In the **Description** field, type the description.
        5.  Click on **Save**.
        6.  Close the popup page and return to the non conformance page.
            >[!Note] After clicking **Save**, the **Entered By** and **Entered Time** fields are auto-populated.
7.  On the **Immediate Correction**, **Root Cause Analysis**, and **Corrective/Preventive Action** tabs edit/change the details if required.
8.  Click **Save**.
9.  Click the **Approvers** tab. <br> By default, the **Approvers** tab displays the **Approvers** from the **Approvers list** page with respect to the NCR segment.

    a.  If you want to add a new approver to the approver tab:
        <ol><li>  On the **Child Grid Toolbar**, click **New**.</li><li> In the **User Name** field, type the appropriate value or click the **User Name** lookup reference button.</li>
           <br>  The **Lookup For User Name** window appears.
        <li>Highlight the row that contains the required user name, and click **Select**. Or, double-click the required row that contains the user name.</li>
        <li>From the **Approver For** dropdown list, select the Non Conformance Request Segment for which the user should be an approver.</li></ol>
    b.  If you want to delete an Approver from the Approvers tab:
        <ol><li> Highlight the Approver you want to delete.</li><li> Click the **Delete** icon in the **Action** column to delete the Approver from the Non Conformance Request Approver List.</li> A message, *Are you sure you would like to delete this record?* displays.
        <li>Click **Ok** to delete the entry. Or click **Cancel** to retain the entry.</li></ol>
    >[!Note] You can only delete an apporver from the Approvers tab, if no action (Approved/Rejected) is taken for the respective records.
10.  Click **Save**.
11.  After editing or changing the details of the necessary tabs (**Immediate Correction**, **Root Cause Analysis**, and **Corrective/Preventive Action**), in the Document Status list, change the status from **Started** to **Awaiting Approval**. <br>Once the Document Status is changed to **Awaiting Approval**, the respective approver will get a notification.

        >[!Note]  While copying the **Current** or **Non Conformance Request**, the following details will be pulled by default: <ol><li> All the details that are available in the **Immediate Correction**, **Root Cause Analysis**, and **Corrective/Preventive Action**.</li><li>Approver list in the **Approvers** tab.</li><li>Document Status will be set to **Started**.</li></ol>