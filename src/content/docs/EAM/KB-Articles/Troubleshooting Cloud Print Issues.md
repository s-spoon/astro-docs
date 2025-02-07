---  
 
title: "Troubleshooting Cloud Print Issues"  
draft: false 
type: KB Article
 
---

**Issue: Error while issuing the print**

**Solution**:  
If you encounter any errors while issuing the print, it might be because the
Cloud print agent on the client network is stopped or not responding. To resolve this
issue, start or restart the Aptean Cloud Print service.

**Issue: Error message appears, despite properly filling in the # of labels**  
When cloud printing an item, an error message stating **Please fill required fields** is
displayed, even though the **# of labels to print** field is properly filled.

**Solution**:  
Ensure that the **Default Label Printing** and the **Visible** options, for the
virtual printer **Label Printer**, are set to **Yes**.  
However, note that even if the **Label Printer** is set as the default printer, it cannot be
used for printing. Proceed with selecting a valid printer to print your labels
successfully.

