import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Snackbar, Alert, Button } from '@mui/material';

function Dashboard() {
    const location = useLocation();
    const [successMessage, setSuccessMessage] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const message = location.state?.successMessage;
        if (message) {
            setSuccessMessage(message);
            setOpen(true);

            sessionStorage.removeItem('successMessage');
        }
    }, [location.state]);

    useEffect(() => {
        const storedMessage = sessionStorage.getItem('successMessage');
        if (storedMessage) {
            setSuccessMessage(storedMessage);
            setOpen(true);
            sessionStorage.removeItem('successMessage');
        }
    }, []);

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                setOpen(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [open]);

    return (
        <Container maxWidth="sm" className="dashboard-container">
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                action={
                    <Button color="inherit" onClick={() => setOpen(false)}>
                        Close
                    </Button>
                }
            >
                <Alert onClose={() => setOpen(false)} severity="success">
                    {successMessage}
                </Alert>
            </Snackbar>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Welcome to the Dashboard
            </Typography>
        </Container>
    );
}

export default Dashboard;