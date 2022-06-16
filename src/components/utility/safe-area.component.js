import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export default styled(SafeAreaView)`
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`}
    height: 85vh;
`;
