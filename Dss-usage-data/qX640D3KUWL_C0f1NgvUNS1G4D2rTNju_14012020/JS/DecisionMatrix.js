var DecisionMatrix_Columns = [{ title: "FeatureID", field: "FeatureID", sorter: "string", width: 259, visible: false },{ title: "Feature Requirement", field: "Feature", sorter: "string", width: 349, headerFilter: "input" },{ title: "MoSCoW", field: "MoSCoW", sorter: "string", editor: "select", width: 100, headerFilter: true, headerFilterParams: { values: { "": "All", "Must-Have": "Must-Have", "Should-Have": "Should-Have", "Could-Have": "Could-Have", "Won't-Have": "Won't-Have" } } },{ title: "MVC", field: "A0", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"MVC" }, { title: "PAC", field: "A1", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"PAC" }, { title: "C2", field: "A2", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"C2" }, ];var DecisionMatrix_datatable = [{ id: 1,FeatureID:"637086407370317788", Feature: "Graphic User Interface (GUI)", MoSCoW: "Must-Have",A0:true,A1:true,A2:true },{ id: 2,FeatureID:"637086407465561952", Feature: "separating the functionality from the UI", MoSCoW: "Must-Have",A0:true,A1:true,A2:true },{ id: 3,FeatureID:"637086407464654376", Feature: "Separate user interface component/layer", MoSCoW: "Should-Have",A0:true,A1:true,A2:true },{ id: 4,FeatureID:"637086407370946104", Feature: "handling user input", MoSCoW: "Could-Have",A0:true,A1:true,A2:true },];             
            table_decision_matrix.clearData();
            table_decision_matrix.setColumns(DecisionMatrix_Columns);
            table_decision_matrix.setData(DecisionMatrix_datatable); 