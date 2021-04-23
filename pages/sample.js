import { useRouter } from 'next/router'

function Sample({ Component, pageProps }) {

  const router = useRouter();

  const handleClick = (e) => {
    router.push("/");
  }

  return (
    <div>
      <a onClick={handleClick}>메인으로</a>
    </div>
  )
}

export default Sample
