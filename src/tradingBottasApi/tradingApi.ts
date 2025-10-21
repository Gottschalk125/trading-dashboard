import { Config, AccountBalance, Trade } from './types'; // AccountBalance wurde korrigiert

const BASE_URL = 'http://localhost:8000';

export async function fetchConfig(): Promise<Config> {
    const response = await fetch(`${BASE_URL}/config`);
    if (!response.ok) throw new Error('Failed to fetch config');
    // Korrekt: await wird verwendet, um den Promise-Inhalt zu holen
    return (await response.json()) as Config;
}

export async function fetchAccountBalance(): Promise<AccountBalance> {
    const response = await fetch(`${BASE_URL}/account/balance`);
    if (!response.ok) throw new Error('Failed to fetch account balance');
    // Korrekt: await wird verwendet und das Promise im Casting entfernt
    const data = await response.json();
    return data as AccountBalance;
}

export async function fetchTrade(): Promise<Trade[]> {
    const response = await fetch(`${BASE_URL}/trades`);
    if(!response.ok) throw new Error('Failed to fetch trades');
    // Korrekt: await wird verwendet und das Promise im Casting entfernt
    return (await response.json()) as Trade[];
}

export async function updateConfig(newConfig: Partial<Config>): Promise<Config> {
    const response = await fetch(`${BASE_URL}/config`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newConfig),
    });
    if (!response.ok) throw new Error('Failed to update config');
    // Korrekt: await wird verwendet und das Promise im Casting entfernt
    return (await response.json()) as Config;
}