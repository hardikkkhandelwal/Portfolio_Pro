import React, { useEffect, useRef } from 'react';
import '../Preloader/Preloader.css';
import gsap from 'gsap';

function Preload() {

  const preloaderRef = useRef(null);
  useEffect(() => {
    const t1 = gsap.timeline();
    const speed = 1.2;

    const phases = [
      { n2: [2, 3, 4], n3: [1, 5] },
      { n2: [5, 6], n3: [7, 8, 9] }
    ];

    phases.forEach(({n2,n3},index)=>{
      let secondDigit = gsap.utils.random(n2);
      let thirdDigit = gsap.utils.random(n3);

      t1.to(
        ".number-2 .number-wrap",
        {
          duration: speed,
          yPercent: (secondDigit - 1)* -10,
        },
        ">"
      );

      t1.to(
        ".number-3 .number-wrap",
        {
          duration: speed,
          yPercent: (thirdDigit - 1)* -10,
        },
        "<"
      );

      t1.to(
        `.pre-welcome .line:nth-child(${index + 1}) p`,
        {
          duration: speed / 2,
          y: 0
        }
      )

      t1.to(
        ".progress-bar",{
          duration: speed,
          width: `${secondDigit * 10 + thirdDigit}%`,
        },"<")

    });

     t1.to(
          [".number-2 .number-wrap",".number-3 .number-wrap"],
          {
            duration: speed,
            yPercent: -90,
          },
          ">"
        )

        t1.to(
          ".progress-bar",
          {
            duration: speed,
            width: "100%"
          },
          "<"
        )

        t1.to(".number-1 .number-wrap",{
          duration: speed,
          y: 0
        }, "<")
        .to([
          ".number-wrap",".loading-screen .numbers"
        ],{
          duration:speed,
          yPercent: -100
        },">")

        .to(".percentage",{
          duration:speed,
          yPercent: -100
        },"<")

        t1.to(preloaderRef.current, {
          duration: speed,
          yPercent: -100,
          ease: "power2.inOut",
          onComplete: () => {
            preloaderRef.current.style.display = "none";
            document.body.style.overflow = "auto";
          }
        }, ">");


    

    // lock scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div ref={preloaderRef} className='loading-container fixed inset-0 z-[9999] w-screen h-screen overflow-hidden bg-[#cdea68] text-black font-[Montreal]'>
      <div className='loading-screen'>
        <div className='progress-bar'></div>
        <div className='pre-welcome'>
          <div className="line">
            <p>Drink Water.</p>
          </div>
          <div className="line">
            <p>Stay Hydrated.</p>
          </div>
        </div>
        <div className='numbers'>
          <div className='number number-1'>
            <div className='number-wrap'><span>1</span></div>
          </div>
          <div className='number number-2'>
            <div className='number-wrap'>
              {"1,2,3,4,5,6,7,8,9,0".split(",").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
          <div className='number number-3'>
            <div className='number-wrap'>
              {"1,2,3,4,5,6,7,8,9,0".split(",").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
          <div className='percentage'>%</div>
        </div>
      </div>
    </div>
  );
}

export default Preload;
