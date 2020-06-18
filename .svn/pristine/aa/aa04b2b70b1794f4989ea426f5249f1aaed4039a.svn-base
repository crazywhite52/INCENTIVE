import * as React from 'react';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
class Timeselect extends React.PureComponent<any> {
   
    constructor(props: {}) {
        
        super(props);
        this.onValueChanged = this.onValueChanged.bind(this);
    }
    public render() {
        return (
            <JqxDateTimeInput  onValueChanged={this.onValueChanged} theme="metrodark" width={'100%'} formatString={'HH:ss'} height={35} showTimeButton={true} showCalendarButton={false}  animationType={'slide'} dropDownHorizontalAlignment={'right'} />
        );
    }
    private onValueChanged(event: any): void {
       
        const date = event.args.date;
        const time = event.args.owner.value;
        var value = time.hour+':'+time.second+':00';
        // console.log(value)
        this.props.Updatedata(this.props.id,value);
       
    }
}
export default Timeselect;