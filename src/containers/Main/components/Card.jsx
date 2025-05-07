import React, { memo } from "react";
// import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components';
import {
    LabelStyled,
    ValeuStyled,
    CardContentStyled
} from './style';

function Card({ value, label, color }) {
    return (
        <CardUI>
            <CardContentStyled color={color}>
                <ValeuStyled>{value}</ValeuStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardUI>
    );
}

export default memo(Card);
