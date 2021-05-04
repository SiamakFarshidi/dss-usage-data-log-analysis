var DecisionMatrix_Columns = [{ title: "FeatureID", field: "FeatureID", sorter: "string", width: 259, visible: false },{ title: "Feature Requirement", field: "Feature", sorter: "string", width: 349, headerFilter: "input" },{ title: "MoSCoW", field: "MoSCoW", sorter: "string", editor: "select", width: 100, headerFilter: true, headerFilterParams: { values: { "": "All", "Must-Have": "Must-Have", "Should-Have": "Should-Have", "Could-Have": "Could-Have", "Won't-Have": "Won't-Have" } } },{ title: "Colony", field: "A0", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Colony" }, { title: "Aragon", field: "A1", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Aragon" }, { title: "DAOStack", field: "A2", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"DAOStack" }, { title: "MakerDAO", field: "A3", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"MakerDAO" }, { title: "Molochdao", field: "A4", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Molochdao" }, { title: "Kleros", field: "A5", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Kleros" }, ];var DecisionMatrix_datatable = [{ id: 1,FeatureID:"637545984161224260", Feature: "Infrastructure decentralization", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 2,FeatureID:"637545984167184677", Feature: "Token-based voting", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 3,FeatureID:"637545984179300560", Feature: "Smart contracts", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 4,FeatureID:"637545984215771209", Feature: "Token distribution", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 5,FeatureID:"637545984235129855", Feature: "On-chain", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 6,FeatureID:"637545984300919319", Feature: "Scalability", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 7,FeatureID:"637545984159588940", Feature: "Political decentralization?", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:true },{ id: 8,FeatureID:"637545984162939518", Feature: "Direct DAO Governance", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false },{ id: 9,FeatureID:"637545984165754684", Feature: "Reputation-based voting", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:false,A4:true,A5:false },{ id: 10,FeatureID:"637545984171844694", Feature: "Upgradeable contract", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 11,FeatureID:"637545984177570505", Feature: "Legal Entity", MoSCoW: "Should-Have",A0:true,A1:true,A2:false,A3:true,A4:true,A5:false },{ id: 12,FeatureID:"637545984180370533", Feature: "Arbitrary transactions", MoSCoW: "Should-Have",A0:true,A1:false,A2:true,A3:true,A4:false,A5:true },{ id: 13,FeatureID:"637545984184859986", Feature: "Funds", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 14,FeatureID:"637545984220986852", Feature: "Collective data curation", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false },{ id: 15,FeatureID:"637545984224676492", Feature: "Governance upgrade", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false },{ id: 16,FeatureID:"637545984226336478", Feature: "Inflation Funding", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false },{ id: 17,FeatureID:"637545984229029377", Feature: "Utility Token Offering (UTO)", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:false,A4:true,A5:false },{ id: 18,FeatureID:"637545984240419859", Feature: "Membership management", MoSCoW: "Should-Have",A0:true,A1:true,A2:false,A3:false,A4:true,A5:false },{ id: 19,FeatureID:"637545984242249871", Feature: "Authentication/Identification", MoSCoW: "Should-Have",A0:false,A1:false,A2:false,A3:false,A4:true,A5:false },{ id: 20,FeatureID:"637545984257960262", Feature: "Transparency portal", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false },{ id: 21,FeatureID:"637545984285509328", Feature: "Popularity", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 22,FeatureID:"637545984293219436", Feature: "Developer Resources (People)", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 23,FeatureID:"637545984297069340", Feature: "Upgradability", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 24,FeatureID:"637545984163384778", Feature: "Representative DAO Governance", MoSCoW: "Could-Have",A0:false,A1:false,A2:false,A3:false,A4:true,A5:false },{ id: 25,FeatureID:"637545984164294758", Feature: "Quadratic voting", MoSCoW: "Could-Have",A0:false,A1:false,A2:false,A3:false,A4:true,A5:false },{ id: 26,FeatureID:"637545984191025997", Feature: "Intellectual Property", MoSCoW: "Could-Have",A0:true,A1:true,A2:false,A3:true,A4:false,A5:false },{ id: 27,FeatureID:"637545984195176015", Feature: "Research & Development", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false },{ id: 28,FeatureID:"637545984197176008", Feature: "Service contracts", MoSCoW: "Could-Have",A0:true,A1:true,A2:false,A3:false,A4:false,A5:false },{ id: 29,FeatureID:"637545984199185972", Feature: "Professional services", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false },{ id: 30,FeatureID:"637545984201186358", Feature: "Content or registry curation", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false },{ id: 31,FeatureID:"637545984203375924", Feature: "Reputation", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:false },{ id: 32,FeatureID:"637545984205411186", Feature: "Meetups", MoSCoW: "Could-Have",A0:true,A1:true,A2:false,A3:true,A4:false,A5:false },{ id: 33,FeatureID:"637545984207551188", Feature: "Reward-for-work proposals", MoSCoW: "Could-Have",A0:true,A1:true,A2:false,A3:true,A4:false,A5:true },{ id: 34,FeatureID:"637545984209871209", Feature: "Structure-changing proposals", MoSCoW: "Could-Have",A0:true,A1:true,A2:false,A3:true,A4:false,A5:true },{ id: 35,FeatureID:"637545984212181191", Feature: "Funding Queues", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 36,FeatureID:"637545984217531204", Feature: "Funds allocation", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },{ id: 37,FeatureID:"637545984229969388", Feature: "Initial coin Offering (ICO)", MoSCoW: "Could-Have",A0:true,A1:false,A2:true,A3:false,A4:false,A5:false },{ id: 38,FeatureID:"637545984251289887", Feature: "Onchain tools", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:false },{ id: 39,FeatureID:"637545984253359841", Feature: "Offchain tools", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:false },{ id: 40,FeatureID:"637545984255989883", Feature: "Extensibility", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:false },{ id: 41,FeatureID:"637545984264659856", Feature: "Recovery", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false },{ id: 42,FeatureID:"637545984266779869", Feature: "Multiple payment types", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:false,A4:true,A5:false },{ id: 43,FeatureID:"637545984268809866", Feature: "Analytics Dashboard", MoSCoW: "Could-Have",A0:false,A1:false,A2:false,A3:false,A4:false,A5:false },{ id: 44,FeatureID:"637545984278569916", Feature: "Ethereum", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true },];             
            table_decision_matrix.clearData();
            table_decision_matrix.setColumns(DecisionMatrix_Columns);
            table_decision_matrix.setData(DecisionMatrix_datatable); 