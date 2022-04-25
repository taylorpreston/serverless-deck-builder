import Head from "next/head";
import useSWR from "swr";
import AppWrapper from "components/AppWrapper";
import { Container, Text } from '@nextui-org/react';
import DeckForm from "components/DeckForm";


const fetcher = (key) => fetch(key).then((res) => res.json());

function Users() {
  const { data } = useSWR("/api/users", fetcher);

  return (
    <ul>
      {data?.users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <AppWrapper>
      <Head>
        <title>Deck Builder</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container justify="center" fluid css={{ textAlign: "center"}}>
          <Text 
            size={60}
            css={{
              textGradient: "45deg, $blue500 -20%, $pink500 50%",
            }}
            weight="bold"
          >
            Deck Builder
          </Text>
        </Container>
        <DeckForm />
      </main>
    </AppWrapper>
  );
}
