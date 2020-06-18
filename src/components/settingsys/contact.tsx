import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class Contact extends React.PureComponent<any, IGridProps> {
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
        { text: 'NO', pinned: true, editable: false,  datafield: 'id', cellsalign: 'center',align: 'center', width: '3%' },
        { text: 'ชื่อ - นามสกุล', pinned: true, editable: false,  datafield: 'vender_name', cellsalign: 'center',align: 'center', width: '15%' },
        { text: 'supplier', pinned: true, editable: false,  datafield: 'supname', cellsalign: 'center',align: 'center', width: '15%' },
        { text: 'หมายเลขติดต่อ',editable: false, datafield: 'vender_tel', align: 'center', cellsalign: 'center',width: '8%' },
        { text: 'email',editable: false, datafield: 'vender_email', align: 'center', cellsalign: 'center',width: '10%' },
        { text: 'สินค้า',editable: false, datafield: 'classname', align: 'center', cellsalign: 'center',width: '17%' },
        { text: 'แบนด์',editable: false, datafield: 'brand', align: 'center', cellsalign: 'center',width: '12%' },
        { text: 'PM ที่ดูแล',editable: false, datafield: 'pm_name', align: 'center', cellsalign: 'center',width: '10%' },
        { text: 'สถานะ',editable: true,datafield: 'status',columntype: 'checkbox',align: 'center', cellsalign: 'center',width: '10%' },
        // { text: 'รหัสเอกสาร',editable: false, datafield: 'doccode', align: 'center', cellsalign: 'center',width: '30%' },
      
    ]
    const source: any = {
      datafields: [
          { name: 'id', type: 'number' },
          { name: 'vender_name', type: 'string' },
          { name: 'supname', type: 'string' },
          { name: 'vender_tel', type: 'string' },
          { name: 'vender_email', type: 'string' },
          { name: 'classname', type: 'string' },
          { name: 'brand', type: 'string' },
          { name: 'pm_name', type: 'string' },
          { name: 'status', type: 'number' },
        //   { name: 'doccode', type: 'string' },
         
      ],
      datatype: 'array',
      localdata:this.props.contactnow,
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
export default Contact;