"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Backdrop from '@mui/material/Backdrop';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MenuIcon, ChevronRightIcon, ChevronLeftIcon,
  LightModeIcon, DarkModeIcon,
} from '@/app/components/icons';
import { useColorMode } from '@/app/components/ThemeRegistry';
import DSALogo from '@/app/components/DSALogo';
import { chapters } from '@/app/utils/navItems';

const DRAWER_WIDTH = 260;
const DRAWER_MINI_WIDTH = 64;

function DrawerContent({
  expanded,
  onToggle,
  onItemClick,
}: {
  expanded: boolean;
  onToggle?: () => void;
  onItemClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: expanded ? 'space-between' : 'center',
          px: 1,
          minHeight: '64px !important',
        }}
      >
        {expanded ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
              <DSALogo size={32} />
              <Typography variant="subtitle1" fontWeight="bold" noWrap>
                DSA Playground
              </Typography>
              
            </Box>
            {onToggle && (
              <IconButton onClick={onToggle} size="small">
                <ChevronLeftIcon />
              </IconButton>
            )}
          </>
        ) : (
          onToggle && (
            <IconButton onClick={onToggle} size="small">
              <ChevronRightIcon />
            </IconButton>
          )
        )}
      </Toolbar>
      <Divider />
      <List sx={{ pt: 1 }}>
        {chapters.map(({ label, href, Icon }) => (
          <ListItem key={href} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={expanded ? '' : label} placement="right" arrow>
              <ListItemButton
                component={Link}
                href={href}
                selected={pathname === href}
                onClick={onItemClick}
                sx={{
                  minHeight: 48,
                  justifyContent: expanded ? 'initial' : 'center',
                  px: 2,
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    '& .MuiListItemIcon-root': { color: 'primary.contrastText' },
                    '&:hover': { backgroundColor: 'primary.dark' },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: expanded ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ fontSize: 14, noWrap: true }}
                  sx={{ opacity: expanded ? 1 : 0, transition: 'opacity 0.2s' }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function ThemeToggleButton({ color = 'default' }: { color?: 'inherit' | 'default' }) {
  const { mode, toggleColorMode } = useColorMode();
  return (
    <Tooltip title={mode === 'dark' ? 'Passa a light' : 'Passa a dark'}>
      <IconButton onClick={toggleColorMode} color={color}>
        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [desktopExpanded, setDesktopExpanded] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar — mobile only */}
      <AppBar
        position="fixed"
        sx={{ display: { md: 'none' }, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            DSA Guide
          </Typography>
          <ThemeToggleButton color="inherit" />
        </Toolbar>
      </AppBar>

      {/* Temporary drawer — mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box' },
        }}
      >
        <DrawerContent expanded onItemClick={() => setMobileOpen(false)} />
      </Drawer>

      {/* Permanent mini drawer — desktop (always 64px, never shifts content) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: DRAWER_MINI_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: desktopExpanded ? DRAWER_WIDTH : DRAWER_MINI_WIDTH,
            boxSizing: 'border-box',
            overflowX: 'hidden',
            transition: 'width 0.2s ease',
          },
        }}
        open
      >
        <DrawerContent
          expanded={desktopExpanded}
          onToggle={() => setDesktopExpanded((prev) => !prev)}
        />
      </Drawer>

      {/* Backdrop — closes expanded drawer when clicking outside */}
      <Backdrop
        open={desktopExpanded}
        onClick={() => setDesktopExpanded(false)}
        sx={{ display: { xs: 'none', md: 'block' }, zIndex: (theme) => theme.zIndex.drawer - 1 }}
      />

      {/* Theme toggle — desktop top-right */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'fixed',
          top: 12,
          right: 16,
          zIndex: 'drawer',
        }}
      >
        <ThemeToggleButton />
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 3, md: 5 },
          mt: { xs: 8, md: 0 },
          maxWidth: '800px',
          transition: 'margin-left 0.2s ease',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
