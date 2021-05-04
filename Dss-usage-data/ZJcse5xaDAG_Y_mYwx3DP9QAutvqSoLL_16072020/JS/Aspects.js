var DeleteIcon = function (cell, formatterParams) { return "<i class='fas fa-trash-alt'></i>";};var UpdateIcone = function(cell, formatterParams) { return "<i class='fas fa-sync-alt'></i>";};var Aspects_columns = [  { title: "AspectID", field: "AspectID", sorter: "string", width: 200, visible: false }, { title: "Alternative", field: "Alternative", sorter: "string", width: 225, headerFilter: "input", editor: "input" }, { title: "Description", field: "Description", sorter: "string", width: 520, headerFilter: "input", editor: "input" }, { title: "Corporation", field: "Corporation", sorter: "string", width: 200, headerFilter: "input", editor: "input" }, { formatter: UpdateIcone, width: 30, align: "center", tooltip: "Update", field: "Update", 
                                            cellClick:function(e, cell){
                                                var row = cell.getRow();
                                                UpdateAspect(row.getData(), "Alternatives");
                                            }
                   }, { formatter: DeleteIcon, width: 30, align: "center", tooltip: "Delete", field: "Delete", 
                                            cellClick:function(e, cell){
                                                var row = cell.getRow();
                                                DeleteAspect(row.getData().AspectID, "Alternatives");
                                            }
                       }]; Aspects_datatable = [];var Mapping_columns = [  { title: "AspectID", field: "AspectID", sorter: "string", width: 200, visible: false }, { title: "Alternative", field: "Alternative", sorter: "string", width: 225, headerFilter: "input", editor: "input" }];Mapping_datatable = [];Table_Aspects.setData(Aspects_datatable);Table_Mapping.setData(Mapping_datatable); 