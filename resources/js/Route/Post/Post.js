import React, { Component } from 'react'
import Axios from 'axios';
import PostLoader from '../../components/Loader/PostLoader';
import styled from 'styled-components';
import PostCreate from './PostCreate';

const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
`;
const PostContainer = styled.div`
    text-align:center;

`;

const PostBox = styled.div`
`;
export default class Post extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts : [],
            error : null,
            loading : true
        }
        this.renderPosts = this.renderPosts.bind(this);
    }

    handleDelete(id){
        try{
            Axios.delete(`/posts/${id}`)
        }catch{

        }finally{
            this.getPosts();
        }
    }

    renderPosts(){
        return (
            this.state.posts.map(post => (
                <PostBox key={post.id}>
                    <ul>
                        <li>{post.description}<small>by. {post.user.name}</small></li>
                        <li><button onClick={()=>this.handleDelete(post.id)}>delete</button></li>
                    </ul>
                </PostBox>
            ))
        )
    }

    async getPosts(){
        try{
            return await Axios.get('/posts').then(response => this.setState({
                posts : [...response.data.posts]
            }))
        }catch{
            this.setState({
                error : 'post를 불러오는 데에 실패하였습니다.'
            })
        }finally{
            this.setState({
                loading: false
            })
        }
    }

    componentDidMount(){
        this.getPosts();
    }

    render() {
        return (
        <Container>
            <PostContainer>
                <PostCreate onGetPosts={this.getPosts} />
                {this.state.loading ? <PostLoader /> : this.renderPosts()}
            </PostContainer>
        </Container>
        )
    }
}
