import React from 'react';
import data from '../reactForm_Components/data.json';
interface ModuleData {
    moduleName: string;
}

interface ModuleListProps {
    modules: ModuleData[];
    onModuleSelect: (moduleName: string) => void;
}

const ModuleList: React.FC<ModuleListProps> = ({ modules, onModuleSelect }) => {
    return (
        <div>
            <h2>Module List</h2>
            <ul>
                {modules.map((module, index) => (
                    <li key={index}>
                        <button onClick={() => onModuleSelect(module.moduleName)}>
                            {module.moduleName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ModuleList;
