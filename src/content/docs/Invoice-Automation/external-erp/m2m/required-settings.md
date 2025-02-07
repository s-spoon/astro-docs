---
title: "Made2Manage Invoice Automation Required Settings & Tips"
draft: false
type: Article
---


M2M requires certain optional settings in Invoice Automation be configured to correctly function, these are listed below.

---

### Receiver Matching
Receiver matching in General Settings should be enabled.

![Settings Screen with Receiver Matching enabled](../assets/external-erp/m2m/required-settings/receiver-matching.jpg)

---

### Purchase Invoice: Shipping Charges Missing On Purchase Invoice
Validation 'Purchase Invoice: Shipping Charges Missing On Purchase Invoice' should be disabled

![Disabled Validations Screen with Purchase Invoice: Shipping Charges Missing On Purchase Invoice disabled](../assets/external-erp/m2m/required-settings/disabled-validation-shipping-charge-missing.jpg)

---

### Purchase Invoice: Shipping Charge Mismatch
Validation 'Purchase Invoice: Shipping Charge Mismatch' should be disabled

![Disabled Validations Screen with Purchase Invoice: Shipping Charge Mismatch disabled](../assets/external-erp/m2m/required-settings/disabled-validation-shipping-charge-mismatch.jpg)

---

### Total Tax - Static Value
As many invoices do not contain the tax value, a [Static Value](../../features/template-editor/populating-fields.md) of '0' should be set on the template

![Total Tax set as a static value of 0](../assets/external-erp/m2m/required-settings/total-tax-static-value.jpg)

---

### Active Company
If only 1 company is being used by IA then this should be selected as the active company. This will result in the company be auto-populated in various text fields (like the upload screen).

![The active company dropdown menu](../assets/external-erp/m2m/required-settings/company-default.jpg)