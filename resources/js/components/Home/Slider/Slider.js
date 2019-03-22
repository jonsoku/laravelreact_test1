import React, { Component } from 'react'
import LeftArrow from './arrows/left-arrow';
import RightArrow from './arrows/right-arrow';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'

const SlideContainer = styled.div`
    position: relative;
`;

const SlideBoxes = styled.div`
    width: 100vw;
    height : 60vh;
    overflow : hidden ;
`;

const SlideBox = styled.div`
    width:  ${props => props.width ? props.width : null} ;
    margin-left : ${props => props.marginLeft ? props.marginLeft : null};
    transition: all 1s;
    overflow:hidden;
`;

const SlideImageBox = styled.div`
    float:left;
    /* position: relative;
    width: 100vw;
    height : 60vh; */
    &:nth-child(3){
        color:white;
        font-size: 100px;
    }

`;
// const SlideImage = styled.img`
//     width: 100vw;
//     height: 60vh;
// `;
// const SlideImage = styled.img`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
// `;

const SlideImage = styled.div`
    background: url('${props => props.background ? props.background : null}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 60vh;

`;

const Arrows = styled.div`
    cursor:pointer;
    color: #6a737b;
`;


class Slider extends Component {

    constructor(props) {
      super(props)

      this.state = {
        images: [
          "https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1487971758969-ec18be02bd43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1472566316349-bce77aa2a778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1457732815361-daa98277e9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        ],
        page : 0
      }

      this.renderSliderImages = this.renderSliderImages.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.moveTo = this.moveTo.bind(this);
    }

    moveTo(index){
        index = index || 0;
        index = index % this.state.images.length;
        this.setState({
            page : index
        })
    }

    goToNextSlide(){
        this.setState({
            page : this.state.page + 1
        })
        console.log(this.state.page)
        if(this.state.page > this.state.images.length - 1)
        {
            this.setState({
                page : 0
            })
        }
    }
    goToPrevSlide(){
        this.setState({
            page : this.state.page - 1
        })
        console.log(this.state.page)
        if(this.state.page === 0)
        {
            this.setState({
                page : this.state.images.length-1
            })
        }
    }

    componentWillMount(){
        window.setInterval(()=>{
            this.moveTo(this.state.page)
            this.goToNextSlide()
        }, 1000*4)
    }


    renderSliderImages(){
        return (
            this.state.images.map(image => (
                <SlideImageBox>
                    {/* <SlideImage src={image}></SlideImage> */}
                    <SlideImage background={`${image}`}>
                        <p>hey</p>
                    </SlideImage>
                </SlideImageBox>
            ))
        )
    }

  render() {
    return (
      <SlideContainer>
          <SlideBoxes>
              <SlideBox width={'100'*this.state.images.length+'vw'} marginLeft={'-'+'100'*`${this.state.page}`+'vw'} >
                  {this.renderSliderImages()}
              </SlideBox>
          </SlideBoxes>

        <Arrows>
            <LeftArrow
            goToPrevSlide={this.goToPrevSlide}
            />
            <RightArrow
            goToNextSlide={this.goToNextSlide}
            />
        </Arrows>
      </SlideContainer>
    );
  }
}



export default withRouter(Slider);
