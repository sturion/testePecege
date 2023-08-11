/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query'
import Modal from './components/modal';
import { PersonData } from './interfaces/personData.tsx';
import { getUsers } from './services/api/endpoints/user.tsx';
//import { apiInstance } from './services/api/axios.ts';


const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allInfo, setAllInfo] = useState({});
  const { isLoading, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      getUsers().then(
        (res) => console.log(res.json),
      ),
  })
  getUsers();

  const onModalCloseRequest = (): void => {
    setIsModalOpen(false);
  };
  const onModalOpenRequest = (modalData:PersonData): void => {
    setAllInfo(modalData)
    setIsModalOpen(true);
  };

  if (isLoading) return 'Loading...'

  return (
    <div>
      {data.map((contato:PersonData) =>
      <div>
      <div>{contato.name}</div>
      <div>{contato.phone}</div>
      <div>{contato.email}</div>
      <button onClick={() => onModalOpenRequest(contato)}>
        Open modal
      </button>
      <br />
      </div>
      )}
      <Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest} data={allInfo}/>
    </div>
  )
}