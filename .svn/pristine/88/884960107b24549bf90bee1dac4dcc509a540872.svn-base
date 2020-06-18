import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class Promo extends React.PureComponent<any, IGridProps> {
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
        { text: 'TYPE_NAME', pinned: true, editable: false,  datafield: 'type_name', cellsalign: 'center',align: 'center', width: '20%' },
        { text: 'Promotion',editable: false, datafield: 'pro_name', align: 'center', cellsalign: 'center',width: '30%' },
        { text: 'ตัวย่อ',editable: false, datafield: 'pro_shotname', align: 'center', cellsalign: 'center',width: '20%' },
        { text: 'รหัสเอกสาร',editable: false, datafield: 'pro_docKey', align: 'center', cellsalign: 'center',width: '30%' },
      
    ]
    const source: any = {
      datafields: [
          { name: 'type_name', type: 'string' },
          { name: 'pro_name', type: 'string' },
          { name: 'pro_shotname', type: 'string' },
          { name: 'pro_docKey', type: 'string' },
         
      ],
      datatype: 'array',
      localdata:this.props.proData,
      updaterow: (rowid: any, rowdata: any, commit: any): void => {
        // this.props.onUpdatedata(rowdata);
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
export default Promo;