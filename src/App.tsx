import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query'
import Modal from './components/modal';
import { PersonData } from './interfaces/personData.tsx';


const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allInfo, setAllInfo] = useState({});
  const { isLoading, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then(
        (res) => res.json(),
      ),
  })

  const onModalCloseRequest = (): void => {
    // Optionally do stuff here before closing the modal
    setIsModalOpen(false);
  };
  const onModalOpenRequest = (modalData:PersonData): void => {
    // Optionally do stuff here before closing the modal
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