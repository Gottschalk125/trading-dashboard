import React from 'react';
import SettingsForm from "../components/SettingsForm";

export default function SettingsPage(){
    return (
        <div clasName ="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6"></h1>

    <SettingsForm />
    </div>
    );
}