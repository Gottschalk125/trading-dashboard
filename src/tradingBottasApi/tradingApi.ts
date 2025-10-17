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
    const response = await fetch(`${BASE_URL}/balance`);
    if(!response.ok) throw new Error('Failed to fetch account balance');
    return response.json() as Promise<Accountbalance>;
}

export async function fetchTrade(): Promise<Trade[]> {
    const response = await fetch(`${BASE_URL}/trades`);
    if(!response.ok) throw new Error('Failed to fetch trades');
    return response.json() as Promise<Trade[]>;
}