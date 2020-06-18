import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class Supplier extends React.PureComponent<any, IGridProps> {
  private myGrid = React.createRef<JqxGrid>();
  constructor(props: any) {
      super(props);
  }
 
  public render() {
    const cellsrenderer = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {
        if (value === 0) {
            return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;text-align:center;margin-right:2px;margin-left:4px;margin-top:4px;color:red;"><strong>'+value+'</strong></div>';
        }
        else {
            return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;text-align:center;margin-right:2px;margin-left:4px;margin-top:4px;color:green;"><strong>'+value+'</strong></div>';
        }
    };
    const columns: any =[
        { text: 'Sup_Code', pinned: true, editable: false,  datafield: 'suppliercode', cellsalign: 'center',align: 'center', width: '15%' },
        { text: 'ชื่อ',editable: true, datafield: 'supname', align: 'center', cellsalign: 'left',width: '60%' },
        { text: 'type',editable: true, datafield: 'type_sup', align: 'center', cellsalign: 'left',width: '15%' },
        { text: 'สถานะ',editable: true, datafield: 'status',columntype: 'checkbox', align: 'center', cellsalign: 'center',width: '10%' },
        // { text: 'แก้ไข',editable: false, align: 'center', cellsalign: 'center',width: '10%' },
        // { text: 'รหัสเอกสาร',editable: false, datafield: 'doccode', align: 'center', cellsalign: 'center',width: '30%' },
      
    ]
    const source: any = {
      datafields: [
          { name: 'suppliercode', type: 'string' },
          { name: 'supname', type: 'string' },
          { name: 'type_sup', type: 'string' },
          { name: 'status', type: 'string' },
        //   { name: 'doccode', type: 'string' },
         
      ],
      datatype: 'array',
      localdata:this.props.suplierData,
      updaterow: (rowid: any, rowdata: any, commit: any): void => {
         this.props.onUpdatedata(rowdata);   
         commit(true);
    }
  };
      return (
        <JqxGrid
              ref={this.myGrid}
              theme="metrodark"
              width={'99%'} source={new jqx.dataAdapter(source)} columns={columns}
              showstatusbar={true} showaggregates={true}
            //   pageable={true} autoheight={false} sortable={false} altrows={false}
              editmode ={'click'} height={450}
              enabletooltips={true} editable={true} selectionmode={'singlerow'}
        />
      );
  }
}
export default Supplier;