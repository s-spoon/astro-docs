---
title: "Configure the Made2Manage–uniPoint Integration"
draft: false
type: Article 
---

The Made2Manage–uniPoint integration helps you to eliminate redundant data entry and leverage your Made2Manage data. After configuring uniPoint for the Made2Manage–uniPoint integration, you must specify the uniPoint database and the folder path in Made2Manage. Use the **Quality (CSQUAL)** window to specify these values.

>[!Note] Refer to the Made2Manage-uniPoint Integration Guide for more information about configuring uniPoint for the Made2Manage–uniPoint integration.

>[!Important] You must have adequate permissions for the Quality (CSQUAL) window to perform this configuration.

## To configure Made2Manage for the integration

1.  Open the **Quality (CSQUAL)** page.
    -  Select **Utilities** > **Company Setup** > **Module Setup** > **Quality**.

        Or

    -  Search for **CSQUAL** in the **Navigation box** and then select **Quality** . <br> The **Quality (CSQUAL)** page appears.

2.  Ensure that you have opened the company whose database you want to map to uniPoint.
3.  In the **UniPoint Database** field, type the name of the uniPoint database that you have setup for integration with the current open company.
If uniPoint is installed in a Server that is different from the one in which Made2Manage Server component is installed, prefix the uniPoint database name with the Server path.

4.  Specify the folder in which uniPoint is installed:
    1.  Click the **UniPoint Folder Path** Select File button.
    2.  In the **Browse For Folder** window, select the folder.
    3.  Click **OK**.
5.  Verify your settings:
    1.  Click **Test Connection**.

        If the connection is successful, the message "Connection Successful" displays.

    2.  Click **Close** to close the message window.

        >[!Note] If the connection fails, an appropriate error message displays. Note the error message and take appropriate action. Then reconfigure the settings in Made2Manage.

6.  Close the **Quality (CSQUAL)** window.