import React from "react";
import SectionTitle from "./SectionTitle";
import Cards from "./Cards";

const FirstSection = () => {
  return (
    <div
      id="first-section"
      className="first-section"
    >
      <div className="bg-[#ffffffca] py-16 px-8 md:px-16 lg:px-32 grid">
        <SectionTitle />
        <div className=" grid lg:grid-cols-2  gap-8 my-8">
          <Cards
            id="01"
            icon="computer"
            title="عنوان العنصر"
            subtitle="من خلال ممارسة التمارين الرياضية"
            description="من الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي نمارسها.ن الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي نمارسها.ن الحن خلال"
          />
          <Cards
            id="02"
            icon="code_blocks"
            title="عنوان العنصر"
            subtitle="من خلال ممارسة التمارين الرياضية"
            description="من الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي نمارسها.ن الحكمة أن لا نمارس أي "
          />
          <Cards
            id="03"
            icon="report"
            title="عنوان العنصر"
            subtitle="من خلال ممارسة التمارين الرياضية"
            description="من الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي نمارسها.ن الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي نمارسها.ن الحكمة أن لا نمارس أي تمرين من خلال"
          />
          <Cards
            id="01"
            icon="brush"
            title="عنوان العنصر"
            subtitle="من خلال ممارسة التمارين الرياضية"
            description="من الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي نمارسها.ن الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي نمارسها.ن الحن خلال"
          />
          <Cards
            id="02"
            icon="edit_square"
            title="عنوان العنصر"
            subtitle="من خلال ممارسة التمارين الرياضية"
            description="من الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي نمارسها.ن الحكمة أن لا نمارس أي "
          />
          <Cards
            id="03"
            icon="thread_unread"
            title="عنوان العنصر"
            subtitle="من خلال ممارسة التمارين الرياضية"
            description="من الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي نمارسها.ن الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي نمارسها.ن الحكمة أن لا نمارس أي تمرين من خلال"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
