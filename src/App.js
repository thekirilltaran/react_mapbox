import {useState} from 'react'
import Map from './components/Map/Map';
import { Layout, Space } from 'antd';
import { Col, Divider, Row } from 'antd';
import { Typography } from 'antd';
import { Select } from 'antd';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 'initial',
    paddingInline: 0,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

function App() {
    const [location, setLocation] = useState('central');

    function handleChangeMarker(value) {
        setLocation(value);
    }

    return (
        <div className="App">
            <Space style={{
                padding: 35,
            }} direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                <Layout>
                    <Header style={headerStyle}>
                        <div className="container-fluid">
                            <Title style={{ margin: 0 }}>Mab box</Title>
                        </div>
                    </Header>
                    <Content>
                        <div className="container-fluid">
                            <Row gutter={16} justify="space-between" align="middle">
                                <Col className="gutter-row" span={6}>
                                    <Title  level={2}>Map action</Title>
                                </Col>
                                <Col className="gutter-row" justify="flex-end" align="right" span={6}>
                                    <Select
                                        defaultValue="central"
                                        style={{ width: 120 }}
                                        onChange={handleChangeMarker}
                                        options={[
                                            { value: 'central', label: 'central' },
                                            { value: 'norrebro', label: 'norrebro' },
                                            { value: 'airport', label: 'airport' },
                                        ]}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="left"></Divider>
                        <Map location={location}/>
                    </Content>
                    <Footer>
                        <div className="container-fluid">
                            Footer
                        </div>
                    </Footer>
                </Layout>
            </Space>
        </div>
    );
}

export default App;
