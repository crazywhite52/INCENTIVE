import * as React from 'react';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
class Datatime extends React.PureComponent<any> {
    private myDateTimeInput = React.createRef<JqxDateTimeInput>();
    constructor(props: {}) {
        
        super(props);
        this.onValueChanged = this.onValueChanged.bind(this);
    }
    public componentDidUpdate(): void {
        var value=this.props.dataVal;
        // console.log(value)
        this.myDateTimeInput.current!.setDate(value);
      }
    public render() {
        return (
            
            <JqxDateTimeInput ref={this.myDateTimeInput}  onValueChanged={this.onValueChanged}  theme="metrodark" width={'100%'} height={35}  animationType={'slide'} dropDownHorizontalAlignment={'right'} />
        );
    }
    private onValueChanged(event: any): void {
       
        const date = event.args.date;
        var value = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
        this.props.Updatedata(this.props.type,value);
       
    }
}
export default Datatime;