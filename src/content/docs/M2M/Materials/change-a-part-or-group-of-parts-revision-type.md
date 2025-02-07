---

title: "Change a part or group of parts' revision type"
draft: false
type: Article

---

Use the **Revision Type Mass Change** page to change the revision type for a part or a group of parts. You can change existing parts from standard revision numbers to *user-defined revision numbers*. 

To help you decide which parts or groups of parts for which you wish to change the revision type, you can view or print a report of parts with multiple revisions.

Parts using user-defined revision numbers are not eligible for *Engineering Change Management (ECM) (A feature of Made2Manage that manages the process of engineering changes in standard item records. It provides a way to control changes you make to item masters, standard routings and bills of material; and lets you track changes to item masters, sales orders, quotes, purchase orders, bills of material, and routings.)* and do not create a *revision history Information about when and why you made changes to some kinds of information in Made2Manage.*.

**To change a part or group of parts' revision type**

1. Open the Revision Type Mass Change (INRTMC) page.

    - Select **Production Management** > **Master Data** > **Revision Type Mass Change**.

    Or

    - Search for **INRTMC** or **Revision Type Mass Changer** in the **Navigation box** and then select **Revision Type Mass Change.**

        The **Revision Type Mass Change (INRTMC)** page appears.

2. To enable the records on this page, select **Allow User-Defined Revision Numbers** check box from the **ECM** tab in the **Production (CSPROD)** page. All the records on **Revision Type Mass Change (INRTMC)** page are enabled.

3. In the **Revision Type** area, perform one of the following:

    - Click **From Standard to User-Defined**, to change the revision type from standard to user-defined.

    - Click **From User-Defined to Standard**, to change the revision type from user-defined to standard.

4. Specify the parts to change:

| To change...                                                                                                                                                                                                                                          | Do this...                                                                                                                                                                                                                                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| All parts in a *production A categorization applied to products that makes it easier to track job costs, profitability, and revenue inflow of assets resulting from sales to customers.*.                                                             | Perform the following: <ol><li> Select **Product Class**. <li> Click the **Product Class** Lookup Reference, and select the product class. <li> On the **Toolbar**, click **Save** to change the revision type.                                                                                                                                                                                                 |
| All parts in a *group code A code for categorizing products within a product class or for categorizing inventory or sales*.                                                                                                                           | Perform the following: <ol><li> Select **Group Code**. <li> Click the **Group Code** Lookup Reference, and select the *group code (Also called group classification code) A code for categorizing products within a product class or for categorizing inventory or sales.*. <li> On the **Toolbar**, click **Save** to change the revision type.                                                                |
| All parts at a *facility A place where manufacturing activity takes place, material and/or parts are stored, or from where parts are distributed. A facility is typically large, such as a site, a building, or a set of buildings at one location.*. | Perform the following: <ol><li> Select **Facility**. <li> In the **Facility** list, select the facility. <li> On the **Toolbar**, click **Save** to change the revision type.                                                                                                                                                                                                                                   |
| A range of parts.                                                                                                                                                                                                                                     | Perform the following: <ol><li> Select **Range Of Parts**. <li> Click the **From** Lookup Reference and select the first part. <li> Click the **To** Lookup Reference and select the last part. <li> On the **Toolbar**, click **Save** to change the revision type.                                                                                                                                              |
| A single part.                                                                                                                                                                                                                                        | Perform the following: <ol><li> Select **Part Mover**. <li> In the **Selected Parts** section, click **Select Parts.**  The **Copying Item Master** window appears. <li> Select the items to include, and click **Select**.  The selected items appear in the **Selected Parts** section of the **Revision Type Mass Change (INRTMC)** page. <li> On the **Toolbar**, click **Save** to change the revision type. |

|

​