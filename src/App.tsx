import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query'

interface PersonData {
  name: string;
  phone: number;
  email: string;
}

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isLoading, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  return (
    <div>
      {data.map((contato:PersonData) =>
      <div>
      <div>{contato.name}</div>
      <div>{contato.phone}</div>
      <div>{contato.email}</div>
      <br />
      </div>
      )}
      <h1>{data.name}</h1>
    </div>
  )
}