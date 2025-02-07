---

title: "Integration File Status"
draft: false


---
On this screen, you can search for and find the integration status of a file.
You can narrow down your search by using the available filters.

To search for a file and view its status, follow the steps below:

  1. Select/enter the data in the available search filters.

     1. **Blob/Container Name** : This field is mandatory. Select the **Blob/Container name** from the drop down list where the integration file is placed and processed. The containers listed in the drop down menu will be based on the user's privileges.

     2. **Task Name** : This field is mandatory. Select a **Task Name** from the drop down list. The drop down list will contain all the available jobs for the selected container.

     3. **Status** : This is a mandatory field. The status will be selected as Failed by default. You can select a status, to filter the files by status. The possible statuses are ToProcess, Inprogress, Failed, Completed, and Completed-WithErrors.

        * **ToProcess** : This status indicates that the file has been uploaded but is yet to be processed.

        * **InProgress** : This status indicates that the system has initiated the processing of the file. It is neither marked as failed nor completed at this stage.

        * **Failed** : This status indicates that the file has been processed, and overall, the processing has failed. None of the records in the file were successfully processed.

        * **Completed** : This status indicates that all the records in the file have been successfully processed, without any errors.

        * **Completed-WithErrors** : This status indicates that some parts of the file have been successfully processed, while other parts have encountered errors or failures during processing.

      4. **File type** : This field is mandatory. For an import file, select **Input** , and for an export file, select **Output**. The default value is **Input**.

          >[!Note] 
          >If the file type is selected as **output** , the status and last modified columns will be displayed as empty. This screen implements infinite scrolling, loading 500 records at a time. So users can use appropriate filter to narrow down the search result.

      5. **File Name** : Enter the complete file name or part of it to get the result.

     6. **From Date** : This field is mandatory. Click the date icon and select the starting date.

      7. **To Date** : This field is mandatory. Click the date icon and select the ending date.

          >[!Note] 
          >When selecting a date range, note that you can choose a maximum of 15 days
using the From Date and To Date fields.

  2. Click **SEARCH**. The search result will be displayed with **File Name**, **Status**,c**Last Modified**, **Folder Location**, and **Task Name** columns.

      >[!Note] 
      >To access further information regarding the error, you can choose the record
and click on **VIEW ERROR DETAILS** in the contextual pane. Additionally, to see more details, you can pop-out the screen and select **ERRORS** from the contextual pane, to view the complete error details in the **Error for File** section.

## Action Bar

In the Integration File Status window, you can select one or more of the displayed records to enable the action bar located at the top of the window. The Integration File Status remains open when you jump to other windows using the action buttons. The actions buttons are:

  * Download File

  * Reprocess File

  * Replace File

  * Export

### Download File

Users can select a file from the search result grid and click the **DOWNLOAD** button to download the selected file to the local storage.

If the file is not present in the storage container, an error will be displayed.

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

