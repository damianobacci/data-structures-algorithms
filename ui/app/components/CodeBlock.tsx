"use client"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Box from '@mui/material/Box';

interface CodeBlockProps {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language = 'javascript' }: CodeBlockProps) {
  return (
    <Box sx={{ my: 2, borderRadius: 1, overflow: 'hidden', fontSize: 13 }}>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{ margin: 0, borderRadius: 4 }}
      >
        {children}
      </SyntaxHighlighter>
    </Box>
  );
}
