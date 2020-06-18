import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class Type extends React.PureComponent<any, IGridProps> {
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
        { text: 'TYPE_NAME', pinned: true, editable: false,  datafield: 'type_name', cellsalign: 'center',align: 'center', width: '30%' },
        { text: 'JOB_TYPE', pinned: true, editable: false,  datafield: 'job_type', cellsalign: 'center',align: 'center', width: '20%' },
        { text: 'Details',editable: false, datafield: 'type_detail', align: 'center', cellsalign: 'center',width: '50%' },
      
    ]
    const source: any = {
      datafields: [
          { name: 'type_name', type: 'string' },
          { name: 'job_type', type: 'string' },
          { name: 'type_detail', type: 'string' },
         
      ],
      datatype: 'array',
      localdata:this.props.typedata,
      updaterow: (rowid: any, rowdata: any, commit: any): void => {
        // this.props.onUpdatedata(rowdata);
        commit(true);
    }
  };
      return (
        <JqxGrid
              ref={this.myGrid}
              theme="metrodark"
              onRowselect={this.myGridOnRowSelect}
              width={'95%'} source={new jqx.dataAdapter(source)} columns={columns}
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
export default Type;