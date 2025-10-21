import {SettingsForm} from "../components/dashboard/settingsform.tsx";

export default function SettingsPage(){
    return (
        <div className ="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6"></h1>

    <SettingsForm />
    </div>
    );
}