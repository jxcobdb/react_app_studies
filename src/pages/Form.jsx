import React, { useState } from "react";
import Button from "../components/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=''>
      <h2 className='py-10 font-bold font-serif text-10 text-4xl text-slate-200 drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)] text-center'>
        Zaproponuj barmanowi <br></br> zmiany na stronie
      </h2>
      <form
        className='flex flex-col items-start gap-y-2 items-center'
        onSubmit={handleSubmit}
      >
        <div className='space-x-[73.66px]'>
          <label
            htmlFor='name'
            className='font-bold p-3  w-3/4 font-serif text-slate-200 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
          >
            Imię:
          </label>
          <input
            className='rounded w-[186px]'
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='space-x-[60.79px]'>
          <label
            htmlFor='email'
            className='font-bold p-3  w-3/4 font-serif text-slate-200 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
          >
            Email:
          </label>
          <input
            className='rounded w-[186px]'
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='pb-5'>
          <label
            htmlFor='message'
            className='align-top font-bold p-3  w-3/4 font-serif text-slate-200 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
          >
            Wiadomość:
          </label>
          <textarea
            className='rounded w-[186px] resize-none h-32'
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <Button text='Wyślij' type='submit' />
      </form>
    </div>
  );
};

export default Form;
