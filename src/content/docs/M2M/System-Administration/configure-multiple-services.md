---
title: "Service Configuration (SVCCONF) page"
draft: false
type: Article
---

*See Also*

Use the **Service Configuration (SVCCONF)** page to install and configure services that help to:

- **Share files over a company's network drive:**

    Access the files on your company's shared folder directly on Made2Manage through the FileShare Service. External users of Made2Manage who don't use LAN or VPN cannot view or download files. You can configure multiple shared folder paths for a company, but only one FileShare Service for its tenant.

    After installation, the service adds a URL in your local Internet Information Services (IIS) web server. This URL acts as a gateway that accesses the shared folder.

- **Connect to and configure a local or network printer:**

    Print Made2Manage documents on your computer's local or network printer using the Aptean Print Service. To use this cloud printing service, download and install the Aptean Print Agent on your computer.

    During tenant onboarding, the Aptean Services team creates an account for the Aptean Print Service. This account number and its agent key then appear on the **Service Configuration (SVCCONF)** page. All users of this tenant use these account details to install the Aptean Print Agent.

    >[!NOTE]For more information about installing the Aptean Print Agent, see the Installing Printer Agent installation guide.

    After installing the Aptean Print Agent, customize a printer in the **Service Configuration (SVCCONF)** page by adding properties. A printer property defines how a printer prints a document. The properties that you define modify the user interface of and appear as fields in the **Printer Settings** window of a printer in the **Printer Setup** window.

- **Integrate with the UPS WorldShip and FedEx Ship Manager desktop applications:**

    Made2Manage now uses the Aptean Shipper Sync Service instead of an ODBC connection to sync shipper data. This service creates a local database with tables on your computer for each company. One table per shipping vendor (UPS or FedEx) receives and stores outgoing data from Made2Manage, and another table stores incoming shipping data (e.g. tracking numbers).

    These tables connect to the UPS WorldShip and FedEx Ship Manager desktop applications. Aptean Shipper Sync Service makes a request to Made2Manage to retrieve shipper data that the service inserts in the outgoing table. The shipping vendor application then processes this data and sends back the tracking numbers. The service then inserts the incoming shipping data in the incoming table for processing by Made2Manage.

    Install and configure the Aptean Shipper Sync Service. It automatically starts to make requests for shipper data depending upon the configured interval.

    >[!NOTE]For more information about installing the Aptean Shipper Sync Service, see the Shipper Sync Installation installation guide.

    >[!NOTE]Only users who have appropriate permissions for the **Service Configuration (SVCCONF)** page can configure the services. Usually, Made2Manage administrators are assigned all permissions for the **Service Configuration (SVCCONF)** page.

### To manage a shared file path

1. Open the Service Configuration (SVCCONF) page.

    1. Select **Utilities** > **Maintenance** > **Service Configuration**.

    Or

    2. Search for **SVCCONF** or **Service Configuration** in the **Navigation box** and then select **Service Configuration**.

    **Service Configuration (SVCCONF)** page appears.

2. Click the **File Path** tab.

    >[!IMPORTANT]Ensure that you've installed the FileShare Service on your computer. For more information about installing the FileShare Service, see the Fileshare Service Installation installation guide.

3. In the **Service URL** field, paste the service URL from your local IIS.

    >[!NOTE]For more information about acquiring the service URL, see [Retrieve service URL from IIS](retrieve-service-url-from-iis.md).

4. Click **Test Connection** beside the **Service URL** field.

    If you have correctly configured the FileShare Service, a message, *Test Connection Successful.* appears.

5. Click **OK**.

6. Add a new shared file path:

    1. On the grid toolbar, click **New**.

    Made2Manage adds a new row in the grid.

    2. Perform the following:

        - Click the **Company** Lookup Reference, and from the **Lookup For Company** window, double-click the required company.

            If you select **All Companies**, Made2Manage assigns this path to all the companies for this tenant.

        - In the **File Path** field, type the shared file path.

        - Click **Test Connection** beside the **File Path** field.

            The URL in the **Service URL** field checks the validity of the file path.

            If the path is valid, the message, *Test Connection Successful.* appears.

        - Click **OK**.

    3. On the **Toolbar**, click **Save**.

    4. To add more shared file paths, repeat steps 12a to 12c.

7. Edit a shared file path's details:

    1. Select the required row that contains the shared file path.

        Made2Manage enters the values of that row from the grid into the respective fields at the bottom of the grid.

    2. Edit the values in the **Company** and **File Path** fields.

    3. Click **Test Connection** beside the **File Path** field.

        The URL in the **Service URL** field checks the validity of the file path.

        If the path is valid, the message, *Test Connection Successful.* appears.

    4. Click **OK**.

    5. On the **Toolbar**, click **Save**.

8. Delete a shared file path:

    1. In the grid, under the **Action** column, click the Delete icon of the required file path to delete.

        A message, *Preparing to delete this information. Are you sure?* appears.

    2. Click **OK**.

    3. On the **Toolbar**, click **Save**.

### To manage a printer's properties

1. Open the Service Configuration (SVCCONF) page.

    1. Select **Utilities** \> **Maintenance** \> **Service Configuration**.

    Or

    2. Search for **SVCCONF** or **Service Configuration** in the **Navigation box** and then select **Service Configuration**.

        **Service Configuration (SVCCONF)** page appears.

2. Click the **Printers** tab.

3. Add a new property:

    >[!IMPORTANT]Ensure that you've installed the Aptean Print Agent on your computer. For more information about installing the Aptean Print Agent, see the Installing Printer Agent installation guide.

    1. On the grid toolbar, click **New**.

        Made2Manage adds a new row in the grid.

    2. Perform the following:

        - In the **Key** field, type the name of the property.

        - In the **Type** list, select a data type for the property.

            >[!NOTE]A parent property uses the **complex** data type.

        - In the **Caption** field, type the property's equivalent user-friendly name that you want to see in the **Printer Settings** window.

    3. On the **Toolbar**, click **Save**.

    4. To add more properties, repeat steps 3a to 3c.

4. Add a new child property:

    1. In the grid select the required row of an existing property.

    2. On the grid toolbar, click **Add Child**.

        Made2Manage adds a new row below the selected row.

    3. Repeat steps 3b and 3c.

        Made2Manage creates the child property within the existing property. Expand the existing or parent property to see the child property.

        >[!NOTE]A property that you add applies to all printers for a tenant.

5. Edit a property:

    1. Select the required row of an existing property or an existing child property.

        Made2Manage enters the values of that property's row from the grid into the respective fields at the bottom of the grid.

    2. Modify the values in the **Key**, **Type**, and **Caption** fields.

    3. On the **Toolbar**, click **Save**.

6. Delete a property:

    1. In the grid, under the **Action** column, click the Delete icon of the required property to delete.

    2. On the **Toolbar**, click **Save**.