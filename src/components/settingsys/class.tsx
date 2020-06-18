import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class Class extends React.PureComponent<any, IGridProps> {
  private myGrid = React.createRef<JqxGrid>();
  constructor(props: any) {
      super(props);
      this.myGridOnRowSelect = this.myGridOnRowSelect.bind(this);
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
        { text: 'รหัสประเภทสินค้า', pinned: true, editable: false,  datafield: 'classid', cellsalign: 'center',align: 'center', width: '15%' },
        { text: 'ประเภทสินค้า', editable: false,  datafield: 'classname', cellsalign: 'left',align: 'center', width: '70%' },
         { text: 'สถานะ',editable: true, datafield: 'status', align: 'center',columntype: 'checkbox', cellsalign: 'center',width: '15%' },
      
    ]
    const source: any = {
      datafields: [
          { name: 'classid', type: 'string' },
          { name: 'classname', type: 'string' },
          { name: 'status', type: 'number' },
         
         
      ],
      datatype: 'array',
      localdata:this.props.categoryData,
      updaterow: (rowid: any, rowdata: any, commit: any): void => {
        this.props.onUpdatedata('class',rowdata);
        // console.log(rowdata)
        commit(true);
    }
  };
      return (
        <JqxGrid
              ref={this.myGrid}
              theme="metrodark"
              onRowselect={this.myGridOnRowSelect}
              width={'99%'} source={new jqx.dataAdapter(source)} columns={columns}
              showstatusbar={true} showaggregates={true}
            //   pageable={true} autoheight={false} sortable={false} altrows={false}
              editmode ={'click'} height={450}
              enabletooltips={true} editable={true} selectionmode={'singlerow'}
        />
      );
  }
  private myGridOnRowSelect(event: any): void {
    let value = this.myGrid.current!.getrowdata(event.args.rowindex);
    // console.log(value.branch)
    this.props.updateGrid(value);
 
  };
}
export default Class;