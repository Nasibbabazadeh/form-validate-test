import styled from 'styled-components'

export const ButtonStyle = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 15px;
    &:hover {
        background-color: #2980b9;
    }
    &[disabled] {
        opacity: 0.8;
        cursor: not-allowed;
        background-color: #3498db;
    }
`
export const TextareaStyle = styled.textarea`
    width: 50%;
    height: 150px;
    background-color: black;
    color: white;
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid black;
`
export const Div = styled.div`
    text-align: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const ErrorMessage = styled.div`
    color: red;
    width: 100%;

    margin-top: 10px;
`
