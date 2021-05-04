var DecisionMatrix_Columns = [{ title: "FeatureID", field: "FeatureID", sorter: "string", width: 259, visible: false },{ title: "Feature Requirement", field: "Feature", sorter: "string", width: 349, headerFilter: "input" },{ title: "MoSCoW", field: "MoSCoW", sorter: "string", editor: "select", width: 100, headerFilter: true, headerFilterParams: { values: { "": "All", "Must-Have": "Must-Have", "Should-Have": "Should-Have", "Could-Have": "Could-Have", "Won't-Have": "Won't-Have" } } },{ title: "Appian", field: "A0", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Appian" }, { title: "WaveMaker", field: "A1", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"WaveMaker" }, { title: "Mendix", field: "A2", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Mendix" }, { title: "Betty Blocks", field: "A3", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Betty Blocks" }, { title: "Pega...", field: "A4", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Pega (Infinity)" }, { title: "Kissflow", field: "A5", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Kissflow" }, { title: "Kony...", field: "A6", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Kony (Quantum)" }, { title: "TrackVia", field: "A7", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"TrackVia" }, { title: "AgilePoint...", field: "A8", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"AgilePoint (NX)" }, ];var DecisionMatrix_datatable = [{ id: 1,FeatureID:"637188997463916864", Feature: "GDPR", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 2,FeatureID:"637188997491920772", Feature: "Model only (No-code)", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 3,FeatureID:"637188997543840954", Feature: "Predefined components", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 4,FeatureID:"637188997569086424", Feature: "Programmed", MoSCoW: "Won't-Have",A0:false,A1:false,A2:false,A3:false,A4:false,A5:false,A6:false,A7:false,A8:false },{ id: 5,FeatureID:"637188997636956029", Feature: "Web modeling tool", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 6,FeatureID:"637188997377744366", Feature: "Business Analysts", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 7,FeatureID:"637188997396860339", Feature: "Company-Branded Templates & Styling", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:false },{ id: 8,FeatureID:"637188997436702504", Feature: "Domain Experts", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 9,FeatureID:"637188997455091948", Feature: "Expression editor", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:false,A7:true,A8:true },{ id: 10,FeatureID:"637188997457810374", Feature: "Form & View", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 11,FeatureID:"637188997483155800", Feature: "Mobile app platform", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 12,FeatureID:"637188997489642079", Feature: "Model interpretation", MoSCoW: "Should-Have",A0:true,A1:false,A2:false,A3:true,A4:true,A5:true,A6:false,A7:true,A8:false },{ id: 13,FeatureID:"637188997518355585", Feature: "Natural language rules", MoSCoW: "Should-Have",A0:false,A1:true,A2:false,A3:false,A4:true,A5:false,A6:true,A7:false,A8:false },{ id: 14,FeatureID:"637188997522673107", Feature: "Object-Role Modeling (ORM)", MoSCoW: "Should-Have",A0:false,A1:true,A2:true,A3:false,A4:false,A5:false,A6:false,A7:false,A8:false },{ id: 15,FeatureID:"637188997536125390", Feature: "Plug and play architecture", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:false,A6:false,A7:false,A8:false },{ id: 16,FeatureID:"637188997547958594", Feature: "Private Cloud platform", MoSCoW: "Should-Have",A0:true,A1:false,A2:true,A3:true,A4:false,A5:false,A6:false,A7:false,A8:false },{ id: 17,FeatureID:"637188997549957420", Feature: "Process app platform", MoSCoW: "Should-Have",A0:true,A1:false,A2:false,A3:false,A4:false,A5:true,A6:false,A7:false,A8:false },{ id: 18,FeatureID:"637188997552665865", Feature: "Process flow", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 19,FeatureID:"637188997559571888", Feature: "Process rules", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 20,FeatureID:"637188997580939609", Feature: "Public Cloud platform", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 21,FeatureID:"637188997620015759", Feature: "Tool set", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false,A6:true,A7:false,A8:false },{ id: 22,FeatureID:"637188997634167630", Feature: "Web applications", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 23,FeatureID:"637188997644591639", Feature: "Workflow", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 24,FeatureID:"637188997389874354", Feature: "Close to programming language", MoSCoW: "Could-Have",A0:false,A1:false,A2:true,A3:true,A4:false,A5:false,A6:false,A7:false,A8:false },{ id: 25,FeatureID:"637188997404555909", Feature: "Convert model to text", MoSCoW: "Could-Have",A0:false,A1:false,A2:true,A3:true,A4:false,A5:false,A6:false,A7:false,A8:false },{ id: 26,FeatureID:"637188997422760517", Feature: "Data rules", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 27,FeatureID:"637188997426208546", Feature: "Decision table", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:false,A4:true,A5:true,A6:false,A7:false,A8:false },{ id: 28,FeatureID:"637188997430066314", Feature: "Decision tree", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:false,A7:false,A8:false },{ id: 29,FeatureID:"637188997450654488", Feature: "Entity-Attribute-Relationship (EAR)", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 30,FeatureID:"637188997466495387", Feature: "General-purpose platform", MoSCoW: "Could-Have",A0:false,A1:true,A2:true,A3:true,A4:true,A5:false,A6:true,A7:false,A8:true },{ id: 31,FeatureID:"637188997468114458", Feature: "HIPAA compliant", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:false,A4:true,A5:true,A6:true,A7:true,A8:false },{ id: 32,FeatureID:"637188997478738354", Feature: "ISO 27001-2013 certification", MoSCoW: "Could-Have",A0:true,A1:false,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 33,FeatureID:"637188997485734331", Feature: "Mobile Apps", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 34,FeatureID:"637188997496887911", Feature: "Model-centric (Low-code)", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 35,FeatureID:"637188997511029790", Feature: "Multilingual Apps", MoSCoW: "Could-Have",A0:true,A1:false,A2:true,A3:true,A4:true,A5:true,A6:true,A7:false,A8:false },{ id: 36,FeatureID:"637188997527920084", Feature: "On-premise", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:false,A8:true },{ id: 37,FeatureID:"637188997564129281", Feature: "Professional Developers", MoSCoW: "Could-Have",A0:false,A1:true,A2:true,A3:true,A4:true,A5:false,A6:true,A7:false,A8:true },{ id: 38,FeatureID:"637188997577751448", Feature: "Programming optional", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 39,FeatureID:"637188997586006693", Feature: "Request-handling platform", MoSCoW: "Could-Have",A0:false,A1:false,A2:false,A3:false,A4:false,A5:false,A6:false,A7:true,A8:false },{ id: 40,FeatureID:"637188997630249874", Feature: "Visual IDE", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },{ id: 41,FeatureID:"637188997640494010", Feature: "Web portals", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true },];             
            table_decision_matrix.clearData();
            table_decision_matrix.setColumns(DecisionMatrix_Columns);
            table_decision_matrix.setData(DecisionMatrix_datatable); 