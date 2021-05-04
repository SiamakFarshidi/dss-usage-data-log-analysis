var DecisionMatrix_Columns = [{ title: "FeatureID", field: "FeatureID", sorter: "string", width: 259, visible: false },{ title: "Feature Requirement", field: "Feature", sorter: "string", width: 349, headerFilter: "input" },{ title: "MoSCoW", field: "MoSCoW", sorter: "string", editor: "select", width: 100, headerFilter: true, headerFilterParams: { values: { "": "All", "Must-Have": "Must-Have", "Should-Have": "Should-Have", "Could-Have": "Could-Have", "Won't-Have": "Won't-Have" } } },{ title: "NTT...", field: "A0", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"NTT Communications" }, { title: "IBM Cloud", field: "A1", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"IBM Cloud" }, { title: "Interoute", field: "A2", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Interoute" }, ];var DecisionMatrix_datatable = [{ id: 1,FeatureID:"636463955697490797", Feature: "Docker", MoSCoW: "Must-Have",A0:true,A1:true,A2:true },{ id: 2,FeatureID:"636463955706774610", Feature: "France", MoSCoW: "Must-Have",A0:true,A1:true,A2:true },{ id: 3,FeatureID:"636463955746835472", Feature: "Mappable IP", MoSCoW: "Must-Have",A0:true,A1:true,A2:true },{ id: 4,FeatureID:"636463955797713071", Feature: "Public Cloud", MoSCoW: "Must-Have",A0:true,A1:true,A2:true },];             
            table_decision_matrix.clearData();
            table_decision_matrix.setColumns(DecisionMatrix_Columns);
            table_decision_matrix.setData(DecisionMatrix_datatable); 