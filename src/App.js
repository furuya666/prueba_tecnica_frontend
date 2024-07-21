import React, { useEffect, useState } from 'react';
import { 
    Layout, 
    Row, 
    Alert, 
    Modal, 
} from 'antd';
import 'antd/dist/antd';
import SearchBox from './components/SearchBox';
import ColCardBox from './components/ColCardBox';
import MovieDetail from './components/MovieDetail';
import Loader from './components/Loader';
import { Link ,Routes,Route} from 'react-router-dom';
import User from './components/User';
const API_KEY = '47b14609';
const { Header, Content } = Layout;

function App() {
   
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [q, setQuery] = useState('batman');
    const [activateModal, setActivateModal] = useState(false);
    const [detail, setShowDetail] = useState(false);
    const [detailRequest, setDetailRequest] = useState(false);
    useEffect(() => {
        setLoading(true);
        setError(null);
        setData(null);
        if(q.length > 2){
        fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            if (response.Response === 'False') {
                setError(response.Error);
            }
            else {
            
              setData(response.Search); 
            }
            setLoading(false);
        })
        .catch(({message}) => {
            setError(message);
            setLoading(false);
        })
      }else{
        setError("Debe tener mas de 2 caracteres");
      }
    }, [q]);
    return (
        <div className="App">
            <Routes>
                        <Route>
                            <Route path='/register' element={<User/>}/>
                        </Route>
            </Routes>
            <Layout className="layout">
                <Header>
                    <div style={{ textAlign: 'right'}}>
                    <Link to="login" >INICIAR SESION</Link> <br/>
                   
                    </div>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <SearchBox searchHandler={setQuery} />
                        <br />
                        <Row gutter={16} type="flex" justify="center">
                            { loading &&
                                <Loader />
                            }

                            { error !== null &&
                                <div style={{margin: '20px 0'}}>
                                    <Alert message={error} type="error" />
                                </div>
                            }
                            
                            { data !== null && data.length > 0 && data.map((result, index) => (
                                <ColCardBox
                                    ShowDetail={setShowDetail} 
                                    DetailRequest={setDetailRequest}
                                    ActivateModal={setActivateModal}
                                    key={index} 
                                    {...result} 
                                />
                                
                            ))}
                        </Row>
                    </div>
                    <Modal
                        title='Detalle'
                        centered
                        visible={activateModal}
                        onCancel={() => setActivateModal(false)}
                        footer={null}
                        width={800}
                        >
                        { detailRequest === false ?
                            (<MovieDetail {...detail}/>) :
                            (<Loader />) 
                        }
                    </Modal>
                </Content>
            </Layout>
        </div>
    );
}
export default App;