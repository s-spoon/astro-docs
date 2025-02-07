---
title: "Define Printing Conditions"
draft: false
type: Article
---

When you're setting up your documents, you can choose to print them only under certain conditions that you define. Conditions are a number of field values or calculations (operands) connected by operators. They can be based on:


* Constant Values: These are fixed values that you define. You can add a Constant Value by selecting New Constant Value from the drop-down list. Values you already created are also saved to the drop-down list.
* Aptean Ship Fields: These are fields from the Ship screen. Available fields may change depending upon the type of label or document for which you are setting conditions.


>[!Notes] <br> -   Printing conditions are applied per location when modifications or additions are made to conditions for a document or label, all users will receive them when they relaunch Aptean. <br> - If a document or label is disabled, or Auto-print is set to off, the Additional Conditions will appear as "None" even if conditions are specified. <br> - Documents or labels that have conditions may be enabled for a user in one location, and disabled for a user in a different location; however, once the document is enabled for that second user, the conditions become active.


## Create Conditions - Example


In this example, we will create a condition that prints the Commercial Invoice document if the recipient address is in a specific country.
1. Auto-Print "On Ship" must be selected to set printing conditions.
2. To create conditions under which the document or label should print, click the Edit Conditions button.

![ship-printing-conditions-1](assets/images/aptean-ship-printing-conditions-1.png)

3. Click the "+" and select an Aptean Ship field value from the drop-down list. In this example, we're selecting the Country Name. You can also use the search field, located at the top of the drop-down list, to search for fields.

![ship-printing-conditions-2](assets/images/aptean-ship-printing-conditions-2.png)

4. Continue to use the fields in the row to select an operator and second field. The second operand can also be a constant value, which you can add from the drop-down list.

![ship-printing-conditions-3](assets/images/aptean-ship-printing-conditions-3.png)

5. Multiple conditions: To add another condition, click the "+" button again. To group conditions, first select the conditions you want to group and then select the AND or OR button. Grouped conditions can be administered by clicking on the AND or OR button in front of the condition. 
    >[!Note] If you define more than one condition and do not specify the AND/OR operator, AND is used by default.

![ship-printing-conditions-4](assets/images/aptean-ship-printing-conditions-4.png)

6. When you click OK, the expanded condition(s) are shown on the dialog.


