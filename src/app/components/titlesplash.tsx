export default function Titlesplash() {
    return (
        <div className="titleCard flex flex-col text-center pb-2 pt-5">
            <img src='/globe.png' className="logo m-auto object-fill h-2/5 w-2/5"></img>
            <h1 className="font-bold text-4xl pt-2">BUSINESS NAME</h1>
            <p className="text-sm">Tagline</p>
            <div className="relative left-0 right-0 bottom-0 pt-5">
                <p className="text-sm">Webpage designed by Brody Spearman</p>
            </div>
        </div>            
    );
};