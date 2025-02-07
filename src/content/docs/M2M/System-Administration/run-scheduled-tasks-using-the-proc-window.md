---
title: "Manually execute a processor service using the M2M Processor Service Configuration page"
draft: false
type: Article
---

The M2M Processor Service Configuration page updates the processes included based on the information stored in the ProcessorServices.Config file.

>[!NOTE]The file is available in the Made2Manage Server folder, which is typically located at C:\Program Files (x86)\Aptean\Made2Manage Server.

Initially, the configuration file includes information of the services that are activated for the current activation code along with the default values.

The ProcessorServices.Config file is updated when:

- A new activation code is entered.

- An M2M service is restarted.

The processes are executed by the M2M Processor Service at the intervals specified. However, you can manually execute the processes whenever required.

### To manually execute a process

1. Open the **M2M Processor Service Configuration (PROC)** page.

    1. Select **Utilities** > **Maintenance** > **M2M Processor Service Configuration**.

    Or

    2. Search for **PROC** in the **Navigation box** and then select **M2M Processor Service Configuration**.

    **M2M Processor Service Configuration (PROC)** page appears.

2. In the **Processor Services** grid, select the process.

3. Click the ellipsis under the **Action** column.

4. Select **Grid Accessories** > **Grid Actions** > **Execute Manually**.



​