import React from 'react';
import styled from 'styled-components';
import TodoCard from './TodoCard';

const ContentContainer = styled.div`
    height: calc(100% - 40px);
`

const Content = () => {
    const dataList = [
        {
            title: '내가할일',
            items: [
                {
                    name: '프로젝트 하기',
                    checked: false,
                },
                {
                    name: '똥싸기',
                    checked: true,
                }
            ]
        }
    ]

    return (
        <ContentContainer>
            {
                dataList.map(data => <TodoCard title={data.title} items={data.items} />)
            }
        </ContentContainer>
    );
};

export default Content;