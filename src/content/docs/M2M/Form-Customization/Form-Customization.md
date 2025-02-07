---
title: "Understanding Form Customization in Made2Manage"
draft: false
type: Article
---

**Form Customization** provides the ability to modify and extend the Made2Manage 7.x solution. One can create and manipulate forms and menus, assign user access rights to forms and menus, and apply customizations to specific companies. Aditionally, they can also over-ride or extend business logic to modify the application's behaviors.

The system comprises a set of conceptual business objects where a **layout model**, an **entity mode**l and a **business component support each business object**. The **layout model** includes one or more form definitions with each form definition describing a list of fields and how the fields are arranged on a form. The **entity model** defines the object’s data schema, and constraints that may include some simple behaviors. The **business component** is a class that runs exclusively in the middle-tier and contains complex business logic.

The tools used to customize the solution include a runtime visual designer, maintenance screens, an import utility and Microsoft Visual Studio. The visual designer allows users to create or modify new forms and views, data sources and simple behaviors. The maintenance screens allow for the administration of navigation. The import utility is used to import pre-packaged metadata into the system and Microsoft Visual Studio is used to author complex business logic.