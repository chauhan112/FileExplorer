document.head.querySelector("title")!.textContent = "Hello";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
        <h1>Vite + TypeScript + Tailwind CSS</h1>
        
    </div>
`;
