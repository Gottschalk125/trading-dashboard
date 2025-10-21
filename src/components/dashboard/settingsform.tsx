// src/components/control/settingsForm.tsx

import React, { useState, useEffect } from 'react';
import { useConfig } from '../../hooks/useBotControl';
import { Config } from '../../tradingBottasApi/types';

export function SettingsForm() {
    const { config, loading, error, handleUpdate } = useConfig();

    const [formData, setFormData] = useState<Partial<Config>>({});

    useEffect(() => {
        if (config) {
            setFormData(config);
        }
    }, [config]);

    if (loading) {
        return <div className="p-4 text-center text-gray-500">Lade Konfiguration...</div>;
    }

    if (error) {
        return <div className="p-4 text-red-600 bg-red-100 rounded">Fehler: {error}</div>;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleUpdate(formData);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        let newValue: any = value;

        if (type === 'checkbox') {
            newValue = (e.target as HTMLInputElement).checked;
        } else if (name === 'Percent') {
            newValue = parseFloat(value);
        } else if (name === 'QTY') {
            newValue = value
                .split(',')
                .map(s => parseInt(s.trim()))
                .filter(n => !isNaN(n));
        } else if (name === 'SYMBOL') {
            newValue = value.split(',').map(s => s.trim()).filter(s => s.length > 0);
        }
        setFormData(prev => ({
            ...prev,
            [name]: newValue
        } as Partial<Config>));
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Parameter</h2>



    <div className="mb-4">
    <label htmlFor="Percent" className="block text-sm font-medium text-gray-700">
        Kauf-Prozent
        </label>
        <input
    type="number"
    id="Percent"
    name="Percent"
    value={formData.Percent || ''}
    onChange={handleInputChange}
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        />
        </div>

            <div className="mb-4">
                <label htmlFor="EMAILUSER" className="block text-sm font-medium text-gray-700">
                    Benutzer E-Mail (für Benachrichtigungen)
                </label>
                <input
                    type="email"
                    id="EMAILUSER"
                    name="EMAILUSER"
                    value={formData.EMAILUSER || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                />
            </div>

            {/* Feld: SYMBOL (Als kommagetrennte Liste) */}
            <div className="mb-4">
                <label htmlFor="SYMBOL" className="block text-sm font-medium text-gray-700">
                    Handelssymbole (Komma-getrennt)
                </label>
                <textarea
                    id="SYMBOL"
                    name="SYMBOL"
                    // Konvertiert das Array zum Anzeigen in einen Komma-String
                    value={formData.SYMBOL ? formData.SYMBOL.join(', ') : ''}
                    onChange={handleInputChange}
                    rows={2}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                    placeholder="z.B.: AAPL, MSFT, GOOG"
                />
            </div>

            {/* Feld: QTY (Als kommagetrennte Liste) */}
            <div className="mb-4">
                <label htmlFor="QTY" className="block text-sm font-medium text-gray-700">
                    Anzahl je Symbol (Komma-getrennt)
                </label>
                <textarea
                    id="QTY"
                    name="QTY"
                    // Konvertiert das Array zum Anzeigen in einen Komma-String
                    value={formData.QTY ? formData.QTY.join(', ') : ''}
                    onChange={handleInputChange}
                    rows={2}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                    placeholder="z.B.: 10, 5, 2"
                />
            </div>

            <h3 className="text-lg font-semibold border-b pb-2 mb-4 mt-6">Handelsstrategie</h3>

            {/* Toggle: BuyMax */}
            <div className="flex justify-between items-center mb-4 p-2 bg-gray-50 rounded">
                <label htmlFor="BuyMax" className="text-sm font-medium text-gray-700 cursor-pointer">
                    **BuyMax:** Max. verfügbares Kapital nutzen
                </label>
                <input
                    type="checkbox"
                    id="BuyMax"
                    name="BuyMax"
                    checked={formData.BuyMax ?? false}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
            </div>

            {/* Toggle: MODE_MOMENTUM */}
            <div className="flex justify-between items-center mb-4 p-2 bg-gray-50 rounded">
                <label htmlFor="MODE_MOMENTUM" className="text-sm font-medium text-gray-700 cursor-pointer">
                    **Momentum:** Momentum-Strategie aktivieren
                </label>
                <input
                    type="checkbox"
                    id="MODE_MOMENTUM"
                    name="MODE_MOMENTUM"
                    checked={formData.MODE_MOMENTUM ?? false}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
            </div>

            {/* Toggle: MODE_MEAN_REVERSION */}
            <div className="flex justify-between items-center mb-4 p-2 bg-gray-50 rounded">
                <label htmlFor="MODE_MEAN_REVERSION" className="text-sm font-medium text-gray-700 cursor-pointer">
                    **Mean Reversion:** Mean Reversion-Strategie aktivieren
                </label>
                <input
                    type="checkbox"
                    id="MODE_MEAN_REVERSION"
                    name="MODE_MEAN_REVERSION"
                    checked={formData.MODE_MEAN_REVERSION ?? false}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
            </div>

    <div className="mt-6 pt-4 border-t">
    <button
        type="submit"
    className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
    disabled={loading}
        >
        {loading ? 'Speichere...' : 'Konfiguration speichern'}
        </button>
        </div>
        </form>
);
}