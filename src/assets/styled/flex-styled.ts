import styled from '@emotion/styled';

interface FlexProps {
  center?: boolean;
  justify?: string;
  wrap?: boolean;
}

export const Flex = styled('div')<FlexProps>`
  display: flex;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  align-items: ${props => (props.center ? 'center' : 'flex-start')};
  justify-content: ${props =>
    (props.justify === 'flex-start' && 'flex-start') ||
    (props.justify === 'center' && 'center') ||
    (props.justify === 'space-between' && 'space-between') ||
    null};
  width: 100%;
`;
