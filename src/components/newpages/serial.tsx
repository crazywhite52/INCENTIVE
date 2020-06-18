import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class Serial extends React.PureComponent<any, IGridProps> {
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
        { text: 'Serialno', pinned: true, editable: false,  datafield: 'serialno', cellsalign: 'center',align: 'center', width: '10%' },
        { text: 'รหัสสินค้า', pinned: true,editable: false, datafield: 'product', align: 'center', cellsalign: 'center',width: '10%' },
        { text: 'ชื่อสินค้า',pinned: true,editable: false, datafield: 'productname', align: 'center', cellsalign: 'left',width: '30%' },
        { text: 'เอกสารซื้อ',editable: false, datafield: 'buydoc', align: 'center', cellsalign: 'center',width: '10%' },
        { text: 'วันที่ซื้อ',editable: false, datafield: 'buydate', align: 'center', cellsalign: 'center',width: '7%' },
        { text: 'เอกสารขาย',editable: true, datafield: 'salesdoc', align: 'center', cellsalign: 'center',width: '7%' },
        { text: 'วันที่ขาย',editable: true, datafield: 'salesdate', align: 'center', cellsalign: 'center',width: '7%' },
        { text: 'สาขา',editable: true, datafield: 'branch', align: 'center', cellsalign: 'center',width: '5%' },   
        { text: 'ต้นทุน',editable: true, datafield: 'cost',cellsformat: 'F2', align: 'center', cellsalign: 'center',width: '7%' },
        { text: 'ราคาขาย',editable: true, datafield: 'sales',cellsformat: 'F2', align: 'center', cellsalign: 'center',width: '7%' },
        { text: 'กำไร',editable: true, datafield: 'solute',cellsformat: 'F2', align: 'center', cellsalign: 'center',width: '7%' },
        { text: 'CN(ได้รับ)',editable: true, datafield: 'supcost',cellsformat: 'F2', align: 'center', cellsalign: 'center',width: '7%' },
        { text: 'CN(รวม)',editable: true, datafield: 'supnon',cellsformat: 'F2', align: 'center', cellsalign: 'center',width: '7%' },
        { text: 'กำไรจริง',editable: true, datafield: 'cn_cost',cellsformat: 'F2', align: 'center', cellsalign: 'center',width: '7%' },
        { text: 'ขาดทุนจริง',editable: true, datafield: 'reals',cellsformat: 'F2', align: 'center', cellsalign: 'center',width: '7%' },
        // { text: 'ลบ',align: 'center', cellsalign: 'center',width: '5%',buttonclick: (row: number): void => {
        //     // this.props.load_edit(this.myGrid.current!.getrowdata(row));
        //   },
        //   cellsrenderer: (): string => {
        //       return 'ลบ';
        //   }  },    
    ]
    const columngroups:any=[
        { text: 'SRP', align: 'center', name: 'srpgroup' },

    ]
    const source: any = {
      datafields: [
          { name: 'serialno', type: 'string' },
          { name: 'product', type: 'string' },
          { name: 'productname', type: 'string' },
          { name: 'buydoc', type: 'string' },
          { name: 'buydate', type: 'string' },
          { name: 'salesdoc', type: 'number' },
          { name: 'salesdate', type: 'string' },
          { name: 'branch', type: 'string' },
          { name: 'cost', type: 'number' },
          { name: 'sales', type: 'number' },
          { name: 'solute', type: 'number' },
          { name: 'supcost', type: 'number' },
          { name: 'supnon', type: 'number' },
          { name: 'cn_cost', type: 'number' },
          { name: 'reals', type: 'number' },
       
         
      ],
      datatype: 'array',
      localdata:this.props.Serialdata,
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
              columngroups={columngroups}
              showstatusbar={true} showaggregates={true}  pagermode={'simple'}
              pageable={true} autoheight={false} sortable={true} altrows={false} filterable={true} 
              editmode ={'click'} height={450} pagesize={9} showfilterrow={true}
              enabletooltips={true} editable={true} selectionmode={'singlecell'}
        />
      );
  }
}
export default Serial;