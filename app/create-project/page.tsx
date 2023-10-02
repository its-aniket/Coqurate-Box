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