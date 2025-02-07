---
title: "Advanced Configurator Portal Setup"
draft: false
type: Article
---

The **Advanced Configurator portal** is a web-based version of the **Advanced
Configurator logic**. The portal can be executed from any browser and is
provided using Java technology.

## User Login

1. Launch the **Advanced Configurator Login** page. 
<br>

http://<csportal server name/CSE/CSE
>[!Note]: The **Servlet Context** portion of the URL is case sensitive.  
  
2. Enter the **Username** and **Password**, and click **< Login>**. On a new installation, use the following login information.

- **User ID**: admin
  
- **Password**: admin 

  
The successful entry of this login establishes the security authorizations and parameters required for database connections, especially if multiple data environments are present. 


  
  
**A**. Enter your **User Name** and **Password**.

**B**. Click Login or press Enter.

**C**. Select the check box to launch the application as a new browser.

**D**. This is the recommended Microsoft® Internet Explorer® level and screen
display resolution for reference information.

**E**. Displays the current release level for Advanced Configurator.

**F**. The languages available for selection in Advanced Configurator. You can select the desired language through user preferences after logging in.

**Home page**



**A**. This is the Internet Explorer menu bar used where you select the new browser option from the login screen (recommended).

**B**. This is the Applications menu.

**C**. The information for the current user logged into the software.

**D**. This drop-down list displays all available product IDs and is available to quickly launch a configuration session.

3. From the **Enterprise Setup** menu, select **Rule Maintenance**.



The **Rule Maintenance** selection opens the **Maintenance** menu.

4. Select **Administration** and point to **Data Set Definition**.

5. Perform any one of the following:

- If you already have the data set configured for Made2Manage, then you need to reconfigure the data set. Verify the details in the rest of the fields and click **Test Connection**.  
  
    OR  
  
- If there is no data set configured for Made2Manage then you will have to create a new data set. Follow these steps:  
  
    | » | Click ![](../assets/advanced-configurator/iuserlogin11.png) on the header.

The definition of a data set includes the following:

Field |  Description  
---|---  
New Data Set |  Enter the name of data set.  
DB Name |  Name of Made2Manage company database.  
DB Type |  Displays the name of the database used.  
User ID |  SQL Server User ID used to access M2M Company database  
Password |  SQL Server Password used to access M2M Company database.  
Port |  Port to access M2M Company database SQL Server, by default it is 1433.  
Host |  Name of the machine hosting SQL Server.  
Comments |  General description of the data set.  
Pooling Type |  By default, the Pooling Type is 'No Pooling'. Retain the default value.  
  
6. Click **Test Connection** 
![](../assets/advanced-configurator/iuserlogin1.png)

7. Click **Save** ![](../assets/advanced-configurator/iuserlogin2.png) to keep the information.

    >[!Note]:Ensure that Now you need to verify whether the ELTxxx tables exists in Table Definitions (eltbom, elthdr, eltitm, eltrtg)    
  
8. Click [Table Definitions
](https://apteanonline.sharepoint.com/sites/AI/EXT%20Product/DocFactory/WordDocuments/Glossary_of_Manufacturing_and_Made2Manage_terms.htm#TableDefinition)menu

9. In the **Table list for Development** , you will find a list of tables

- If **ELTxxx** tables exists, then click on the table and verify the data set name.  
 
- If **ELTxxx** tables does not exist, then follow these steps to add a new table to the existing list.  

  
**To set up Table Definition**

1. Click **New**.

2. Enter the table name in the **Table Name** field.

3. Click the  arrow to select the **Data Set** from the list. The data set is defined in the **Data Set Definition**.

4. Map each one of the **ETL tables** from the **Table list of Development** (**eltbom**, **elthdr**, **eltitm**, **eltrtg**) with the **Data Set**.

5. Click **Save** ![](../assets/advanced-configurator/iuserlogin2.png).

    >[!Note]:Restart the system to consider these changes or contact **CS support** for assistance.
  
  
<br>**Setting up M2M Advanced Quote Management**

<br>9. Click the **Home** tab. From the **Application** menu, select **M2M Advanced Quote**. **Welcome to M2M Advanced Quotes** screen appears.

10. Locate the **Quote Mgmt Folders** and click **General**.


<br>Alternatively, on the left panel, under the **M2M Advanced Quote Management** menu, under **quote_management** option, click **General**.

You will find the following options on top of the screen.

|Field | Description  
---|---  
New|  Select New to launch a new quote entry.  
Delete |  Select the checkbox on the left column for the quotes that are set for deletion.  
Archive |  The **M2M Advanced Quote** offers quote archiving. The archive process moves a quote file from the active quote database tables to archive tables.  
Search Setup |  Provide extensive search capabilities for quotes. The selected folder displays in the upper right-hand corner of the screen. In this case, all quotes  contained in the selected folder display.  
  
The options perform the following tasks -

Icon  |  Description  
---|---  
![](../assets/advanced-configurator/iuserlogin3.png) |  **View** - Click this to view the quote.  
![](../assets/advanced-configurator/iuserlogin4.png)|  **Edit** - Allows you make the required changes.  
![](../assets/advanced-configurator/iuserlogin3.png)|  **Copy** - This function creates a new quote with fields populated as per the copied quote.  
![](../assets/advanced-configurator/iuserlogin5.png) |  **DL** - Click this to download quote.  
![](../assets/advanced-configurator/iuserlogin6.png) |  **DL successful** - The automatically turns Green signifying that the quote is downloaded successfully.  
![](../assets/advanced-configurator/iuserlogin7.png) |  **Docs** - Allows you to either attach a File or an URL.  
![](../assets/advanced-configurator/iuserlogin8.png) |  **Print** - Reports defined through Report Maintenance are executed by selecting the PRINT icon next to the product number, quote number, and/or line number.  
![](../assets/advanced-configurator/iuserlogin9.png) |  **Revision** - The number generator automatically assigns the quote number. A revision number must be manually added. If the quote is associated with a project, select the applicable project or sub-project from the drop-down list.The number generator automatically assigns the  **Quote Number**. A revision number must be manually added.  
  
11. Click **Download Quote**.

Click **Cancel** to return to **Quote Management**.  
 
A message "Quote Number: Qxxxx with Revision 1 was downloaded successfully.  
  
  
The changed item is highlighted in yellow:

With this, the **Quote/SO** is downloaded to **eltxxx** (**eltbom**,**elthdr**, **eltitm**, and **eltrtg**) tables.

Made2Manage picks data from these ELT tables and imports them as SO/QUOTE depending on the prefix.  


