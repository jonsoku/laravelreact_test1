import React, { Component } from 'react'
import Axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
    button{
        display:block;
        margin: 0 auto;
        width: 30vw;
        margin-bottom:10vh;
    }
`;
const Textarea = styled.textarea`
    width:30vw;
    height: 10vh;
`;

export default class PostCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            description : '',
        }
        this.renderPostCreateForm = this.renderPostCreateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderPostCreateForm(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <Textarea
                    onChange={this.handleChange}
                    value={this.state.description}
                    placeholder="Post를 입력해주세요 "
                />
                <button type="submit">Post작성</button>
            </Form>
        )
    }

    handleSubmit(e){
        e.preventDefault();
        try{
            Axios.post('/posts', {
                description : this.state.description
            })
        }catch{

        }finally{
            this.setState({
                description : ''
            })
            window.location.reload()
        }

    }
    handleChange(e){
        this.setState({
            description : e.target.value
        })
    }



    render() {
        console.log(this.props)

        return (
        <div>
            {this.renderPostCreateForm()}
        </div>
        )
    }
}
