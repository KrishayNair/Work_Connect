import Hero from "../components/Hero";
import Works from "../components/Works";
import Services from "../components/services";
import Head from "next/head";
import styles from "./index.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Work-connect</title>
        <meta
          name="description"
          content="This is a app that connect clients to workers"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero />
      <Works />
      <Services />
      {/* <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="ComplaintBot"
        agent-id="facd2057-66f2-4b77-a3b1-4ab31f250072"
        language-code="en"
      ></df-messenger> */}
      <div className={styles.chatbot}>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
          intent="WELCOME"
          chat-title="WorkerToClientBot"
          agent-id="5291fb65-78f7-477c-874a-0feea40a00f9"
          language-code="en"
        ></df-messenger>
      </div>
    </div>
  );
}
