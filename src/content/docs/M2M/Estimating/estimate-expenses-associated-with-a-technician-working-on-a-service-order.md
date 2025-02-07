---

title: "Estimate expenses associated with a technician working on a service order"
draft: false


---

You can create expenses for individual technicians assigned to service orders by adding the expected costs for each listed expense. Use the **Estimated Technician Expenses** window to put in the expected costs for each listed expense.



## To estimate expenses associated with a technician working on a service order

1.  Open the **Field Service Control (FSORD)** page.

    -  Select **Customer Relationship Management** > **CRM Transactions** > **Field Service**> **Field Service Control**.

    Or

    -  *Search for* **FSORD** *or* **Field Service Control** *in the* **Navigation box** *and then select* **Field Service Control**.

       The **Field Service Control (FSORD)** *page appears.*

2.  On the **Toolbar**, click **More Actions**.

3.  Select **More Actions** > **Actions** > **Service Order Estimated Costs**. The **Service Order Estimated Costs (FSEST)** page appears.

4.  To enter technician information associated with the expenses:

    1.  Select More Actions > Actions > Estimated Technician Expenses.
        1.  Click **New**. The assigned field-service technician's name (if one exists) and the expected delivery date of the service appear in the appropriate boxes.

    2.  If you want to change to another technician, enter the technician’s initials in the **Technician** box.

    3.  To change the travel dates, enter changes as needed in the **Travel From & To** boxes.

    4.  Type any additional notes in the **Notes** box.

    5.  Click **Save**.

3.  To enter the expenses for each category:

    1.  Select technician in the grid, click the ellipsis under the **Action**

    column.

    2.  Select **Grid Actions** > **Expense Details**. The **Expense Details** popup appears.

        **Rate/mile** defaults from **Default Mileage Amount** setup in **Field Service Setup Information (CSFSM)**, you can change it here if you need to use a different rate.

    2.  Enter estimated number of miles in **Miles @ rate/mile**, **Mileage Amount** will calculate automatically.

    3.  Enter estimated expense in fields for each date & category.

    4.  Click **Save**.

        If you want to clear all expenses entered, open **Expense Details** popup, click **Clear Expenses** button.

        The system fills in the information in the table on the **Estimated Technician Expenses** page. Close this page and the system updates the **Service Order Estimated Costs** page with the total cost of all the individual technician expenses recorded.