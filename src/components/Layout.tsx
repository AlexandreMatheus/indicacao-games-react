import Image from "next/image";
import Link from "next/link";
import Titulo from "./Titulo";

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    
    
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800 rounded-md
            
        `}>
            <div className="flex flex-col justify-center items-center mt-7">
                <div>
                    <Image
                        src="/XANDOCAX.jpeg"
                        alt="Picture of the author"
                        width={80}
                        height={80}
                        className="rounded-full"
                    />
                </div>
                <div>
                    <Titulo> {props.titulo} </Titulo>
                    <Titulo> <Link href="https://www.twitch.tv/xandocax" >Twitch.tv/xandocax</Link> </Titulo>
                </div>
                
            </div>
            <hr className="border-2 border-gray-900" />
            
            <div className="p-6">
                {props.children}
            </div>
           
        </div>
    )
}