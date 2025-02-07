---

title: "Switch Rules"
draft: false
type: Article

---

Switch rules allow you to define conditions under which Aptean Ship should "switch to" a specific Carrier/Service combination. Aptean Ship will apply the rule based on the shipment detail of the current shipment's data in the Shipment Editor. No additional rating occurs when a switch rule is executed. This is simply a Carrier/Service switch without rate quotes taken into account.

If the "switched to" service is not available for the selected destination, for example, or isn't valid for the shipment, the next available service for the same carrier is selected. The next available service is chosen based on the setting "When selected service is not available, switch to" in [Ship Via Rules Settings](ship-via-rules-settings.md).

Switch Rules are located in Setup > Ship Via Rules > Switch Rules.

> [!Note]
> * Switch Rules take precedence over Rate Shop Scenarios and are executed first.
>* If the user changes the carrier on the Shipment tab (after the rule has been applied), any conditional rules will become manually overridden.

### The Rules List

On the Switch Rules page, you'll see an area where you can manage the list of existing rules. Rules are executed in order of priority by their position in the rules list.

These are some tasks you can perform in the rules list.

### Change Priority

You can change the rule priority by clicking and dragging a rule to a higher or lower location in the list of rules. You can also use the "Move this rule up" and "Move this rule down" arrows to edit a rule's position in the list.

![](assets/images/switch-rules-2.png)

### Add a Rule

To add a rule, click the **Add Switch Rule** button. This launches the rules wizard where you create the switch rule. New rules are enabled by default and added sequentially to the bottom of the rules list.

![](assets/images/switch-rules-example-1.png)

### Modify a Rule

From here you can also edit, copy, and delete rules using the toolbar.

![](assets/images/switch-rules-3.png)

### Elements of a Switch Rule

Let's take a look at the sample switch rule provided on the Switch Rules page to give you a basic idea of how each part of the rule is set up. You can populate the sample switch rule by clicking the **Add Sample Rules** button. Click the **Edit** button to open a rule in Edit mode.

The sample switch rule will switch the Carrier/Service to USPS Priority Mail for COD shipments that are 5 lbs or less.

![](assets/images/switch-rules-1-1.png)

### Switch-to Carrier/Service

The first screen of the wizard sets the Carrier/Service you want to switch to when this rule is applied. For users with multiple carrier interfaces, you can also specify the carrier interface to use. When the Carrier Interface field is set to the"Use Default" option, the default carrier interface will be used when Aptean Ship switches to this carrier.

To also switch to a specific carrier account when this rule is executed, check "Also switch to a specific account" to set the account. This is an optional step: if an account isn't specified, Aptean Ship uses the default carrier account.

![](assets/images/switch-rules-sample-1-1.png)

(Optional) Select the account from the drop-down list. This list is populated based on the Carrier Interface selection. Note that Aptean Ship only switches to the specified account but does not switch to the Sender information that is set up with that account. The default carrier interface and account are set up for the carrier in Maintain Carriers.

![](assets/images/switch-rules-sample-2.png)

### Define Conditions

The next part of the switch rule is when (under what conditions) to apply the rule. You do this by defining conditions that, when met, will automatically apply this rule to the shipment.

Each condition is made up of a Shipment field, an operand (such as "is less than or equal to" or "equal to"), and a value.

For an example, click the Define Conditions button to see how the conditions for the sample rule were created. One condition specifies that the shipment is 5 lbs or less. The other condition specifies that the shipment is COD. Both of these conditions must be met before the switch rule is applied. For additional information about building conditions, see the Condition Builder section.

![](assets/images/switch-rules-sample-3.png)


### Name and Description

For the last element of the switch rule, provide a unique name and description. You can click "Use auto-generated description" or you can provide your own.

![](assets/images/switch-rules-sample-4.png)

##### Condition Builder

The Define Conditions button launches the Conditions Builder where you can add/modify/delete conditions.  Use the Condition Builder to select the Apttean Ship fields and values that will define when the rule will be applied. Conditions are a number of field values (operands) connected by operators. They can be based on:

* Aptean Ship Fields: These are shipment fields from the Shipment screen.

* Constant Values: These are fixed values that you define.

Click the "+" button to add a condition.

![](assets/images/ss-wc-0025-6.png)

Select a Shipment field value as the first operand; for example, the Service field.

![](assets/images/ss-wc-0025-7.png)

Select an operator, for example "contains" or "is equal to". Then, choose a second operand, which can be either a Shipment value or a Constant value. You can add a Constant Value by selecting New Constant Value from the drop-down list.

![](assets/images/ss-wc-0025-8.png)

### Multiple Conditions

To add another condition, click the "+" button again. To group conditions, first select the conditions you want to group and then select the AND or OR button.

![](assets/images/ss-wc-0025-9.png)

Grouped conditions can be administered by clicking on the AND or OR button in front of the condition.

![](assets/images/ss-wc-0025-10.png)

When you are done adding conditions, click OK.

### Adding a New Switch Rule

In case you need more help with creating your own switch rules, here is another example.

We'll set up a simple rule that tells Aptean Ship to switch the Carrier/Service to UPS 2nd Day Air when the current carrier on the shipment is FedEx 2nd Day and the total weight is greater that 30 lbs.

1. On the Switch Rules page, click the **Add Switch Rule** button.

    ![](assets/images/switch-rules-example-1.png)

2. Set the Carrier/Service/Carrier Interface to switch to when this rule is applied. (You can also select to switch to a specific Carrier account if you wish.) In this example, we are switching to UPS 2nd Day Air.

    ![](assets/images/switch-rules-example-2.png)

3. Next, define the conditions under which this rule will be applied by clicking the Define Conditions button.

    ![](assets/images/switch-rules-example-3.png)

4. Under Conditions, click the " + " to add the first condition. Select the Shipment field. We're selecting the Carrier Service Name field. The condition will display the internal field name once selected; here that will be the "Ship Carrier Ship Via".

    ![](assets/images/switch-rules-example-4.png)

5. Select the operand and the second value. Here we are selecting "is equal to" and "FedEx 2nd Day".

    ![](assets/images/switch-rules-example-5.png)

6. To add the second condition, click the " + " again. Add the Shipment field, operand, and the value. For this example, we're setting the condition that the total shipment weight is greater than 30 lbs.
The value in this case is a constant value, i.e a value you enter. Select **New Constant Value** to add the value.

    ![](assets/images/switch-rules-example-6.png)

7. Click OK when you are done adding the conditions.

    ![](assets/images/switch-rules-example-7.png)

8. Next, type in a unique Name and Description for the switch rule. You can use the auto-generated description to fill in the Description field.

    ![](assets/images/switch-rules-example-8.png)

9. Click Finish. The rule is added to the bottom of the rules list and is enabled.

    ![](assets/images/switch-rules-example-9.png)




