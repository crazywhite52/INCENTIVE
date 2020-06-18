import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class Product extends React.PureComponent<any, IGridProps> {
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
        { text: 'ประเภทสินค้า', pinned: true, editable: false,  datafield: 'category', cellsalign: 'center',align: 'center', width: '10%' },
        { text: 'รหัสสินค้า', pinned: true,editable: false, datafield: 'product', align: 'center', cellsalign: 'left',width: '15%' },
        { text: 'ชื่อสินค้า',pinned: true,editable: false, datafield: 'productname', align: 'center', cellsalign: 'center',width: '25%' },
        { text: 'ปัจจุบัน',editable: false,columngroup: 'srpgroup', datafield: 'srp_now', align: 'center', cellsalign: 'center',width: '5%' },
        { text: 'ใหม่',editable: false, datafield: 'srp_new',columngroup: 'srpgroup', align: 'center', cellsalign: 'left',width: '5%' },
        { text: 'Target',editable: true, datafield: 'Target', align: 'center', cellsalign: 'center',width: '5%' },
        { text: 'จำนวนจริง',editable: true, datafield: 'true_number', align: 'center', cellsalign: 'center',width: '5%' },
        { text: 'ราคา',editable: true, datafield: 'price', align: 'center', cellsalign: 'center',width: '5%' },   
        { text: 'มูลค่า',editable: true, datafield: 'totalprice', align: 'center', cellsalign: 'center',width: '10%' },
        { text: 'อื่นๆ',editable: true, datafield: 'other', align: 'center', cellsalign: 'center',width: '10%' },
        { text: 'ลบ',align: 'center', cellsalign: 'center',width: '5%',buttonclick: (row: number): void => {
            // this.props.load_edit(this.myGrid.current!.getrowdata(row));
          },
          cellsrenderer: (): string => {
              return 'ลบ';
          }  },    
    ]
    const columngroups:any=[
        { text: 'SRP', align: 'center', name: 'srpgroup' },

    ]
    const source: any = {
      datafields: [
          { name: 'category', type: 'string' },
          { name: 'product', type: 'string' },
          { name: 'productname', type: 'string' },
          { name: 'srp_now', type: 'string' },
          { name: 'srp_new', type: 'string' },
          { name: 'Target', type: 'number' },
          { name: 'true_number', type: 'string' },
          { name: 'price', type: 'number' },
          { name: 'totalprice', type: 'string' },
          { name: 'other', type: 'number' },
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
              columngroups={columngroups}
              showstatusbar={true} showaggregates={true}
            //   pageable={true} autoheight={false} sortable={false} altrows={false}
              editmode ={'click'} height={450}
              enabletooltips={true} editable={true} selectionmode={'singlecell'}
        />
      );
  }
}
export default Product;