const heroImg =
  "https://lh3.googleusercontent.com/6WCNbLB_1icE0ctdODUM1hVKN7BYlU6cen7K5aqEsg9cnZnHY0NR9qxhhTKiV0lzaq1RTJI4e_ImlloIIH8hqgQdQDjHUn9BkheIDUYwaGfP4q5TXQAlyIVuZu21z9YmvzU7pwPOq5JOxOfi7cCQ1og5t9ivercmXMHvXJ3hdeXHqEebnaNZiEenH0ozgcWLU10hm137UPTz4dJAXK_z-WjsyR-q7pILD_6aTc7CCt1VicT4TP5ZdWPE4q0EPq812Jer-3iTfWciCImiUJoQH_4gozJ0lTbgRTlDmJtkysCOPOxm4YwPR6BYQ40Ggw6UpCMdRm18fylTwpFsnNv5vJrHdCzhMJn-uqoQ6ORngZsFtLes6J9E0kn0rF5G6t7VH0mavt-ia2FRiMLCKooR-e3U7D6lgw3EaA5cg1eLJiE30mQmYnhMUyJoj-wOXI50yPmqIYbNBsaad3fHpSAS0TuV4y_1FmqJJI1jdkNUvYsB_IOLvDvLEA2YCQu60MI0B6cZ3Ikp1YlHByjPyASFST59rhTkcwT3G58_V1NEgxEN1Pp1tozakJh1MA5ZeoGt1ssrTFHktMZpM3qKDiw1BIdS1elDVtjYIaVELJ3mt4Q7nzneAm6ED8QtbM0mGXxg5daYy3MXlYjiV27-gbsL2Ud369sEldDx-4R63l2Pt1xFvm7aT1PEwWbV3_g6OwxUZOYTda2zQHFoWVnT9est6ZU=w1485-h990-no?authuser=0";

const Hero = () => {
  return `
    <div class="px-16 flex flex-col overflow-hidden w-screen h-screen after:absolute after:w-screen after:h-screen after:top-0 after:left-0 after:bg-[url('${heroImg}')] after:bg-cover after:bg-center after:-z-10 after:-scale-x-100">
        <h1 class="text-white text-7xl mt-40 max-w-[16ch] font-bold">Commencez votre journée avec un bon café</h1>
        <div class="text-orange-500 text-lg mt-6"><span>PRODUIT LOCALEMENT</span> - <span>CUIT AVEC AMOUR</span></div>
        <p class="text-md text-gray-200 max-w-[35ch] mt-2 font-light">Commander votre délicieux café local dès maintenant et recevez en deux</p>
        <div class="flex w-80 text-white justify-between mt-16">
            <button class="px-6 py-3 bg-transparent border-2 font-bold transition-colors hover:text-black hover:bg-white border-white">TiakTiak</button>
            <button class="px-6 py-3 bg-transparent border-2 font-bold transition-colors hover:text-black hover:bg-white border-white">Point relais</button>
        </div>
    </div>
  `;
};

export default Hero;
