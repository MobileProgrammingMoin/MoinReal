import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputLabel from "../sharingInfo/InputLabel";
import InputWithImage from "../sharingInfo/InputWithImage";
import preimage from '../../../assets/favicon.png'
import styled from 'styled-components/native';
import Button from '../common/Button/Button';

const StyledView = styled.View`
    background-color:#ffffff;
    height:vh(100);
`;

const MarketCreate = ({route} ) => {
    console.log(route.params);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [detail, setDetail] = useState('');
    const [photoUrl, setPhotoUrl] = useState({preimage});
    return (
        <KeyboardAwareScrollView extraScrollHeight={10}>
        <StyledView>
            <InputLabel 
                label="제목" 
                name="title" 
                placeholder="제목을 입력하세요"
                onChangeText={text =>setTitle(text)}/>
            <InputWithImage label="사진" name="photo" url={photoUrl}/>
            <InputLabel 
                label = "가격(단위:원)"
                name="price"
                placeholder="가격을 입력하세요"
                onChangeText = {text=>setPrice(text)}/>
            <InputLabel 
                label="상세내용" 
                inputHeight="150" 
                name="detail" 
                placeholder="상품에 관한 정보를 자유롭게 기입하여 주세요."
                onChangeText={text =>setDetail(text)}/>
            {/* <Button type={'Square'} title="작성"/> */}
        </StyledView>
        </KeyboardAwareScrollView>
    );
};


export default MarketCreate;
