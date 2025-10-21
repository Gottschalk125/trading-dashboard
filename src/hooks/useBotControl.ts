import {useState, useEffect} from 'react';
import {fetchConfig, updateConfig} from "../tradingBottasApi/tradingApi";
import {Config} from "../tradingBottasApi/types";

export function useConfig() {
    const [config, setConfig] = useState<Config | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Function to load data on mount
    useEffect(() => {
        fetchConfig()
            .then(data => setConfig(data))
            .catch(_err => setError('Could not load configuration.'))
            .finally(() => setLoading(false));
    }, []);

    // Function to update data
    const handleUpdate = async (newConfig: Partial<Config>) => {
        setLoading(true); // Ladezustand aktivieren
        setError(null);
        try {
            // 1. API-Funktion zum Senden der Daten aufrufen
            const updatedData = await updateConfig(newConfig);

            // 2. Lokalen State mit den neuen Daten aktualisieren
            setConfig(updatedData);

        } catch (err) {
            console.error(err);
            setError('Update failed. Check console for details.');
        } finally {
            setLoading(false); // Ladezustand deaktivieren
        }
    };

    return { config, loading, error, handleUpdate };
}