'use client';

import React from "react";

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

import { motion } from "framer-motion"


export function CallbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: '',
    city: '',
    serviceRequired: '',
    whenRequired: '',
    patientCondition: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    setFormData({
      name: '',
      phone: '',
      state: '',
      city: '',
      serviceRequired: '',
      whenRequired: '',
      patientCondition: '',
    });
  };

  return (
   



<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-white rounded-3xl shadow-xl p-5 border border-border/10 max-w-xl w-full mx-auto"
>
  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
    Request a Callback
  </div>

  <h3 className="text-2xl font-bold text-foreground mb-4">
    Homecare Assistance
  </h3>

  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">

    {/* NAME */}
    <div>
      <label className="text-sm font-semibold">
        Name *
      </label>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* PHONE */}
    <div>
      <label className="text-sm font-semibold">
        Phone *
      </label>
      <Input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone number"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* STATE */}
    <div>
      <label className="text-sm font-semibold">
        State *
      </label>
      <Input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* CITY */}
    <div>
      <label className="text-sm font-semibold">
        City *
      </label>
      <Input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* SERVICE */}
    <div className="md:col-span-2">
      <label className="text-sm font-semibold">
        Service Required *
      </label>
      <Input
        type="text"
        name="serviceRequired"
        value={formData.serviceRequired}
        onChange={handleChange}
        placeholder="Required service"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* WHEN REQUIRED */}
    <div className="md:col-span-2">
      <label className="text-sm font-semibold">
        When Required *
      </label>
      <Input
        type="text"
        name="whenRequired"
        value={formData.whenRequired}
        onChange={handleChange}
        placeholder="When service required"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* CONDITION */}
    <div className="md:col-span-2">
      <label className="text-sm font-semibold">
        Patient Condition
      </label>
      <Textarea
        name="patientCondition"
        value={formData.patientCondition}
        onChange={handleChange}
        placeholder="Patient condition"
        className="rounded-lg bg-muted min-h-[70px]"
      />
    </div>

    {/* BUTTON */}
    <div className="md:col-span-2">
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 rounded-full"
      >
        Submit
      </Button>
    </div>

  </form>
</motion.div>
  );
}
