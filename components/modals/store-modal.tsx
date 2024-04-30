"use client"

import { Modal } from "../ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal"

export function StoreModal() {
const storeModal = useStoreModal()

  return (
  <Modal
  title="Nova loja"
  description="Adicione uma nova loja para administrar produtos e categorias"
  isOpen={storeModal.isOpen}
  onClose={storeModal.onClose}
  >
    Crie uma nova loja
  </Modal>
  
)
}