var DecisionMatrix_Columns = [{ title: "FeatureID", field: "FeatureID", sorter: "string", width: 259, visible: false },{ title: "Feature Requirement", field: "Feature", sorter: "string", width: 349, headerFilter: "input" },{ title: "MoSCoW", field: "MoSCoW", sorter: "string", editor: "select", width: 100, headerFilter: true, headerFilterParams: { values: { "": "All", "Must-Have": "Must-Have", "Should-Have": "Should-Have", "Could-Have": "Could-Have", "Won't-Have": "Won't-Have" } } },{ title: "Ethereum", field: "A0", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Ethereum" }, { title: "Hyperledger", field: "A1", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Hyperledger" }, { title: "NEO", field: "A2", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"NEO" }, { title: "Cosmos...", field: "A3", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Cosmos Network" }, { title: "Stellar", field: "A4", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Stellar" }, { title: "Waves...", field: "A5", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Waves Platform" }, { title: "Chain", field: "A6", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Chain" }, { title: "VeChain", field: "A7", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"VeChain" }, { title: "ICON", field: "A8", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"ICON" }, { title: "Symbiont", field: "A9", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Symbiont" }, ];var DecisionMatrix_datatable = [{ id: 1,FeatureID:"636666538713128600", Feature: "Application Layer", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 2,FeatureID:"636666538721340959", Feature: "Cryptographic Tokens", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 3,FeatureID:"636666538725297278", Feature: "Directed Acyclic graph", MoSCoW: "Won't-Have",A0:false,A1:false,A2:false,A3:false,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false },{ id: 4,FeatureID:"636666538739019853", Feature: "Network Layer", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 5,FeatureID:"636666538743130887", Feature: "On-chain transactions", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 6,FeatureID:"636666538761756776", Feature: "Protocol Layer", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 7,FeatureID:"636666538776149149", Feature: "Smart-contracts", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 8,FeatureID:"636666538779954087", Feature: "Spam-attack resistant", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 9,FeatureID:"636666538780642124", Feature: "Sybil atack resistant", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 10,FeatureID:"636666538720872206", Feature: "Cryptocurrency (purpose)", MoSCoW: "Should-Have",A0:true,A1:false,A2:true,A3:true,A4:true,A5:true,A6:true,A7:false,A8:false,A9:false },{ id: 11,FeatureID:"636666538736934932", Feature: "JavaScript", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:false,A4:true,A5:true,A6:false,A7:false,A8:false,A9:false },{ id: 12,FeatureID:"636666538738072101", Feature: "Native Token", MoSCoW: "Should-Have",A0:true,A1:false,A2:true,A3:true,A4:true,A5:true,A6:false,A7:true,A8:true,A9:false },{ id: 13,FeatureID:"636666538779309377", Feature: "Solidity", MoSCoW: "Should-Have",A0:true,A1:true,A2:false,A3:false,A4:false,A5:false,A6:false,A7:true,A8:false,A9:false },{ id: 14,FeatureID:"636666538781649427", Feature: "Technology Maturity ", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 15,FeatureID:"636666538785552203", Feature: "Turing Complete", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false,A6:true,A7:false,A8:false,A9:false },{ id: 16,FeatureID:"636666538716338441", Feature: "C++", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:false,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false },{ id: 17,FeatureID:"636666538722707293", Feature: "delegated Byzantine Fault Tolerance", MoSCoW: "Could-Have",A0:false,A1:false,A2:true,A3:true,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false },{ id: 18,FeatureID:"636666538723886804", Feature: "Delegated Proof-of-Stake", MoSCoW: "Could-Have",A0:false,A1:false,A2:false,A3:true,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false },{ id: 19,FeatureID:"636666538728268851", Feature: "Federated Byzantine Agreement", MoSCoW: "Could-Have",A0:false,A1:false,A2:false,A3:true,A4:true,A5:false,A6:true,A7:false,A8:false,A9:false },{ id: 20,FeatureID:"636666538730162517", Feature: "Hard-fork resistant", MoSCoW: "Could-Have",A0:false,A1:true,A2:true,A3:false,A4:false,A5:false,A6:false,A7:false,A8:true,A9:false },{ id: 21,FeatureID:"636666538731399201", Feature: "Innovation", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 22,FeatureID:"636666538733057592", Feature: "Instant transaction Finality", MoSCoW: "Could-Have",A0:false,A1:true,A2:true,A3:true,A4:true,A5:false,A6:true,A7:true,A8:true,A9:true },{ id: 23,FeatureID:"636666538735548499", Feature: "Java", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:false,A4:true,A5:false,A6:true,A7:false,A8:false,A9:false },{ id: 24,FeatureID:"636666538744839715", Feature: "Permissioned", MoSCoW: "Could-Have",A0:false,A1:true,A2:true,A3:true,A4:true,A5:false,A6:true,A7:true,A8:true,A9:true },{ id: 25,FeatureID:"636666538746235142", Feature: "Permissionless", MoSCoW: "Could-Have",A0:true,A1:false,A2:true,A3:true,A4:true,A5:true,A6:false,A7:false,A8:true,A9:false },{ id: 26,FeatureID:"636666538747940597", Feature: "Popularity in the market", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 27,FeatureID:"636666538750015055", Feature: "practical Byzantine Fault Tolerance", MoSCoW: "Could-Have",A0:false,A1:true,A2:false,A3:true,A4:false,A5:false,A6:false,A7:false,A8:true,A9:true },{ id: 28,FeatureID:"636666538752698464", Feature: "Private", MoSCoW: "Could-Have",A0:false,A1:true,A2:false,A3:true,A4:false,A5:false,A6:true,A7:false,A8:false,A9:true },{ id: 29,FeatureID:"636666538755410891", Feature: "Proof-of-Authority", MoSCoW: "Could-Have",A0:false,A1:false,A2:false,A3:true,A4:false,A5:false,A6:false,A7:true,A8:false,A9:false },{ id: 30,FeatureID:"636666538756664437", Feature: "Proof-of-Elapsed Time", MoSCoW: "Could-Have",A0:false,A1:true,A2:false,A3:true,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false },{ id: 31,FeatureID:"636666538757562013", Feature: "Proof-of-Stake", MoSCoW: "Could-Have",A0:false,A1:false,A2:false,A3:false,A4:false,A5:true,A6:false,A7:false,A8:false,A9:false },{ id: 32,FeatureID:"636666538760300672", Feature: "Proof-of-Work", MoSCoW: "Could-Have",A0:true,A1:false,A2:false,A3:false,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false },{ id: 33,FeatureID:"636666538763162279", Feature: "Public", MoSCoW: "Could-Have",A0:true,A1:false,A2:true,A3:true,A4:true,A5:true,A6:false,A7:true,A8:true,A9:false },{ id: 34,FeatureID:"636666538766034615", Feature: "Quantum-computing resistant", MoSCoW: "Could-Have",A0:false,A1:false,A2:true,A3:false,A4:true,A5:false,A6:false,A7:false,A8:false,A9:false },{ id: 35,FeatureID:"636666538778043116", Feature: "SNARKS", MoSCoW: "Could-Have",A0:true,A1:false,A2:false,A3:false,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false },{ id: 36,FeatureID:"636666538783691863", Feature: "Transaction Speed", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 37,FeatureID:"636666538790708405", Feature: "Virtual Machine", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false,A6:true,A7:false,A8:false,A9:false },{ id: 38,FeatureID:"636666538793018179", Feature: "Zero-knowledge Proof", MoSCoW: "Could-Have",A0:true,A1:true,A2:false,A3:false,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false },];             
            table_decision_matrix.clearData();
            table_decision_matrix.setColumns(DecisionMatrix_Columns);
            table_decision_matrix.setData(DecisionMatrix_datatable); 