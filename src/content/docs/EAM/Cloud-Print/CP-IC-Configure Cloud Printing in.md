---  

title: "Configure Cloud Printing in Agent Computer"  
draft: false 
type: Article

---

Configuring cloud printing in agent computer includes:

  * Downloading Cloud Printing Agent

  * Installing Cloud Printing Agent

  * Configuring Agent Computer for Label Printing

##  Downloading Cloud Printing Agent

To download cloud printing agent, perform the following steps:

  1. Go to the Production environment home page () in a browser.

      >[!Note]
      >If it prompts for a username and password, enter the Account ID and API Key provided in the Cloud Printing Account section.

      ![](../assets/cloud-print/IC/BC-icons/Configure%20Cloud%20Printing%20in.png)

   2. In the Aptean Print Service page, click the **Print Agent Windows Installer** link to download the **ApteanPrintAgentSetup.exe** file.

## Installing Cloud Printing Agent

The Cloud Printing Agent must be installed locally on the Agent Computer, at
the user side, which is used to receive printing jobs. The print jobs are
directed from Cloud Printing Service to the local printers through the Print
Agent.

To install the cloud printing agent, perform the following steps:

  1. Double-click **ApteanPrintAgentSetup.exe** file that you downloaded from the Production environment home page (https://print.api.apteancloud.com/). The welcome page appears.

      ![](../assets/cloud-print/IC/BC-icons/Configure%20Cloud%20Printing%20in_1.png)


  2. Click **Next**.

  3. In the **Select Destination Location** screen, select the default folder or a folder in a location of your choice to install the **Aptean Print Agent** , and then click **Next**.

      ![](../assets/cloud-print/IC/BC-icons/Configure%20Cloud%20Printing%20in_2.png)
 

  4. In **the Print Service Authentication Details screen** , enter the Account ID and Agent Key, and then select **Production**. 

      ![](../assets/cloud-print/IC/BC-icons/Configure%20Cloud%20Printing%20in_3.png)


      >[!Note]
      >If you want to validate the account entered, click the **Validate** button. If the account ID and Agent Key are correct, the **Credential validation successful** message appears.

        ![](../assets/cloud-print/IC/BC-icons/Configure%20Cloud%20Printing%20in.jpg)


  5. Click **Next**. 

  6. In the **Ready to Install** page, click the **Install** button. 

      ![](../assets/cloud-print/IC/BC-icons/Configure%20Cloud%20Printing%20in_1.jpg)



Wait until the installation is completed.

##  Configuring Agent Computer for Label Printing

To configure the agent computer for label printing, perform the following
steps:

  1. Download the **EAMLabelPrintIntegration.rar** from the SharePoint.

  2. Unzip the download RAR file and copy the entire folder to directory C:\Program Files\Aptean on the agent computer, as shown below: 

      ![](../assets/cloud-print/IC/BC-icons/Configure%20Cloud%20Printing%20in_2.jpg)


  3. Go to the **ApteanPrintAgent** folder, and open the **application.yaml file** for edit. 

      >[!Note]
      >Normally, you can see the **ApteanPrintAgent** folder at **C:\Program Files (x86)**.

      ![](../assets/cloud-print/IC/BC-icons/Configure%20Cloud%20Printing%20in_3.jpg)



Copy the below information to the file and update the values highlighted in
blue, in the image (no need to change other config information).

    
```
    computerName: APT05-XXXXXXX     
    commands:   
    -    name: LabelPrinter         
        command: C:\Program Files\Aptean\EAMLabelPrintIntegration\EAMLabelPrintIntegration.exe         
        working-dir: c:\tmp         
        arguments: [ "--file", "$(FILENAME)" ]         
        drop-dir: c:\tmp         
        delete-file: false       
    -    name: Local Drop         
        drop-dir: C:\tmp\tmp 
```
  ![](../assets/cloud-print/IC/BC-icons/Configure%20Cloud%20Printing%20in_4.jpg)


>[!Note]
>Do not change any format in above commands, even the spaces before each line.
Otherwise, the Agent service may not be started.  
The updated file cannot be directly saved in this folder to replace the original one. Save it on another place first, for example, on the desktop, then copy it to this folder to replace the original one.

>[!Note]
>You can configure multiple printer servers using the same account details. To
configure another printer server, repeat the process of installing the cloud
printing agent and entering the account details.

