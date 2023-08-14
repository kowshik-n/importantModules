import React from 'react';

interface DataObject {
    name: string;
    description: string;
}

interface SelectedModuleDataProps {
    data: DataObject[];
}

const SelectedModuleData: React.FC<SelectedModuleDataProps> = ({ data }) => {
    console.log(data, 'selected');

    return (
        <div>
            <h2>Selected Module Data</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {item.name} | <strong>Description:</strong>{' '}
                        {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectedModuleData;
