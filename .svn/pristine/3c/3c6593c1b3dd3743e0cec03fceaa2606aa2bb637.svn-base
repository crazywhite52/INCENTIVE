import * as React from 'react';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
class Datatime extends React.PureComponent<any> {
   
    constructor(props: {}) {
        
        super(props);
        this.onValueChanged = this.onValueChanged.bind(this);
    }
    public render() {
        return (
            <JqxDateTimeInput  onValueChanged={this.onValueChanged} theme="metrodark" width={'100%'} formatString={'yyyy-MM-dd HH:ss'} height={35} showTimeButton={true}  animationType={'slide'} dropDownHorizontalAlignment={'right'} />
        );
    }
    private onValueChanged(event: any): void {
       
        const date = event.args.date;
        const time = event.args.owner.value;
        var value = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+time.hour+':'+time.second+':00';
        // console.log(value)
        this.props.Updatedata(this.props.id,value);
       
    }
}
export default Datatime;