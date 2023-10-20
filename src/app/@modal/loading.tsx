import Modal from "@/components/Modal";
import UserDetailSkeleton from "@/components/UserDetailSkeleton";

function Loading() {
  return (
    <Modal>
      <UserDetailSkeleton />
    </Modal>
  );
}

export default Loading;
