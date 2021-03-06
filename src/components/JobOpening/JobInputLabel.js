import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
    flex-direction:row;
    width:100%;
    background-color:#ffffff;
    margin:5px 0;
    padding: 10px 20px;
`;

const Label = styled.Text`
    font-size:15px;
    color: #000000;
    margin-bottom: 10px;
    flex:1;
`;

const GetData = styled.Text`
    font-size:15px;
    padding-left:0.5rem;
    padding-right:0.5rem;
    color: gray;
    text-align:right;
    flex:1;
`;

const JobInputLabel = ({label, content})=>(
    <Wrapper>
        <Label>{label}</Label>
        <GetData>{content}</GetData>
    </Wrapper>
);

export default JobInputLabel;