import styled from "@emotion/styled";

interface TextProps {
    fontSize?: string;
    color?: string;
    fontWeight?: number;
    textAlign?: string;
    lineHeight?: string;
}

export const Text = styled('span')<TextProps>`
    font-size: ${props => props.fontSize || '14px'};
    color: ${props => props.color || 'black'};
    font-weight:${props => props.fontWeight || 400};
    line-height: ${props => props.lineHeight || null};
    text-align: ${props => props.textAlign || null};
`