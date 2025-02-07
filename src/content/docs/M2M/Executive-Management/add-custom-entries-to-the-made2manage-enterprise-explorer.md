---

title: "Add custom entries to the Made2Manage Enterprise Explorer window"
draft: false
type: Article

---

Use the **Made2Manage Explorer Setup (CSEXPLOR)** window to add custom entries in the **Made2Manage Enterprise Explorer** window.

**To add custom entries to the Made2Manage Enterprise Explorer window**

1.  Open the **Made2Manage Explorer Setup (CSEXPLOR)** page.

    1. Select **Executive Information System** > **Explorer** > **Made2Manage Explorer Setup**.

    Or

    2.  Search for **CSEXPLOR** in the **Navigation box** and then select **Made2Manage Explorer Setup**.
    
    The **Made2Manage Explorer Setup (CSEXPLOR)** page appears.

2.  In the **Parent** section, specify the parent details:

    1.  On the **Toolbar**, click **Browse**

        The **Browse For Made2Manage Explorer Setup** window appears.

    2.  Select a row and click **Select**.

        In the **Description** box, the name of the parent window is displayed.

        In the **Object Name** box, the business object or entity set name of the parent as defined in the **UTSEC** table is displayed. For example, **SHIPPING** is displayed for the **SHIPPING** window.

        In the **Entity Name** box, the table name is displayed. For example, **shmast**.

        In the **Key Fields** box, the fields are displayed. For example, fshipno.

        In the **Filter** box, filter expression is displayed.

3.  In the **Child** section, specify the child details:

    1.  On the child toolbar, click **New**.

    2.  In the **Description** box, enter the name of the child window. For example, type **Customer Invoices and Credit Memo** to view the invoices associated with the parent document, say a shipper.

    3.  In the **Object Name** box, the business object or entity set name of the parent as defined in the **UTSEC** table. For example, type **CustomerInvoicesCreditMemo**.

    4.  In the **Entity Name** box, enter the table name. For example, type armast.

    5.  In the **Key Fields** box, enter the names of the fields you want to view in the **Made2Manage Enterprise Explorer** window. For example, type **fcinvoice**.

    > [Tip] Seperate the field names with a comma to include more than one field. 

    6.  In the **Filter** field, type the filter expression that relates the child document with the parent document. For example, to find the invoice associated with a shipper that has multiple items, you must link the shipper number in the **armast** table with that of the **shmast** table. So, enter the expression **fnumber=shmast.fshipno** in the **Filter** field.

    7.  Select the **Is Child** checkbox if the entity is a child of the parent object.

4.  On the **Toolbar**, click **Save**. The data is saved.

