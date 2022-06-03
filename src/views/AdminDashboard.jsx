import React, { useEffect, useState } from 'react';
import fileDownload from 'js-file-download';

import { Button, Col, Row, Container } from "reactstrap";
import Chat from '../components/chats/Chat';
import httpService from '../services/axiosService/httpService';


const AdminDashboard = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        httpService.getAxios(`/admin/get-template`)
        .then((res) => {
            console.log(res.data);
            setPosts(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },[]);

    const downloadTemplate = (template) => {
        fileDownload(template, "Template");
    }

    return (
        <>
        <Container className="mt--9" fluid>
            <h1>Hello Reactt!</h1>
            <Button>Admin Here</Button>
            {/* <Chat/> */}

            {posts?.map((posts) => (
                <div key={posts._id}>
                    <hr/>
                        <Row>
                            <Col md="3">
                                <span>{posts.template_title}</span>
                            </Col>
                            <Col md="3">
                               <span>{posts.description}</span> 
                            </Col>
                            <Col md="3">
                               <span onClick={() => {downloadTemplate(posts.template)}}>Download Template</span> 
                            </Col>
                        </Row>
                    <hr/>
                </div>
            ))}
</Container>
        </>
    )
}

export default AdminDashboard;