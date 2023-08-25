
// import { getCurrentUser } from '@/lib/session';
// import { redirect } from 'next/navigation';
// import React from 'react'

// const createProject = async () => {
//   const session = await getCurrentUser();
//   if (session?.user?.email === 'www.aniketjadhav944@gmail.com') {
//     return <div>createProject</div>;
//   } else {
//     return redirect('/')
//   }
// };

// export default createProject

import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";

const CreateProject = async () => {
  const session = await getCurrentUser();

  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Product</h3>

      <ProjectForm type="create" session={session}/> 
    </Modal>
  );
};

export default CreateProject;