---
title: "Printing Profiles"
draft: false
type: Article
---

A Printing Profile is a configuration of printer, document, and label settings, saved under a specific name and associated with a specific Connector per Location. You can have multiple Profiles that can be shared among users using the same Location. Any changes made to a shared Printing Profile will affect any user sharing that Profile.

Printing Profiles are available from Setup > Printing and Scale > Printing Profiles. Printing Profiles contain:
* An Aptean Ship Connector name;
* A list of selected printers;
* Information about each selected printer (type, label size, etc.);
* Settings for which documents/labels print to each printer.


## Adding a New Printing Profile


Click the Add button on the Printing Profiles tab.

![](assets/images/addprintingprofile.png)

 
## Connector/Profile


Select the Connector (if you have multiple) and enter a name for the Profile.
## Documents


The next section allows you to set up documents, including labels, for this Profile. To assist you in locating the documents or labels, there are options for grouping documents by the document type or searching for specific documents. To only display documents based on what you type in the Search field, enter a term in the Search field. To view no documents at all, deselect the Show All Documents field.

Check the check box in front of the document you want to set up and configure the document settings. When you are done configuring documents, click the Save Changes button. When you're done adding a Printing Profile, it will become the currently active Profile.

![](assets/images/documentsettingsforprofile.png)
## Switching Profiles


You can switch between profiles on the fly by selecting from the My Profile drop-down list. The default profile will be indicated by the "Default" tag.

![](assets/images/switchprintingprofiles.png)
## Set a default Profile


To set one Printing Profile as the default profile, switch to that Profile and click the SET AS DEFAULT button.

![](assets/images/setprofileasdefault.png)

 
## Copy a Profile


The Copy feature will copy a Profile configuration to a different Connector. This allows the new Profile to inherit all the enabled documents and labels, but also update the printers on a per machine/per individual Connector basis.

Switch to the Profile you want to copy and then click the Copy button. You can then define the Connector to use and enter a new name for the copied Profile.
>[!Note] Because printers are linked to specific Connectors, make sure you add printers for the new Connector on the [Printers](http://ask.shipping.apteancloud.com/akb/printers/) page before copying a Profile.

