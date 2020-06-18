import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class Pay7 extends React.PureComponent<any, IGridProps> {
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
        { text: 'วันที่จ่าย',pinned: true,editable: false, datafield: 'paydate', align: 'center', cellsalign: 'center',width: '20%' },
        { text: 'ผู้จ่าย', pinned: true, editable: false,  datafield: 'paycontact', cellsalign: 'center',align: 'center', width: '35%' },
        { text: 'จำนวนเงิน', pinned: true,editable: false, datafield: 'total', align: 'center', cellsalign: 'left',width: '15%' },
        
        { text: 'หมายเหตุ',editable: false, datafield: 'payremark', align: 'center', cellsalign: 'center',width: '20%' },
        { text: 'ลบ',align: 'center', cellsalign: 'center',width: '10%',buttonclick: (row: number): void => {
            // this.props.load_edit(this.myGrid.current!.getrowdata(row));
          },
          cellsrenderer: (): string => {
              return 'ลบ';
          }  },    
    ]
   
    const source: any = {
      datafields: [
          { name: 'paydate', type: 'string' },
          { name: 'paycontact', type: 'string' },
          { name: 'total', type: 'string' },
          { name: 'payremark', type: 'string' },
          
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
            //   columngroups={columngroups}
              showstatusbar={true} showaggregates={true}
            //   pageable={true} autoheight={false} sortable={false} altrows={false}
              editmode ={'click'} height={200}
              enabletooltips={true} editable={true} selectionmode={'singlecell'}
        />
      );
  }
}
export default Pay7;