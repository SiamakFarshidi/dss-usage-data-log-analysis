var DecisionMatrix_Columns = [{ title: "FeatureID", field: "FeatureID", sorter: "string", width: 259, visible: false },{ title: "Feature Requirement", field: "Feature", sorter: "string", width: 349, headerFilter: "input" },{ title: "MoSCoW", field: "MoSCoW", sorter: "string", editor: "select", width: 100, headerFilter: true, headerFilterParams: { values: { "": "All", "Must-Have": "Must-Have", "Should-Have": "Should-Have", "Could-Have": "Could-Have", "Won't-Have": "Won't-Have" } } },{ title: "HS:{Amazon...", field: "A0", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HS:{Amazon DynamoDB (database service),Apache Jackrabbit Oak (1.0.38),MySQL Community Edition,MySQL Standard Edition}" }, { title: "HS:{Amazon...", field: "A1", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HS:{Amazon DynamoDB (database service),Apache Jackrabbit Oak (1.0.38),MySQL Community Edition,MySQL Enterprise Edition}" }, { title: "HS:{Amazon...", field: "A2", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HS:{Amazon DynamoDB (database service),Apache Jackrabbit Oak (1.0.38),MySQL Community Edition,Aerospike Enterprise Edition}" }, { title: "HS:{Amazon...", field: "A3", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HS:{Amazon DynamoDB (database service),Apache Jackrabbit Oak (1.0.38),MySQL Community Edition,MongoDB Enterprise Server (3.4.3)}" }, { title: "HS:{Amazon...", field: "A4", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HS:{Amazon DynamoDB (database service),Apache Jackrabbit Oak (1.0.38),MySQL Community Edition,Couchbase Enterprise Edition [Gold plan] (4.6)}" }, { title: "HS:{Amazon...", field: "A5", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HS:{Amazon DynamoDB (database service),Apache Jackrabbit Oak (1.0.38),MySQL Community Edition,Couchbase Enterprise Edition [Silver Plan] (4.6)}" }, { title: "HS:{Amazon...", field: "A6", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HS:{Amazon DynamoDB (database service),Apache Jackrabbit Oak (1.0.38),MySQL Community Edition,Rocket UniData Enterprise (8.1.1)}" }, { title: "HS:{Amazon...", field: "A7", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HS:{Amazon DynamoDB (database service),Apache Jackrabbit Oak (1.0.38),MySQL Community Edition,Rocket UniVerse Enterprise (11.3.1)}" }, { title: "HS:{Amazon...", field: "A8", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HS:{Amazon DynamoDB (database service),Apache Jackrabbit Oak (1.0.38),MySQL Community Edition,Apache CouchDB (2.0.0)}" }, { title: "HS:{Amazon...", field: "A9", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"HS:{Amazon DynamoDB (database service),Apache Jackrabbit Oak (1.0.38),MySQL Community Edition,webMethods Tamino (9.7)}" }, ];var DecisionMatrix_datatable = [{ id: 1,FeatureID:"636182151305851724", Feature: "BASE (Eventual Consistency)", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 2,FeatureID:"636182151372047263", Feature: "Horizontal Scalability (Scale out/in)", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 3,FeatureID:"636182151465622227", Feature: "Entity Compression", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 4,FeatureID:"636182151471387874", Feature: "Dictionary compression", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 5,FeatureID:"636253348832873203", Feature: "Add table column at specific position", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 6,FeatureID:"636293703822705116", Feature: "Basic server configuration", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 7,FeatureID:"636182151303808089", Feature: "ACID (Immediate Consistency)", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 8,FeatureID:"636182151681919153", Feature: "Open Source License", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 9,FeatureID:"636293703845943384", Feature: "Intermediate server configuration", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:false,A9:false },{ id: 10,FeatureID:"636182151455205366", Feature: "Create a User-Defined Data Type Alias", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 11,FeatureID:"636182151688398754", Feature: "Pricing Model", MoSCoW: "Could-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },];             
            table_decision_matrix.clearData();
            table_decision_matrix.setColumns(DecisionMatrix_Columns);
            table_decision_matrix.setData(DecisionMatrix_datatable); 