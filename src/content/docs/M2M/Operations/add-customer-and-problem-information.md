---
title: "Add customer and problem information"
draft: false
type: Article
---

When a customer calls in and requests field service, you must record the customer information and the problem. Use the **Customer Request** and **Problem Defined** tabs of the **Field Service Control** page to do this.

## To add customer and problem information

1. Open the Field Service Control (FSORD) page.

    1. Select **Customer Relationship Management** > **CRM Transactions** > **Field Service**> **Field Service Control**.

    Or

    2. Search for **FSORD** or **Field Service Control** in the **Navigation box** and then select  **Field Service Control**.

    **Field Service Control (FSORD)** page appears.

2. On the **Toolbar**, click **New** to create a new customer request. Or, click **Copy**to base the customer request on the one currently displayed on the **Field Service Control** page.

3. Complete the Customer Request information:

    1. In the **Facility** dropdown, select the facility associated with the machine's part number.

    2. In the **Machine** box, enter the machine's part number.

        Or click the **Machine** Lookup Reference. The **Lookup For Machine** window appears. Select the row that contains the part number for which you need to create field service and click **Select**.

        Or double click that row.

        Note: You can also create a **Field Service** for a non-standard machine. 

    3. In the **Urgency** dropdown, select the request's urgency.

        >[!NOTE] 
        >Click **Edit Urgency** to view the urgency values.

    4. In the **Type** list, select the customer request type.

        >[!NOTE] 
        >Click **Edit Type** to view the customer request type values.

    5. In the **Serial Number** field, enter the machine's serial number.

        Or, click the **Serial Number** Lookup Reference, and select the serial number from the **Lookup For Serial Number** window.

        Note: If the serial number you type is unique, the system fills in the matching part and revision number in the **Machine** field when you move to the next entry field.

    6. Click **Status**, change the request's status.


        >[!NOTE] The **Quote Accepted** and **Quote Created** check boxes are available above the **Document Status** list. When you create a quote from the **Field Service Control** page, the **Quote Created** check box is automatically selected. See Create Quote. When you open the quote and the status remains **Open**, the **Quote Accepted** check box is automatically selected.

        If the request is from a customer other than the one displayed, select the customer:

    7. Click the **Current Customer Number** Lookup Reference.

        The **Lookup For Current Customer Number** window appears.

    8. Select the row that contains the customer number and click **Select**. Or double-click the row that contains the customer number.

        >[!NOTE] 
        >f you select an inactive customer, the error message "Cannot Create Service Order for an INACTIVE Customer." is displayed.

    9. To use an existing ship-to address:

        1. Click the **Ship-to** Lookup Reference.

            The **Lookup For Ship-to** window appears.

        2. Select a row that contains the ship-to address and click **Select**. Or double-click the ship-to address.

    10. To use a ship-to address that is not in Made2Manage:

        1. Select the **Misc Address** check box.

            >[!NOTE]
            >In the **Ship-to**  field, the ship-to address **9999** is populated automatically. The **Input Address** button is enabled. For more information, see Input Address.

        2. In the **Service Order Address** window, enter the updated ship-to information and click **Save**.

    11. If you want to make the currently displayed **Ship-to** address information the default address for the machine, select the **Update Machine Location** check box.

4. Specify technical support information:

    1. Click the **Assigned Tech Support** Lookup Reference.

        The **Lookup For Assigned Tech Support** window appears.

    2. Select a row and click **Select**. Or, double-click a row to select the name of the support personnel.

        The **Assigned Tech Support** field defaults to the operator identified in the **Technicians (TECH)** page as a customer-service technician by using the sign-on initials.

    3. If the machine is not under warranty, in the **Customer Purchase Order** field, enter the customer's purchase order number.

        If you are creating a service order quotation or estimate, enter a name that you can easily recognize as a quotation or estimate. For example, enter **Quote** in the **Customer Purchase Order** field. You must change this to match the customer's purchase order number when you create a sales order.

    4. In the **Date Called** box, enter the date the customer called.

