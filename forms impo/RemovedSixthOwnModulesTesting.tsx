import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import './sixth.css';

type Module = {
    contentTitle: string;
    thumbnail: string;
};

type FormValues = {
    modules: Module[];
};

export const SixthOwnModulesTesting = () => {
    // Initialize the form using useForm
    const { register, control, handleSubmit, formState } = useForm<FormValues>({
        defaultValues: {
            modules: [{ contentTitle: '', thumbnail: '' }],
        },
    });

    const { errors } = formState;

    // Manage the field array using useFieldArray
    const { fields, append, remove } = useFieldArray({
        name: 'modules',
        control,
    });

    // Define the submit function
    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <div>
            {/* Form */}
            <form className="direction" onSubmit={handleSubmit(onSubmit)} noValidate>
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
                                    {...register(`modules.${index}.contentTitle` as const)}
                                />
                                {/* Thumbnail */}
                                <label htmlFor="">Thumbnail</label>
                                <input
                                    type="text"
                                    {...register(`modules.${index}.thumbnail` as const)}
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
