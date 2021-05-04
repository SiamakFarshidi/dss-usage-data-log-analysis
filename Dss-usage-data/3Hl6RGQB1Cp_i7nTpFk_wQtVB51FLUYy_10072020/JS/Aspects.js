var DeleteIcon = function (cell, formatterParams) { return "<i class='fas fa-trash-alt'></i>";};var UpdateIcone = function(cell, formatterParams) { return "<i class='fas fa-sync-alt'></i>";};var Aspects_columns = [  { title: "AspectID", field: "AspectID", sorter: "string", width: 200, visible: false }, { title: "Feature", field: "Feature", sorter: "string", width: 200, headerFilter: "input", editor: "input" }, {title: "Data Type", field: "DataType", sorter: "string", editor: "select", width: 100, headerFilter: true,headerFilterParams: { values:{"Boolean":"Boolean","Numeric":"Numeric","Monetary":"Monetary", "Description":"Description" } },editorParams: { values: {"Boolean":"Boolean","Numeric":"Numeric","Monetary":"Monetary", "Description":"Description" } }}, {title: "Member Of", field: "MemberOf", sorter: "string", editor: "select", width: 150, headerFilter: true,headerFilterParams: { values: {"NULL":"NULL"} },editorParams: { values: {"NULL":"NULL"} }}, {title: "UI Category", field: "UICategory", sorter: "string", editor: "select", width: 150, headerFilter: true,headerFilterParams: { values: } },editorParams: { values: } }}, { title: "Keywords", field: "Keywords", sorter: "string", width: 150, headerFilter: "input", editor: "input" }, { title: "Description", field: "Description", sorter: "string", width: 200, headerFilter: "input", editor: "input" }, { formatter: UpdateIcone, width: 30, align: "center", tooltip: "Update", 
                                            cellClick:function(e, cell){
                                                var row = cell.getRow();
                                                UpdateAspect(row.getData(), "Features");
                                            }
                      }, { formatter: DeleteIcon, width: 30, align: "center", tooltip: "Delete", 
                                            cellClick:function(e, cell){
                                                var row = cell.getRow();
                                                DeleteAspect(row.getData().AspectID, "Features");
                                            }
                      }]; Aspects_datatable = [];var Mapping_columns = [  { title: "AspectID", field: "AspectID", sorter: "string", width: 200, visible: false }, { title: "Feature", field: "Feature", sorter: "string", width: 200, headerFilter: "input", editor: "input"},{ title: "Functional...", field: "Functional appropriateness", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636172113404921037", cell.getValue());
                                            },
                                            headerTooltip:"Functional appropriateness" },{ title: "Functional...", field: "Functional completeness", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636172113542981195", cell.getValue());
                                            },
                                            headerTooltip:"Functional completeness" },{ title: "Functional...", field: "Functional correctness", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636172113845473499", cell.getValue());
                                            },
                                            headerTooltip:"Functional correctness" },{ title: "Maturity", field: "Maturity", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175735333630105", cell.getValue());
                                            },
                                            headerTooltip:"Maturity" },{ title: "Availability", field: "Availability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175735459250881", cell.getValue());
                                            },
                                            headerTooltip:"Availability" },{ title: "Fault...", field: "Fault tolerance", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175735554701922", cell.getValue());
                                            },
                                            headerTooltip:"Fault tolerance" },{ title: "Recoverabili...", field: "Recoverability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175735636115741", cell.getValue());
                                            },
                                            headerTooltip:"Recoverability" },{ title: "Time...", field: "Time behavior", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175735767246801", cell.getValue());
                                            },
                                            headerTooltip:"Time behavior" },{ title: "Resource...", field: "Resource utilization", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175735861147611", cell.getValue());
                                            },
                                            headerTooltip:"Resource utilization" },{ title: "Capacity", field: "Capacity", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175735947464498", cell.getValue());
                                            },
                                            headerTooltip:"Capacity" },{ title: "Appropriaten...", field: "Appropriateness recognizability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175736089117960", cell.getValue());
                                            },
                                            headerTooltip:"Appropriateness recognizability" },{ title: "Learnability", field: "Learnability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175736161613182", cell.getValue());
                                            },
                                            headerTooltip:"Learnability" },{ title: "Operability", field: "Operability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175736238145875", cell.getValue());
                                            },
                                            headerTooltip:"Operability" },{ title: "User error...", field: "User error protection", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175736318525353", cell.getValue());
                                            },
                                            headerTooltip:"User error protection" },{ title: "User...", field: "User interface aesthetics", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175736394334791", cell.getValue());
                                            },
                                            headerTooltip:"User interface aesthetics" },{ title: "Accessibilit...", field: "Accessibility", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175736481915032", cell.getValue());
                                            },
                                            headerTooltip:"Accessibility" },{ title: "Modularity", field: "Modularity", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175736574348327", cell.getValue());
                                            },
                                            headerTooltip:"Modularity" },{ title: "Reusability", field: "Reusability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175736658415155", cell.getValue());
                                            },
                                            headerTooltip:"Reusability" },{ title: "Analyzabilit...", field: "Analyzability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175736737414037", cell.getValue());
                                            },
                                            headerTooltip:"Analyzability" },{ title: "Modifiabilit...", field: "Modifiability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175736819554476", cell.getValue());
                                            },
                                            headerTooltip:"Modifiability" },{ title: "Testability", field: "Testability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175736907514970", cell.getValue());
                                            },
                                            headerTooltip:"Testability" },{ title: "Confidential...", field: "Confidentiality", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175737002264787", cell.getValue());
                                            },
                                            headerTooltip:"Confidentiality" },{ title: "Integrity", field: "Integrity", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175737100880744", cell.getValue());
                                            },
                                            headerTooltip:"Integrity" },{ title: "Non-repudiat...", field: "Non-repudiation", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175737219451508", cell.getValue());
                                            },
                                            headerTooltip:"Non-repudiation" },{ title: "Accountabili...", field: "Accountability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175737309877731", cell.getValue());
                                            },
                                            headerTooltip:"Accountability" },{ title: "Authenticity", field: "Authenticity", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175737412953572", cell.getValue());
                                            },
                                            headerTooltip:"Authenticity" },{ title: "Co-existence", field: "Co-existence", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175737493820858", cell.getValue());
                                            },
                                            headerTooltip:"Co-existence" },{ title: "Interoperabi...", field: "Interoperability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175737597991212", cell.getValue());
                                            },
                                            headerTooltip:"Interoperability" },{ title: "Adaptability", field: "Adaptability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175737748576312", cell.getValue());
                                            },
                                            headerTooltip:"Adaptability" },{ title: "Installabili...", field: "Installability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175737916991624", cell.getValue());
                                            },
                                            headerTooltip:"Installability" },{ title: "Replaceabili...", field: "Replaceability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738006728431", cell.getValue());
                                            },
                                            headerTooltip:"Replaceability" },{ title: "Organization...", field: "Organizational structure", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738090012575", cell.getValue());
                                            },
                                            headerTooltip:"Organizational structure" },{ title: "Positioning...", field: "Positioning and Strength", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738180802901", cell.getValue());
                                            },
                                            headerTooltip:"Positioning and Strength" },{ title: "Reputation", field: "Reputation", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738270925673", cell.getValue());
                                            },
                                            headerTooltip:"Reputation" },{ title: "Services...", field: "Services Offered", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738364778874", cell.getValue());
                                            },
                                            headerTooltip:"Services Offered" },{ title: "Support", field: "Support", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738447470566", cell.getValue());
                                            },
                                            headerTooltip:"Support" },{ title: "Licensing...", field: "Licensing Schema", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738553974014", cell.getValue());
                                            },
                                            headerTooltip:"Licensing Schema" },{ title: "Licensing...", field: "Licensing Costs", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738643311819", cell.getValue());
                                            },
                                            headerTooltip:"Licensing Costs" },{ title: "Platform...", field: "Platform Cost", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738734268804", cell.getValue());
                                            },
                                            headerTooltip:"Platform Cost" },{ title: "Implementati...", field: "Implementation Cost", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738825494524", cell.getValue());
                                            },
                                            headerTooltip:"Implementation Cost" },{ title: "Network Cost", field: "Network Cost", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738903715696", cell.getValue());
                                            },
                                            headerTooltip:"Network Cost" },{ title: "Stability", field: "Stability", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175738988764788", cell.getValue());
                                            },
                                            headerTooltip:"Stability" },{ title: "Ownership", field: "Ownership", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175739087691080", cell.getValue());
                                            },
                                            headerTooltip:"Ownership" },{ title: "Deliverables", field: "Deliverables", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175739165373293", cell.getValue());
                                            },
                                            headerTooltip:"Deliverables" },{ title: "Parameteriza...", field: "Parameterization / Customization", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175739256195615", cell.getValue());
                                            },
                                            headerTooltip:"Parameterization / Customization" },{ title: "Guarantees", field: "Guarantees", align: "center", editor: true, formatter: "tickCross",                         
                                            headerSort: true, headerVertical: true, 
                                            cellEdited:function(cell){
                                                var row = cell.getRow();
                                                var column=cell.getColumn();
                                                UpdateLinks(row.getData().AspectID ,"636175739358190687", cell.getValue());
                                            },
                                            headerTooltip:"Guarantees" }];Mapping_datatable = [];Table_Aspects.setData(Aspects_datatable);Table_Mapping.setData(Mapping_datatable); 