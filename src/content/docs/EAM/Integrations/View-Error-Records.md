---

title: "View Error Records"
draft: false


---
On this screen, you can search for and find the error records. You can narrow down your search by using the available filters.

To search for error records, follow the steps below:

  1. Select/enter the data in the available search filters.

      1. **Task Name** : This field is mandatory. Select a **Task Name** from the dropdown list. The dropdown list will be shown based on user privileges.

     2. **From Date** : This field is mandatory. Click the date icon and select the starting date.

      3. **To Date** : This field is mandatory. Click the date icon and select the ending date.

          >[!Note] 
          >When selecting a date range, note that you can choose a maximum of 15 days using the From Date and To Date fields.

      4. **File Name** : Enter the complete file name or part of it to get the result.

  2. Click **SEARCH**. The search result will be displayed with the File Name, Integration Type, Failure Step, Error Message, Execution Start Time, task Instance ID, Counter, Plant, and Type task ID.

      >[!Note] 
      >You can enhance the search results by utilizing the "Filter Results" option to apply additional filters.

## Action Bar

In the **View Error Records** window, you can select one or more of the displayed records to enable the action bar located at the top of the window. The **View Error Records** remains open when you jump to other windows using the action buttons. The actions buttons are:

  * Download File

  * Reprocess File

  * Replace File

  * Export

### Download File

Users can select a file from the search result grid and click the **DOWNLOAD** button to download the selected file to the local storage.

>[!Note] 
>If the file is not present in the storage container, an error will be displayed.

### Reprocess File

When a user makes any changes to the application in order to resolve an issue encountered in a file, they will need an option to reprocess the file. To do this, the user can select a file from the search result grid and click the **REPROCESS FILE** button. This action will change the status in the backend to **ToProcess** and the file will be reprocessed in the next scheduled run. Additionally, the user can also manually run the task. Note that the reprocessing of a successful/failed file is dependent on the specific job file being considered.

### Replace File

If there are errors in the file and the user wants to correct the data and upload the file again, they can utilize this option. The user can choose to upload either all records or only the corrected records. The system will always process all the records present in the uploaded file.

To use this option:

  1. Select a file from the search result grid and click the **REPLACE FILE** button. This action will prompt a popup where the user can add a file from their local computer.

  2. Select the desired file and click the **Open** button. The file will be replaced in the next scheduled run. Additionally, the user can also manually run the task.

      >[!Note] 
      >The file name must be the same in order to replace the file.

### Export

The export option enables the user to download the search result grid data.

