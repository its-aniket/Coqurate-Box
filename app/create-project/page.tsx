
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';
import React from 'react'

const createProject = async () => {
  const session = await getCurrentUser();
  if (session?.user?.email === 'www.aniketjadhav944@gmail.com') {
    return <div>createProject</div>;
  } else {
    return redirect('/')
  }
};

export default createProject