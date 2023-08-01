import { z } from 'zod';
import './App.css';

function App() {
  const schema = z
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

  return (
    <div>
      <form>
        <label>First Name: </label>
        <input type="text" />
        <label>Last Name: </label>
        <input type="text" />
        <label>Email: </label>
        <input type="email" />
        <label>Age: </label>
        <input type="number" />
        <label>Password: </label>
        <input type="password" />
        <label>Confirm Password: </label>
        <input type="password" />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
