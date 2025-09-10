"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Logged in successfully!");
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-4xl font-bold text-center mb-12">Login to TomoCredit</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email", { required: true })} />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password", { required: true })} />
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" className="w-full">Login</Button>
          <p className="text-center text-sm">
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
