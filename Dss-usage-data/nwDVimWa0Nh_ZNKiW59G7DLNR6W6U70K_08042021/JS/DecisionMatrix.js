var DecisionMatrix_Columns = [{ title: "FeatureID", field: "FeatureID", sorter: "string", width: 259, visible: false },{ title: "Feature Requirement", field: "Feature", sorter: "string", width: 349, headerFilter: "input" },{ title: "MoSCoW", field: "MoSCoW", sorter: "string", editor: "select", width: 100, headerFilter: true, headerFilterParams: { values: { "": "All", "Must-Have": "Must-Have", "Should-Have": "Should-Have", "Could-Have": "Could-Have", "Won't-Have": "Won't-Have" } } },{ title: "Hyperledger", field: "A0", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Hyperledger" }, { title: "R3 Corda", field: "A1", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"R3 Corda" }, { title: "Chain", field: "A2", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Chain" }, { title: "JPMorgan...", field: "A3", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"JPMorgan Quorum" }, { title: "OpenChain", field: "A4", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"OpenChain" }, { title: "HydraChain", field: "A5", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HydraChain" }, { title: "Symbiont", field: "A6", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Symbiont" }, { title: "MultiChain", field: "A7", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"MultiChain" }, { title: "Stratis", field: "A8", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Stratis" }, { title: "BigChainDB", field: "A9", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"BigChainDB" }, ];var DecisionMatrix_datatable = [{ id: 1,FeatureID:"636666538752698464", Feature: "Private", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 2,FeatureID:"636666538718512614", Feature: "Cross-chain interoperable", MoSCoW: "Should-Have",A0:true,A1:false,A2:false,A3:false,A4:true,A5:true,A6:false,A7:true,A8:false,A9:false },{ id: 3,FeatureID:"636666538731399201", Feature: "Innovation", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 4,FeatureID:"636666538744839715", Feature: "Permissioned", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:false,A9:true },{ id: 5,FeatureID:"636666538747940597", Feature: "Popularity in the market", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 6,FeatureID:"636666538776149149", Feature: "Smart-contracts", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:false,A8:true,A9:false },{ id: 7,FeatureID:"636666538781649427", Feature: "Technology Maturity ", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 8,FeatureID:"636666538783691863", Feature: "Transaction Speed", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 9,FeatureID:"636666538790708405", Feature: "Virtual Machine", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false },{ id: 10,FeatureID:"636666538711463770", Feature: ".NET", MoSCoW: "Could-Have",A0:false,A1:false,A2:false,A3:false,A4:false,A5:false,A6:false,A7:false,A8:true,A9:false },{ id: 11,FeatureID:"636666538735548499", Feature: "Java", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:false,A4:false,A5:false,A6:false,A7:true,A8:false,A9:false },{ id: 12,FeatureID:"636666538736934932", Feature: "JavaScript", MoSCoW: "Could-Have",A0:true,A1:false,A2:false,A3:false,A4:true,A5:false,A6:false,A7:false,A8:false,A9:false },{ id: 13,FeatureID:"636666538746235142", Feature: "Permissionless", MoSCoW: "Could-Have",A0:false,A1:false,A2:false,A3:false,A4:false,A5:false,A6:false,A7:false,A8:true,A9:false },{ id: 14,FeatureID:"636666538764528635", Feature: "Python", MoSCoW: "Could-Have",A0:true,A1:false,A2:false,A3:false,A4:true,A5:true,A6:true,A7:true,A8:false,A9:true },];             
            table_decision_matrix.clearData();
            table_decision_matrix.setColumns(DecisionMatrix_Columns);
            table_decision_matrix.setData(DecisionMatrix_datatable); 