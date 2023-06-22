import React from 'react';
import styled from 'styled-components';

const TodoCardContainer = styled.div`
    height: 500px;
    width: 300px;

    border: 1px solid #bbb;
    border-radius: 4px;

    background: white;
`

const TodoCard = ({ items, title }) => {
    return (
        <TodoCardContainer>
            {title}
            {
                items.map(item => 
                    <div>
                        {item.name}  {item.checked ? '[X]' : '[ ]'}
                    </div>)
            }
        </TodoCardContainer>
    );
};

export default TodoCard;