import PropTypes from 'prop-types';
import React from 'react';
// import { SectionLink } from 'react-scroll-section';
import { Link, Text } from 'theme-ui';
import styled from 'styled-components';

const MarkdownParagraph = styled.p`
	line-height: 30px;
	margin: 8px 0;
	&:first-child {
		margin-top: 0em;
	}
`;

// eslint-disable-next-line react/prop-types
const MarkdownBold = ({ children }) => (
  <Text sx={{ fontWeight: 'bold' }} as="strong">
    {children}
  </Text>
);

// eslint-disable-next-line react/prop-types
const MardownHeading = ({ children, level }) => {
  const levelStyle = {
    '3': {
      fontSize: '22px',
    },
  };

  return (
    <Text
      sx={{
        margin: '32px 0 8px 0',
        paddingBottom: '8px',
        fontWeight: 'bold',
        ...levelStyle[level],
      }}
      as={`h${level}`}
    >
      {children}
    </Text>
  );
};

const MarkdownLink = ({ href, children }) => (
  <Link
    sx={{
      textDecoration: 'underline',
    }}
    href={href}
    target={href.startsWith('/') ? '' : '_blank'}
    rel="noopener noreferrer"
  >
    {children}
  </Link>
);

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default {
  paragraph: MarkdownParagraph,
  link: MarkdownLink,
  strong: MarkdownBold,
  heading: MardownHeading,
};