5. Specify field-service technician information:

    1. Click the **Lead Field Service Technician** Lookup Reference.

        The **Lookup For Lead FS Technician** window appears.

    2. Select the row that contains the name of the required technician, and click **Select**. Or, double-click the row that contains the name of required technician.

    3. In the **Parts To Be On-Site** box, enter the date the parts need to be on-site for the technician to perform the service. (For example, this date may be the day before the scheduled maintenance call.)

    4. In the **Promised Service Date** box, enter the date you told the customer that the service would be complete.

    5. In the **Duration (Days)** box, enter the number of days the service call is expected to take.

6. Specify management approval information:

    1. In the **Return Materials Authorization** box, enter the authorization number if you have authorized return on goods associated with this customer request. Or, click the **Return Materials Authorization** Lookup Reference, and select a Return Materials Authorization (RMA) related to the field service in the **Lookup For Return Material Authorization** window.

        The machine details such as part no, rev, serial no, customer no and so on, that is linked with the RMA are automatically displayed in the **Field Service Control (FSORD)** page.

        1. Select the **Manager Approval Required** checkbox, if a manager must approve the request.

        2. In the **Approved By** box, enter the approving manager's initials.

        3. In the **Date Approved** box, click in the field to populate the date the manager approves the request.

    2. If you are adding a service order quotation or estimate and the expiration date of this quotation or estimate differs from the default, enter the quotation or estimate's expiration date in the **Quotation Expires** field.

        For information on setting the default expiration date for quotation or estimate, see the topic "Set field service's general behavior".

7. In the **Commission Code** dropdown, select the commissions to use with this customer request.

    >[!NOTE] 
    >Click **Edit Commission Code** to add a new commission code or modify an existing one.

    The commission code is only used if you enabled commissions for Field Service Sales Orders by selecting the **Default Commissions on Field Service Sales Order** check box in the **Field Service Setup Information (CSFSM)** page.

    The commission code selected here will default to the Field Service Sales Order, triggering the system to create commission records for each Field Service line item. If a commission code is not selected here, the commission code on the Field Service Sales Order remains empty, and no commission records will be created for the Field Service sales order line items.

8. In the **Ship Via** dropdown, select the carrier used to ship the items.

    >[!NOTE] 
    >Click **Edit Ship Via** to add a new carrier or modify the details of an existing one.

9. On the toolbar, click More Actions. In More Actions > Actions, select the following buttons to perform the actions specified:

    - **Service Order Estimated Costs**: Click this to enter the estimated costs for the service order. See Record Service Order Estimated Costs for more information.

    - **Service Order Actual Costs**: Click this to enter the actual costs for the service order. See Record Service Order Actual Costs for more information.

    - **Service Order Actions Taken**: Click this to enter the details of the service order actions taken. See Enter Service Order Actions Taken for more information.

    - **Service Order Record Time**: Click this to enter the details of the time taken to perform the service. See Record Service Order Labor for more information.

10. To specify the customer's problem:

    1. Click the **Problem Defined** tab.

    2. In the **Customer Stated Problem** box, enter the customer's description of the problem.

    3. In the **Internal Statement Of The Problem** box, enter your interpretation of the problem.

    4. In the **Created Date** box, enter the actual date and time the Field Service Control was created.

    5. In the **Modified Date** box, enter the last date and time the Field Service Order was modified.

11. On the **Toolbar**, click **Save**.

    After you create a service order request, you can specify component-level details of the customer's request. Otherwise you can record the actions you take on a service order or perform other related tasks.

## To create field service for non-standard machine

You can create a field service for a non-standard machine in one of the following two ways:

- Create a non-standard machine in the **Machine (MACHSER)** page. Then, in the **Field Service Control** **(FSORD)** page, click the **Machine** Lookup Reference and select the machine.

- Enter a non-standard item in **Field Service Control (FSORD)** page. Upon saving, the non-standard part gets automatically added in the machine record.

    1. Click the **Parts Information** tab.

    2. On the child toolbar, click **New**.

    3. Select the **Non Standard Item** check box.

    4. Click the **Part Number** Lookup Reference and select the part.

​