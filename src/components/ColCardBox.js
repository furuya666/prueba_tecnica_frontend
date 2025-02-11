import React from 'react'
import { 
    Row, 
    Col, 
    Card, 
    Tag, 
} from 'antd';
import 'antd/dist/antd';
const API_KEY = '47b14609';
const { Meta } = Card;
const ColCardBox = ({Title, imdbID, Poster,  ShowDetail, DetailRequest, ActivateModal}) => {
    const clickHandler = () => {
        // Display Modal and Loading Icon
        ActivateModal(true);
        DetailRequest(true);
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            DetailRequest(false);
            ShowDetail(response);
        })
        .catch(({message}) => {
            DetailRequest(false);
        })
    }
    return (
        <Col style={{margin: '20px 10'}} className="gutter-row" span={5}>
            <div className="gutter-box">
                <Card
                    style={{ width: 200 }}
                    cover={
                        <img
                            alt={Title}
                            src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster}
                        />
                    }
                    onClick={() => clickHandler()}
                >
                    <Meta
                            title={Title}
                            description={false}
                    />
                    <Row style={{marginTop: '10px'}} className="gutter-row">
                        <Col>
                            <Tag color="magenta">Ver mas {Title}</Tag>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Col>
    )
}

export default ColCardBox