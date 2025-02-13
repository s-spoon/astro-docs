---
title: "Add a customer problem"
draft: false

---

When a customer has a problem with an order, record the problem in Made2Manage to track the problem resolution progress.

## To add a customer problem

1.  Open the **Customer Service Inquiry (CRMCSR)** page.

    1. Select **Sales Management** > **Sales Transactions** > **Customer Service Inquiry**.

    1. Search for **CRMCSR** or **Customer Service Inquiry** in the **Navigation box** and then select **Customer Service Inquiry**. <br>The **Customer Service Inquiry (CRMCSR)** page appears.

2.  Click **New** on the Toolbar.

    The following fields are **Read only**:

    -  **Inquiry No**: Displays the Inquiry number. Document sequence number for the inquiry which is automatically generated by the system.

    - **Customer Status**: Displays the customer status.

3.  From the **Category** list, select the inquiry category.
4.  From the **Class** list, select the inquiry class. Click **Edit Class** or **Edit Category** from the list.

    The **Popup Table Maintenance (POPUP)** for the respective fields (**Category** and **Class**) opens. You can either add a new value or modify the existing value.

5.  Identify the customer and sales order:

    - Click the **Customer Number** lookup reference magnifying glass and double-click the account.

    - Click the **Contact** lookup reference magnifying glass and double-click the contact for this inquiry.

        Displays the primary contact first and last name. If the contact has an email address, an **email** icon appears. Click on the icon to open the **Email** window.
        Only contacts filtered by the account are displayed.

6.  Generally when customer reports a problem with a part, they refer to either the **Customer PO** number or **SO** number, using which they received those parts. In all the subsequent inquiry transaction they refer to these numbers. Hence, there is a need to capture both **PO number** and **SO number**. However these fields are Optional.

    -  SO Number:

    1.  Click the **SO Number** lookup reference magnifying glass. <br>The **Lookup For SO Number** window appears.

    2.  Highlight the row and click **Select**. Click **Cancel** to exit from the window.

        If you select the SO number first, then the corresponding account number and customer PO number are populated from the SO.

    -  Customer PO Number:

    1.  Click the **Customer PO Number** lookup reference magnifying glass. <br> The **Lookup For Customer PO Number** window appears.

    2.  Highlight the row and click **Select**. Click **Cancel** to exit from the window.

        If you select the customer PO number, which is associated with only one SO, then default the SO number and the corresponding account number.

        If the selected customer PO is associated with multiple SO, then user should select the SO from the list. However this is Optional.

    -  E-mail and Phone Number:
    
        When the Customer is selected then the corresponding customer **Phone number**, **E-mail id** and **Customer** status are populated to the **Inquiry** screen. 

7.  Identify the problem:

        The RMA migration script that moves the old **SYCSL** actions to the **Activities** area of **Customer Service Inquiry (CRMCSR)** page should use the display value and not the stored value for the **Assigned To**.

- Click any one of the **Inquiry Types**. Select either **General**, **RMA**, or **Field Service** options to select the type of inquiry.

    -  **General** – The inquiry concerns an issue not related to an RMA or Field Service.

    -  **RMA** – The inquiry is about an RMA. After saving the inquiry, the **RMA** is active. Click it to launch the **RMA** window where you can create a new RMA. See Add an RMA.

    -  **Field Service** – The inquiry is about a Field Service issue. After saving the inquiry, click the **F.S.** (which is now active) to launch the **Field Service Control (FSORD)** page.

- Enter the subject of the inquiry into the **Subject** text field.
With proper user permissions, the list can be modified. If the logged in user does not have permissions, then the **Popup Maintenance** window will not appear.

8.  Click the arrow in the **Other** field to select the value. This field is used for any additional user information.
9.  Type the value in the **Other 2** field.
    This field is used for any additional user information.

10.  Click **Save**.
    After the inquiry is saved and if either the **RMA** or **Field Service** option is selected, the **RMA** or **Field Service** will be available.

    -  Select **At a Glance** > **Actions** > **RMA** to open the **RMA** page and assign a Return Material Authorization number.

        See the Help topic "**Add an RMA**".

    - Select **At a Glance** > **Actions** > **Field Service** to open the **Field Service** page and assign a service order number.

        See the Help topic "**Add a Service Order**".