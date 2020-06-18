import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class Pm extends React.PureComponent<any, IGridProps> {
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
        { text: 'รหัสพนักงาน', pinned: true, editable: false,  datafield: 'pm_id', cellsalign: 'center',align: 'center', width: '15%' },
        { text: 'ชื่อ',editable: false, datafield: 'pm_name', align: 'center', cellsalign: 'left',width: '25%' },
        { text: 'ชื่อเล่น',editable: false, datafield: 'pm_nickname', align: 'center', cellsalign: 'center',width: '10%' },
        { text: 'เบอร์โทร',editable: false, datafield: 'pm_tel', align: 'center', cellsalign: 'center',width: '20%' },
        { text: 'email',editable: false, datafield: 'pm_email', align: 'center', cellsalign: 'left',width: '20%' },
        { text: 'สถานะ',editable: true, datafield: 'status',columntype: 'checkbox', align: 'center', cellsalign: 'center',width: '10%' },   
    ]
    const source: any = {
      datafields: [
          { name: 'pm_id', type: 'string' },
          { name: 'pm_name', type: 'string' },
          { name: 'pm_nickname', type: 'string' },
          { name: 'pm_tel', type: 'string' },
          { name: 'pm_email', type: 'string' },
          { name: 'status', type: 'number' },
        //   { name: 'doccode', type: 'string' },
         
      ],
      datatype: 'array',
      localdata:this.props.pmList,
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
              enabletooltips={true} editable={true} selectionmode={'singlecell'}
        />
      );
  }
}
export default Pm;