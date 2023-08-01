import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ZodType, z } from 'zod';
import './App.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};

function App() {
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      age: z.number().min(18).max(70),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  const { register } = useForm({ resolver: zodResolver(schema) });

  return (
    <div>
      <form>
        <label>First Name: </label>
        <input type="text" {...register('firstName')} />
        <label>Last Name: </label>
        <input type="text" {...register('lastName')} />
        <label>Email: </label>
        <input type="email" {...register('email')} />
        <label>Age: </label>
        <input type="number" {...register('age')} />
        <label>Password: </label>
        <input type="password" {...register('password')} />
        <label>Confirm Password: </label>
        <input type="password" {...register('confirmPassword')} />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
