import { useEffect, useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
    Alert,
    CircularProgress,
    useTheme,
    IconButton,
    InputAdornment,
    Divider,
    Fade,
    Grid,
    Stepper,
    Step,
    StepLabel,
} from '@mui/material';
import {
    ArrowBack,
    Send,
    Diamond,
    Security,
    ArrowForward,
    CheckCircle,
    Verified,
} from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import ApiOtpVarify from '../../api/auth/ApiOtpVarify';
import ApiOtp from '../../api/auth/ApiOtp';
import { mainLoaderTogel } from '../../services/store/slice/loading/loadingSlice';

// ------------------ Wish Box Color Tokens ------------------
const amber = {
    50: '#fffbeb',
    100: '#fef3c7',
    500: '#f59e0b',   // primary
    600: '#d97706',   // primary dark
};

const gray = {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',   // text secondary
    900: '#111827',   // text primary
};

// ------------------ Styled Components ------------------
// Glassmorphism card for the login form
const GlassPaper = styled(Paper)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)', // for Safari
    border: `1px solid rgba(255, 255, 255, 0.3)`,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    borderRadius: 24, // rounded-2xl
    position: 'relative',
    overflow: 'hidden',
    // subtle inner glow
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 20% 30%, ${amber[100]}40, transparent 70%)`,
        pointerEvents: 'none',
    },
}));

const GradientButton = styled(Button)(({ theme }) => ({
    background: `linear-gradient(135deg, ${amber[500]} 0%, ${amber[600]} 100%)`,
    borderRadius: 12, // rounded-xl
    padding: '10px 22px',
    transition: 'all 0.3s ease',
    color: '#ffffff',
    fontWeight: 500,
    textTransform: 'none',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 8px 20px ${amber[500]}40`,
        background: `linear-gradient(135deg, ${amber[600]} 0%, ${amber[500]} 100%)`,
    },
    '&:active': {
        transform: 'translateY(0)',
    },
    '&.Mui-disabled': {
        background: gray[200],
        color: gray[400],
    },
}));

// ------------------ Validation Schemas (unchanged) ------------------
const phoneSchema = yup.object({
    phoneNumber: yup
        .string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Enter a valid 10-digit phone number')
        .transform((value: any) => value?.replace(/\D/g, '')),
});

const otpSchema = yup.object({
    otp: yup
        .string()
        .required('OTP is required')
        .matches(/^[0-9]{6}$/, 'Enter 6-digit OTP'),
});

type PhoneFormData = { phoneNumber: string };
type OtpFormData = { otp: string };

