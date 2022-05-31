import Head from "next/head"
import { FC } from "react"
import Navbar from "../ui/Navbar"

interface Props {
    titulo: string,
    href?: string,
    children?: React.ReactNode | undefined | JSX.Element | JSX.Element[]
}

const Layout: FC<Props> = ({ titulo, children }: Props) => {
    // console.log(titulo);
    const origin = (typeof window === 'undefined') ? '' : window.location.origin;

    return (
        <>
            <Head>
                <title className="capitalize">{titulo}</title>
                <meta name="description" content={`Informacion sobre el pokemon ${titulo}`} />
                <meta property="og:title" content={`Información sobre el ${titulo}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${titulo}`} />
                <meta property="og:image" content={`${origin}/banner.png`} />
            </Head>
            <Navbar />
            <main className='w-full min-h-screen flex flex-col bg-amber-700'>
                <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                    <source src='/videos/pokemon.mp4' type='video/mp4; codecs=hvc1' />
                    <source src='/videos/pokemon.webm' type='video/webm; codecs=vp9' />
                </video>
                {children}
            </main>
        </>
    )
}

export default Layout