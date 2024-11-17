import { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Authenticated({children, user }) {

    return (
        <div className="min-h-screen pt-20 bg-gray-100">
            <Navbar user={user} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
