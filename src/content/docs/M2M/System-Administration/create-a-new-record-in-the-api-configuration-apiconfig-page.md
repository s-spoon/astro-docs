---
title: "Create a new record in the API Configuration (APICONFIG) page"
draft: false
type: Article
---

You can create a new record in the APICONFIG page to enable web API access to remote web applications (clients or third-party applications). You can specify the appropriate permissions based on the Object Name.

### To create a new record in APICONFIG page for web API access to remote web applications

1. Open the **API Configuration (APICONFIG)** page.

    1. Select **Utilities** > **Company Setup** > **Module Setup** > **M2M WEB API > API Configuration.**

    Or

    2. Search for **APICONFIG** in the **Navigation box** and then select **API Configuration.**

    **API Configuration (APICONFIG)** page appears.

2. On the **Toolbar**, click **New** to create a new record.

3. In the **Company ID** list, select a company's ID.

4. In the **Object Name** field, type a business object name.

    Or, click the Lookup Reference, and in the **Lookup For Object Name** window, select a row for the required object name, and click **Select**.

    The database tables associated with the selected Object are displayed in the **Schema Information** tab.

    The default messages that are displayed during the actions performed by API for the selected Object are displayed in the **Message Keys** tab.

5. In the **Permissions** section, select the check box that corresponds to each operation permitted on the Object by API.

6. In the **Schema Information** tab, select the check box to include the entity associated with the Object in the API response.

7. In the right pane, select the check box to include the fields associated with the entity in the API response.

8. Click **Client Configuration**.

    The **Client Configuration** window appears.

9. In the **Client Configuration** window, specify the **Client Name**, **Grant Type** and M2M login details.

    For more information on individual fields in the screen, see [Field Description](#field-description).

10. Click **Save** to save the record.

### Field Description

Click here to view the details of the fields in the screen.

| Field | Description/Action                                             
|---|---|
 **Header Fields**                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                 |
| Company ID                                                                                                                                                             | Select the required company from this list. Select the company 00 if you want the configuration to be applied for all the companies.                                                                                                                                                                            |
| Object Name                                                                                                                                                            | Type a name Or click the Lookup Reference to select the Business Object Name.                                              
| >|**Client Configuration**: Click on this button to open the **Client Configuration** window                                            
| Client Name                                                                                                                                                            | Type a name Or click the Lookup Reference to select the client name. By default, some client names are displayed. To create a new client, use the **Client Information (APICLIENT)** window. For more information on creating a new client, see Client information.                             |
| Enabled                                                                                                                                                                | Select this check box to enable the client. Clear this check box to disable the client.                                                                                                                                                                                                                         |
| Grant Type                                                                                                                                                             | Select the grant type from the list. **CLIENTCREDENTIALS**: Select this option to allow an application to request an access token using the specific M2M user login.  **RESOURCEOWNER**: Select this option to allow an end user to request an access token using their individual M2M User Name and Password.  |
| User Name                                                                                                                                                              | This field is enabled only when the **Grant Type** is CLIENTCREDENTIALS. Type a username Or click the Lookup Reference to select the M2M user login which will be used for all transactions processed through the API.                                                                                          |
| Access Token Lifetime                                                                                                                                                  | Specify the maximum time (in seconds) for the access token to be valid.                                                                                                                                                                                                                                         |
| Password                                                                                                                                                               | Specify the client password. The client password must have minimum of 6 characters, 1 uppercase, 1 lower case, 1 numeric, and 1 special character.                                                                                                                                                              |
| >|**Permissions** You can specify the operations permitted on the Object by API.                                                                                         |                                                                                                                                                                                                                                                                                                                 |
| GET                                                                                                                                                                    | Read - Used to retrieve resource representation/information only.                                                                                                                                                                                                                                               |
| POST                                                                                                                                                                   |  Write - Used to create new subordinate resources.                                                                                                                                                                                                                                                              |
| PUT                                                                                                                                                                    | Update/Replace - Used to update existing resource (if the resource does not exist then API may decide to create a new resource or not).                                                                                                                                                                         |
| DELETE                                                                                                                                                                 | Delete - Used to delete resources.                                                                                                                                                                                                                                                                              |
| >|**Grid Tabs**                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                 |
|  >|**Schema Information**  Displays the corresponding database tables associated for the selected Object. Select/clear the entities based on the requirement.            |                                                                                                                                                                                                                                                                                                                 |
| Select                                                                                                                                                                 | Select this check box to include the entity in the API response.                                                                                                                                                                                                                                                |
| Entity Name                                                                                                                                                            | Represents a table name associated with the **Object**.                                                                                                                                                                                                                                                         |
| Friendly Name                                                                                                                                                          | User-friendly name for entity that comes up in the API response.                                                                                                                                                                                                                                                |
| Description                                                                                                                                                            | Short description about the corresponding entity.                                                                                                                                                                                                                                                               |
| >|The fields corresponding to the selected Entity are displayed in the right pane. Select/clear the fields based on the requirement.                                     |                                                                                                                                                                                                                                                                                                                 |
| Select                                                                                                                                                                 | Select this check box to include the field in the API response.                                                                                                                                                                                                                                                 |
| Include in Summary                                                                                                                                                     | Select this check box to include the fields which belong to a nested collection in the API response. By default, this check box is disabled. It gets enabled when the **API Enabled** check box is selected for the corresponding field.                                                                        |
| Field Name                                                                                                                                                             | Represents field name associated with the selected **Entity**.                                                                                                                                                                                                                                                  |
| Friendly Name                                                                                                                                                          | User-friendly name for the field that comes up in the API response.                                                                                                                                                                                                                                             |
| Is Required                                                                                                                                                            | An identifier which indicates whether the field is mandatory or not. This field is not editable for **Standard** fields.                                                                                                                                                                                        |
|>| **Message Keys**  Lists all the default messages that are displayed during the actions performed by API for the selected Object. You can edit any message as required. |                                                                                                                                                                                                                                                                                                                 |
| Keys                                                                                                                                                                   | Represents identifier associated with corresponding **Message**.                                                                                                                                                                                                                                                |
| Message                                                                                                                                                                | Represents the messages that are displayed based on the actions performed by API for the selected Object.                                                                                                                                                                                                       |
| Value                                                                                                                                                                  | This field represents the select options available for the user, in order to continue API execution.                                                                                                                                                                                                            |

>[!NOTE] **Company ID**, **Object Name** and **Client Name** configured on the **APICONFIG** screen will be used while building the API request.