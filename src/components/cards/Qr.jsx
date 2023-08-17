import React from 'react'

export const Qr = () => {
  return (    
    <div class="body-font min-h-screen bg-gray-100 md:pt-10 text-gray-600">
       <div class="container mx-auto mt-5 flex max-w-3xl flex-wrap justify-center rounded-lg bg-white px-5 py-24">
          <div class="flex-wrap md:flex">
             <div class="mx-auto space-y-10">
                <img class="mx-auto mt-12 h-52 w-52 rounded-lg border p-2 md:mt-0" src="https://i.imgur.com/FQS7fFC.png" alt="step" />
                <div>
                   <h1 class="font-laonoto mt-4 text-center text-xl font-bold">Paga con Qr Pay</h1>
                   <p class="mt-1 text-center font-medium text-red-500">56 9 912345678</p>
                </div>

                <button class="mx-auto block rounded-md border bg-blue-500 px-6 py-2 text-white outline-none">Pagar</button>
             </div>
             {/* steps */}
             <div class="mt-8 max-w-sm md:mt-0 md:ml-10 md:w-2/3">
                <div class="relative flex pb-12">
                   <div class="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
                   </div>
                   <div class="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                   </div>
                   <div class="flex-grow pl-4">
                      <h2 class="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">Paso 1</h2>
                      <p class="font-laonoto leading-relaxed">
                         Escanea el código <br />
                      </p>
                   </div>
                </div>
                <div class="relative flex pb-12">
                   <div class="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
                   </div>
                   <div class="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                         <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                   </div>
                   <div class="flex-grow pl-4">
                      <h2 class="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">Paso 2</h2>
                      <p class="font-laonoto leading-relaxed">Paga con tarjeta o transferencia</p>
                   </div>
                </div>
                <div class="relative flex pb-12">
                   <div class="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                         <circle cx="12" cy="5" r="3"></circle>
                         <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                      </svg>
                   </div>
                   <div class="flex-grow pl-4">
                      <h2 class="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">Paso 3</h2>
                      <p class="font-laonoto leading-relaxed">
                         <span>Tu pago está listo. Puedes revisarlo en tu correo </span>
                      </p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
