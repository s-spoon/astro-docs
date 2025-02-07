---
title: "Retrieve service URL from IIS"
draft: false
type: Article
---

After you install the FileShare Service, the service adds a URL in your local Internet Information Services (IIS) web server. This URL acts as a gateway that accesses the shared folder. You need to copy this URL from your local IIS into the **Service URL** field in the **File Path** tab of the **Service Configuration (SVCCONF)** page.

### To retrieve service URL from IIS

>[!IMPORTANT] Ensure that you've installed the FileShare Service on your computer. For more information about installing the FileShare Service, see the Fileshare Service Installation installation guide.

1. On your system, open the **Start** menu.

2. Search for **Internet Information Services (IIS) Manager**, and click it.

    The **Internet Information Services (IIS) Manager** window appears.

3. In the **Connections** pane, click the expand arrow or double-click the system name to display the sub-folders.

4. Go to **Sites** > **Default Web Site** > **M2MFileShareAPI**

5. Right-click **M2MFileShareAPI** > **Manage Application** > **Browse**

    A webpage appears in a new tab of the browser.

6. Copy the URL in the webpage's address bar.

    You need to paste this URL in the **Service URL** field in the **File Path** tab of the **Service Configuration (SVCCONF)** page to add a shared file path.

For more information, see **[Service Configuration (SVCCONF) page](service-configuration-svcconf-page.md)**.

​