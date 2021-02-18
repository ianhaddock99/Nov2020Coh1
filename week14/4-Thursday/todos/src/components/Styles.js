import styled from 'styled-components'

 export const DivSC = styled.div`
    background-color: purple;
    width: 400px;
    height: 400px
`


export const Paper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    width: 300px;
    height: 300px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px

`

 export const UlHover = styled.ul`

li:hover{
    background-color: blue;
}

li:hover .button{
    display: inline-block;
    padding: 0px 3px 3px 3px;
    margin: 0px;
}

`


export const SpanBadge = styled.span`
  background-color: #f7f4f4;
  padding: 3px;
  margin: 2px;
  border-radius: 6px;
  :hover{
      background-color: yellow;
  }
`;