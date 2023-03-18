import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { useForm } from '../hooks/useForm';

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/5')

    console.log(data, isLoading, hasError);

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ? (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                    :
                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'>{data[0].quote}</p>
                        <footer className='blockquote-footer'>{data[0].author}</footer>
                    </blockquote>
            }

        </>
    )
};