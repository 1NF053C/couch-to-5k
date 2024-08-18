import { MapboxMapContainer } from "./components/MapboxMapContainer"

export default function Home() {
    return (
        <>
            <MapboxMapContainer />
        </>
    )
}

export const metadata = {
    openGraph: {
        title: '0 | Home',
        description: 'Misc javascript',
        url: 'tbd',
        siteName: 'DevCoffeeOps',
        images: [
            {
                url: '',
                width: 200,
                height: 200,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}
