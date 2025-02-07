---
title: "ProcessUPS Processor Service"
draft: false
type: Article 
---

From Made2Manage 8.0, the **UPS automation manager (UPSAM)** window is replaced with the **ProcessUPS** processor service in the **M2M Processor Service Configuration (PROC)** page.

Use this process to transfer shipping information between Made2Manage and *UPS Online WorldShip An integrated global shipping system from United Parcel Service, Inc., it uses the Internet to track shipments around the world*.

You can configure the **ProcessUPS** service in the **PROC** page to execute the process at specified intervals. However, you can manually execute the processes whenever required. For more information on configuring services in the PROC page, see Configure M2M Processor Service Configuration (PROC) page.

>[!NOTE] If the export mode selected on the **UPS Setup (UPSSET)** page is **Keyed Import**, the **ProcessUPS** service is executed based on the specified intervals to export shippers and import shipping information from UPS.

>[!NOTE] If the export mode selected on the **UPSSET** window is **Batch**, the **ProcessUPS** service is executed based on the specified intervals to only import information from UPS. You must export shippers through the **UPSOUT** page.

>[!TIP] To export or import immediately, in the **PROC** window, select the **ProcessUPS** processor service and click **Execute Manually**.