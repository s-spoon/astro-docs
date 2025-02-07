---
title: "Multicurrency"
draft: false
type: Article
---



## Enable Multicurrency
1. Go to **Administration** > **System** > **System Setup** > **Settings**
2. Toggle on the **Multicurrency Enabled** checkbox to enable Multicurrency.
3. Select the currency code from the **Currency Code** drop down. The default value is USD.

    >[!Note] Once opted, the currency code remains as the System’s primary currency, and you should not change it


4. Select the **Locale Code** from the drop down. The default value is English (United States).
5. Click **Save**.
6. Click **User Options** on the top right corner > **Application** > **Clear Cache**    and **Reload**. The changes will be reflected in the system only after the cache is cleared.
## Setup the code for localization
You can set up localization related codes under **Setup** > **Codes** > **Localization**. 

### Currencies
All the available currencies are listed under **Currencies**. To add a new currency that is not listed:
1.	Click the **Add** (+) icon in the table header.
2.	Enter the ISO currency code in the **Code** field.
3.	Enter the description in the **Description** field. Click save icon.

### System Currencies
The currencies available for user selection are listed under **System Currencies**. The exchange rates for the currencies are also displayed. The exchange rates are set based on Exchange Rate Populator.

To add a system currency:
1.	Click the **Add**(+) icon in the table header.
2.	Enter the **Exchange Rate**.
3.	Select the **Exchange Rate Updated Date**.
4.	Select the **Exchange Rate Updated Time**.
5.	Select the **Currency**. Click save icon

### Locale
The default locales are available under **Locale**. To add a new Locale:
1.	Click the **Add**(+) icon in the table header.
2.	Enter the Id. It should be the combination of two-character language code and two character region code separated by a hyphen.
3.	Enter the **Description**.
4.	Select **Active** to make the locale Active. Click save icon. 

## Populate Exchange Rates
Access **Administration** > **Tasks** > search **Populate Currency Exchange Rates**. By default, it is set to Inactive. This task will run at the scheduled time to update the exchange rates. Click **Edit** to change the scheduled time. The updated exchange rate is populated in the **System Currency** window under Localization. 

## Setup the Exchange Rate Provider
1.	Access **Customization** > **Advanced** > **Group Configurations **.
2.	Click **Regional Settings** under Public.
3.	Edit the **Locale Code** as required. This locale code will be reflected for selection by the Group User.
4.	Edit the **Currency Exchange Provider Settings** with the following details:
* Enter the name in the **Provider** field.
* Enter the **Api Key** given by the provider.
* Select the **Active** check box to select the Provider.
* Enter the alias in the **Custom Provider Alias** field. This is optional.
## Edit User Settings
You can edit the settings according to your own preference.

To edit the user settings:
1.	Access **User Options** on the top right corner > **User Settings**.
2.	Choose the **Locale Code** and **Currency Code** from the dropdown list as required. Click save.
3.	Click **User Options** > **Application** > **Clear Cache and Reload**.

    >[!Note] The **Locale Code** selected under User Options here will be the default in the application. The Regional and System Settings will not be taken into account by the system. The currency codes displayed here is based on the currency codes set in the System Settings.



