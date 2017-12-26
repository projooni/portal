/**
 * Created by SDS on 2017-12-26.
 */

/*
// 기존 컴포넌트 정의 방법
import React, {Component} from 'react';

class Hello2 extends React.Component{
    render(){
        return(

            <div>Hello {this.props.name}</div>

        );

    }
}

export default Hello2;


// 함수형 컴포넌트 정의

import React from 'react';

function Hello2(props){
    return(
        <div>Hello {props.name}</div>
    );
}

export default Hello2;


// ES6 화살표 함수를 사용한 컴포넌트 정의

import React from 'react';

const Hello2 = (props) => {
    return(
      <div>Hello {props.name}</div>
    );
}

export default Hello2;

*/
// 비구조화 할당(Object Destructuring)문법을 사용한 컴포넌트 정의
import React from 'react';

const Hello2 = ({name}) => {
    return(
        <div id="hello-2">Hello {name}</div>
    );
}

export default Hello2;

/*
 언제 사용하나요?

 저의 경우에는 state 나 라이프사이클 API 를 전혀 사용하지 않을 때,
 그리고 해당 컴포넌트는 자체 기능은 따로 없고 props 가 들어가면 뷰가 나온다는 것을 명시하기 위해 사용합니다.

 특히, Redux 를 사용하여 컴포넌트들을 구성 할 때,
 Container 컴포넌트 (혹은 Smart, 컴포넌트) 는 클래스형 컴포넌트를 사용하고,
 Presentational 컴포넌트 (혹은, Dumb 컴포넌트) 는 함수형 컴포넌트를 사용합니다.

*/