import React from 'react';
import { Input } from 'antd';

function NavBar (props) {
    const { Search } = Input;
    const onSearch = (value) => {
        props.setSearch(value);
        props.setNoData(false);
    }

    return (
        <div className="flex flex-row justify-between items-center m-5 bg-">
            <div className="text-6xl font-bold text-yellow ml-10 uppercase">Star Wars</div>
            <div className="mr-2">
                <Search enterButton="&emsp;Search" placeholder="Luke Skywalker" onSearch={onSearch} size="medium" style={{width: 200, color: 'black'}} />
            </div>
        </div>
    );
}

export default NavBar ;