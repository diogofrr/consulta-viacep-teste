import Form from "@/components/form";
import { searchCEP } from "./actions"

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center p-8 bg-blue-500">
      <div className="bg-white px-8 py-4 rounded-lg shadow-xl flex items-center justify-center flex-col">
        <Form handleFormAction={searchCEP} description="Busca CEP"/>
      </div>
    </main>
  )
}
