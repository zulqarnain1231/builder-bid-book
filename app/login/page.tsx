import Login from "@/pages/Login";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Index() {
  return (
    <Login />
  )
}
