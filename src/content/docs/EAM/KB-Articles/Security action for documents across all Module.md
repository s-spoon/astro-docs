---  
 
title: "Security action for documents across all Module: Link, Update, and View"  
draft: false 
type: KB Article
 
---

This article provides insights into the security actions related to documents across all modules, specifically focusing on linking, updating, deleting/ removing, and viewing functionalities. Four primary security actions are associated with documents: **Link**, **Update**, **Remove**, and **View**.

## Link Feature

The Link feature enables users to add or link to a new document, whether by uploading it from a local source or by linking to an external document stored on OneDrive or another source.

## Update Feature

The Update feature enables users to modify and edit documents.

## View Feature

The View feature enables users to view the documents.

## Remove Feature

The Remove feature enables users to delete or remove documents.

Different document tags for security actions like Link, Update, Remove, and View can be created for documents across all modules. The table below outlines the available security actions for various modules.

> [!Note]  
> Some modules may require a single security action to perform multiple functions, while others may require individual security actions for each function.

Examples:

1.  **DMS (Document Management System)**

    - **Add**: This security action allows users to **Link** and **Remove** documents.
    - **Edit**: This security action permits users to **Edit** documents.
    - **Inquiry**: This security action lets users **View** documents.

2. **Item**

    - **Documents Tab Link**: This security action allows users to **Link**, **Update**, and **Remove** documents.

    -  **Documents Tab View**: This security action allows users to **View** the document.

3. For the module **Setup**, a single security action **Inquiry** permits the performance of all functions: **Link**, **Update**, **Remove**, and **View**.

The table below presents the available security actions for documents across all modules. It provides a comprehensive list of document tags that can be used to perform the Security Actions for a specific module.

| **Module**| **Action Link** | **Action Update** | **Action View** | **Action Remove**  | **WindowName**  |
|----------------------------------|--------------------|----------------------|--------------------|--------------------|--------------------------|           
| Document Management System (DMS) |   Add              |   Edit               |   Inquiry          |   Add              |  w_DMS\_ actions         |
|  Work Order                      | Documents Tab Link | Documents Tab Update | Documents Tab View | Documents Tab Link | w_wo_book_eu_main      |
|  Equipment                       | Documents Tab Link | Documents Tab Link   | Documents Tab View | Documents Tab Link | w_eq_location_eu       |
|  Serial                          | Documents Tab Link | Documents Tab Link   | Documents Tab View | Documents Tab Link | w_eq_serial_eu         |
|  Requisition                     |  Link              |  Link                |  Inquiry           |  Link              | w_req_line_documents   |
|  Item                            | Documents Tab Link | Documents Tab Link   | Documents Tab View | Documents Tab Link | w_in_item\_ book_eu_main |
| Supplier                         | Documents Tab Link        | Documents Tab View       | Documents          | Documents Tab Link         | w_po_supplier_book_eu_main|                                                                               |  Tab Link             |  Tab Link             |  Tab View                                                           |  Tab Link             | plier_book_eu_main             |
|  Resource                                                                      |  Link                 |  Link                 |  View                                                               |  Link                 | w_re_book_main_tp_documents  |
|  Purchase order                                                                |  Link                 |  Link                 |  View                                                               |  Link                 | w_po_po_book_po_line_docs    |
|  Setup                                                                         |  Inquiry              |  Inquiry              |  Inquiry                                                            |  Inquiry              | w_validation_codes_documents |
|   Event                                                                        |   Documents Tab Link  |   Documents Tab Link  | Documents Tab Inquiry or Documents Tab Link                       |   Documents Tab Link  |   w_eq_event_book_eu_main      |
|    Shipping Order                                                              |    Documents Tab Link |    Documents Tab Link | Documents Tab Link or Documents Tab Inquiry or Documents Tab View |    Documents Tab Link |    w_so_book_eu_main           |
| RFQ Bid document                                                             |  Link                 |  Link                 |  View                                                               |  Link                 | w_rfq_line_documents           |
| RFQ Line Documents                                                             |  Link                 |  Link                 |  View                                                               |  Link                 | w_rfq_line_documents           |
|   Invoice                                                                      |  Documents Tab Link   |  Documents Tab Link   | Documents Tab Link or Documents Tab Inquiry or Documents Tab View                      |  Documents Tab Link   |  w_iv_book_eu_main             |


## To change the Security Actions, follow the steps outlined below:

1.  Navigate to **Security** > **Security Groups** in the navigation pane. The **Security Groups** tab will open in the top bar.

2.  Search for and select the desired **Plant** > **Group ID** in the grid.
3.  Click the **Window Access** icon in the contextual panel to open the window for the selected **Group ID** on the right-side panel.

4.  Select the desired **Module** from the drop-down menu, refer to the table for the **action/window name**, and search or filter it.

5.  Click the **Edit** button, make the required changes, and click **Save**.

    ![](../assets/kb-articles/Notification/Security%20DMS.png)

