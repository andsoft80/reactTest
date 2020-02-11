import React from 'react';
import ReactDOM from 'react-dom';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';

import DataGrid, {
    Column,
    FilterRow,
    Grouping,
    GroupPanel,
    MasterDetail,
    Pager,
    Paging,
    Selection
} from "devextreme-react/data-grid"; 
import { Template } from "devextreme-react/core/template";

import { sales } from "./data";

const DetailComponent = ({ data: { data } }) => {
    return (
        <p>Row data:
            <br/>
            {JSON.stringify(data)}
        </p>
    );
};

const CityComponent = (props) => {
    return <i>{props.data.displayValue}</i>;
};

const RegionComponent = (props) => {
    return <b>{props.data.displayValue}</b>;
};

export default class DxExp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expandAll: true,
            pageSize: 20
        };

        this.handleToolbarPreparing = this.handleToolbarPreparing.bind(this);
        this.handlePageIndexChange = this.handlePageIndexChange.bind(this);
    }

    render() {
        return (
            // <Example title="DxDataGrid" state={this.state}>
            //     <br />
            //     <br />
            //     <br />
            //     Page size:
            //     <br />
            //     <NumberBox
            //         showSpinButtons={true}
            //         step={5}
            //         value={this.state.pageSize}
            //         onValueChanged={this.handlePageIndexChange}
            //     />
            //     <br />
                <DataGrid
                    dataSource={sales}
                    allowColumnReordering={true}
                    onToolbarPreparing={this.handleToolbarPreparing}
                >
                    <GroupPanel visible={true} />
                    <Grouping autoExpandAll={this.state.expandAll} />
                    <FilterRow visible={true} />
                    <Selection mode="multiple" />

                    <Column dataField="orderId" caption="Order ID" width={90} />
                    <Column dataField="city" cellComponent={CityComponent}/>
                    {/* <Column dataField="region" groupIndex={0} cellComponent={RegionComponent}/>
                    <Column dataField="country" groupIndex={0} width={180} /> */}
                    <Column dataField="region"  cellComponent={RegionComponent}/>
                    <Column dataField="country"  width={180} />
                    
                    <Column dataField="date" dataType="date" />
                    <Column dataField="amount" dataType="currency" width={90} />

                    <Pager
                        allowedPageSizes={[5, 10, 15, 20]}
                        showPageSizeSelector={true}
                        showInfo={true}
                    />
                    <Paging
                        defaultPageIndex={2}
                        pageSize={this.state.pageSize}
                    />
                    <MasterDetail enabled={true} component={DetailComponent} />

                    <Template name={"toolbarLabel"}>
                        {this.state.expandAll ? <b>Collapse Groups:</b> : <b>Expand Groups:</b>}
                    </Template>
                </DataGrid>
            // </Example>
        );
    }

    handleToolbarPreparing(args) {
        args.toolbarOptions.items.unshift({
            location: "after",
            template: "toolbarLabel"
          },
          {
            location: "after",
            widget: "dxButton",
            options: {
                icon: "chevronup",
                onClick: (e) => {
                  this.setState((state) => {
                    e.component.option("icon", state.expandAll ? "chevrondown" : "chevronup");
                    return {
                        expandAll: !state.expandAll
                    };
                  });
                }
            }
        });
      }

    handlePageIndexChange(e) {
        this.setState({
            pageSize: e.value
        });
    }
}