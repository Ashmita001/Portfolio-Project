import React from 'react'

const AutoScroll = () => {
    return (
        <div>

            <p className="text-xl bg-[#1F222E] text-[#FFF6EE] text-center font-medium py-4">What I like to deliver?</p>
            <div className="w-full overflow-hidden bg-[#D86072] py-6 relative">
                <div className="flex w-max animate-scroll space-x-8 bg-[#D86072] text-white text-2xl font-medium">
                    <p>Functionality ✨ Accessibility ✨ Usability ✨ Consistency ✨ Aesthetics ✨ Functionality ✨ Accessibility ✨ Usability ✨ Consistency ✨ Aesthetics ✨</p>
                    <p>Functionality ✨ Accessibility ✨ Usability ✨ Consistency ✨ Aesthetics ✨</p>

                </div>
            </div>

            <style>
                {`
          @keyframes scrollText {
            from {
              transform: translateX(-1%);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scrollText 12s linear infinite;
          }
        `}
            </style>
        </div>


    )
}

export default AutoScroll
