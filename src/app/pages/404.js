// pages/404.js
import React from 'react';
import { motion } from 'framer-motion';

const Custom404 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
        >
            <h1>404 - Page Not Found</h1>
            <motion.img
                src="/images/404.svg"
                alt="404"
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
            />
            <motion.a
                href="/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ marginTop: '20px', textDecoration: 'none', color: '#0070f3' }}
            >
                Go back home
            </motion.a>
        </motion.div>
    );
};

export default Custom404;
