import React, { useState, useCallback } from 'react';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import styled from 'styled-components';
import Select from '@splunk/react-ui/Select';
import CustomDataSource from './examples/custom_data_source';
import BostonMarathon from './examples/boston_marathon';
import Buttercup from './examples/buttercup';
import DataCenter from './examples/data_center';
import Donut from './examples/donut';
import DynamicThemeing from './examples/dynamic_theming';
import GlassTable from './examples/glasstable';
import Radar from './examples/radar';
import SFOAirport from './examples/sfo_airport';
import Visualzations from './examples/visualizations';
import BubbleDefault from './examples/bubble_default';
import PieDefault from './examples/pie_default';
import ColumnDefault from './examples/column_default';
import ScatterDefault from './examples/scatter_default';
import ColumnStack from './examples/column_stack';
import AreaNull from './examples/area_null';
import AreaStack from './examples/area_stack';
import ElbLogsOverview from './examples/elb_logs_overview';
import LineNull from './examples/line_null';
import USChoropleth from './examples/us_choropleth';
import EmergencyCare from './examples/emergency_care';
import ExecVisibility from './examples/exec_visibility';
import TransactionFlow from './examples/transaction_flow';
import ElectricityMonitoring from './examples/electricity_monitoring';
import AreaDefault from './examples/area_default';
import BarStack from './examples/bar_stack';
import BarDefault from './examples/bar_default';
import LineDefault from './examples/line_default';

const Container = styled.div`
    margin: 20px;
`;

const examples = {
    AreaDefault,
    AreaNull,
    AreaStack,
    BarDefault,
    BarStack,
    BostonMarathon,
    BubbleDefault,
    Buttercup,
    ColumnDefault,
    ColumnStack,
    CustomDataSource, // Yuxiangs Demo
    DataCenter,
    Donut, // Peter Demo
    DynamicThemeing, // Michael Demo
    ElbLogsOverview,
    ElectricityMonitoring,
    EmergencyCare,
    ExecVisibility,
    GlassTable,
    LineDefault,
    LineNull,
    PieDefault,
    Radar,
    SFOAirport,
    ScatterDefault,
    TransactionFlow,
    USChoropleth,
    Visualzations,
};

const Dashboard = () => {
    const [exampleName, setExampleName] = useState('');

    const handleChange = useCallback((e, { value }) => setExampleName(value), [
        setExampleName,
    ]);

    const Example = examples[exampleName];

    return (
        <Container>
            <ControlGroup label="select a dashboard">
                <Select value={exampleName} onChange={handleChange}>
                    {Object.keys(examples).map(name => (
                        <Select.Option label={name} value={name} />
                    ))}
                </Select>
            </ControlGroup>
            {Example ? <Example /> : <div>pick an example</div>}
        </Container>
    );
};

export default Dashboard;
