import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class Band extends React.PureComponent<any, IGridProps> {
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
        { text: 'แบนด์', pinned: true, editable: false,  datafield: 'brand', cellsalign: 'center',align: 'center', width: '80%' },
        { text: 'สถานะ', editable: true,columntype: 'checkbox',  datafield: 'status', cellsalign: 'center',align: 'center', width: '20%' },
        // { text: 'Details',editable: false, datafield: 'detail', align: 'center', cellsalign: 'center',width: '50%' },
      
    ]
    const source: any = {
      datafields: [
          { name: 'brand', type: 'string' },
          { name: 'status', type: 'number' },
        //   { name: 'detail', type: 'string' },
         
      ],
      datatype: 'array',
      localdata:this.props.brandData,
      updaterow: (rowid: any, rowdata: any, commit: any): void => {
        console.log(rowdata)
        // this.props.onUpdatedata(rowdata);
        this.props.onUpdatedata('brand',rowdata);
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
export default Band;