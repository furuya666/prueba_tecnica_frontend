import React from 'react'
import { 
    Spin,  
} from 'antd';
import 'antd/dist/antd';
const Loader = () => (
    <div style={{margin: '20px 0', textAlign: 'center'}}>
        <Spin />
    </div>
)

export default Loader