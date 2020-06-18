import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, {
  IGridProps,
  jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class Indexjob extends React.PureComponent<any, IGridProps> {
  private myGrid = React.createRef<JqxGrid>();
  constructor(props: any) {
      super(props);
  }
 
  public render() {
    const cellsrenderer = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {
        if (value == 'ตั้งเอกสาร') {
          return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;padding-top:4px;text-align:center;margin-right:2px;margin-left:4px;margin-top:4px;color:green;"><strong>'+value+'</strong></div>';
        }
        else {
          return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;padding-top:4px;text-align:center;margin-right:2px;margin-left:4px;margin-top:4px;color:red;"><strong>'+value+'</strong></div>';
        }
    };
    const columns: any =[
        { text: ' ', pinned: true, editable: false, columntype: 'button',  datafield: '', cellsalign: 'center',align: 'center', width: '5%',
          buttonclick: (row: number): void => {
            this.props.load_edit(this.myGrid.current!.getrowdata(row));
          },
          cellsrenderer: (): string => {
              return 'แก้ไข';
          } 
        },
        { text: 'เลขเอกสาร', pinned: true, editable: false,  datafield: 'incentive_code', cellsalign: 'center',align: 'center', width: '13%' },
        { text: 'วันที่เอกสาร', pinned: true, editable: false,  datafield: 'dayjob', cellsalign: 'center',align: 'center', width: '10%' },
        { text: 'สถานะ', pinned: true,cellsrenderer,editable: false,datafield: 'status',align: 'center', cellsalign: 'center',width: '10%' },
        { text: 'No. Program Sup',editable: false, datafield: 'no_program_sup', align: 'center', cellsalign: 'center',width: '10%' },
        { text: 'ผู้ติดต่อ',editable: false, datafield: 'contact_name', align: 'center', cellsalign: 'left',width: '30%' },
        { text: 'สินค้า',editable: false, datafield: 'classname', align: 'center', cellsalign: 'left',width: '20%' },
        { text: 'เริ่มต้น',editable: false, datafield: 'day_start', align: 'center', cellsalign: 'center',width: '10%' },
        { text: 'สิ้นสุด',editable: false, datafield: 'day_end', align: 'center', cellsalign: 'center',width: '10%' },
        { text: 'จัดซื้อที่ดูแล',editable: false,datafield: 'pm',align: 'center', cellsalign: 'center',width: '20%' },
         
    ]
    const source: any = {
      datafields: [
          { name: 'incentive_code', type: 'string' },
          { name: 'dayjob', type: 'string' },
          { name: 'no_program_sup', type: 'string' },
          { name: 'contact_name', type: 'string' },
          { name: 'classname', type: 'string' },
          { name: 'day_start', type: 'string' },
          { name: 'day_end', type: 'string' },
          { name: 'pm', type: 'string' },
          { name: 'status', type: 'number' },
        //   { name: 'doccode', type: 'string' },
         
      ],
      datatype: 'array',
      localdata:this.props.datajob,
      updaterow: (rowid: any, rowdata: any, commit: any): void => {
        this.props.onUpdatedata(rowdata);
        commit(true);
    }
  };
      return (
        <JqxGrid
              ref={this.myGrid}
              theme="metrodark"
              width={'100%'} source={new jqx.dataAdapter(source)} columns={columns}
              showstatusbar={true} showaggregates={true}
            //   pageable={true} autoheight={false} sortable={false} altrows={false}
              editmode ={'click'} height={500}
              enabletooltips={true} editable={true} selectionmode={'singlecell'}
        />
      );
  }
}
export default Indexjob;