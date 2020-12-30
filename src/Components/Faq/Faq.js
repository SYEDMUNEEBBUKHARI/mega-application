import React from 'react';
import './Faq.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";
import { Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const { Panel } = Collapse;

const innerone = `
Fusce eu dui. Integer vel nibh sit amet turpis vulputate aliquet. Phasellus id nisi vitae odio pretium aliquam. Pellentesque a leo. Donec consequat lectus sed felis. Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec et mi eu massa ultrices scelerisque.

Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi.`;

const innertwo = `
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
`;

const innerthree = `
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;
const innerfour = `
Fusce eu dui. Integer vel nibh sit amet turpis vulputate aliquet. Phasellus id nisi vitae odio pretium aliquam. Pellentesque a leo. Donec consequat lectus sed felis. Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec et mi eu massa ultrices scelerisque.

Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi.`;

const innerfive = `
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
`;

const innersix = `
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;


function Faq() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li><a href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} />Account</a></li>
                    <RiArrowDropRightLine style={{fontSize: '27px',}} /><li><a href="#">Page</a></li>
                    <RiArrowDropRightLine style={{fontSize: '27px',marginLeft: '-53px',}} /><li><a href="#">Faq</a></li>
                </ul>


                <div className="inner-faq-body">
                    <h5 className="faq-title">Got Questions? We’ve Got Answers!</h5>
                    <p>
                        Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum. Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum.
                    </p>


                <div className="collapse-questions">
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <PlusOutlined style={{background: 'gray',height: '46px',position: 'absolute',top: '0',color: 'white',padding: '19px 0',}} rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                >
                    <Panel header="What is Lorem Ipsum?" key="1" className="site-collapse-custom-panel">
                    <p>{innerone}</p>
                    </Panel>
                    <Panel header="What is Lorem Ipsum?" key="2" className="site-collapse-custom-panel">
                    <p>{innertwo}</p>
                    </Panel>
                    <Panel header="What is Lorem Ipsum?" key="3" className="site-collapse-custom-panel">
                    <p>{innerthree}</p>
                    </Panel>
                    <Panel header="What is Lorem Ipsum?" key="3" className="site-collapse-custom-panel">
                    <p>{innerfour}</p>
                    </Panel>
                    <Panel header="What is Lorem Ipsum?" key="3" className="site-collapse-custom-panel">
                    <p>{innerfive}</p>
                    </Panel>
                    <Panel header="What is Lorem Ipsum?" key="3" className="site-collapse-custom-panel">
                    <p>{innersix}</p>
                    </Panel>
                </Collapse>,
                </div>


                </div>





            </div>
        </React.Fragment>
    )
}




export default Faq;