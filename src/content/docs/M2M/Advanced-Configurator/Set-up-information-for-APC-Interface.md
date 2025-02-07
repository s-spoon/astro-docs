---
title: "Set-up-information-for-APC-Interface"
draft: false
type: Article
---

The Made2Manage Advanced Configurator provides the power to handle the most complex configurations while allowing the average user to create rules, formulas, and custom input screens. You must set up the Advanced Configurator interface before running it. Use the**Admin Utility** page to specify all the information needed for the interface.

## To set up the information for API Interface

1.  Log in to the **Admin Utility** page.   
 
2.  On the menu pane, click **Tenant**.  
  
    The Tenant page displays the list of tenants.   
  
3. Select the tenant from the list.  
  
    The tenant details along with the associated companies details appears.  
 
4. Select the company from the list under the **Companies** tab.  
  
    The companies page appears, if APC is enabled on the license, the Toolbar displays **ConfigureAPC** button.  
 
5. On the Toolbar ,Click **ConfigureAPC**.  
  The **Configure APC** window appears.

6. Set up the interface:  
  
    a.  In the **CS Portal Server** field, type the server name.  
 
    For example, **SERVER**.  
  
    The **Servlet Suffix** **(Advanced Configurator Server Suffix)** field is automatically populated. This is an optional field. The Servlet Suffix is appended to the end of the configuration request URL.   

    For example, **& PRODUCT_ID=CMPX&RETURL=HTTPS://<<CS Portal Servername>>/CSE/WEB/JSP/HTML_TEMPLATES/CLOSE_BROWSER.JSP**  
 
    b. In the **Servlet URL** field, type the Advanced Configurator server URL.  
  
    For example, https://<csportal server name/CSE/CSE>  
  
7.  Click **Save**.  


