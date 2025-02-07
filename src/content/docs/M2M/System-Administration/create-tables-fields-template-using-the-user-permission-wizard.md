---
title: "Create tables fields template using the User Permission Wizard"
draft: false
type: Article
---

Using the **User Permission Wizard** **(PERMWIZ)** page, you can create a list of tables and fields that can be used for assigning permissions.

You can open any Made2Manage page and drag the non-mandatory fields to create a template.

### To create the tables fields template for assigning permissions

1. Open the **User Permission Wizard (PERMWIZ)** page.

    1. Select **Utilities** > **Maintenance** > **User Permission Wizard**.

    Or

    2. Search for **PERMWIZ** or **User Permission Wizard** in the **Navigation box** and then select **User Permission Wizard.**

    **User Permission Wizard (PERMWIZ)** page appears.

2. Click the **Tables Fields Template** tab.

    The left pane displays a grid under the **Tables** section, and the right pane a grid under the **Fields** section.

3. To add fields or tables:

    - Drag the required fields to either the grid under the **Tables** or the **Fields** section.

        You can only drag non-mandatory fields.

        When you drop a field to the grid under the **Tables** section, you can view the corresponding window mnemonic at the folder level with the table name under the folder.

        For example, when you drop the **Selling Price** field from the **Item Master (INV)** page to the grid under the **Tables** section, Made2Manage adds the entry **INV** \> **inmast** to the grid under the **Tables** section.

        When you drop a field to the grid under the **Fields** section, Made2Manage adds the field under the \<Window mnemonic\> > \<Table\> folder. For example, when you drop the **Selling Price** field from the **Item Master (INV)** page to the grid under the **Fields** section, Made2Manage adds the entry **INV** > **inmast** > **fprice** to the grid under the **Fields** section.

4. To remove a table entry from the template:

    1. Select the row in this group.

    2. Under the **Action** column, click the ellipsis.

    3. Select **Grid Accessories** > **Grid Actions** > **Remove Table(s) from Template**.

        Deleting a table entry in the template removes the table permission information setup in the **User Table Permission** page. Deleting a table entry that has child entries deletes the child entries also.

5. To remove a field from the template:

    1. Select the row in this group.

    2. Under the **Action** column, click the ellipsis.

    3. Select **Grid Accessories** > **Grid Actions** > **Remove Field(s) from Template**.

        Deleting a field entry in the template removes the corresponding field permission information setup in the **User Field Permission** page.

6. On the **Toolbar**, click:

    - **Save**: To save the changes and remain in the wizard.

    - **Save & Continue**: To save the changes and move to the next tab of the **User Permission Wizard (PERMWIZ)** page.

    - **Cancel**: To discard the changes.

>[!NOTE] Restart Made2Manage if you have made any changes on the **User Permission Wizard (PERMWIZ)** page.