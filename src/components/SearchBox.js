import React from 'react';

import { 
    Row, 
    Col, 
    Input, 
    
} from 'antd';
import 'antd/dist/antd';
const { Search } = Input;
const SearchBox = ({searchHandler}) => {
  return (
    <Row>
            <Col span={12} offset={6}>
                <Search
                    placeholder="Buscar pelicula"
                    enterButton="Buscar"
                    size="large"
                    onSearch={value => searchHandler(value)}
                />
            </Col>
        </Row>
  )
}

export default SearchBox