{
  "layout": {
    "windowId": "143",
    "type": "143",
    "caption": "Sales Order",
    "documentSummaryElement": {
      "caption": "",
      "description": "",
      "widgetType": "Text",
      "fields": [
        {
          "field": "V$DocumentSummary",
          "emptyText": "none"
        }
      ]
    },
    "docActionElement": {
      "caption": "",
      "description": "",
      "widgetType": "ActionButton",
      "fields": [
        {
          "field": "DocStatus",
          "type": "ActionButtonStatus",
          "emptyText": "none",
          "source": "list",
          "lookupSearchStringMinLength": -1,
          "lookupSearchStartDelayMillis": 500
        },
        {
          "field": "DocAction",
          "type": "ActionButton",
          "emptyText": "none",
          "source": "list",
          "lookupSearchStringMinLength": -1,
          "lookupSearchStartDelayMillis": 500
        }
      ]
    },
    "tabs": [
      {
        "windowId": "143",
        "tabId": "AD_Tab-187",
        "internalName": "C_OrderLine",
        "caption": "Order Line",
        "description": "Order Line",
        "emptyResultText": "There are no detail rows",
        "emptyResultHint": "You can create them in this window.",
        "elements": [
          {
            "caption": "Line No",
            "description": "Unique line for this document",
            "widgetType": "Integer",
            "size": "S",
            "gridAlign": "right",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "Line",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Product",
            "description": "Product, Service, Item",
            "widgetType": "Lookup",
            "size": "L",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "M_Product_ID",
                "emptyText": "none",
                "source": "lookup",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500,
                "supportZoomInto": true
              },
              {
                "field": "M_Product_DocumentNote",
                "type": "Tooltip",
                "tooltipIconName": "text",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Product Description",
            "description": "Product Description",
            "widgetType": "LongText",
            "multilineText": true,
            "multilineTextLines": 3,
            "size": "L",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "ProductDescription",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Attributes",
            "description": "Attribute Instances for Products",
            "widgetType": "ProductAttributes",
            "size": "L",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "M_AttributeSetInstance_ID",
                "emptyText": "none",
                "source": "lookup",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500
              }
            ]
          },
          {
            "caption": "Trading Unit Quantity",
            "description": "",
            "widgetType": "Quantity",
            "size": "S",
            "gridAlign": "right",
            "viewEditorRenderMode": "on-demand",
            "sortable": true,
            "fields": [
              {
                "field": "QtyEnteredTU",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Zusagbar (ATP)",
            "description": "",
            "widgetType": "Quantity",
            "size": "S",
            "gridAlign": "right",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "Qty_AvailableToPromise",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Packing Item",
            "description": "",
            "widgetType": "List",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "M_HU_PI_Item_Product_ID",
                "emptyText": "none",
                "source": "list",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500,
                "supportZoomInto": true
              }
            ]
          },
          {
            "caption": "Quantity",
            "description": "The Quantity Entered is based on the selected UoM",
            "widgetType": "Quantity",
            "size": "S",
            "gridAlign": "right",
            "viewEditorRenderMode": "on-demand",
            "sortable": true,
            "fields": [
              {
                "field": "QtyEntered",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "UOM",
            "description": "Unit of Measure",
            "widgetType": "List",
            "size": "S",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "C_UOM_ID",
                "emptyText": "none",
                "source": "list",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500,
                "supportZoomInto": true
              }
            ]
          },
          {
            "caption": "Price",
            "description": "Price Entered - the price based on the selected/base UoM",
            "widgetType": "CostPrice",
            "gridAlign": "right",
            "viewEditorRenderMode": "on-demand",
            "sortable": true,
            "fields": [
              {
                "field": "PriceEntered",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Price Unit",
            "description": "Price_UOM_ID",
            "widgetType": "List",
            "size": "S",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "Price_UOM_ID",
                "emptyText": "none",
                "source": "list",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500,
                "supportZoomInto": true
              }
            ]
          },
          {
            "caption": "Quantity in Price Unit",
            "description": "Menge in Preiseinheit",
            "widgetType": "Quantity",
            "size": "S",
            "gridAlign": "right",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "QtyEnteredInPriceUOM",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Discount %",
            "description": "Discount in percent",
            "widgetType": "Number",
            "gridAlign": "right",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "Discount",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Net Price",
            "description": "Actual Price ",
            "widgetType": "CostPrice",
            "gridAlign": "right",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "PriceActual",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Line Amount",
            "description": "Line Extended Amount (Quantity * Actual Price) without Freight and Charges",
            "widgetType": "Amount",
            "gridAlign": "right",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "LineNetAmt",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Ertrag netto",
            "description": "Effektiver Preis pro Einheit, minus erwartetem Skonto und vertraglicher Rückerstattung.",
            "widgetType": "Amount",
            "size": "S",
            "gridAlign": "right",
            "viewEditorRenderMode": "on-demand",
            "sortable": true,
            "fields": [
              {
                "field": "ProfitPriceActual",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Marge %",
            "description": "Differenz zwischen VK Ertrag und EK Ertrag.",
            "widgetType": "Amount",
            "size": "S",
            "gridAlign": "right",
            "viewEditorRenderMode": "on-demand",
            "sortable": true,
            "fields": [
              {
                "field": "ProfitPercent",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "List Price",
            "description": "List Price",
            "widgetType": "CostPrice",
            "gridAlign": "right",
            "viewEditorRenderMode": "on-demand",
            "sortable": true,
            "fields": [
              {
                "field": "PriceList",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Tax",
            "description": "Tax identifier",
            "widgetType": "List",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "C_Tax_ID",
                "emptyText": "none",
                "source": "list",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500,
                "supportZoomInto": true
              }
            ]
          },
          {
            "caption": "Description",
            "description": "Optional short description of the record",
            "widgetType": "LongText",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "Description",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Terms & Conditions",
            "description": "",
            "widgetType": "List",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "C_Flatrate_Conditions_ID",
                "emptyText": "none",
                "source": "list",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500,
                "supportZoomInto": true
              }
            ]
          },
          {
            "caption": "Group Compensation Line",
            "description": "",
            "widgetType": "YesNo",
            "gridAlign": "center",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "IsGroupCompensationLine",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Group",
            "description": "",
            "widgetType": "Lookup",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "C_Order_CompensationGroup_ID",
                "emptyText": "none",
                "source": "lookup",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500,
                "supportZoomInto": true
              }
            ]
          },
          {
            "caption": "Compensation Type",
            "description": "",
            "widgetType": "List",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "GroupCompensationType",
                "emptyText": "none",
                "source": "list",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500
              }
            ]
          },
          {
            "caption": "Compensation Amount Type",
            "description": "",
            "widgetType": "List",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "GroupCompensationAmtType",
                "emptyText": "none",
                "source": "list",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500
              }
            ]
          },
          {
            "caption": "Compensation percentage",
            "description": "",
            "widgetType": "Number",
            "gridAlign": "right",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "GroupCompensationPercentage",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Zahlungsbedingung",
            "description": "Die Bedingungen für die Bezahlung dieses Vorgangs",
            "widgetType": "List",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "C_PaymentTerm_Override_ID",
                "emptyText": "none",
                "source": "list",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500,
                "supportZoomInto": true
              }
            ]
          },
          {
            "caption": "Skonto %",
            "description": "",
            "widgetType": "Amount",
            "gridAlign": "right",
            "viewEditorRenderMode": "on-demand",
            "sortable": true,
            "fields": [
              {
                "field": "PaymentDiscount",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "No Price Conditions Indicator",
            "description": "",
            "widgetType": "Color",
            "gridAlign": "center",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "NoPriceConditionsColor_ID",
                "emptyText": "none"
              }
            ]
          },
          {
            "caption": "Organisation",
            "description": "Organisational entity within client",
            "widgetType": "List",
            "gridAlign": "left",
            "viewEditorRenderMode": "never",
            "sortable": true,
            "fields": [
              {
                "field": "AD_Org_ID",
                "emptyText": "none",
                "source": "list",
                "lookupSearchStringMinLength": -1,
                "lookupSearchStartDelayMillis": 500,
                "supportZoomInto": true
              }
            ]
          }
        ],
        "defaultOrderBys": [
          {
            "fieldName": "Line",
            "ascending": true
          },
          {
            "fieldName": "C_OrderLine_ID",
            "ascending": true
          }
        ],
        "supportQuickInput": true,
        "queryOnActivate": true
      }
    ]
  },
  "data": [
    {
      "windowId": "143",
      "id": "1001432",
      "tabId": "AD_Tab-187",
      "tabid": "AD_Tab-187",
      "rowId": "1001890",
      "fieldsByName": {
        "ID": {
          "field": "ID",
          "value": 1001890,
          "widgetType": "Integer"
        },
        "C_UOM_ID": {
          "field": "C_UOM_ID",
          "value": {
            "key": "100",
            "caption": "Each"
          },
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_UOM_ID"
          },
          "viewEditorRenderMode": "never"
        },
        "PriceList": {
          "field": "PriceList",
          "value": "0.00",
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "widgetType": "CostPrice",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "PriceList"
          },
          "viewEditorRenderMode": "always"
        },
        "PriceEntered": {
          "field": "PriceEntered",
          "value": "50.70",
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "widgetType": "CostPrice",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "PriceEntered"
          },
          "viewEditorRenderMode": "always"
        },
        "Line": {
          "field": "Line",
          "value": 10,
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "widgetType": "Integer",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Line"
          },
          "viewEditorRenderMode": "never"
        },
        "Description": {
          "field": "Description",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "LongText",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Description"
          },
          "viewEditorRenderMode": "always"
        },
        "QtyEntered": {
          "field": "QtyEntered",
          "value": "5",
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "widgetType": "Quantity",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "QtyEntered"
          },
          "viewEditorRenderMode": "always"
        },
        "QtyEnteredTU": {
          "field": "QtyEnteredTU",
          "value": "3",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Quantity",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "QtyEnteredTU"
          },
          "viewEditorRenderMode": "always"
        },
        "M_Product_ID": {
          "field": "M_Product_ID",
          "value": {
            "key": "2005607",
            "caption": "1000013_Pine Tree"
          },
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "Lookup",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "M_Product_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "PriceActual": {
          "field": "PriceActual",
          "value": "50.70",
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "widgetType": "CostPrice",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "PriceActual"
          },
          "viewEditorRenderMode": "never"
        },
        "Price_UOM_ID": {
          "field": "Price_UOM_ID",
          "value": {
            "key": "100",
            "caption": "Each"
          },
          "readonly": true,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Price_UOM_ID"
          },
          "viewEditorRenderMode": "never"
        },
        "QtyEnteredInPriceUOM": {
          "field": "QtyEnteredInPriceUOM",
          "value": "5",
          "readonly": true,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Quantity",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "QtyEnteredInPriceUOM"
          },
          "viewEditorRenderMode": "never"
        },
        "C_Flatrate_Conditions_ID": {
          "field": "C_Flatrate_Conditions_ID",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_Flatrate_Conditions_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "Discount": {
          "field": "Discount",
          "value": "0",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Number",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Discount"
          },
          "viewEditorRenderMode": "always"
        },
        "C_Tax_ID": {
          "field": "C_Tax_ID",
          "value": {
            "key": "1000022",
            "caption": "Normaler Steuersatz 19% (Deutschland)"
          },
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_Tax_ID"
          },
          "viewEditorRenderMode": "never"
        },
        "LineNetAmt": {
          "field": "LineNetAmt",
          "value": "253.50",
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "widgetType": "Amount",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "LineNetAmt"
          },
          "viewEditorRenderMode": "never"
        },
        "C_BPartner_ID": {
          "field": "C_BPartner_ID",
          "value": {
            "key": "2156425",
            "caption": "Test Kunde 1_G0001345a0",
            "description": "Dieser Text wurde im Textfeld \"Beschreibung\" dieses Geschäftspartnereintrags erfasst."
          },
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_BPartner_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "M_HU_PI_Item_Product_ID": {
          "field": "M_HU_PI_Item_Product_ID",
          "value": {
            "key": "101",
            "caption": "No Packing Item",
            "description": "No Packing Item"
          },
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "M_HU_PI_Item_Product_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "C_BPartner_Location_ID": {
          "field": "C_BPartner_Location_ID",
          "value": {
            "key": "2205175",
            "caption": "Testadresse 3"
          },
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_BPartner_Location_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "M_AttributeSetInstance_ID": {
          "field": "M_AttributeSetInstance_ID",
          "value": {
            "key": "0",
            "caption": "---"
          },
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "ProductAttributes",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "M_AttributeSetInstance_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "C_Activity_ID": {
          "field": "C_Activity_ID",
          "value": null,
          "readonly": true,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_Activity_ID"
          },
          "viewEditorRenderMode": "never"
        },
        "C_PaymentTerm_Override_ID": {
          "field": "C_PaymentTerm_Override_ID",
          "value": {
            "key": "1000002",
            "caption": "30 days net"
          },
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_PaymentTerm_Override_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "PaymentDiscount": {
          "field": "PaymentDiscount",
          "value": "0.00",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Amount",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "PaymentDiscount"
          },
          "viewEditorRenderMode": "always"
        },
        "M_DiscountSchemaBreak_ID": {
          "field": "M_DiscountSchemaBreak_ID",
          "value": {
            "key": "1000070",
            "caption": "100"
          },
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "Lookup",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "M_DiscountSchemaBreak_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "Base_PricingSystem_ID": {
          "field": "Base_PricingSystem_ID",
          "value": {
            "key": "2000837",
            "caption": "Customer Prices"
          },
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "Lookup",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Base_PricingSystem_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "Qty_AvailableToPromise": {
          "field": "Qty_AvailableToPromise",
          "value": "0",
          "readonly": true,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Quantity",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Qty_AvailableToPromise"
          },
          "viewEditorRenderMode": "never"
        },
        "ProfitPercent": {
          "field": "ProfitPercent",
          "value": "0.00",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Amount",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "ProfitPercent"
          },
          "viewEditorRenderMode": "always"
        },
        "ProfitPriceActual": {
          "field": "ProfitPriceActual",
          "value": "50.70",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Amount",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "ProfitPriceActual"
          },
          "viewEditorRenderMode": "always"
        },
        "M_Product_DocumentNote": {
          "field": "M_Product_DocumentNote",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "LongText",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "M_Product_DocumentNote"
          },
          "viewEditorRenderMode": "always"
        },
        "AD_Client_ID": {
          "field": "AD_Client_ID",
          "value": {
            "key": "1000000",
            "caption": "metasfresh AG"
          },
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "AD_Client_ID"
          },
          "viewEditorRenderMode": "never"
        },
        "DateOrdered": {
          "field": "DateOrdered",
          "value": "2019-04-26T00:00:00.000+02:00",
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "widgetType": "Date",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "DateOrdered"
          },
          "viewEditorRenderMode": "never"
        },
        "DatePromised": {
          "field": "DatePromised",
          "value": "2019-04-26T23:59:59.000+02:00",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "DateTime",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "DatePromised"
          },
          "viewEditorRenderMode": "always"
        },
        "AD_Org_ID": {
          "field": "AD_Org_ID",
          "value": {
            "key": "1000000",
            "caption": "metasfresh AG"
          },
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "AD_Org_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "IsDescription": {
          "field": "IsDescription",
          "value": false,
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "widgetType": "YesNo",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "IsDescription"
          },
          "viewEditorRenderMode": "always"
        },
        "ProductDescription": {
          "field": "ProductDescription",
          "value": "\nsome description\ndescription",
          "readonly": false,
          "mandatory": false,
          "displayed": false,
          "widgetType": "LongText",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "ProductDescription"
          },
          "viewEditorRenderMode": "always"
        },
        "C_Order_CompensationGroup_ID": {
          "field": "C_Order_CompensationGroup_ID",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "Lookup",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_Order_CompensationGroup_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "GroupCompensationType": {
          "field": "GroupCompensationType",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "GroupCompensationType"
          },
          "viewEditorRenderMode": "always"
        },
        "GroupCompensationAmtType": {
          "field": "GroupCompensationAmtType",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "GroupCompensationAmtType"
          },
          "viewEditorRenderMode": "always"
        },
        "IsGroupCompensationLine": {
          "field": "IsGroupCompensationLine",
          "value": false,
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "widgetType": "YesNo",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "IsGroupCompensationLine"
          },
          "viewEditorRenderMode": "always"
        },
        "GroupCompensationPercentage": {
          "field": "GroupCompensationPercentage",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Number",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "GroupCompensationPercentage"
          },
          "viewEditorRenderMode": "always"
        },
        "NoPriceConditionsColor_ID": {
          "field": "NoPriceConditionsColor_ID",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Color",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "NoPriceConditionsColor_ID"
          },
          "viewEditorRenderMode": "always"
        }
      },
      "validStatus": {
        "valid": true
      },
      "saveStatus": {
        "deleted": false,
        "saved": true,
        "hasChanges": false,
        "error": false,
        "reason": "just loaded"
      },
      "standardActions": [
        "new",
        "advancedEdit",
        "email",
        "letter",
        "delete"
      ],
      "websocketEndpoint": "/document/143/1001432"
    },
    {
      "windowId": "143",
      "id": "1001432",
      "tabId": "AD_Tab-187",
      "tabid": "AD_Tab-187",
      "rowId": "1001891",
      "fieldsByName": {
        "ID": {
          "field": "ID",
          "value": 1001891,
          "widgetType": "Integer"
        },
        "C_UOM_ID": {
          "field": "C_UOM_ID",
          "value": {
            "key": "100",
            "caption": "Each"
          },
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_UOM_ID"
          },
          "viewEditorRenderMode": "never"
        },
        "PriceList": {
          "field": "PriceList",
          "value": "5.00",
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "widgetType": "CostPrice",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "PriceList"
          },
          "viewEditorRenderMode": "always"
        },
        "PriceEntered": {
          "field": "PriceEntered",
          "value": "3.00",
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "widgetType": "CostPrice",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "PriceEntered"
          },
          "viewEditorRenderMode": "always"
        },
        "Line": {
          "field": "Line",
          "value": 20,
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "widgetType": "Integer",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Line"
          },
          "viewEditorRenderMode": "never"
        },
        "Description": {
          "field": "Description",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "LongText",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Description"
          },
          "viewEditorRenderMode": "always"
        },
        "QtyEntered": {
          "field": "QtyEntered",
          "value": "10",
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "widgetType": "Quantity",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "QtyEntered"
          },
          "viewEditorRenderMode": "always"
        },
        "QtyEnteredTU": {
          "field": "QtyEnteredTU",
          "value": "1",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Quantity",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "QtyEnteredTU"
          },
          "viewEditorRenderMode": "always"
        },
        "M_Product_ID": {
          "field": "M_Product_ID",
          "value": {
            "key": "2005577",
            "caption": "P002737_Convenience Salat 250g",
            "description": "Ready-made salad 8.82oz"
          },
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "Lookup",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "M_Product_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "PriceActual": {
          "field": "PriceActual",
          "value": "3.00",
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "widgetType": "CostPrice",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "PriceActual"
          },
          "viewEditorRenderMode": "never"
        },
        "Price_UOM_ID": {
          "field": "Price_UOM_ID",
          "value": {
            "key": "100",
            "caption": "Each"
          },
          "readonly": true,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Price_UOM_ID"
          },
          "viewEditorRenderMode": "never"
        },
        "QtyEnteredInPriceUOM": {
          "field": "QtyEnteredInPriceUOM",
          "value": "10",
          "readonly": true,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Quantity",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "QtyEnteredInPriceUOM"
          },
          "viewEditorRenderMode": "never"
        },
        "C_Flatrate_Conditions_ID": {
          "field": "C_Flatrate_Conditions_ID",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_Flatrate_Conditions_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "Discount": {
          "field": "Discount",
          "value": "0",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Number",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Discount"
          },
          "viewEditorRenderMode": "always"
        },
        "C_Tax_ID": {
          "field": "C_Tax_ID",
          "value": {
            "key": "1000023",
            "caption": "Reduzierter Steuersatz 7% (Deutschland)"
          },
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_Tax_ID"
          },
          "viewEditorRenderMode": "never"
        },
        "LineNetAmt": {
          "field": "LineNetAmt",
          "value": "30.00",
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "widgetType": "Amount",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "LineNetAmt"
          },
          "viewEditorRenderMode": "never"
        },
        "C_BPartner_ID": {
          "field": "C_BPartner_ID",
          "value": {
            "key": "2156425",
            "caption": "Test Kunde 1_G0001345a0",
            "description": "Dieser Text wurde im Textfeld \"Beschreibung\" dieses Geschäftspartnereintrags erfasst."
          },
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_BPartner_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "M_HU_PI_Item_Product_ID": {
          "field": "M_HU_PI_Item_Product_ID",
          "value": {
            "key": "3010001",
            "caption": "IFCO 6410 x 10 Stk",
            "description": "IFCO 6410 x 10 Stk"
          },
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "M_HU_PI_Item_Product_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "C_BPartner_Location_ID": {
          "field": "C_BPartner_Location_ID",
          "value": {
            "key": "2205175",
            "caption": "Testadresse 3"
          },
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_BPartner_Location_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "M_AttributeSetInstance_ID": {
          "field": "M_AttributeSetInstance_ID",
          "value": {
            "key": "0",
            "caption": "---"
          },
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "ProductAttributes",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "M_AttributeSetInstance_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "C_Activity_ID": {
          "field": "C_Activity_ID",
          "value": null,
          "readonly": true,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_Activity_ID"
          },
          "viewEditorRenderMode": "never"
        },
        "C_PaymentTerm_Override_ID": {
          "field": "C_PaymentTerm_Override_ID",
          "value": {
            "key": "1000002",
            "caption": "30 days net"
          },
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_PaymentTerm_Override_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "PaymentDiscount": {
          "field": "PaymentDiscount",
          "value": "0.00",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Amount",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "PaymentDiscount"
          },
          "viewEditorRenderMode": "always"
        },
        "M_DiscountSchemaBreak_ID": {
          "field": "M_DiscountSchemaBreak_ID",
          "value": {
            "key": "1000035",
            "caption": "60"
          },
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "Lookup",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "M_DiscountSchemaBreak_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "Base_PricingSystem_ID": {
          "field": "Base_PricingSystem_ID",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "Lookup",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Base_PricingSystem_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "Qty_AvailableToPromise": {
          "field": "Qty_AvailableToPromise",
          "value": "513826",
          "readonly": true,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Quantity",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "Qty_AvailableToPromise"
          },
          "viewEditorRenderMode": "never"
        },
        "ProfitPercent": {
          "field": "ProfitPercent",
          "value": "0.00",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Amount",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "ProfitPercent"
          },
          "viewEditorRenderMode": "always"
        },
        "ProfitPriceActual": {
          "field": "ProfitPriceActual",
          "value": "3.00",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Amount",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "ProfitPriceActual"
          },
          "viewEditorRenderMode": "always"
        },
        "M_Product_DocumentNote": {
          "field": "M_Product_DocumentNote",
          "value": "This is a one-liner consisting of 1346 chars! 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321 987654321blah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blahbblah-blah-blahblah-blah-blahblah-blah-blahblah-blah-blah",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "LongText",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "M_Product_DocumentNote"
          },
          "viewEditorRenderMode": "always"
        },
        "AD_Client_ID": {
          "field": "AD_Client_ID",
          "value": {
            "key": "1000000",
            "caption": "metasfresh AG"
          },
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "AD_Client_ID"
          },
          "viewEditorRenderMode": "never"
        },
        "DateOrdered": {
          "field": "DateOrdered",
          "value": "2019-04-26T00:00:00.000+02:00",
          "readonly": true,
          "mandatory": true,
          "displayed": true,
          "widgetType": "Date",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "DateOrdered"
          },
          "viewEditorRenderMode": "never"
        },
        "DatePromised": {
          "field": "DatePromised",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "DateTime",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "DatePromised"
          },
          "viewEditorRenderMode": "always"
        },
        "AD_Org_ID": {
          "field": "AD_Org_ID",
          "value": {
            "key": "1000000",
            "caption": "metasfresh AG"
          },
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "AD_Org_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "IsDescription": {
          "field": "IsDescription",
          "value": false,
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "widgetType": "YesNo",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "IsDescription"
          },
          "viewEditorRenderMode": "always"
        },
        "ProductDescription": {
          "field": "ProductDescription",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": false,
          "widgetType": "LongText",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "ProductDescription"
          },
          "viewEditorRenderMode": "always"
        },
        "C_Order_CompensationGroup_ID": {
          "field": "C_Order_CompensationGroup_ID",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "Lookup",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "C_Order_CompensationGroup_ID"
          },
          "viewEditorRenderMode": "always"
        },
        "GroupCompensationType": {
          "field": "GroupCompensationType",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "GroupCompensationType"
          },
          "viewEditorRenderMode": "always"
        },
        "GroupCompensationAmtType": {
          "field": "GroupCompensationAmtType",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "lookupValuesStale": true,
          "widgetType": "List",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "GroupCompensationAmtType"
          },
          "viewEditorRenderMode": "always"
        },
        "IsGroupCompensationLine": {
          "field": "IsGroupCompensationLine",
          "value": false,
          "readonly": false,
          "mandatory": true,
          "displayed": true,
          "widgetType": "YesNo",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "IsGroupCompensationLine"
          },
          "viewEditorRenderMode": "always"
        },
        "GroupCompensationPercentage": {
          "field": "GroupCompensationPercentage",
          "value": "0",
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Number",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "GroupCompensationPercentage"
          },
          "viewEditorRenderMode": "always"
        },
        "NoPriceConditionsColor_ID": {
          "field": "NoPriceConditionsColor_ID",
          "value": null,
          "readonly": false,
          "mandatory": false,
          "displayed": true,
          "widgetType": "Color",
          "validStatus": {
            "valid": true,
            "initialValue": true,
            "fieldName": "NoPriceConditionsColor_ID"
          },
          "viewEditorRenderMode": "always"
        }
      },
      "validStatus": {
        "valid": true
      },
      "saveStatus": {
        "deleted": false,
        "saved": true,
        "hasChanges": false,
        "error": false,
        "reason": "just loaded"
      },
      "standardActions": [
        "new",
        "advancedEdit",
        "email",
        "letter",
        "delete"
      ],
      "websocketEndpoint": "/document/143/1001432"
    }
  ]
}