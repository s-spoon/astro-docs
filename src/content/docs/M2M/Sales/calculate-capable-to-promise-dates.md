---

title: "Calculate capable to promise dates"
draft: false
type: Article

---

Use the **Capable to Promise** (**CTP)** window to quickly determine if you have enough goods on hand to supply to a customer, and if not, when they will be available. The CTP date and ATP quantity returned from this window are not saved or sent anywhere else in Made2Manage or Advanced Scheduling and/or Planning. This window is provided so you can retrieve accurate information quickly.

**To calculate capable to promise dates**

1. Open the **CTP by Part (CTP)** page.

    a. Select **Planning and Scheduling** > **P&S Production** > **Scheduling** > **CTP by Part**.

    Or

    b. Search for **CTP** in the **Navigation box** and then select **CTP by Part**.

    The **CTP by Part (CTP)** page appears.

    In order to use the Made2Manage CTP functionality, you must have the Planning and Scheduling server installed and running.

2. Click the **Facility** dropdown and select the facility from the list.

    a. Click the **Part Number** lookup reference.

    The **Lookup For Part Number** window appears.

    b. Select the required row and click **Select**.

    c. Select a part number.

    Click **Cancel** to exit from the **Lookup For Part Number** window.

    You should only select a standard part that has a defined routing. If the part you select does not have a standard routing, when you click the **Calculate CTP dates**, a message will display indicating that no operations are defined for the part.

3. The **Facility**, **Part Number**, and **Revision** display in the grid below, and cannot be changed. Type the following information in the grid to calculate the capable to promise dates:

    a. In the **Quantity** box, enter the quantity of the item the client is requesting.

    b. In the **Request Date** box, enter the date you need to have the customer items. The current system date defaults, but you should change it to indicate the customer’s need date.

4. Click the **Calculate CTP Date** to calculate the following:

    - **CTP Date** – The date that you can promise your client all of the items requested.

    - ATP **Quantity** – The quantity currently available that you can promise to the customer.

5. Click **Clear** to clear the information currently displayed. You must clear the information if you want to enter a different quantity, date, or part number.

6. Click the **CTP Audit** to display the **Audit File report**. You can review this report to see the actions taken by Planning and Scheduling. This report is similar to the one available in Advanced Planning/Advanced Scheduling.

​