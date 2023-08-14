import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import './sixth.css';

// these types only should be sent from the formValues if not error will be thrown
type FormValues = {
    modules: { contentTitle: string; thumbnail: string }[];
};

export const SixthOwnModulesTesting = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            modules: [{ contentTitle: '', thumbnail: '' }],
        },
    });

    // const { name, onBlur, onChange, ref } = register('username');
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    // register for all required to store data values
    // control for dev tools
    // handle submit for submitting data required in form --> into one function
    // formState is used to detect the required validation error to show to the user in frontend --> ex:username is required

    const { fields, append, remove } = useFieldArray({
        name: 'modules',
        control,
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    console.log(fields, 'fields');

    return (
        <div>
            <form className="direction" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <label htmlFor="" className="label">
                        Modules data
                    </label>
                    <div>
                        {fields.map((fields, index) => {
                            return (
                                <>
                                    <div className="form-control" key={fields.id}>
                                        <label htmlFor="">Content title</label>
                                        <input
                                            type="text"
                                            {...register(`modules.${index}.contentTitle` as const)}
                                        />
                                        <label htmlFor="">Thumbnail</label>
                                        <input
                                            type="text"
                                            {...register(`modules.${index}.thumbnail` as const)}
                                        />
                                        {index >= 0 && (
                                            <button type="button" onClick={() => remove(index)}>
                                                REMOVE
                                            </button>
                                        )}
                                    </div>
                                    {/* <div className="form-control" key={fields.id}>
                                   
                                    </div> */}
                                </>
                            );
                        })}

                        <button
                            type="button"
                            onClick={() => append({ contentTitle: '', thumbnail: '' })}
                        >
                            ADD files
                        </button>
                    </div>
                </div>

                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    );
};
