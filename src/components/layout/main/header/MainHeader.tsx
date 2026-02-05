import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routePath from "../../../../consts/routes/routePath";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    useMediaQuery,
    useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

function MainHeader() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [mobileOpen, setMobileOpen] = useState(false);

    const tabs = [
        { Title: "Home", path: routePath.PRIVATE_ROUTE.DASHBOARD_PAGE },
        { Title: "Shop", path: routePath.PRIVATE_ROUTE.SHOP_PAGE },
        { Title: "About", path: routePath.PRIVATE_ROUTE.ABOUT_PAGE },
        { Title: "Contact", path: routePath.PRIVATE_ROUTE.SUPPORT_PAGE }
    ];

    const options = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            ),
            path: routePath.PRIVATE_ROUTE.CART_PAGE,
            label: "Cart"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            ),
            path: routePath.PRIVATE_ROUTE.WISHLIST_PAGE,
            label: "Wishlist"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            ),
            path: routePath.PRIVATE_ROUTE.PROFILE_PAGE,
            label: "Profile"
        }
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItemVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
    };

    const drawerContent = (
        <Box sx={{ width: 280, height: '100%', bgcolor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -1 }}>
                    Wish Box
                </Typography>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {tabs.map((item) => (
                    <ListItem key={item.Title} disablePadding>
                        <ListItemButton
                            onClick={() => { navigate(item.path); handleDrawerToggle(); }}
                            sx={{
                                borderRadius: 2,
                                mb: 1,
                                bgcolor: currentPath === item.path ? 'rgba(0,0,0,0.05)' : 'transparent',
                                '&:hover': { bgcolor: 'rgba(0,0,0,0.08)' }
                            }}
                        >
                            <ListItemText
                                primary={item.Title}
                                primaryTypographyProps={{
                                    fontSize: 16,
                                    fontWeight: currentPath === item.path ? 700 : 500,
                                    color: currentPath === item.path ? 'black' : 'text.secondary'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ borderTop: '1px solid rgba(0,0,0,0.1)', mt: 2, pt: 2 }}>
                {options.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            onClick={() => { navigate(item.path); handleDrawerToggle(); }}
                            sx={{
                                borderRadius: 2,
                                mb: 1,
                                bgcolor: currentPath === item.path ? 'rgba(0,0,0,0.05)' : 'transparent'
                            }}
                        >
                            <Box sx={{ mr: 2, display: 'flex' }}>{item.icon}</Box>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: 15,
                                    fontWeight: currentPath === item.path ? 700 : 500
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </Box>
        </Box>
    );

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: 'rgba(242, 242, 242, 0.7)',
                backdropFilter: 'blur(12px)',
                borderRadius: '24px',
                margin: '16px auto',
                width: 'calc(100% - 32px)',
                top: 16,
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                color: 'black'
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
                {/* Desktop Left Nav */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {tabs.map((item) => (
                            <motion.div key={item.Title} variants={navItemVariants} whileHover="hover" whileTap="tap">
                                <Button
                                    onClick={() => navigate(item.path)}
                                    sx={{
                                        color: currentPath === item.path ? 'black' : 'text.secondary',
                                        textTransform: 'none',
                                        fontWeight: currentPath === item.path ? 700 : 500,
                                        fontSize: 14,
                                        position: 'relative',
                                        '&:hover': { bgcolor: 'transparent', color: 'black' }
                                    }}
                                >
                                    {item.Title}
                                    {currentPath === item.path && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            style={{
                                                position: 'absolute',
                                                bottom: 4,
                                                left: 8,
                                                right: 8,
                                                height: 2,
                                                background: 'black',
                                                borderRadius: 1
                                            }}
                                        />
                                    )}
                                </Button>
                            </motion.div>
                        ))}
                    </Box>
                )}

                {/* Mobile Menu Icon */}
                {isMobile && (
                    <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                )}

                {/* Center Branding */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: '1/2',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Button
                        onClick={() => navigate(routePath.PRIVATE_ROUTE.DASHBOARD_PAGE)}
                        sx={{
                            textTransform: 'none',
                            p: 0,
                            minWidth: 'auto',
                            '&:hover': { bgcolor: 'transparent', opacity: 0.8 }
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 900,
                                letterSpacing: -1.5,
                                fontSize: { xs: 18, md: 22 },
                                color: 'black'
                            }}
                        >
                            Wish Box
                        </Typography>
                    </Button>
                </Box>

                {/* Right Icons */}
                <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 } }}>
                    {options.map((item) => (
                        <motion.div key={item.label} variants={navItemVariants} whileHover="hover" whileTap="tap">
                            <IconButton
                                onClick={() => navigate(item.path)}
                                size={isMobile ? "small" : "medium"}
                                sx={{
                                    color: currentPath === item.path ? 'black' : 'text.secondary',
                                    transition: 'all 0.2s',
                                    '&:hover': { bgcolor: 'rgba(0,0,0,0.05)', color: 'black' }
                                }}
                            >
                                {item.icon}
                            </IconButton>
                        </motion.div>
                    ))}
                </Box>
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        bgcolor: 'transparent',
                        boxShadow: 'none'
                    }
                }}
            >
                {drawerContent}
            </Drawer>
        </AppBar>
    );
}

export default MainHeader; 