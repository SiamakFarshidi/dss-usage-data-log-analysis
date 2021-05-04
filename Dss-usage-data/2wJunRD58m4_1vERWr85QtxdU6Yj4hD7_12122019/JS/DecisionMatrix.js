var DecisionMatrix_Columns = [{ title: "FeatureID", field: "FeatureID", sorter: "string", width: 259, visible: false },{ title: "Feature Requirement", field: "Feature", sorter: "string", width: 349, headerFilter: "input" },{ title: "MoSCoW", field: "MoSCoW", sorter: "string", editor: "select", width: 100, headerFilter: true, headerFilterParams: { values: { "": "All", "Must-Have": "Must-Have", "Should-Have": "Should-Have", "Could-Have": "Could-Have", "Won't-Have": "Won't-Have" } } },{ title: "Ethereum", field: "A0", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Ethereum" }, { title: "R3 Corda", field: "A1", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"R3 Corda" }, { title: "JPMorgan...", field: "A2", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"JPMorgan Quorum" }, { title: "Hyperledger", field: "A3", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Hyperledger" }, { title: "HydraChain", field: "A4", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HydraChain" }, { title: "Stratis", field: "A5", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Stratis" }, { title: "NEO", field: "A6", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"NEO" }, { title: "Stellar", field: "A7", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Stellar" }, { title: "ICON", field: "A8", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"ICON" }, { title: "VeChain", field: "A9", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"VeChain" }, ];var DecisionMatrix_datatable = [{ id: 1,FeatureID:"636666538713128600", Feature: "Application Layer", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 2,FeatureID:"636666538726683660", Feature: "Enterprise system integration", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 3,FeatureID:"636666538768561556", Feature: "Scalability Technologies", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 4,FeatureID:"636666538776149149", Feature: "Smart-contracts", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },];             
            table_decision_matrix.clearData();
            table_decision_matrix.setColumns(DecisionMatrix_Columns);
            table_decision_matrix.setData(DecisionMatrix_datatable); 