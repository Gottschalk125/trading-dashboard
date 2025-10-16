# 📊 Trading Bot Dashboard (React/Tailwind)

[![Build Status](https://img.shields.io/badge/Status-In%20Entwicklung-yellow.svg)](YOUR_CI_LINK_HERE) 
[![Tech Stack](https://img.shields.io/badge/Frontend-React%20%7C%20Tailwind%20CSS-blue.svg)](https://reactjs.org/)
[![API Backend](https://img.shields.io/badge/API-FastAPI-green.svg)](https://fastapi.tiangolo.com/)

## 📝 Kurzbeschreibung

Dieses Projekt ist das **Visualisierungs- und Kontrollzentrum** für den selbstgebauten Trading-Bot.

Es dient als modernes, schnelles Single-Page-Application (SPA) Dashboard, das in Echtzeit (oder nahezu Echtzeit) die Performance-Metriken, offenen Positionen und die Handelshistorie des Bots anzeigt. Darüber hinaus ermöglicht es die **Konfiguration und Steuerung** des Bots über eine grafische Benutzeroberfläche (GUI).

### 🤖 Verknüpfter Trading Bot

Dieses Dashboard ist direkt mit dem **[First Little Bot](https://github.com/Gottschalk125/FirstLittleBot)** verbunden. Die gesamte Geschäftslogik, Order-Ausführung und Datenpersistenz wird vom Bot-Backend (FastAPI) gehandhabt.

> 🔗 **Zum Backend-Projekt:** [Gottschalk125/FirstLittleBot](https://github.com/Gottschalk125/FirstLittleBot)

---

## 🚀 Hauptfunktionen des Dashboards

* **Echtzeit-Statuskontrolle:** Starten und Stoppen des Trading-Bots über die Benutzeroberfläche (`/start`, `/stop`).
* **Dynamische Konfiguration:** Ändern von Laufzeit-Einstellungen wie `SYMBOL`-Listen, Handelsstrategie-Modi (`MODE_MOMENTUM`, `MODE_MEAN_REVERSION`) und Kaufparametern über eine Formularansicht (`GET/PUT /config`).
* **Kontoübersicht:** Anzeige des aktuellen Kontostands (`/account/balance`).
* **Handelshistorie:** Tabellarische Ansicht und Filterung aller ausgeführten Trades, mit der Möglichkeit zur Anzeige nach Symbol oder Zeitbereich (`GET /trades`, `GET /trades/{symbol}`, `GET /trades/range`).
* **Performance-Visualisierung:** (Geplant) Grafische Darstellung der historischen Gewinne und Verluste.

---

## 🛠️ Technologie-Stack (Frontend)

| Technologie | Beschreibung |
| :--- | :--- |
| **React** | Haupt-Framework für die Benutzeroberfläche |
| **Tailwind CSS** | Utility-First CSS Framework für schnelles und responsives Styling |
| **JavaScript (ES6+)** | Programmiersprache |
| **FastAPI** | Dient als **API-Gateway** für die gesamte Bot-Steuerung und Datenabfrage (siehe Bot-Repo). |

---

## ⚙️ Installation & Start (Development)

Um das Dashboard lokal zu starten, müssen **zuerst der Trading Bot und seine API laufen**.

### 1. Voraussetzungen

* Node.js (LTS-Version empfohlen)
* npm oder yarn
* Der Trading Bot (mit laufender FastAPI-Instanz unter `http://localhost:8000` oder der konfigurierten URL).

### 2. Dashboard einrichten

1.  **Repository klonen:**
    ```bash
    git clone [https://github.com/Gottschalk125/trading-bot-dashboard.git](https://github.com/Gottschalk125/trading-bot-dashboard.git)
    cd trading-bot-dashboard
    ```
2.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    # oder
    yarn install
    ```
3.  **Entwicklungsserver starten:**
    ```bash
    npm run dev
    # oder
    yarn dev
    ```

Das Dashboard sollte nun im Browser unter `http://localhost:3000` (oder einer ähnlichen URL) verfügbar sein.

---

## 🗺️ Projektstruktur

Das Frontend folgt einer modularen Struktur, um die Komplexität der Daten- und UI-Logik zu trennen. Die wichtigsten Verzeichnisse sind:

src/
├── api/          # API-Client-Funktionen, die die FastAPI-Endpunkte konsumieren
├── components/   # Wiederverwendbare UI-Elemente (z.B. Button, Card, TradeTable)
├── hooks/        # Wiederverwendbare Logik (z.B. useBotControl, useTradeHistory)
├── pages/        # Die Hauptansichten (z.B. DashboardPage, SettingsPage)
├── assets/       # Statische Ressourcen (Bilder, Icons, etc.)
└── utils/        # Allgemeine Hilfsfunktionen (Formatierung, Validierung)

---

## 🤝 Mitwirken

Du bist herzlich eingeladen, zum Projekt beizutragen!

* **Fehler melden:** Bitte öffne ein [Issue](LINK_TO_ISSUES) für Bugs oder unerwartetes Verhalten.
* **Feature-Vorschläge:** Neue Dashboard-Features können ebenfalls als Issues eingereicht werden.

---

## 👨‍💻 Autor

* **Gottschalk125**


