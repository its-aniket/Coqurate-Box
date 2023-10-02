"use client"
import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';
import FormField from './FormField';
import Button from './button';
import CustomMenu from './CustomMenu';
import { categoryFilters } from '@/constants';
import { updateProject, createNewProject, fetchToken } from '@/lib/actions';
import { FormState, ProjectInterface, SessionInterface } from '@/common.types';
import { error, log } from 'console';
type Props = {
    type: string,
    session: SessionInterface,
    project?: ProjectInterface
}

const ProjectForm = ({ type, session, project }: Props) => {
    const router = useRouter()

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [form, setForm] = useState<FormState>({
        title: project?.title || "",
        description: project?.description || "",
        image: project?.image || "",
        image1:project?.image || "",
        image2:project?.image || "",
        image3:project?.image || "",
        category: project?.category || ""
    })

    const handleStateChange = (fieldName: keyof FormState, value: string) => {
        setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
    };

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const file = e.target.files?.[0];

        if (!file) return;

        if (!file.type.includes('image')) {
            alert('Please upload an image!');

            return;
        }

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            const result = reader.result as string;

            handleStateChange("image", result)
        };
    };
    const handleChangeImage1 = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const file = e.target.files?.[0];

        if (!file) return;

        if (!file.type.includes('image')) {
            alert('Please upload an image!');

            return;
        }

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            const result = reader.result as string;

            handleStateChange("image1", result)
        };
        try {
            console.log("succesfull")
        } catch (error) {
            
            console.log(error);
        }
    };
    const handleChangeImage2 = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const file = e.target.files?.[0];

        if (!file) return;

        if (!file.type.includes('image')) {
            alert('Please upload an image!');

            return;
        }

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            const result = reader.result as string;

            handleStateChange("image2", result)
        };
    };
    const handleChangeImage3 = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const file = e.target.files?.[0];

        if (!file) return;

        if (!file.type.includes('image')) {
            alert('Please upload an image!');
            return;
        }

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            const result = reader.result as string;

            handleStateChange("image3", result)
        };
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setSubmitting(true)

        const { token } = await fetchToken()

        try {
            if (type === "create") {
                await createNewProject(form, token)

                router.push("/")
            }

            if (type === "edit") {
                await updateProject(form, project?.id as string, token)

                router.push("/")
            }

        } catch (error) {
            alert(`Failed to ${type === "create" ? "create" : "edit"} a project. Try again!`);
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <form
            
            onSubmit={handleFormSubmit}
            className="flexStart form w-100%">
            <div className='grid grid-cols-4 gap-2'>
                <div className="flexStart form_image-container">
                    <label htmlFor="poster" className="flexCenter form_image-label">
                        {!form.image && 'Enter the product image'}
                    </label>
                    <input
                        id="image"
                        type="file"
                        accept='image/*'
                        required={type === "create" ? true : false}
                        className="form_image-input"
                        onChange={(e) => handleChangeImage(e)}
                    />
                    {form.image && (
                        <Image
                            src={form.image}
                            className="sm:p-10 object-contain z-20" alt="image"
                            fill
                        />
                    )}
                </div>
                <div className="flexStart form_image-container">
                    <label htmlFor="poster" className="flexCenter form_image-label">
                        {!form.image1 && 'Enter the product image'}
                    </label>
                    <input
                        id="image1"
                        type="file"
                        accept='image/*'
                        required={type === "create" ? true : false}
                        className="form_image-input"
                        onChange={(e) => handleChangeImage1(e)}
                    />
                    {form.image1 && (
                        <Image
                            src={form?.image1}
                            className="sm:p-10 object-contain z-20" alt="image"
                            fill
                        />
                    )}
                </div>
                <div className="flexStart form_image-container">
                    <label htmlFor="poster" className="flexCenter form_image-label">
                        {!form.image2 && 'Enter the product image'}
                    </label>
                    <input
                        id="image2"
                        type="file"
                        accept='image/*'
                        required={type === "create" ? true : false}
                        className="form_image-input"
                        onChange={(e) => handleChangeImage2(e)}
                    />
                    {form.image2 && (
                        <Image
                            src={form?.image2}
                            className="sm:p-10 object-contain z-20" alt="image"
                            fill
                        />
                    )}
                </div>
                <div className="flexStart form_image-container">
                    <label htmlFor="poster" className="flexCenter form_image-label">
                        {!form.image3 && 'Enter the product image'}
                    </label>
                    <input
                        id="image3"
                        type="file"
                        accept='image/*'
                        required={type === "create" ? true : false}
                        className="form_image-input"
                        onChange={(e) => handleChangeImage3(e)}
                    />
                    {form.image3 && (
                        <Image
                            src={form?.image3}
                            className="sm:p-10 object-contain z-20" alt="image"
                            fill
                        />
                    )}
                </div>
            </div>
            <FormField
                title="Title"
                state={form.title}
                placeholder="Product title"
                setState={(value) => handleStateChange('title', value)}
            />

            <FormField
                title='Description'
                state={form.description}
                placeholder="Product descripton"
                isTextArea
                setState={(value) => handleStateChange('description', value)}
            />

            <CustomMenu
                title="Category"
                state={form.category}
                filters={categoryFilters}
                setState={(value) => handleStateChange('category', value)}
            />

            <div className="flexStart w-full">
                <Button
                    title={submitting ? `${type === "create" ? "Creating" : "Editing"}` : `${type === "create" ? "Create" : "Edit"}`}
                    type="submit"
                    leftIcon={submitting ? "" : "/plus.png"}
                    submitting={submitting}
                />
            </div>
        </form>
    )
}

export default ProjectForm