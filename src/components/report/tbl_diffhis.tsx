import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.dark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class TblDiffcost extends React.PureComponent<any, IGridProps> {
  private myGrid = React.createRef<JqxGrid>();
  constructor(props: any) {
      super(props);
  }
 
  public render() {
    const time = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {    
          return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;padding-top:4px;text-align:center;margin-right:2px;margin-left:4px;margin-top:4px;color:#30ff30;"><strong>'+value+'</strong></div>';   
    };
    const priceColor = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {    
        return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;padding-top:4px;text-align:right;margin-right:2px;margin-left:4px;margin-top:4px;color:#30ff30;"><strong>'+value+'</strong></div>';   
  };
    const diff = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => { 
        if(value<0){
            return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;padding-top:4px;text-align:right;margin-right:2px;margin-left:4px;margin-top:4px;color:red;"><strong>'+value+'</strong></div>'; 
        }else{
            return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;padding-top:4px;text-align:right;margin-right:2px;margin-left:4px;margin-top:4px;color:#fff;"><strong>'+value+'</strong></div>'; 

        }   
        
  };
  const pricechk = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => { 
        if(value<0){
            return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;padding-top:4px;text-align:right;margin-right:2px;margin-left:4px;margin-top:4px;color:red;"><strong>'+value+'</strong></div>'; 
        }else{
            return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;padding-top:4px;text-align:right;margin-right:2px;margin-left:4px;margin-top:4px;color:#30ff30;"><strong>'+value+'</strong></div>';  
        }   
        
  };
    const columns: any =[
        // { text: ' ', pinned: true, editable: false, columntype: 'button',  datafield: '', cellsalign: 'center',align: 'center', width: '5%',
        //   buttonclick: (row: number): void => {
        //     this.props.load_edit(this.myGrid.current!.getrowdata(row));
        //   },
        //   cellsrenderer: (): string => {
        //       return 'แก้ไข';
        //   } 
        // },
        { text: 'เวลาขาย', pinned: true, editable: false,cellsrenderer:time,  datafield: 'timeSell',filterable:false , cellsalign: 'center',align: 'center', width: '5%' },
        { text: 'รหัสสินค้า', pinned: true, editable: false,  datafield: 'Product', cellsalign: 'left',align: 'center', width: '8%' },
        { text: 'Serial', pinned: true,editable: false,datafield: 'Serial',align: 'center', cellsalign: 'left',width: '10%' },
        { text: 'SetPrice',editable: false,filterable:false , datafield: 'SetPrice', cellsformat: 'F2', align: 'center', cellsalign: 'right',width: '7%' },
        { text: 'MinPrice',editable: false,filterable:false , datafield: 'MinPrice', cellsformat: 'F2', align: 'center', cellsalign: 'right',width: '7%' },
        { text: 'ราคาทุน',editable: false,filterable:false , datafield: 'cost', cellsformat: 'F2', align: 'center', cellsalign: 'right',width: '7%' },
        { text: 'ราคาขาย',editable: false,filterable:false ,cellsrenderer:priceColor, datafield: 'SellPrice', cellsformat: 'F2', align: 'center', cellsalign: 'right',width: '7%' },
        { text: 'Diff_set',editable: false,cellsrenderer:diff, datafield: 'diff_set', cellsformat: 'F2', align: 'center', cellsalign: 'right',width: '7%' },
        { text: 'Diff_cost',editable: false,cellsrenderer:diff, datafield: 'diff_cost', cellsformat: 'F2', align: 'center', cellsalign: 'right',width: '7%' },
        { text: 'CN',editable: false, datafield: 'CN', align: 'center', cellsformat: 'F2', cellsalign: 'center',width: '7%' },
        { text: 'กำไรหน้าบิล+CN',editable: false,cellsrenderer:pricechk, datafield: 'successPrice', filtertype: 'number', cellsformat: 'F2', align: 'center', cellsalign: 'right',width: '10%' },
        { text: '%',editable: false,cellsrenderer:pricechk,datafield: 'perPrice',align: 'center', filtertype: 'number', cellsformat: 'F2',cellsalign: 'right',width: '5%' },  
        { text: 'สาขา',editable: false,datafield: 'branchname',align: 'center', cellsalign: 'left',width: '15%' }, 
        { text: 'ชื่อสินค้า',editable: false,datafield: 'Productname',align: 'center', cellsalign: 'left',width: '30%' },
        { text: 'ประเภทสินค้า',editable: false,datafield: 'classname',align: 'center',filtertype: 'number', cellsalign: 'left',width: '20%' },   
        { text: 'Incentive',editable: false,datafield: 'Incentive',align: 'center', cellsalign: 'left',width: '10%' },
    ]
    const source: any = {
      datafields: [
          { name: 'timeSell', type: 'string' },
          { name: 'Product', type: 'string' },
          { name: 'Serial', type: 'string' },
          { name: 'branchname', type: 'string' },
          { name: 'Productname', type: 'string' },
          { name: 'classname', type: 'string' },
          { name: 'Incentive', type: 'string' },
          { name: 'cost', type: 'number' },
          { name: 'SellPrice', type: 'number' },
          { name: 'diff_set', type: 'number' },
          { name: 'diff_cost', type: 'number' },
          { name: 'successPrice', type: 'number' },
          { name: 'CN', type: 'number' },
          { name: 'SetPrice', type: 'number' },
          { name: 'MinPrice', type: 'number' },
          { name: 'perPrice', type: 'number' },
          { name: 'Incentive', type: 'string' },
         
      ],
      datatype: 'array',
      localdata:this.props.datadiff,
      updaterow: (rowid: any, rowdata: any, commit: any): void => {
        this.props.onUpdatedata(rowdata);
        commit(true);
    }
  };
      return (
        <JqxGrid
              ref={this.myGrid}
              theme="dark"
              width={'100%'} source={new jqx.dataAdapter(source)} columns={columns}
              showstatusbar={true} showaggregates={true}  pagermode={'simple'}
              pageable={true} autoheight={false} sortable={true} altrows={true} filterable={true}
              editmode ={'click'} height={'600'} pagesize={13} showfilterrow={true}
              enabletooltips={true} editable={true} selectionmode={'singlerow'}
        />
      );
  }
}
export default TblDiffcost;