import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import JqxGrid, { IGridProps, jqx } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
class jqxGridmarket extends React.PureComponent<any, IGridProps> {
    private myGrid = React.createRef<JqxGrid>();
    constructor(props: any) {
        super(props);
    }

    public render() {
        const cellsrenderer = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {
            if (value == 'ตั้งเอกสาร') {
                return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;padding-top:4px;text-align:center;margin-right:2px;margin-left:4px;margin-top:4px;color:green;"><strong>' + value + '</strong></div>';
            }
            else {
                return '<div style="overflow:hidden;text-overflow:ellipsis;padding-bottom:2px;padding-top:4px;text-align:center;margin-right:2px;margin-left:4px;margin-top:4px;color:red;"><strong>' + value + '</strong></div>';
            }
        };
        const columns: any = [
            // {
            //     text: ' ', pinned: true, editable: false, columntype: 'button', datafield: '', cellsalign: 'center', align: 'center', width: '5%',
            //     buttonclick: (row: number): void => {
            //         this.props.load_edit(this.myGrid.current!.getrowdata(row));
            //     },
            //     cellsrenderer: (): string => {
            //         return 'แก้ไข';
            //     }
            // },
            { text: 'SellerSku', datafield: 'SellerSku', filterable: true, editable: false, cellsalign: 'center', align: 'center', width: '20%' },
            { text: 'Price', datafield: 'Price', filterable: true, editable: false, cellsalign: 'center', align: 'center', width: '20%' },
            { text: 'SalePrice', datafield: 'SalePrice', editable: false, cellsalign: 'center', align: 'center', width: '20%' },
            { text: 'SaleStartDate', datafield: 'SaleStartDate', cellsformat: 'dd/mm/yyyy', filtertype: 'date', filterable: true, editable: false, cellsalign: 'center', align: 'center', width: '20%' },
            { text: 'SaleEndDate', datafield: 'SaleEndDate', cellsformat: 'dd/mm/yyyy', filtertype: 'date', filterable: true, editable: false, cellsalign: 'center', align: 'center', width: '20%' },

        ]
        const datatest = [{
            SellerSku: 199002871, Price: 28000, SalePrice: 26800, SaleStartDate: "15/5/2020  0:00:00", SaleEndDate: "20/5/2020  23:30:00",
        }, {
            SellerSku: 199002871, Price: 28000, SalePrice: 26800, SaleStartDate: "15/5/2020  0:00:00", SaleEndDate: "20/5/2020  23:30:00",
        }, {
            SellerSku: 199002871, Price: 28000, SalePrice: 26800, SaleStartDate: "15/5/2020  0:00:00", SaleEndDate: "20/5/2020  23:30:00",
        }];
        const data = this.props.data;
        const source: any = {
            datafields: [
                { name: 'SellerSku', type: 'number' },
                { name: 'Price', type: 'number' },
                { name: 'SalePrice', type: 'number' },
                { name: 'SaleStartDate', type: 'date' },
                { name: 'SaleEndDate', type: 'date' },
            ],
            datatype: 'array',
            localdata: data,
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
                // showstatusbar={true} showaggregates={true}
                // autoheight={false} sortable={false} altrows={false}
                editmode={'click'} height={500}
                filterable={true} showfilterrow={true}
                enabletooltips={true} editable={true} selectionmode={'singlecell'}
                pageable={true}
                pagesizeoptions={['25', '50', '100']}
            // filterable={true}
            // showfilterrow={true}
            />
        );
    }
}
export default jqxGridmarket;