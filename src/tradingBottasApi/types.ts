export interface Config {
    SYMBOL: string[] | null;
    QTY: number[] | null;
    BuyMax: boolean | null;
    Percent: number | null;
    MODE_MOMENTUM: boolean | null;
    MODE_MEAN_REVERSION: boolean | null;
    EMAILUSER: string | null;
}

export interface Accountbalance {
    cash: number;
}

export interface Trade {
    id: number;
    symbol: string;
    // Add other fields from your database/repository here...
    price: number;
    starttime: string;
}
