import styled from "styled-components"

export default function Container({children}) {
    return (
        <Content>
            {children}
        </Content>
    )
};

// asi utilizamos el styled-components.
// declaramos una constante Content diciendole que es un DIV de styled y entre comillas invertidas
// metemos el estilo. Despues este div lo utilizamos arriba, igual que si fuera un div
const Content = styled.div`
    max-width: 1200px;
    padding: 40px;
    margin: 0 auto;
`;
