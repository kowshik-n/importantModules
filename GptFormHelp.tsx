import { useFieldArray, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import './sixth.css';
import React, { useState } from 'react';

type Module = {
    contentTitle: string;
    thumbnail: string;
};

type FinalValue = {
    array: {
        social: string;
        data: Module[];
    };
};

// Other component logic...

// const addObject = () => {
//   const newObject = { key: 'newKey', value: 'newValue' };
//   setObjectArray(prevArray => [...prevArray, newObject]);
// };

export const FinalForm = () => {
    const [objectArray, setObjectArray] = useState<Array<{}>>([]);
    console.log(objectArray, '07654');
    // Initialize the form using useForm
    const { register, control, handleSubmit, formState } = useForm<FinalValue>({
        defaultValues: {
            // modules: [{ contentTitle: '', thumbnail: '' }],
        },
    });

    const { errors } = formState;

    // Manage the field array using useFieldArray
    const { fields, append, remove } = useFieldArray({
        name: 'array.data',
        control,
    });

    // Define the submit function
    const onSubmit = (data: FinalValue) => {
        setObjectArray((prevArray) => [...objectArray, data]);
    };

    return (
        <div>
            {/* Form */}
            <form className="direction" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <label htmlFor="username">Module name</label>
                    <input
                        type="text"
                        id="username"
                        {...register('array.social', {
                            required: { value: true, message: 'user name required' },
                        })}
                    />
                    <p className="errors">{errors.array?.social?.message}</p>
                </div>
                <div>
                    {/* Label */}
                    <label htmlFor="" className="label">
                        Modules data
                    </label>
                    <div>
                        {/* Render each field in the array */}
                        {fields.map((field, index) => (
                            <div className="form-control" key={field.id}>
                                {/* Content Title */}
                                <label htmlFor="">Content title</label>
                                <input
                                    type="text"
                                    {...register(`array.data.${index}.contentTitle` as const)}
                                />
                                {/* Thumbnail */}
                                <label htmlFor="">Thumbnail</label>
                                <input
                                    type="text"
                                    {...register(`array.data.${index}.thumbnail` as const)}
                                />
                                {/* Remove button */}
                                <button type="button" onClick={() => remove(index)}>
                                    REMOVE
                                </button>
                            </div>
                        ))}

                        {/* Add new field */}
                        <button
                            type="button"
                            onClick={() => append({ contentTitle: '', thumbnail: '' })}
                        >
                            ADD files
                        </button>
                    </div>
                </div>

                {/* Submit button */}
                <button type="submit">Submit</button>
            </form>
            {/* DevTool for form debugging */}
            <DevTool control={control} />
        </div>
    );
};
