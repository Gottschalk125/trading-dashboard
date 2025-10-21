// src/components/control/settingsForm.tsx

import React, { useState, useEffect } from 'react';
import { useConfig } from '../../hooks/useBotControl';
import { Config } from '../../tradingBottasApi/types';

export function SettingsForm() {
    const { config, loading, error, handleUpdate } = useConfig();

    // Lokaler State für die Formularwerte
    const [formData, setFormData] = useState<Partial<Config>>({});

    // 1. Lokalen State befüllen, sobald die Config geladen ist
    useEffect(() => {
        if (config) {
            setFormData(config);
        }
    }, [config]);

    // Wenn der Hook noch lädt
    if (loading) {
        return <div className="p-4 text-center text-gray-500">Lade Konfiguration...</div>;
    }

    // Wenn ein Fehler aufgetreten ist
    if (error) {
        return <div className="p-4 text-red-600 bg-red-100 rounded">Fehler: {error}</div>;
    }

    // Handler für das Speichern
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Sende nur die geänderten Daten an den Hook
        handleUpdate(formData);
    };

    // Handler für Input-Änderungen (Beispiel für den Prozent-Wert)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'Percent' ? parseFloat(value) : value
        }));
    };


    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Parameter</h2>

    {/* Beispiel für ein Input-Feld (Tailwind verwenden!) */}
    <div className="mb-4">
    <label htmlFor="Percent" className="block text-sm font-medium text-gray-700">
        Kauf-Prozent
        </label>
        <input
    type="number"
    id="Percent"
    name="Percent"
    value={formData.Percent || ''} // Nutze den lokalen State
    onChange={handleInputChange}
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        />
        </div>

    {/* Füge hier weitere Inputs und Toggles für SYMBOOL, QTY, MODES etc. hinzu */}

    <div className="mt-6 pt-4 border-t">
    <button
        type="submit"
    className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
    disabled={loading} // Button während des Ladens deaktivieren
        >
        {loading ? 'Speichere...' : 'Konfiguration speichern'}
        </button>
        </div>
        </form>
);
}