---
title: "Approvals"
draft: false
type: Article
---


Documents can optionally be held in Invoice Automation after they have been successfully processed to be manually reviewed by a user or group of users before being exported to the configured ERP solution.

To configure an Approval, criteria must be specified to control which documents are captured. Various criteria are available, Document Type, Vendor, Tags, Upload Method, the value of document fields or Company. The criteria can be grouped together and linked to create complex queries following a similar model to SQL.

Once the criteria have been created, the approval stages need to be configured. Each Approval can have any number of stages, and each stage can have any number of individual users or user groups. If more than one stage is created documents using this Workflow Approval will go to each stage in turn, as a user from Stage one approves the document users from Stage 2 will be prompted to approve or dispute the document etc.

!!! info
	Only one user from each stage needs to approve the document for the stage to pass, if the desired function is to have multiple mandatory approvers, then these must be configured in multiple stages.

!!! info
	If an approver disputes the document, then all other approvals will be removed, and the document will be instantly disputed and eligible for export to the connected ERP solution.

!!! info
	A document can be captured by more than one Workflow Approval, these approvals will run simultaneously and will all need to be approved before the document is eligible for export, however only one approver will need to dispute the document for it to become disputed.
