import {Config} from './types';
import {Accountbalance} from './types';
import {Trade} from './types';

const BASE_URL = 'http://localhost:8000';

export async function fetchConfig(): Promise<Config> {
    const response = await fetch(`${BASE_URL}/config`);
    if (!response.ok) throw new Error('Failed to fetch config');
    // Important: Cast the response to the Config type
    return response.json() as Promise<Config>;
}

export async function fetchAccountBalance(): Promise<Accountbalance> {
    // Endpunkt korrigiert
    const response = await fetch(`${BASE_URL}/account/balance`);
    if (!response.ok) throw new Error('Failed to fetch account balance');
    // Korrektes Casting: as AccountBalance
    return response.json() as Promise<Accountbalance>;
}

export async function fetchTrade(): Promise<Trade[]> {
    const response = await fetch(`${BASE_URL}/trades`);
    if(!response.ok) throw new Error('Failed to fetch trades');
    // Korrektes Casting: as Trade[]
    return response.json() as Promise<Trade[]>;
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
    return response.json() as Promise<Config>;
}