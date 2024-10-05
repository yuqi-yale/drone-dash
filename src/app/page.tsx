import Spline from "@splinetool/react-spline";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>3D Spline Scene with Other Content</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ width: '100vw', height: '75vh', display: 'flex', flexDirection: 'column' }}>
        <Spline scene="https://prod.spline.design/LwDgJASg9bM3rCA6/scene.splinecode" />

        <footer style={{ padding: '10px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
          <p>Â© 2024 Your Website. All rights reserved.</p>
        </footer>


      </div>


      <div>
        aaa
      </div>
    </>
  );
}
