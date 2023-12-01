'use server'

import CepModal from "@/components/cep-modal";

export default async function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center xs:p-8 bg-blue-500">
      <CepModal />
    </main>
  )
}
