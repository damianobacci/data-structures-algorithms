"use client"

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import DSALogo from './components/DSALogo';
import { chapters } from '@/app/utils/navItems';

export default function Home() {
  return (
    <Box>
      <Chip label="Benvenuto" color="primary" size="small" sx={{ mb: 2 }} />

      <Typography variant="h3" fontWeight="bold" gutterBottom>
        <Box component="span" sx={{ display: 'inline-block', verticalAlign: 'middle', mr: 1.5 }}>
          <DSALogo size={48} />
        </Box>
        A Common-Sense Guide to Data Structures &amp; Algorithms
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 5, maxWidth: 560 }}>
        Text
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 1.5,
        }}
      >
        {chapters.map(({ chapterLabel, label, href, Icon }) => (
          <Card key={href} variant="outlined" sx={{ borderRadius: 2 }}>
            <CardActionArea component={Link} href={href} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                <Box sx={{ mb: 1 }}><Icon fontSize="large" color="primary" /></Box>
                <Typography variant="caption" color="text.secondary" display="block">
                  {chapterLabel}
                </Typography>
                <Typography variant="body2" fontWeight="bold" lineHeight={1.3}>
                  {label}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
