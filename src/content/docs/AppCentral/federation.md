---
title: "Federation"
draft: false
type: Article
---

To log in to AppCentral, you can use either AppCentral IAM (Identity and Access Management) or you are an existing IAM system. 

 You can integrate an External Identity Provider (example Azure AD B2C) with Aptean AppCentral for user federation. You can configure the external provider, integrate it with Aptean IAM, and migrate users.  

Only admins can import and synchronize users from the IAM to Aptean Appcentral.  

The following table describes the Field and Description on the Federation tab: 


| Field| Description|
|--|--|
| Name |Displays the Federation name |
| SSO Connection  |Displays whether the SSO connection is **OpenID Connect**|
| Identify Provider  |Displays the IAM from which the user is imported.|
|Reload	|Click to refresh and reload the information|
|Create Identity Provider|Click to create an Identity Provider in Aptean AppCentral. For more information, see [Create Identity Provider in AppCentral](federation.md#create-identity-provider-in-appcentral). |

### External Identity Integration with Aptean AppCentral 

To integrate external identity provider with Aptean Appcentral, you must perform the following: 

#### Set up the External Identity Provider  

1. Register the Aptean IAM application in your External Identity. 

2. Set up the following fields in the External Identity Provider: 

    -   Application/Client ID 

    -   Client Secret 

    -   Discovery Endpoint URL 

3. Copy the URL of the discovery endpoint. 

#### Create Identity Provider in AppCentral 

1. In the Aptean AppCentral Web UI, navigate to **User Center > Access Management > Federation**. 

2. Click New Identity Provider.  <br> The **Create Identity Provider** window appears. 

3. In the Create Identity Provider window, enter the required information in the mandatory fields: 

    -   **Name**: Enter an appropriate name in the text field. 

    -   **SSO Connection**: By default, Open ID is selected from the drop-down list to enable Single Sign-On (SSO) functionality. 

4. In the Open ID Connect Connection section: 

    -  **Identity Provider**: Choose the External Identity Provider (example Microsoft Entra, Azure) from which user data will be imported and synchronized into AppCentral. 
    
    - **Discovery Endpoint**: Enter the URL of the discovery document for the OpenID  
     Connect External Identity Provider you want to connect with. 

    - **Client ID**: Enter the client ID of your External Identity Provider.
        >[!Note] Access required to allow user login and also allow query access for Users, Groups, and Applications.

    -   **Client Secret**: Enter Client Secret of your External Identity Providers. 

5. **Callback URL**: After entering the identity provider details, a callback URL is auto generated. Copy this URL and enter it into the external Identity Provider for redirection after a successful login. 

6. After entering the required information, click Submit.  
     You can monitor the progress of user import and synchronization. 

### Migrate Users 

-   Migrate users from the external Identity Provider to Aptean IAM. 

-   After migration, users can log in by entering their email ID in Aptean IAM. This will redirect them to the external Identity Provider, and after successful login, they will be redirected to the Aptean AppCentral home page. 

