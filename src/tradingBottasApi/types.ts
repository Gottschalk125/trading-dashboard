export interface Config {
    // Wenn diese Werte vom Bot immer gesetzt sind, sollten sie NICHT null sein
    SYMBOL: string[];
    QTY: number[];
    BuyMax: boolean;
    Percent: number;
    MODE_MOMENTUM: boolean;
    MODE_MEAN_REVERSION: boolean;
    EMAILUSER: string;
}

// 2. Der Update-Typ (Partial) für PUT-Anfragen
// Der 'Partial' Utility Type von TS macht alle Felder optional und erlaubt nulls, falls nötig
export type ConfigUpdate = Partial<Config>;


// 3. Kontostand (Korrigiert)
export interface AccountBalance {
    cash: number;
}

// 4. Trades
export interface Trade {
    id: number;
    symbol: string;
    // HIER: Füge unbedingt alle fehlenden DB-Felder hinzu, z.B.:
    qty: number;
    action: 'BUY' | 'SELL'; // Wenn es nur diese zwei Aktionen gibt
    price: number;
    starttime: string;
}