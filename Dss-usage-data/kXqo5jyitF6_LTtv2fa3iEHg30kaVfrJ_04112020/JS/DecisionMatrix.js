var DecisionMatrix_Columns = [{ title: "FeatureID", field: "FeatureID", sorter: "string", width: 259, visible: false },{ title: "Feature Requirement", field: "Feature", sorter: "string", width: 349, headerFilter: "input" },{ title: "MoSCoW", field: "MoSCoW", sorter: "string", editor: "select", width: 100, headerFilter: true, headerFilterParams: { values: { "": "All", "Must-Have": "Must-Have", "Should-Have": "Should-Have", "Could-Have": "Could-Have", "Won't-Have": "Won't-Have" } } },{ title: "R3 Corda", field: "A0", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"R3 Corda" }, { title: "Hyperledger", field: "A1", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Hyperledger" }, { title: "HydraChain", field: "A2", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HydraChain" }, { title: "Ethereum", field: "A3", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Ethereum" }, { title: "JPMorgan...", field: "A4", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"JPMorgan Quorum" }, { title: "Chain", field: "A5", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Chain" }, { title: "Symbiont", field: "A6", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Symbiont" }, { title: "Stratis", field: "A7", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Stratis" }, { title: "BigChainDB", field: "A8", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"BigChainDB" }, { title: "MultiChain", field: "A9", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"MultiChain" }, ];var DecisionMatrix_datatable = [{ id: 1,FeatureID:"636666538779954087", Feature: "Spam-attack resistant", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 2,FeatureID:"636666538730162517", Feature: "Hard-fork resistant", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:false,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false },{ id: 3,FeatureID:"636666538776149149", Feature: "Smart-contracts", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:false,A9:false },{ id: 4,FeatureID:"636666538778043116", Feature: "SNARKS", MoSCoW: "Could-Have",A0:false,A1:false,A2:false,A3:true,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false },];             
            table_decision_matrix.clearData();
            table_decision_matrix.setColumns(DecisionMatrix_Columns);
            table_decision_matrix.setData(DecisionMatrix_datatable); 