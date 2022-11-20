import styled from 'styled-components'

export const StyledSelect = styled.select `
 -webkit-appearance: none;
 -moz-appearance: none;
 -ms-appearance: none;
 appearance: none;
 outline: 0;
 box-shadow: none;
 border: 0 !important;
 /* background: #242A35; */
 background-image: none;
 width: 100%;
 padding: 0 .5rem;
 color: #fff;
 cursor: pointer;
 font-size: 1rem;
 border-radius: 4px;
`

export const SelectContainer = styled.div`
  padding: 10px;
  border: 1px solid #aaa;
  position: relative;

  &:after {
    content: 'hola';
    position: absolute;
    right: 10px;
  }
`
