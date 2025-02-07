---
title: "Integrate Purchase Order to Requisition"
draft: false
type: Article
---
### Prerequisites
Before proceeding, ensure that a purchasing category is created in M2M application when the tenant is established for the first time.

### Create Purchasing Category for PO and Receiving Flow
To create a Purchasing Category for transitioning from Purchase Order to Purchase Order Receiving, perform the following:

1.	Open the **EAM** application.
    -   Click **Open** on EAM app tile in AppCentral. <br> The EAM application opens in a new tab.

2. Search for Employee.
    -   In the EAM application, either type **Employee Search** in the navigation bar, or navigate to **Employees > Employee Search**.
    -   On the **Employee** screen, choose **Employees -All Employees** from the drop-down list and click **Search**. 
    - In the table, click the Employee Id of the currently logged-in user.
    <br> The Employee id information screen appears.

3.	Select Employee Record
    -   On the **Employee** screen, choose **Employees -All Employees** from the drop-down list and click **Search**. 
    - Click the Employee Id of the currently logged-in user.    <br> The Employee Id information screen appears.

4.	Edit Employee Configuration
    -   On the employee Id screen, navigate to **Configurations** tab, and click **Edit**.
    - Turn on the toggle for **Requisition**.
    - Enter the appropriate approval limit and click **Save**.

5. Create a New Requisition
    -  Navigate to **Requisition > New Requisition**. <br> The **Create New Requisition** window appears.
    - Choose a Charge To Account, and click **Next**.
    - In the **Create New Requisition** screen, under the New Charge section, click **Add**.
    -  Click **Edit** and enter the appropriate information in the Account, Area, Department, and Project drop-down list and then click **Next**. 
    - Click **Edit** and enter the appropriate information in the Account, Area, Department, and Project drop-down lists and then click **Next**. 
    - Set the Delivery Date and click **Next**. <br> The new requisition is created.

6.  Search for the Requisition.
    -   Navigate to Requisition and search for the created requisition number and then click **Search**.

7.	Add New line item
    -   On the newly created requisition, click **+New Line**. In the **Add Line Item** section enter details for the following:
        -  In the **Item** text field, enter the item name.
        -  In the **Description** text field, enter appropriate description.
        -   Choose the type of requisition.
        -   Enter the number in **Requested Qty**.
        -   Choose **EA – EACH** in the **Units** drop-down list.
        -   Enter the cost in **Unit Cost** text field.

8.	Click **Add**. <br>The requisition number is created, and the Charge To Account Requisition is created successfully.

9.	Open the Requisition
    - Click the requisition number to open the newly created requisition and click **Details** in the right column and then click **Edit**.

10.	Select a Supplier
    -   On the **Purchase** tab, in The **Supplier** section, search for a supplier in the **Recommended Supplier** field.
    -   Ensure that each vendor has a corresponding active supplier in both M2M and EAM, as purchase orders cannot be created for inactive suppliers.

11. Click **Save**.

 ### Approve the Requisition

1.	Navigate to **Requisition > Approve/Review**.

2.	On the **Approve/Review** screen, choose **Awaiting Approval** from drop-down list and click **Search**.

3.	In the search results, click the requisition you want to approve, click **Approve/Review** and then click **Save**.

### Validate Purchase Order between EAM and M2M application

To verify that a purchase order created in EAM is reflected in M2M, perform the following:

1. Search for Purchase Orders in M2M application.
    -   Navigate to M2M application, search for **Purchase Orders**.	

2.	Filter by Vendor number
    - On the Purchase Order screen, search for the Vendor Number and choose **Open** from the status drop-down list.

3. Search in Aptean EAM application.
    -   In the **Navigation** field, enter **Purchase Order search** and click **Search**.
    -   Choose **All Blanket Order - All Blanket Orders** from the drop-down list, enter the purchase order number, and click **Search**. <br> The purchase order details appears on the screen.

    When you edit an existing purchase order in the M2M application, a new purchase order is created in EAM with an incremented Purchase Order number. <br>For example, if the original PO in M2M is numbered 000081-0000-000, any modification will generate a new PO in EAM numbered 000081-0000-001, labeled as a **Change Order PO** in the EAM application.

 