// ------------------ Main Component ------------------
const LoginPage = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [step, setStep] = useState<'phone' | 'otp'>('phone');
    const [phoneNumber, _setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [resendTimer, setResendTimer] = useState(0);
    const [showResend, setShowResend] = useState(false);

    const {
        control: phoneControl,
        handleSubmit: handlePhoneSubmit,
        formState: { errors: phoneErrors },
        setValue: setPhoneValue,
    } = useForm<PhoneFormData>({
        resolver: yupResolver(phoneSchema),
        defaultValues: {},
    });

    const {
        control: otpControl,
        handleSubmit: handleOtpSubmit,
        formState: { errors: otpErrors },
        reset: resetOtp,
    } = useForm<OtpFormData>({
        resolver: yupResolver(otpSchema),
        defaultValues: { otp: '' },
    });

    // Redux state (unchanged)
    const phoneFromStore = useSelector((state: any) => state.auth.PhoneNumber);
    const otpFromStore = useSelector((state: any) => state.auth.OneTimePasssword);
    const id = useSelector((state: any) => state.userDataSlice.tempUserID);

    // Helper functions (unchanged)
    const formatPhoneNumber = (value: string) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length <= 3) return cleaned;
        if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    };

    const handleSendOtp = async (data: PhoneFormData) => {
        setIsLoading(true);
        setError('');
        try {
            await ApiOtp({ phone: data.phoneNumber, dispatch });
            setStep('otp');
            setResendTimer(30);
            setShowResend(false);
            const timer = setInterval(() => {
                setResendTimer(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setShowResend(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } catch (err) {
            setError('Failed to send verification code. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendOtp = async () => {
        if (!showResend) return;
        setIsLoading(true);
        setError('');
        setSuccess('');
        try {
            await ApiOtp({ phone: phoneFromStore, dispatch });
            setResendTimer(30);
            setShowResend(false);
            const timer = setInterval(() => {
                setResendTimer(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setShowResend(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } catch (err) {
            setError('Failed to resend code. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (data: OtpFormData) => {
        setIsLoading(true);
        setError('');
        try {
            ApiOtpVarify({
                dispatch,
                storeOpt: otpFromStore,
                userOtp: data.otp,
                id,
            });
        } catch (err) {
            setError('Invalid verification code. Please try again.');
            resetOtp({ otp: '' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackToPhone = () => {
        setStep('phone');
        setError('');
        setSuccess('');
        resetOtp({ otp: '' });
    };

    useEffect(() => {
        dispatch(mainLoaderTogel(false));
    }, [dispatch]);

    // ------------------ Brand Showcase (Wish Box) ------------------
    const BrandShowcase = () => (
        <Box
            sx={{
                flex: { lg: 0.4 },
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'column',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${amber[600]} 0%, ${amber[500]} 100%)`,
                p: { lg: 6, xl: 8 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    backgroundImage: `radial-gradient(circle at 20% 80%, white 0%, transparent 50%)`,
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    color: 'white',
                    maxWidth: 500,
                    width: '100%',
                }}
            >
                {/* Brand Header - Wish Box */}
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                        <Diamond sx={{ fontSize: 40, mr: 2 }} />
                        <Typography variant="h3" fontWeight="bold">
                            Wish Box
                        </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ opacity: 0.9 }}>
                        Premium Gifts & Decor
                    </Typography>
                </Box>

                <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />

                {/* Features Grid */}
                <Grid container spacing={3}>
                    {[
                        { icon: CheckCircle, title: 'Handcrafted with Love', subtitle: 'Unique artisan pieces' },
                        { icon: Security, title: 'Secure Checkout', subtitle: '256‑bit encryption' },
                        { icon: Verified, title: 'Curated Collections', subtitle: 'Expertly selected' },
                    ].map((feature, idx) => (
                        <Grid size={12} key={idx}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    p: 2,
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    borderRadius: 2,
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                <feature.icon sx={{ mr: 2, fontSize: 30 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="medium">
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                        {feature.subtitle}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Quote */}
                <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Typography
                        variant="body2"
                        sx={{ fontStyle: 'italic', opacity: 0.9, textAlign: 'center' }}
                    >
                        "Bringing your wishes to life, one gift at a time."
                    </Typography>
                </Box>
            </Box>
        </Box>
    );

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `radial-gradient(circle at 10% 30%, ${amber[100]} 0%, ${gray[50]} 90%)`,
                py: { xs: 2, md: 4 },
                px: { xs: 1, sm: 2 },
            }}
        >
            <Container maxWidth="xl">
                <Fade in={true} timeout={500}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            minHeight: { xs: 'auto', lg: '600px' },
                            borderRadius: 4,
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            width: '100%',
                            maxWidth: 1200,
                            margin: '0 auto',
                        }}
                    >
                        {/* Left - Brand Showcase */}
                        <BrandShowcase />

                        {/* Right - Glassmorphism Login Form */}
                        <GlassPaper
                            sx={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                p: { xs: 3, sm: 4, md: 5, lg: 6 },
                            }}
                        >
                            {/* Progress Stepper with amber accent */}
                            <Stepper
                                activeStep={step === 'phone' ? 0 : 1}
                                sx={{
                                    mb: 4,
                                    '& .MuiStepIcon-root.Mui-active': { color: amber[500] },
                                    '& .MuiStepIcon-root.Mui-completed': { color: amber[600] },
                                }}
                            >
                                <Step>
                                    <StepLabel>
                                        <Typography variant="caption" sx={{ color: gray[600] }}>
                                            Phone Number
                                        </Typography>
                                    </StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>
                                        <Typography variant="caption" sx={{ color: gray[600] }}>
                                            Verification
                                        </Typography>
                                    </StepLabel>
                                </Step>
                            </Stepper>

                            {/* Form Content */}
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    maxWidth: 450,
                                    mx: 'auto',
                                    width: '100%',
                                }}
                            >
                                {/* Header */}
                                <Box sx={{ textAlign: 'center', mb: 4 }}>
                                    <Typography
                                        variant="h4"
                                        fontWeight="bold"
                                        gutterBottom
                                        sx={{ color: amber[500] }}
                                    >
                                        {step === 'phone' ? 'Welcome Back' : 'Secure Login'}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: gray[600] }}>
                                        {step === 'phone'
                                            ? 'Enter your phone number to continue'
                                            : `Enter verification code sent to ${phoneNumber}`}
                                    </Typography>
                                </Box>

                                {/* Messages */}
                                {error && (
                                    <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                                        {error}
                                    </Alert>
                                )}
                                {success && (
                                    <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                                        {success}
                                    </Alert>
                                )}

                                {/* Phone Form */}
                                {step === 'phone' && (
                                    <form onSubmit={handlePhoneSubmit(handleSendOtp)}>
                                        <Controller
                                            name="phoneNumber"
                                            control={phoneControl}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    fullWidth
                                                    label="Phone Number"
                                                    placeholder="(123) 456-7890"
                                                    variant="outlined"
                                                    margin="normal"
                                                    error={!!phoneErrors.phoneNumber}
                                                    helperText={phoneErrors.phoneNumber?.message}
                                                    disabled={isLoading}
                                                    onChange={(e) => {
                                                        const formatted = formatPhoneNumber(e.target.value);
                                                        setPhoneValue('phoneNumber', formatted, { shouldValidate: true });
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                +91
                                                            </InputAdornment>
                                                        ),
                                                        sx: {
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(255,255,255,0.8)',
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: amber[500],
                                                                borderWidth: 2,
                                                            },
                                                        },
                                                    }}
                                                    sx={{ mb: 3 }}
                                                />
                                            )}
                                        />

                                        <GradientButton
                                            type="submit"
                                            fullWidth
                                            size="large"
                                            disabled={isLoading}
                                            sx={{ mt: 2 }}
                                            endIcon={!isLoading && <ArrowForward />}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                                                    Sending Code...
                                                </>
                                            ) : (
                                                'Continue with OTP'
                                            )}
                                        </GradientButton>
                                    </form>
                                )}

                                {/* OTP Form */}
                                {step === 'otp' && (
                                    <>
                                        <Box sx={{ mb: 3 }}>
                                            <IconButton
                                                onClick={handleBackToPhone}
                                                disabled={isLoading}
                                                sx={{ color: amber[500], '&:hover': { backgroundColor: amber[50] } }}
                                            >
                                                <ArrowBack />
                                                <Typography variant="body2" sx={{ ml: 1 }}>
                                                    Back
                                                </Typography>
                                            </IconButton>
                                        </Box>

                                        <form onSubmit={handleOtpSubmit(handleVerifyOtp)}>
                                            <Controller
                                                name="otp"
                                                control={otpControl}
                                                render={({ field }) => (
                                                    <TextField
                                                        {...field}
                                                        fullWidth
                                                        label="6-Digit Verification Code"
                                                        placeholder="Enter code"
                                                        variant="outlined"
                                                        margin="normal"
                                                        error={!!otpErrors.otp}
                                                        helperText={otpErrors.otp?.message}
                                                        disabled={isLoading}
                                                        inputProps={{
                                                            maxLength: 6,
                                                            inputMode: 'numeric',
                                                            pattern: '[0-9]*',
                                                            sx: {
                                                                fontSize: '1.5rem',
                                                                letterSpacing: '8px',
                                                                textAlign: 'center',
                                                            },
                                                        }}
                                                        InputProps={{
                                                            sx: {
                                                                borderRadius: 2,
                                                                backgroundColor: 'rgba(255,255,255,0.8)',
                                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: amber[500],
                                                                    borderWidth: 2,
                                                                },
                                                            },
                                                        }}
                                                    />
                                                )}
                                            />

                                            <Box sx={{ textAlign: 'center', my: 3 }}>
                                                {!showResend ? (
                                                    <Typography variant="body2" sx={{ color: gray[500] }}>
                                                        Resend code in {resendTimer}s
                                                    </Typography>
                                                ) : (
                                                    <Button
                                                        onClick={handleResendOtp}
                                                        disabled={isLoading}
                                                        startIcon={<Send />}
                                                        sx={{
                                                            color: amber[500],
                                                            '&:hover': { backgroundColor: amber[50] },
                                                        }}
                                                    >
                                                        Resend Code
                                                    </Button>
                                                )}
                                            </Box>

                                            <GradientButton
                                                type="submit"
                                                fullWidth
                                                size="large"
                                                disabled={isLoading}
                                                startIcon={isLoading && <CircularProgress size={20} sx={{ color: 'white' }} />}
                                            >
                                                {isLoading ? 'Verifying...' : 'Verify & Login'}
                                            </GradientButton>
                                        </form>
                                    </>
                                )}

                                {/* Footer */}
                                <Box sx={{ mt: 4, pt: 3, borderTop: 1, borderColor: gray[200] }}>
                                    <Typography
                                        variant="caption"
                                        sx={{ color: gray[500], display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        <Security sx={{ fontSize: 14, mr: 0.5 }} />
                                        Secured with enterprise-grade encryption
                                    </Typography>
                                </Box>
                            </Box>
                        </GlassPaper>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
};

export default LoginPage;