import imgBloodSplatter from "figma:asset/47608435f6c9c85ff49416d915065f76199259b0.png";

export default function Component() {
  return (
    <div
      className="bg-[#080b21] relative size-full"
      data-name="17"
    >
      <div
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9435543417930603)+(var(--transform-inner-height)*0.3312176764011383)))] items-center justify-center left-[-537.24px] top-[-248px] w-[calc(1px*((var(--transform-inner-height)*0.9435543417930603)+(var(--transform-inner-width)*0.3312176764011383)))]"
        style={
          {
            "--transform-inner-width": "909.40625",
            "--transform-inner-height": "909.40625",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[250.657deg]">
          <div
            className="opacity-40 relative size-[909.414px]"
            data-name="blood splatter"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none mix-blend-hard-light object-50%-50% object-cover pointer-events-none size-full"
              src={imgBloodSplatter}
            />
          </div>
        </div>
      </div>
      <p className="absolute font-['Mea_Culpa:Regular',sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#363d76] text-[84px] text-center top-[96px] translate-x-[-50%] w-[353px]">
        A Night of Murder
      </p>
      <p className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#363d76] text-[12px] text-center text-nowrap top-[78px] translate-x-[-50%] uppercase whitespace-pre">
        You’re cordially invited to
      </p>
      <p className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[#363d76] text-[12px] text-center text-nowrap top-[333px] translate-x-[-50%] uppercase whitespace-pre">{`& BIRTHDAY CELEBRATIONs`}</p>
      <p className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-[113px] not-italic text-[#363d76] text-[20px] text-center top-[571px] translate-x-[-50%] w-[172px]">
        NOV 29, 2025
      </p>
      <p className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-[304px] not-italic text-[#363d76] text-[20px] text-center top-[571px] translate-x-[-50%] w-[142px]">
        6PM - 9PM
      </p>
      <p className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#363d76] text-[56px] text-center text-nowrap top-[434px] translate-x-[-50%] whitespace-pre">
        11:05:14
      </p>
      <p className="absolute font-['Kapakana:Regular',sans-serif] font-normal leading-[normal] left-[200px] text-[#363d76] text-[32px] text-center text-nowrap top-[410px] translate-x-[-50%] whitespace-pre">
        Secret Location Revealed in
      </p>
      <p className="absolute font-['Kapakana:Regular',sans-serif] font-normal leading-[normal] left-[113.5px] text-[#363d76] text-[32px] text-center text-nowrap top-[532px] translate-x-[-50%] whitespace-pre">
        Date
      </p>
      <p className="absolute font-['Kapakana:Regular',sans-serif] font-normal leading-[normal] left-[303px] text-[#363d76] text-[32px] text-center text-nowrap top-[532px] translate-x-[-50%] whitespace-pre">
        Time
      </p>
      <div className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-[201px] not-italic text-[#363d76] text-[12px] text-center top-[649px] translate-x-[-50%] uppercase w-[342px]">
        <p className="mb-0">
          Join Haley for a peculiar gathering, SOMEWHERE IN THE
          TRI-CITY AREA, where secrets simmer beneath the clink
          of wine glasses and every guest hides a story. Help
          her solve the murder, or you may both become the next
          victim.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          Drinks and snacks will be provided (probably not
          poisonous)
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>
          ALL SURVIVORS ARE WELCOME TO JOIN US FOR BAR HOPPING
          AFTERWARDS.
        </p>
      </div>
    </div>
  );
}