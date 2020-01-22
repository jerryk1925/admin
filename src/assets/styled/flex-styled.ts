import styled from "@emotion/styled";

interface FlexProps {
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
}

export const Flex = styled('span')<FlexProps>`
   display: flex;
   align-items: ${props => props.alignItems || null};
   justify-content: ${props => props.justifyContent || null};
`