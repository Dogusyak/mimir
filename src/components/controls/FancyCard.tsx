import styled from 'styled-components/macro'

interface Props {
    children: string
}

export const FancyCard = ({children}: Props) => {

    return (
        <StyledCard>{children}</StyledCard>
    )
}

const StyledCard = styled.div`
 background: rgba(100, 100, 100, 0.1) ;
 border-width: 3px;
 border-top-style: none;
 border-right-style: solid;
 border-bottom-style: solid;
 border-left-style: none;
 border-radius: 5px;
 border-color: rgba(100, 100, 100, 0.2);
 font-weight: bold;
 font-size: 25px;
 text-align: center;
 width: 414px;
 padding-top: 120px;
 padding-bottom: 120px;
`

/*
 padding-left: 200px;
 padding-right: 200px;
 padding-top: 120px;
 padding-bottom: 120px;
 */