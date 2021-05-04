var DecisionMatrix_Columns = [{ title: "FeatureID", field: "FeatureID", sorter: "string", width: 259, visible: false },{ title: "Feature Requirement", field: "Feature", sorter: "string", width: 349, headerFilter: "input" },{ title: "MoSCoW", field: "MoSCoW", sorter: "string", editor: "select", width: 100, headerFilter: true, headerFilterParams: { values: { "": "All", "Must-Have": "Must-Have", "Should-Have": "Should-Have", "Could-Have": "Could-Have", "Won't-Have": "Won't-Have" } } },{ title: "1and1", field: "A0", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"1and1" }, { title: "Google Cloud", field: "A1", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Google Cloud" }, { title: "Amazon (AWS)", field: "A2", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Amazon (AWS)" }, { title: "Microsoft...", field: "A3", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Microsoft Azure" }, { title: "NTT...", field: "A4", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"NTT Communications" }, { title: "Rackspace", field: "A5", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"Rackspace" }, { title: "CenturyLink", field: "A6", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"CenturyLink" }, { title: "VPS.NET", field: "A7", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"VPS.NET" }, { title: "JoyentCloud", field: "A8", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"JoyentCloud" }, { title: "exoscale", field: "A9", align: "center", formatter: "tickCross", headerSort: true, headerVertical: true, headerTooltip:"exoscale" }, ];var DecisionMatrix_datatable = [{ id: 1,FeatureID:"636463955667441832", Feature: "Auto Scaling", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 2,FeatureID:"636463955701098553", Feature: "EU Data Protection", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 3,FeatureID:"636463955754917978", Feature: "Multi-Factor Authentication", MoSCoW: "Must-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 4,FeatureID:"636463955658998261", Feature: "API Manager", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 5,FeatureID:"636463955664512913", Feature: "Auditing/Logging", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:true,A9:true },{ id: 6,FeatureID:"636463955758231316", Feature: "Multi-Tenancy", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:false,A8:true,A9:false },{ id: 7,FeatureID:"636463955828484653", Feature: "Third-Party Identity Authentication", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:true,A8:false,A9:false },{ id: 8,FeatureID:"636463955835608093", Feature: "Virtual private cloud (BGP)", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:false,A5:false,A6:false,A7:true,A8:true,A9:false },{ id: 9,FeatureID:"636463955838146345", Feature: "Virtual public cloud (BGP)", MoSCoW: "Should-Have",A0:true,A1:true,A2:true,A3:true,A4:true,A5:true,A6:true,A7:false,A8:false,A9:true },];             
            table_decision_matrix.clearData();
            table_decision_matrix.setColumns(DecisionMatrix_Columns);
            table_decision_matrix.setData(DecisionMatrix_datatable); 