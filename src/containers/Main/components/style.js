import styled  from "styled-components";
import { Typography, CardContent } from "../../../components";

export const LabelStyled = styled(Typography)`
    font-weight: 500;
    font-size: 1.5rem;
`
export const ValeuStyled = styled(Typography)`
    font-weight: 400;
    font-size: 2.5rem;
`

export const CardContentStyled = styled(CardContent)`
    border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`


export const CardPanelContentStyled = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding: 25px
`
export const ItemStyled = styled.div`
    display: flex;
    jsutify-content: space-between;
    min-width: 150px;
`

