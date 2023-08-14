import React, { useState } from 'react';
import ModuleList from './ModuleList';
import SelectedModuleData from './SelectedModuleData';
import jsonData from './data.json'; // Replace with your actual JSON data

interface DataObject {
    name: string;
    description: string;
}
const Apps: React.FC = () => {
    const [selectedModuleName, setSelectedModuleName] = useState<string | null>(null);

    // console.log(selectedModuleName, '098765');

    const selectedModuleData = jsonData.find((module) => {
        return module.moduleName === selectedModuleName;
    });

    const handleModuleSelect = (moduleName: string) => {
        console.log(moduleName, 'recevived from moduleList');

        setSelectedModuleName(moduleName);
    };

    return (
        <div>
            <h1>JSON Data Manipulation</h1>
            <ModuleList modules={jsonData} onModuleSelect={handleModuleSelect} />
            {selectedModuleData && (
                <>
                    <SelectedModuleData data={selectedModuleData.data} />
                </>
            )}
        </div>
    );
};

export default Apps;
